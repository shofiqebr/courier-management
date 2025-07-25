/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../../dataPanel";

const AssignedParcels = () => {
  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState(null);
  const [statusMap, setStatusMap] = useState({});
  const [messageMap, setMessageMap] = useState({});

  const user = JSON.parse(localStorage.getItem("user")); 

  useEffect(() => {
  const fetchParcels = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${baseUrl}/api/parcel`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch parcels");

      const data = await res.json();

      

      // ✅ Convert both IDs to strings before comparison
      const assignedParcels = data?.data?.filter((parcel) => {
        const agentId = parcel?.deliveryAgent?._id || parcel?.deliveryAgent; // handle both object and string
        return agentId?.toString() === user?._id?.toString();
      });

      setParcels(assignedParcels);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  fetchParcels();
}, []);


  const handleStatusChange = (id, value) => {
    setStatusMap((prev) => ({ ...prev, [id]: value }));
  };

  const handleUpdateStatus = async (id) => {
    const status = statusMap[id] || "Picked Up";
    setUpdating(id);
    setMessageMap((prev) => ({ ...prev, [id]: "" }));

    try {
      const res = await fetch(`${baseUrl}/api/parcel/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ status ,   deliveryAgentId: user._id }),
      });
      // console.log(status, user._id)

      const data = await res.json();

      if (res.ok) {
        setMessageMap((prev) => ({ ...prev, [id]: "✅ Status updated!" }));
        setParcels((prev) =>
          prev.map((p) => (p._id === id ? { ...p, status } : p))
        );
      } else {
        setMessageMap((prev) => ({ ...prev, [id]: `❌ ${data.message}` }));
      }
    } catch (err) {
      setMessageMap((prev) => ({ ...prev, [id]: "❌ Failed to update status." }));
    } finally {
      setUpdating(null);
    }
  };

  if (loading) return <p>Loading assigned parcels...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (parcels.length === 0) return <p>No assigned parcels found.</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Assigned Parcels</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Tracking ID</th>
            <th className="border px-4 py-2">Pickup Address</th>
            <th className="border px-4 py-2">Delivery Address</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Parcel Type</th>
            <th className="border px-4 py-2">COD</th>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Update Status</th>
          </tr>
        </thead>
        <tbody>
          {parcels?.map((parcel) => (
            <tr key={parcel._id} className="text-center">
              <td className="border px-4 py-2">{parcel.trackingId}</td>
              <td className="border px-4 py-2">{parcel.pickupAddress}</td>
              <td className="border px-4 py-2">{parcel.deliveryAddress}</td>
              <td className="border px-4 py-2">{parcel.status}</td>
              <td className="border px-4 py-2">{parcel.parcelType}</td>
              <td className="border px-4 py-2">{parcel.isCOD ? "Yes" : "No"}</td>
              <td className="border px-4 py-2">${parcel.amount.toFixed(2)}</td>
              <td className="border px-4 py-2">
                <select
                  className="mb-2 p-1 border rounded"
                  value={statusMap[parcel._id] || "Picked Up"}
                  onChange={(e) => handleStatusChange(parcel._id, e.target.value)}
                >
                  <option value="Picked Up">Picked Up</option>
                  <option value="In Transit">In Transit</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Failed">Failed</option>
                </select>
                <br />
                <button
                  onClick={() => handleUpdateStatus(parcel._id)}
                  disabled={updating === parcel._id}
                  className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 text-sm"
                >
                  {updating === parcel._id ? "Updating..." : "Update"}
                </button>
                {messageMap[parcel._id] && (
                  <p className="text-sm mt-1">{messageMap[parcel._id]}</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignedParcels;
