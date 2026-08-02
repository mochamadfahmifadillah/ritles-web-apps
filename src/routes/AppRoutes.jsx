import { createBrowserRouter } from "react-router-dom";

import Layout from "../layouts/Layout";
import ProtectedRoute from "../components/auth/ProtectedRoute";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ActivityNote from "../pages/ActivityNote";
import Analysis from "../pages/Analysis";
import Insight from "../pages/Insight";
import Education from "../pages/Education";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  // ==========================
  // Public Routes
  // ==========================
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },

  // ==========================
  // Protected Routes
  // ==========================
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            Component: Dashboard,
          },
          {
            path: "activityNote",
            Component: ActivityNote,
          },
          {
            path: "analysis",
            Component: Analysis,
          },
          {
            path: "insight",
            Component: Insight,
          },
          {
            path: "education",
            Component: Education,
          },
          {
            path: "profile",
            Component: Profile,
          },
        ],
      },
    ],
  },
]);