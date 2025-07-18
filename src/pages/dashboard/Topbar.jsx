const Topbar = () => {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Courier Admin Dashboard</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Logout</button>
    </div>
  );
};

export default Topbar;
