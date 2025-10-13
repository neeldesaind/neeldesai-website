"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />

      <section className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Your privacy is important to us. We collect only the information necessary to provide our services and improve your experience.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We do not share personal information with third parties without consent, except as required by law.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          For more details about how we handle your data, please contact us via the Contact page.
        </p>
      </section>

      <Footer />
    </main>
  );
}
