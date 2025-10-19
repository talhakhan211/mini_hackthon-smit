
// src/routes/AuthRoute.jsx
import { Navigate, useLocation } from "react-router-dom";

export default function AuthRoute({ children }) {
  const token = localStorage.getItem("token");
  const location = useLocation();

  // Only redirect if the user is trying to access login/register while already logged in
  if (token && (location.pathname === "/" || location.pathname === "/register")) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}