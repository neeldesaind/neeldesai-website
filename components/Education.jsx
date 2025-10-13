"use client";

import educationData from "../data/education.json";
import Image from "next/image";

export default function Education() {
  return (
    <section className="w-full py-12 bg-white text-gray-900 px-4 sm:px-6 lg:px-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Education
      </h2>

      <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300 flex items-center gap-4"
          >
            {/* Institution / Logo */}
            <div className="flex-shrink-0 w-16 h-16 relative">
              <Image
                src={edu.image}
                alt={edu.degree}
                fill
                className="object-cover rounded-full"
              />
            </div>

            {/* Education Details */}
            <div>
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600 text-sm">{edu.institution}</p>
              <p className="text-gray-500 text-sm">
                Year: {edu.year} | Grade: {edu.grade}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}