import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import AdminRoute from "./AdminRoute";
import AllUsers from "../pages/dashboard/AllUser";
import AdminOverview from "../pages/dashboard/AdminOverview";
import ManageParcels from "../pages/dashboard/ManageParcels";
import Analytics from "../pages/dashboard/Analytics";
import CustomerRoute from "./CustomerRoute";
import CustomerDashboardLayout from "../pages/dashboard/customer/CustomerDashboard";
import MyParcels from "../pages/dashboard/customer/MyParcel";
import CreateParcel from "../pages/dashboard/customer/CreateParcel";
import TrackParcel from "../pages/dashboard/customer/TrackParcel";
import ParcelDetails from "../pages/dashboard/ParcelDetails";
import AgentRoute from "./AgentRoute";
import AgentDashboard from "../pages/dashboard/agent/agentdashboard";
import AssignedParcels from "../pages/dashboard/agent/AssignedParcels";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
{
  path: "/admin/dashboard",
  element: <AdminRoute />, 
  children: [
    {
      path: "/admin/dashboard",
      element: <Dashboard />, 
      children: [
        { path: "", element: <AdminOverview /> },
        { path: "/admin/dashboard/users", element: <AllUsers /> },
        { path: "/admin/dashboard/parcels", element: <ManageParcels /> },
        { path: "/admin/dashboard/parcel/:trackingId", element:<ParcelDetails /> },
        { path: "/admin/dashboard/analytics", element: <Analytics /> },
      ],
    },
  ],
},
  // Agent Dashboard
  {
    path: "/agent/dashboard",
    element: <AgentRoute><AgentDashboard /></AgentRoute>,
    children: [
      { path: "", element: <AssignedParcels /> },
      // { path: "update/:id", element: <UpdateParcelStatus /> },
    ],
  },

  // Customer Dashboard
  {
    path: "/customer/dashboard",
    element: <CustomerRoute/>,
    children: [
      {
        path: "/customer/dashboard",
      element: <CustomerDashboardLayout/>,
      children: [
        { path: "", element: <MyParcels/> },
        { path: "/customer/dashboard/create", element: <CreateParcel /> },
        { path: "/customer/dashboard/track/:id", element: <TrackParcel /> },
      ],
      }
    ]
  },

]);
