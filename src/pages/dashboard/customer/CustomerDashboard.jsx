import React from "react";
import { Outlet, Link } from "react-router-dom";

const CustomerDashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Customer Panel</h2>
        <nav className="flex flex-col space-y-4">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="" className="hover:text-yellow-400">Dashboard</Link>
          <Link to="create" className="hover:text-yellow-400">Book Parcel</Link>
          {/* Optional: Add Track option if you have a fixed ID or use a search input */}
          {/* <Link to="track/TRACKINGID" className="hover:text-yellow-400">Track Parcel</Link> */}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default CustomerDashboardLayout;
