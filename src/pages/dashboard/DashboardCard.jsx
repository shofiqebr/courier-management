const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded shadow p-4 w-full md:w-1/2 lg:w-1/4">
      <div className="flex items-center space-x-4">
        <div className="text-blue-600 text-3xl">{icon}</div>
        <div>
          <p className="text-gray-600">{title}</p>
          <p className="text-xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
