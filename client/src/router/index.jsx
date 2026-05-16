import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import AppLayout from "../layout/AppLayout";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Insights from "../pages/Insights";
import Landing from "../pages/Landing";
import Habits from "../pages/Habits";
import Weekly from "../pages/Weekly";
import Login from "../pages/Login";
import Stats from "../pages/Stats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
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
    // Protected layout wrapper (no path needed, acts as a parent layout)
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/habits", element: <Habits /> },
      { path: "/weekly", element: <Weekly /> },
      { path: "/insights", element: <Insights /> },
      { path: "/stats", element: <Stats /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;
