import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../../dataPanel";
import axios from "axios";


const fetchAnalytics = async () => {

    const token = localStorage.getItem("token");
  const { data } = await axios.get(`${baseUrl}/api/analytics/stats`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

const Analytics = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["analytics"],
    queryFn: fetchAnalytics,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load analytics.</p>;

  const { dailyBookings, failedDeliveries, codAmount } = data;
  console.log(dailyBookings)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-bold">Today’s Bookings</h2>
        <p className="text-3xl mt-2 text-blue-600">{dailyBookings}</p>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-bold">Failed Deliveries</h2>
        <p className="text-3xl mt-2 text-red-600">{failedDeliveries}</p>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-bold">Total COD Collected</h2>
        <p className="text-3xl mt-2 text-green-600">৳ {codAmount}</p>
      </div>
    </div>
  );
};

export default Analytics;
