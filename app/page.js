"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutCard from "./components/AboutCard";
import PortfolioCard from "./components/PortfolioCard";
import SkillsSection from "./components/SkillSection";
import ExperienceSection from "./components/Experience";
import Education from "./components/Education";
import TestimonialSection from "./components/Testimonial";
import HeroCTA from "./components/HeroCTA";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


export default function Home() {
  return (
    <main className="min-h-screen bg-purple-50 dark:bg-purple-950 text-gray-900 dark:text-gray-100">
      <Navbar />
      <Hero />
      <AboutCard/>
      <PortfolioCard/>
      <SkillsSection/>
      <ExperienceSection/>
      <Education/>
      <TestimonialSection/>
      <HeroCTA/>
      <Footer/>
      <ScrollToTop/>
    </main>
  );
}