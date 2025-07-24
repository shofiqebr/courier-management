import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
  <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
  <nav className="flex flex-col gap-2">
    <a href="/" className="hover:bg-gray-700 p-2 rounded">Home</a>
    <a href="/admin/dashboard" className="hover:bg-gray-700 p-2 rounded">Overview</a>
    <a href="/admin/dashboard/users" className="hover:bg-gray-700 p-2 rounded">All Users</a>
    <a href="/admin/dashboard/parcels" className="hover:bg-gray-700 p-2 rounded">Manage Parcels</a>
    <a href="/admin/dashboard/analytics" className="hover:bg-gray-700 p-2 rounded">Analytics</a>
  </nav>
</aside>


      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
