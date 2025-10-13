"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import projectData from "../data/portfolio.json";
import { ArrowLeft } from "lucide-react";
import Footer from "../components/Footer";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />

      <section className="w-full py-12 px-4 sm:px-6 lg:px-10 mt-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Projects / Portfolio
        </h2>

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {projectData.map((project, idx) => (
            <PortfolioCard key={idx} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </section>
       <Footer />
    </main>
  );
}

// PortfolioCard Component
function PortfolioCard({ project }) {
  const { title, type, description, image, viewLink } = project;
  const [expanded, setExpanded] = useState(false);

  // Limit description to 4 lines
  const shouldTruncate = description.length > 150; // adjust length as needed
  const displayedText = expanded || !shouldTruncate
    ? description
    : description.slice(0, 150) + "...";

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      
      <div className="relative w-full h-48 sm:h-56 md:h-60 lg:h-64 xl:h-72 group">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Title + Type */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <span className="text-xs sm:text-sm px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
            {type}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-2 leading-relaxed text-center sm:text-left">
          {displayedText}
        </p>

        {/* Toggle Button */}
        {shouldTruncate && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium mb-4 hover:underline self-center sm:self-start"
          >
            {expanded ? "Show Less" : "View More"}
          </button>
        )}

        {/* View More Link */}
        {viewLink && (
          <div className="mt-auto flex justify-center sm:justify-start">
            <Link
              href={viewLink}
              target="_blank"
              className="inline-block bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm md:text-base px-4 py-2 rounded-md transition-colors duration-200"
            >
              Visit Project
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
