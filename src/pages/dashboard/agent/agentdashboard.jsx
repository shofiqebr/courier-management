import React from "react";
import { Outlet, Link } from "react-router-dom";

const AgentDashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Agent Panel</h2>
        <nav className="flex flex-col space-y-4">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="" className="hover:text-yellow-400">Dashboard</Link>
          <Link to="assigned" className="hover:text-yellow-400">Assigned Parcels</Link>
          <Link to="update" className="hover:text-yellow-400">Update Status</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AgentDashboard;
