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

import CustomerRoute from "./CustomerRoute";
import CustomerDashboardLayout from "../pages/dashboard/customer/CustomerDashboard";
import MyParcels from "../pages/dashboard/customer/MyParcel";
import CreateParcel from "../pages/dashboard/customer/CreateParcel";
import TrackParcel from "../pages/dashboard/customer/TrackParcel";
import ParcelDetails from "../pages/dashboard/ParcelDetails";
import AgentRoute from "./AgentRoute";
import AgentDashboard from "../pages/dashboard/agent/agentdashboard";
import AssignedParcels from "../pages/dashboard/agent/AssignedParcels";
import UpdateParcelStatus from "../pages/dashboard/agent/UpdateParcelStatus";


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
      {
        path: "/trackParcel",
        element: <TrackParcel />,
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
      ],
    },
  ],
},
  // Agent Dashboard
  {
    path: "/agent/dashboard",
    element: <AgentRoute />,
    children: [
       { 
        path: "/agent/dashboard", 
        element: <AgentDashboard />,
        children: [
          { path: "", element: <AssignedParcels /> },
          { path: "/agent/dashboard/update/:id", element: <UpdateParcelStatus /> },
        ],
      }
    ]
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
