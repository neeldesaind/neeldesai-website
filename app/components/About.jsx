"use client";

import Navbar from "./Navbar";
import Image from "next/image";
import aboutData from "../data/about.json";
import Footer from "./Footer";

export default function AboutFreelancer() {
  const { name, intro, photo, skills, services, tools, experience } = aboutData;
  const NAV_HEIGHT = "60px";

  const Pill = ({ children, purple }) => (
    <span
      className={`px-2 py-1 rounded-full text-sm sm:text-sm ${
        purple ? "bg-purple-600 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      }`}
    >
      {children}
    </span>
  );

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: NAV_HEIGHT }} />

      {/* Header */}
      <div className="w-full bg-gray-100 dark:bg-gray-800 py-6 flex justify-center items-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
          About Me
        </h1>
      </div>

      {/* About */}
      <section className="w-full py-8 px-4 sm:px-6 lg:px-10 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-8">
          <div className="flex-shrink-0 w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden mx-auto md:mx-0">
            <Image src={photo} alt={name} width={144} height={144} className="object-cover w-full h-full" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">{name}</h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-snug">{intro}</p>
          </div>
        </div>

        {/* Skills */}
        <div className="max-w-5xl mx-auto mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-center md:text-left">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {skills.map((skill, idx) => (
              <Pill key={idx} purple>{skill}</Pill>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="max-w-5xl mx-auto mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-center md:text-left">Services I Offer</h2>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {services.map((service, idx) => (
              <Pill key={idx}>{service}</Pill>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="max-w-5xl mx-auto mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-center md:text-left">Tools & Technologies</h2>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {tools.map((tool, idx) => (
              <Pill key={idx}>{tool}</Pill>
            ))}
          </div>
        </div>

        {/* Experience */}
        {experience?.length > 0 && (
          <div className="max-w-5xl mx-auto mb-8 grid grid-cols-2 sm:grid-cols-3 gap-2 text-center">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-purple-600">{exp.value}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1">{exp.label}</p>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer/>
    </>
  );
}
