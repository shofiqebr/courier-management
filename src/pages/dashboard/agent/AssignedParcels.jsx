import React, { useEffect, useState } from "react";
import { baseUrl } from "../../../dataPanel";

const AssignedParcels = () => {
  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
        setParcels(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchParcels();
  }, []);

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
          </tr>
        </thead>
        <tbody>
          {parcels.map((parcel) => (
            <tr key={parcel._id} style={{ textAlign: "center" }}>
              <td className="border px-4 py-2">{parcel.trackingId}</td>
              <td className="border px-4 py-2">{parcel.pickupAddress}</td>
              <td className="border px-4 py-2">{parcel.deliveryAddress}</td>
              <td className="border px-4 py-2">{parcel.status}</td>
              <td className="border px-4 py-2">{parcel.parcelType}</td>
              <td className="border px-4 py-2">{parcel.isCOD ? "Yes" : "No"}</td>
              <td className="border px-4 py-2">${parcel.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignedParcels;
