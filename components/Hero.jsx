"use client";
import Image from "next/image";
import heroData from "../data/hero.json";
import ServicesMarquee from "./ServicesMarquee";
import { useEffect } from "react";

export default function Hero() {
  const { title, subtitle, ctaText, ctaLink, bgImage } = heroData;

  // ✅ Load LinkedIn badge script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Image with blur */}
      <Image
        src={bgImage}
        alt="Hero Background"
        fill
        className="object-cover object-center scale-110 sm:scale-100 filter blur-sm brightness-75"
        priority
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Left content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0 px-2 sm:px-0">
          <h1
            className="font-bold text-white mb-3 leading-snug"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", whiteSpace: "nowrap" }}
          >
            {title}
          </h1>

          <p
            className="text-white/90 mb-5 max-w-full sm:max-w-sm"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)" }}
          >
            {subtitle}
          </p>

          <a
            href={ctaLink}
            className="inline-block bg-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-purple-700 transition transform hover:-translate-y-0.5 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg"
          >
            {ctaText}
          </a>
        </div>

        {/* ✅ Right side – LinkedIn Profile Badge */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
          <div
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="large"
            data-theme="light"
            data-type="HORIZONTAL"
            data-vanity="neeldesaind"
            data-version="v1"
          >
            <a
              className="badge-base__link LI-simple-link"
              href="https://in.linkedin.com/in/neeldesaind?trk=profile-badge"
              target="_blank"
              rel="noopener noreferrer"
            >
              Neel Desai
            </a>
          </div>
        </div>
      </div>

      {/* Services Marquee */}
      <div className="w-full z-10 absolute bottom-0">
        <ServicesMarquee />
      </div>
    </section>
  );
}
