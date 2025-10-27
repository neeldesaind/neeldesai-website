"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import testimonialData from "../data/testimonial.json";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    setTestimonials(testimonialData);
  }, []);

  const toggleExpand = (idx) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 900, settings: { slidesToShow: 1, arrows: false, centerMode: true, centerPadding: "0px" } },
      { breakpoint: 600, settings: { slidesToShow: 1, arrows: false, dots: true, centerMode: true, centerPadding: "0px" } },
    ],
  };

  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">Testimonials</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Hear what my clients and colleagues say about my work.
        </p>
      </div>

      <div className="max-w-6xl mx-auto overflow-hidden">
        <Slider {...settings}>
          {testimonials.map((t, idx) => {
            const isExpanded = expanded[idx] || false;
            const shouldTruncate = t.text.length > 150;
            const displayedText = isExpanded ? t.text : t.text.slice(0, 150) + (shouldTruncate ? "..." : "");

            return (
              <div key={idx} className="px-3 flex justify-center">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 flex flex-col justify-between text-center h-full min-h-[280px] max-w-[320px]">
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {displayedText}
                  </p>

                  {shouldTruncate && (
                    <button onClick={() => toggleExpand(idx)} className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline my-2">
                      {isExpanded ? "Show Less" : "Read More"}
                    </button>
                  )}

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-4">{t.name}</h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{t.role}</span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
