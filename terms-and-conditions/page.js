"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsConditions() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />

      <section className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Terms & Conditions
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          By using our website or services, you agree to comply with our terms and conditions.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Users are responsible for providing accurate information and using our services lawfully.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We reserve the right to modify these terms at any time. Continued use of our services implies acceptance of updated terms.
        </p>
      </section>

      <Footer />
    </main>
  );
}
