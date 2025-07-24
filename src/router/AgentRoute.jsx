
import { Navigate, Outlet } from "react-router-dom";

const AgentRoute = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.role !== "agent") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AgentRoute;
