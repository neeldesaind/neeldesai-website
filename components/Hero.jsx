"use client";
import Image from "next/image";
import heroData from "../data/hero.json";
import ServicesMarquee from "./ServicesMarquee";

export default function Hero() {
  const { title, subtitle, ctaText, ctaLink, bgImage, illustration } = heroData;

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
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0 px-2 sm:px-0">
          {/* Title */}
          <h1
            className="font-bold text-white mb-3 leading-snug"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", whiteSpace: "nowrap" }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p
            className="text-white/90 mb-5 max-w-full sm:max-w-sm"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)" }}
          >
            {subtitle}
          </p>

          {/* CTA */}
          <a
            href={ctaLink}
            className="inline-block bg-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-purple-700 transition transform hover:-translate-y-0.5 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg"
          >
            {ctaText}
          </a>
        </div>
<div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
  <Image
    src={illustration}
    alt="Coding Illustration"
    width={900}
    height={850}
    className="w-11/12 sm:w-3/4 md:w-[36rem] lg:w-[42rem] xl:w-[48rem] object-cover rounded-xl shadow-2xl hover:scale-105 transform transition duration-500 max-h-[400px] sm:max-h-[500px] md:max-h-[650px] lg:max-h-[750px]"
  />
</div>
      </div>

      {/* Services Marquee */}
      <div className="w-full z-10 absolute bottom-0">
        <ServicesMarquee />
      </div>
    </section>
  );
}
