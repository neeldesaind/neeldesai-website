"use client";
import { motion } from "framer-motion";
import services from "../data/services.json"; // import JSON

export default function ServicesMarquee() {
  return (
    <section
      id="services"
      className="w-full py-8 bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-900 dark:to-purple-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="flex space-x-8 text-white text-lg sm:text-xl md:text-2xl font-semibold uppercase tracking-wide whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {services.concat(services).map((service, idx) => (
            <span key={idx} className="flex items-center">
              {service}
              <span className="mx-4 text-yellow-300 text-2xl">★</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
