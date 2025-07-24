// src/pages/dashboard/AllParcels.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../../dataPanel";

const AllParcels = () => {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    const fetchAllParcels = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/parcel`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        setParcels(data?.data || []);
      } catch (error) {
        console.error("Error fetching all parcels:", error);
      }
    };

    fetchAllParcels();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">📦 All Parcels</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Tracking ID</th>
              <th className="p-3 border">Pickup</th>
              <th className="p-3 border">Delivery</th>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Details</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel) => (
              <tr key={parcel._id} className="hover:bg-gray-50">
                <td className="p-3 border font-mono">{parcel.trackingId}</td>
                <td className="p-3 border">{parcel.pickupAddress}</td>
                <td className="p-3 border">{parcel.deliveryAddress}</td>
                <td className="p-3 border">{parcel.parcelType}</td>
                <td className="p-3 border">{parcel.status}</td>
                <td className="p-3 border">
                  <Link
                    to={`/dashboard/parcel/${parcel._id}`}
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
            {parcels.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-500">
                  No parcels found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllParcels;
