/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ParcelDetails = () => {
  const { trackingId } = useParams();
  const baseUrl = "https://courier-management-back.onrender.com";
  const token = localStorage.getItem("token");

  const [parcel, setParcel] = useState(null);
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState("");
  const [assigning, setAssigning] = useState(false);

  // Fetch parcel details
  useEffect(() => {
    const fetchParcel = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/parcel/${trackingId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setParcel(res.data?.data);
        setSelectedAgent(res.data?.data?.deliveryAgent?._id || "");
      } catch (err) {
        console.error("Failed to fetch parcel");
      }
    };
    fetchParcel();
  }, [trackingId, token]);

  // Fetch agent list (role === "agent")
  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/user?role=agent`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const sortedAgents = res.data?.data?.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setAgents(sortedAgents || []);
      } catch (err) {
        console.error("Failed to load agents");
      }
    };
    fetchAgents();
  }, [token]);

  // Assign agent handler
  const handleAssign = async () => {
    if (!selectedAgent) return;
    setAssigning(true);
    try {
      await axios.post(
        `${baseUrl}/api/parcel/assign-agent`,
        {
          parcelId: parcel._id, // Include parcelId
          agentId: selectedAgent, // Include agentId
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const newAgent = agents.find((a) => a._id === selectedAgent);
      setParcel({ ...parcel, deliveryAgent: newAgent, status: "Assigned" });
      alert("Agent assigned successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to assign agent");
    } finally {
      setAssigning(false);
    }
  };

  if (!parcel) return <p>Loading parcel...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-4">Parcel Details</h1>

      <div className="bg-white rounded shadow p-6 mb-4">
        <p>
          <strong>Tracking ID:</strong> {parcel.trackingId}
        </p>
        <p>
          <strong>Sender:</strong> {parcel.senderName}
        </p>
        <p>
          <strong>Recipient:</strong> {parcel.recipientName}
        </p>
        <p>
          <strong>Status:</strong> {parcel.status}
        </p>
        <p>
          <strong>Address:</strong> {parcel.deliveryAddress}
        </p>
        <p>
          <strong>Weight:</strong> {parcel.weight} kg
        </p>
        <p>
          <strong>Delivery Agent:</strong>{" "}
          {parcel.deliveryAgent?.name || "Not Assigned"}
        </p>
        <p className="mt-4">
          <a
            href={`/track/${parcel.trackingId}`}
            className="text-blue-600 hover:text-yellow-500"
          >
            📦 Track Parcel
          </a>
        </p>
      </div>

      <div className="bg-white rounded shadow p-6">
        <h2 className="text-lg font-semibold mb-2">Assign Agent</h2>
        <div className="flex gap-2 items-center">
          <select
            value={selectedAgent}
            onChange={(e) => setSelectedAgent(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="">Select Agent</option>
            {agents.map((agent) => (
              <option key={agent._id} value={agent._id}>
                {agent.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleAssign}
            disabled={!selectedAgent || assigning}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            {assigning ? "Assigning..." : "Assign Agent"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParcelDetails;
