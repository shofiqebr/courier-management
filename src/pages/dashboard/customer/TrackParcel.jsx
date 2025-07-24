import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TrackParcel = () => {
  const { id } = useParams();
  const [parcel, setParcel] = useState(null);

  useEffect(() => {
    const fetchParcel = async () => {
      try {
        const res = await fetch(`/api/parcels/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        setParcel(data);
      } catch (error) {
        console.error("Error fetching parcel:", error);
      }
    };

    fetchParcel();
  }, [id]);

  if (!parcel) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Tracking Parcel: {parcel.trackingId}</h2>
      <p><strong>Status:</strong> {parcel.status}</p>
      <p><strong>Destination:</strong> {parcel.destination}</p>
      <p><strong>Assigned Agent:</strong> {parcel.deliveryAgent?.name || "Not assigned"}</p>
      <h3 className="mt-4 font-semibold">Status History:</h3>
      <ul className="list-disc ml-6 mt-2">
        {parcel.statusHistory?.map((entry, idx) => (
          <li key={idx}>
            {entry.status} on {new Date(entry.updatedAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackParcel;
