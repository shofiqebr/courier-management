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
  path: "/dashboard",
  element: <AdminRoute />, // protect with role check
  children: [
    {
      path: "/dashboard",
      element: <Dashboard />, 
      children: [
        { path: "", element: <AdminOverview /> },
        { path: "users", element: <AllUsers /> },
        { path: "parcels", element: <ManageParcels /> },
        { path: "analytics", element: <Analytics /> },
      ],
    },
  ],
}

]);
