import React from "react";
import { 
  User, FileText, PlusCircle, Clock, LogOut, Settings, BarChart2, 
  FileUpload, HeartPulse 
} from "lucide-react";

const Sidebar = ({ user, activeTab, setActiveTab, logout }) => {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <User className="w-5 h-5" /> },
    { id: "upload-report", label: "Upload Report", icon: <FileUpload className="w-5 h-5" /> },
    { id: "add-vitals", label: "Add Manual Vitals", icon: <PlusCircle className="w-5 h-5" /> },
    { id: "view-report", label: "View Report", icon: <FileText className="w-5 h-5" /> },
    { id: "timeline", label: "Timeline View", icon: <Clock className="w-5 h-5" /> },
    { id: "analytics", label: "Analytics & Reports", icon: <BarChart2 className="w-5 h-5" /> },
    { id: "settings", label: "Settings", icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-64 flex flex-col bg-gray-900 border-r border-gray-700 shadow-lg overflow-y-auto">
      {/* Logo */}
      <div className="p-5 flex items-center border-b border-gray-700 shrink-0">
        <HeartPulse className="h-8 w-8 text-cyan-400 ml-2" />
        <span className="ml-3 font-bold text-lg text-gray-100">
          HealthMate
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center px-4 py-2 rounded-lg mb-2 transition-all duration-200 font-medium
              ${
                activeTab === item.id
                  ? "bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-md"
                  : "text-gray-300 hover:bg-gray-800 hover:text-cyan-400"
              }`}
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* User Info + Logout */}
      <div className="p-4 border-t border-gray-700 bg-gray-800 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <img
            src={user.avatar || "https://via.placeholder.com/40"}
            alt="User avatar"
            className="w-10 h-10 rounded-full bg-blue-950 border border-gray-600 object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gray-100">{user.name}</p>
            <p className="text-xs text-gray-400">{user.role}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="flex items-center text-sm font-medium text-red-400 hover:text-red-300 transition"
        >
          <LogOut className="w-4 h-4 mr-1" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
