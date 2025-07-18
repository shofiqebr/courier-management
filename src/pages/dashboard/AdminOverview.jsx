import React from "react";

const AdminOverview = () => {
  // Dummy data — replace with real API data using TanStack Query or Axios
  const stats = [
    { label: "Total Parcels", value: 1240, color: "bg-blue-500" },
    { label: "Pending Deliveries", value: 312, color: "bg-yellow-500" },
    { label: "Completed Deliveries", value: 865, color: "bg-green-500" },
    { label: "Total Users", value: 540, color: "bg-purple-500" },
    { label: "Delivery Agents", value: 42, color: "bg-indigo-500" },
    { label: "Cancelled Parcels", value: 21, color: "bg-red-500" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 text-white shadow-lg ${stat.color}`}
          >
            <h2 className="text-lg">{stat.label}</h2>
            <p className="text-3xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOverview;
