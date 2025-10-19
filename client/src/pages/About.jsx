import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="p-6 dark:text-black">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p>This is the about page. Only logged-in users can see it.</p>
      </div>
    </>
  );
}