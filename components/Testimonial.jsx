"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import testimonialData from "../data/testimonial.json";

// Dynamically import react-slick to prevent SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [expanded, setExpanded] = useState({}); // track expanded state per testimonial

  useEffect(() => {
    setTestimonials(testimonialData);
  }, []);

  const toggleExpand = (idx) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280, // xl screens
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024, // large tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // tablets
        settings: { slidesToShow: 1, arrows: false },
      },
      {
        breakpoint: 480, // small mobiles
        settings: { slidesToShow: 1, arrows: false },
      },
    ],
  };

  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-4 sm:px-6 lg:px-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">Testimonials</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
          Hear what my clients and colleagues say about my work.
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((t, idx) => {
            const isExpanded = expanded[idx] || false;
            const shouldTruncate = t.text.length > 150;
            const displayedText =
              isExpanded || !shouldTruncate
                ? t.text
                : t.text.slice(0, 150) + "...";

            return (
              <div key={idx} className="px-3 sm:px-4">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 sm:p-8 flex flex-col items-center text-center h-full">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm sm:text-base leading-relaxed">
                    {displayedText}
                  </p>

                  {shouldTruncate && (
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline mb-3"
                    >
                      {isExpanded ? "Show Less" : "Read More"}
                    </button>
                  )}

                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {t.name}
                  </h3>
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {t.role}
                  </span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
