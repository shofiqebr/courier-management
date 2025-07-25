import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow">
        <h1 className="text-2xl font-bold">📦 Smart Courier</h1>
        <div className="flex items-center gap-4">
          {user?.name && (
            <span className="text-sm">
              Logged in as: <span className="font-semibold">{user.name}</span> ({user.role})
            </span>
          )}
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Layout: Sidebar + Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-4">
          <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2> {/* Replace with your company name */}
          <nav className="flex flex-col gap-2">
            <a href="/" className="hover:bg-gray-700 p-2 rounded">Home</a>
            <a href="/admin/dashboard" className="hover:bg-gray-700 p-2 rounded">Overview</a>
            <a href="/admin/dashboard/users" className="hover:bg-gray-700 p-2 rounded">All Users</a>
            <a href="/admin/dashboard/parcels" className="hover:bg-gray-700 p-2 rounded">Manage Parcels</a>
          </nav>
        </aside>

        {/* Page Content */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
