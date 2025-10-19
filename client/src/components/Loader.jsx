// src/components/Loader.jsx
import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-lg text-blue-600 font-semibold">Loading...</p>
      </div>
    </div>
  );
}