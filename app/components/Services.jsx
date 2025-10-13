"use client";

import Navbar from "../components/Navbar";
import Link from "next/link";
import {
  Code,
  Monitor,
  Smartphone,
  Globe,
  Database,
  Wrench,
  ArrowLeft
} from "lucide-react";
import serviceData from "../data/servicePrime.json";
import Footer from "./Footer";

export default function ServicesPage() {
  const iconMap = {
    Code: <Code className="w-8 h-8 text-red-600" />,
    Monitor: <Monitor className="w-8 h-8 text-red-600" />,
    Smartphone: <Smartphone className="w-8 h-8 text-red-600" />,
    Globe: <Globe className="w-8 h-8 text-red-600" />,
    Database: <Database className="w-8 h-8 text-red-600" />,
    Wrench: <Wrench className="w-8 h-8 text-red-600" />,
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />

      {/* Header */}
      <div className="w-full bg-white dark:bg-gray-800 py-8 flex justify-center items-center shadow-md mt-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Services / What I Offer
        </h1>
      </div>

      {/* Services Grid */}
      <section className="w-full py-12 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {serviceData.map((service, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 p-5 flex flex-col items-center text-center"
            >
              <div className="mb-3">{iconMap[service.icon]}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                {service.description}
              </p>

              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md text-sm sm:text-base transition-colors duration-200"
              >
                Request Service Now
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold px-5 py-2 rounded-md transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
