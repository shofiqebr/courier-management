import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { baseUrl } from '../../dataPanel';

const fetchParcels = async () => {
    const token = localStorage.getItem("token");
  const { data } = await axios.get(`${baseUrl}/api/parcel`, {
    headers: {
      Authorization: `Bearer ${token}`, 
    },
  }); // Update this URL as needed
  return data;
};

const ManageParcels = () => {
  const { data: parcels, isLoading, isError } = useQuery({
    queryKey: ['parcels'],
    queryFn: fetchParcels,
  });

  console.log(parcels)

  if (isLoading) return <p>Loading parcels...</p>;
  if (isError) return <p>Failed to load parcels.</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Parcels</h2>

      <div className="overflow-auto">
        <table className="w-full bg-white border rounded shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Tracking ID</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Delivery Agent</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels?.data?.map((parcel) => (
              <tr key={parcel._id} className="border-t hover:bg-gray-50">
                <td className="p-3">{parcel.trackingId}</td>
                <td className="p-3">{parcel.customer?.name || 'N/A'}</td>
                <td className="p-3">
                  {parcel.deliveryAgent?.name || (
                    <span className="text-gray-500">Unassigned</span>
                  )}
                </td>
                <td className="p-3">{parcel.status}</td>
                <td className="p-3">
                  {/* You can add more buttons like "Update Status" */}
                  <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                    Assign Agent
                  </button>
                </td>
              </tr>
            ))}
            {parcels.length === 0 && (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
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
