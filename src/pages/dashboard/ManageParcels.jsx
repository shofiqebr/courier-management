import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

const baseUrl = "http://localhost:5000"; // or your actual base URL

const fetchParcels = async () => {
  const token = localStorage.getItem("token");
  const { data } = await axios.get(`${baseUrl}/api/parcel`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

const ManageParcels = () => {
  const { data: parcels, isLoading, isError } = useQuery({
    queryKey: ['parcels'],
    queryFn: fetchParcels,
  });

  if (isLoading) return <p>Loading parcels...</p>;
  if (isError) return <p>Failed to load parcels.</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Parcels</h2>
      <div className="overflow-auto">
        <table className="w-full bg-white border rounded shadow">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Tracking ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Delivery Agent</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels?.data?.map((parcel) => (
              <tr key={parcel._id} className="border-t hover:bg-gray-50">
                <td className="p-3">{parcel.trackingId}</td>
                <td className="p-3">{parcel.customer?.name || "N/A"}</td>
                <td className="p-3">
                  {parcel.deliveryAgent?.name || <span className="text-gray-500">Unassigned</span>}
                </td>
                <td className="p-3">{parcel.status}</td>
                <td className="p-3 flex gap-2">
                  <Link
                    to={`/admin/dashboard/parcel/${parcel._id}`}
                    className="px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
            {parcels?.data?.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center p-4 text-gray-500">
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

export default ManageParcels;
