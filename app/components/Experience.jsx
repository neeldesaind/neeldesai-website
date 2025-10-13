"use client";

import { useEffect, useState } from "react";
import experienceData from "../data/experience.json";
import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(experienceData);
  }, []);

  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-4 sm:px-6 lg:px-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
          Experience / Internship
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto before:absolute before:top-0 before:left-5 before:h-full before:w-1 before:bg-red-600">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex items-start mb-12 relative">
            {/* Timeline Dot */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white z-10">
              <Briefcase className="w-5 h-5" />
            </div>

            {/* Content */}
            <div className="ml-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {exp.role}
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-300">
                {exp.duration}
              </span>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {exp.description}
              </p>
              <span className="block text-sm font-medium text-red-600 mt-1">
                {exp.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
