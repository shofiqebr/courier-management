import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../../dataPanel";

const MyParcels = () => {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    const fetchParcels = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/parcel/my-bookings`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        console.log(data);
        setParcels(data?.data || []);
      } catch (error) {
        console.error("Error fetching parcels:", error);
      }
    };

    fetchParcels();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">📦 My Parcels</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-900 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Tracking ID</th>
              <th className="p-3 border">Pickup</th>
              <th className="p-3 border">Delivery</th>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Amount</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">COD</th>
              <th className="p-3 border">Created</th>
              <th className="p-3 border">Track</th>
            </tr>
          </thead>
          <tbody>
            {parcels?.map((parcel) => (
              <tr key={parcel._id} className="hover:bg-gray-50">
                <td className="p-3 border font-mono">{parcel.trackingId}</td>
                <td className="p-3 border">{parcel.pickupAddress}</td>
                <td className="p-3 border">{parcel.deliveryAddress}</td>
                <td className="p-3 border">{parcel.parcelType}</td>
                <td className="p-3 border">৳ {parcel.amount}</td>
                <td className="p-3 border">
                  <span
                    className={`px-2 py-1 rounded text-white text-sm ${
                      parcel.status === "Pending"
                        ? "bg-yellow-500"
                        : parcel.status === "Delivered"
                        ? "bg-green-600"
                        : "bg-blue-500"
                    }`}
                  >
                    {parcel.status}
                  </span>
                </td>
                <td className="p-3 border">{parcel.isCOD ? "Yes" : "No"}</td>
                <td className="p-3 border">
                  {new Date(parcel.createdAt).toLocaleDateString()}
                </td>
                <td className="p-3 border">
                  <Link
                    to={`/dashboard/track/${parcel._id}`}
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Track
                  </Link>
                </td>
              </tr>
            ))}
            {parcels.length === 0 && (
              <tr>
                <td colSpan="9" className="text-center p-4 text-gray-500">
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

export default MyParcels;
