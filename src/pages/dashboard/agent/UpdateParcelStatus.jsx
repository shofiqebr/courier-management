/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import socket from "../../../shared/socket";


const UpdateParcelStatus = () => {
  const { id } = useParams();
  const [status, setStatus] = useState("Picked Up");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpdateStatus = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`http://localhost:5000/api/parcel/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ status }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Status updated successfully!");

        // Emit socket event
        socket.emit("parcelStatusUpdated", {
          parcelId: id,
          newStatus: status,
        });
      } else {
        setMessage(`❌ ${data.message || "Failed to update status."}`);
      }
    } catch (error) {
      setMessage("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Update Parcel Status</h2>

      <form onSubmit={handleUpdateStatus}>
        <label className="block mb-2 font-medium">Select New Status:</label>
        <select
          className="w-full border rounded px-4 py-2 mb-4"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Picked Up">Picked Up</option>
          <option value="In Transit">In Transit</option>
          <option value="Delivered">Delivered</option>
          <option value="Failed">Failed</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Status"}
        </button>
      </form>

      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default UpdateParcelStatus;
