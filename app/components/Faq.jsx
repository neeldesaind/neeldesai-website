"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import faqData from "../data/faq.json";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [search, setSearch] = useState("");

  const filteredFaq = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />

      <section className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Find answers to common questions below. Click on a question to expand the answer.
        </p>

        {/* Search Input */}
        <div className="mb-8 text-center">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaq.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">
              No FAQs found.
            </p>
          ) : (
            filteredFaq.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                >
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {faq.question}
                  </span>
                  {activeIndex === idx ? (
                    <ChevronUp className="w-5 h-5 text-purple-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-600" />
                  )}
                </button>
                {activeIndex === idx && (
                  <div className="px-6 pb-4 text-gray-700 dark:text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
