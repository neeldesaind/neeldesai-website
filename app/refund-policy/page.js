"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />

      <section className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Refund Policy
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We aim to provide the best services possible. If you are unsatisfied with your purchase, please contact us within 7 days of the transaction.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Refunds are processed on a case-by-case basis, depending on the service or product purchased.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          For any questions regarding refunds, reach out via our Contact page.
        </p>
      </section>

      <Footer />
    </main>
  );
}
