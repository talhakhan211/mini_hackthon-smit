// src/layouts/ProtectedLayout.jsx
import Navbar from "../components/Navbar";

export default function ProtectedLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}