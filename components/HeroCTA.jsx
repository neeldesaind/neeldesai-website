"use client";

import Link from "next/link";

export default function HeroCTA() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950 py-20 px-4 sm:px-6 md:px-10 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Let's Build Something Amazing Together
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
        Want to discuss your project? Reach out to me and let's get started on creating a stunning web or mobile experience!
      </p>
      <Link
        href="/contact"
        className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md text-lg transition"
      >
        Contact Me
        <svg
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </Link>
    </section>
  );
}
