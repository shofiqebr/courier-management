
import { FaBox, FaUser, FaMoneyBill, FaTimesCircle } from 'react-icons/fa';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import DashboardCard from './DashboardCard';

const AdminDashboard = () => {
  // Example stats
  const stats = [
    { title: 'Today Bookings', value: 25, icon: <FaBox /> },
    { title: 'Failed Deliveries', value: 3, icon: <FaTimesCircle /> },
    { title: 'Total COD', value: '৳12,500', icon: <FaMoneyBill /> },
    { title: 'Total Users', value: 120, icon: <FaUser /> },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Topbar />

        {/* Dashboard cards */}
        <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <DashboardCard key={i} {...stat} />
          ))}
        </div>

        {/* Sections */}
        <div className="p-4 space-y-8">
          <section id="parcels" className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">All Parcels</h2>
            <p className="text-gray-600">List of all booked parcels with status and action options.</p>
          </section>

          <section id="assign-agent" className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Assign Delivery Agent</h2>
            <p className="text-gray-600">Assign agents to booked parcels.</p>
          </section>

          <section id="users" className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">User Management</h2>
            <p className="text-gray-600">View, edit, or remove users from the system.</p>
          </section>

          <section id="reports" className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Export Reports</h2>
            <p className="text-gray-600">Generate and download CSV/PDF reports.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
