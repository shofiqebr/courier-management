import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminOverview = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/analytics/stats", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setStats(res.data.data);
      } catch (err) {
        console.error("Failed to fetch analytics", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!stats) return <p>Failed to load data</p>;

  const statItems = [
    { label: "Total Parcels", value: stats.totalParcels, color: "bg-blue-500" },
    { label: "Daily Bookings", value: stats.dailyBookings, color: "bg-cyan-500" },
    { label: "Pending Deliveries", value: stats.pendingDeliveries, color: "bg-yellow-500" },
    { label: "Completed Deliveries", value: stats.completedDeliveries, color: "bg-green-600" },
    { label: "Cancelled Parcels", value: stats.cancelledParcels, color: "bg-red-500" },
    { label: "Failed Deliveries", value: stats.failedDeliveries, color: "bg-red-800" },
    { label: "Total COD Amount", value: stats.codAmount, color: "bg-orange-500" },
    { label: "Total Users", value: stats.totalUsers, color: "bg-purple-500" },
    { label: "Delivery Agents", value: stats.deliveryAgents, color: "bg-indigo-500" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {statItems.map((stat, index) => (
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
