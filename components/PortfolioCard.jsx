"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import projectData from "../data/portfolio.json";

// PortfolioCard component
function PortfolioCard({ project }) {
  if (!project) return null;

  const { title, type, description, image, viewLink } = project;
  const [expanded, setExpanded] = useState(false);

  const shouldTruncate = description.length > 120; // adjust length
  const displayedText = expanded || !shouldTruncate
    ? description
    : description.slice(0, 120) + "...";

  return (
    <div className="w-full sm:w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
      
      {/* Project Image */}
      <div className="w-full h-48 relative group">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title + Type */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
          {title}
          <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
            {type}
          </span>
        </h3>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
          {displayedText}
        </p>

        {/* Toggle button for long description */}
        {shouldTruncate && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium mb-4 hover:underline self-start"
          >
            {expanded ? "Show Less" : "View More"}
          </button>
        )}

        {/* View More Button */}
        {viewLink && (
          <Link
            href={viewLink}
            target="_blank"
            className="mt-auto inline-block bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base px-4 py-2 rounded-md transition-colors duration-200 text-center"
          >
            Visit Project
          </Link>
        )}
      </div>
    </div>
  );
}

// ProjectsSection component (renders first 3 projects)
export default function PortfolioSection() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-950 px-4 sm:px-6 lg:px-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Projects / Portfolio
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {projectData.slice(0, 3).map((project, idx) => (
          <PortfolioCard key={idx} project={project} />
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center">
        <Link
          href="/portfolio"
          className="inline-block bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base px-6 py-3 rounded-md transition-colors duration-200"
        >
          View More Projects
        </Link>
      </div>
    </section>
  );
}