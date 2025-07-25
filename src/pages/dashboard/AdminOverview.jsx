import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminOverview = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(
          "https://courier-management-back.onrender.com/api/analytics/stats",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
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
    {
      label: "Daily Bookings",
      value: stats.dailyBookings,
      color: "bg-cyan-500",
    },
    {
      label: "Pending Deliveries",
      value: stats.pendingDeliveries,
      color: "bg-yellow-500",
    },
    {
      label: "Completed Deliveries",
      value: stats.completedDeliveries,
      color: "bg-green-600",
    },
    {
      label: "Cancelled Parcels",
      value: stats.cancelledParcels,
      color: "bg-red-500",
    },
    {
      label: "Failed Deliveries",
      value: stats.failedDeliveries,
      color: "bg-red-800",
    },
    {
      label: "Total COD Amount",
      value: stats.codAmount,
      color: "bg-orange-500",
    },
    { label: "Total Users", value: stats.totalUsers, color: "bg-purple-500" },
    {
      label: "Delivery Agents",
      value: stats.deliveryAgents,
      color: "bg-indigo-500",
    },
  ];

  const handleExportCSV = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "https://courier-management-back.onrender.com/api/export",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: "blob",
        }
      );

      // Download CSV logic
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "export.csv");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error("Export failed", err);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-6">Admin Overview</h1>
        <button onClick={handleExportCSV} className="bg-blue-600 text-white">
          📥 Export Parcel Report
        </button>
      </div>

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
