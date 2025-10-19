import React from "react";

export default function AuthLayout({ title, children, subtitle }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-50 to-slate-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-4xl font-bold mb-1 text-center">{title}</h1>
        {subtitle && <p className="text-sm  font-smeibold  text-center text-slate-500 mb-4">{subtitle}</p>}
        <div>{children}</div>
      </div>
    </div>
  );
}