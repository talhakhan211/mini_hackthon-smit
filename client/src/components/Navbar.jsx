// src/components/Navbar.jsx
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { toast } from "react-toastify";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(localStorage.getItem("token")); // ✅ fixed
  const [role, setRole] = useState(localStorage.getItem("role"));

  // Sync state when localStorage changes (e.g., in another tab)
  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
      setRole(localStorage.getItem("role"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setToken(null);
    setRole(null);
    toast.success("Logged out successfully!");
    navigate("/"); // ✅ Redirect to login immediately
  };

  const linkClass = (path) =>
    `${location.pathname === path ? "text-yellow-400 font-semibold" : ""} hover:text-yellow-300`;

  return (
    <nav className="bg-blue-700 dark:bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
       
        <div className="ml-[-10px] max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">HealthMate Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Apka swasthya, ek jagah par</p>
        </div>
      
        {/* Right Controls */}
        <div className="flex items-center space-x-4">
          <DarkModeToggle />
          {token && (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded text-sm font-semibold"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}