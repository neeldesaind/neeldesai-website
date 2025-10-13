"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center bg-white text-gray-900 px-4 mt-30">
        <h1 className="text-9xl font-extrabold text-purple-600 mb-6">404</h1>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Oops! Page Not Found</h2>
        <p className="text-gray-600 mb-8 text-center max-w-md">
          Looks like the page you’re looking for doesn’t exist or has been moved. 
          As a freelance developer, I’m here to help you build your next project, 
          so feel free to explore my portfolio or get in touch!
        </p>

        <div className="mb-16">
          <Link
            href="/"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition"
          >
            Go Back to Portfolio
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}