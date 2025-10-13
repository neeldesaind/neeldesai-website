"use client";

import { useEffect, useState } from "react";
import { Code2, Layers, Database, Wrench, Cloud, Globe } from "lucide-react";
import skillsData from "../data/skills.json";

export default function SkillsSection() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData);
  }, []);

  // Icon map
  const iconMap = {
    Code2: <Code2 className="w-10 h-10 text-red-600" />,
    Layers: <Layers className="w-10 h-10 text-red-600" />,
    Database: <Database className="w-10 h-10 text-red-600" />,
    Wrench: <Wrench className="w-10 h-10 text-red-600" />,
    Cloud: <Cloud className="w-10 h-10 text-red-600" />,
    Globe: <Globe className="w-10 h-10 text-red-600" />,
  };

  return (
    <section className="w-full py-16 bg-white text-gray-900 px-4 sm:px-8 lg:px-12">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
          Skills / Tech Stack
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {skills.map((category, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="mb-5">{iconMap[category.icon]}</div>

            {/* Category Name */}
            <h3 className="text-xl font-semibold text-gray-900 mb-5">
              {category.category}
            </h3>

            {/* Skill List */}
            <div className="flex flex-wrap justify-center gap-3">
              {category.skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-gray-800 text-sm sm:text-base bg-gray-100 rounded-full py-1.5 px-4 shadow-sm hover:bg-gray-200 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}