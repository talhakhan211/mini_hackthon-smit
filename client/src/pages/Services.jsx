import Navbar from "../components/Navbar";

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="p-6 dark:text-black">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <p>Here are our services for logged-in users.</p>
      </div>
    </>
  );
}