import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-600 text-white min-h-screen p-4 space-y-6">
      <h2 className="text-2xl font-bold">Admin Panel</h2>
      <nav className="space-y-4">
        <a href="#dashboard" className="block hover:text-gray-200">Dashboard</a>
        <a href="#parcels" className="block hover:text-gray-200">All Parcels</a>
        <a href="#assign-agent" className="block hover:text-gray-200">Assign Agent</a>
        <a href="#users" className="block hover:text-gray-200">Users</a>
        <a href="#reports" className="block hover:text-gray-200">Export Reports</a>
      </nav>
    </div>
  );
};

export default Sidebar;
