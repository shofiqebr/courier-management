
import { Navigate, Outlet } from "react-router-dom";

const CustomerRoute = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.role !== "customer") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default CustomerRoute;
