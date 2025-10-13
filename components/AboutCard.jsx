"use client";

import Image from "next/image";
import Link from "next/link";
import aboutData from "../data/about.json";

export default function AboutCard() {
  const { name, intro, photo } = aboutData;

  return (
    <section className="w-full py-12 bg-white text-gray-900">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        About Me
      </h2>

      {/* Card */}
      <div className="w-full max-w-6xl mx-auto border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row bg-white">
        {/* Left Image */}
        <div className="w-full md:w-1/3 h-64 md:h-auto relative flex-shrink-0">
          <Image
            src={photo}
            alt={name}
            width={400}
            height={400}
            className="w-full h-full object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4">{name}</h3>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {intro ? intro : "No introduction provided."}
          </p>

          {/* View More Button */}
          <div className="mt-6">
            <Link
              href="/about"
              className="inline-block bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base px-6 py-2 rounded-md transition-colors duration-200"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
