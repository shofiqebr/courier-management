import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

const CustomerDashboardLayout = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">📦 Smart Courier</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm">
            {user?.name} ({user?.role})
          </span>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 text-sm"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-4">
          <h2 className="text-xl font-bold mb-6">Customer Panel</h2>
          <nav className="flex flex-col gap-2">
            <Link to="/" className="hover:bg-gray-700 p-2 rounded">
              Home
            </Link>
            <Link to="" className="hover:bg-gray-700 p-2 rounded">
              Dashboard
            </Link>
            <Link to="create" className="hover:bg-gray-700 p-2 rounded">
              Book Parcel
            </Link>
            {/* Optionally add Track or other links */}
          </nav>
        </aside>

        {/* Dynamic Content */}
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default CustomerDashboardLayout;
