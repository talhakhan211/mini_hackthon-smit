// src/routes/PublicRoute.jsx
import { Navigate, useLocation } from "react-router-dom";

export default function PublicRoute({ children }) {
  const token = localStorage.getItem("token");
  const location = useLocation();

  // If logged in, redirect to the page they tried to access or /home
  if (token) {
    const from = location.state?.from?.pathname || "/home";
    return <Navigate to={from} replace />;
  }

  return children;
}
