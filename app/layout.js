import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Neel Desai | Full Stack Developer",
  description:
    "Portfolio of Neel Desai — a passionate Full Stack Developer based in Limbasi, Anand (Gujarat), specializing in React, Next.js, MongoDB, and Big Data analytics.",
  keywords: [
    "Neel Desai",
    "Full Stack Developer in Anand",
    "Full Stack Developer in Kheda",
    "Full Stack Developer in Nadiad",
    "Full Stack Developer in Ahmedabad",
    "Web Developer in Anand",
    "Web Developer in Kheda",
    "Web Developer in Nadiad",
    "Web Developer in Ahmedabad",
    "Freelance Developer Gujarat",
    "Next.js Developer",
    "React Developer",
    "Full Stack Developer",
    "MongoDB Developer",
  ],
  authors: [{ name: "Neel Desai" }],
  creator: "Neel Desai",
  publisher: "Neel Desai",
  metadataBase: new URL("https://www.neeldesai.in"),
  openGraph: {
    title: "Neel Desai | Full Stack Developer & Data Analyst",
    description:
      "Explore the professional portfolio of Neel Desai — a freelance Full Stack Developer and Data Analyst from Gujarat, India.",
    url: "https://www.neeldesai.in",
    siteName: "Neel Desai Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Neel Desai Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neel Desai | Full Stack Developer & Data Analyst",
    description:
      "Building modern web apps with React, Next.js, MongoDB, and data-driven solutions.",
    creator: "@neeldesai",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.neeldesai.in",
  },
};

export default function RootLayout({ children }) {
  const services = [
    {
      "@type": "Service",
      name: "Web Development",
      description:
        "Building responsive, modern, and high-performance websites using React, Next.js, and Tailwind CSS.",
    },
    {
      "@type": "Service",
      name: "UI/UX Design",
      description:
        "Designing intuitive user interfaces and smooth user experiences for web and mobile applications.",
    },
    {
      "@type": "Service",
      name: "Mobile App Development",
      description:
        "Creating cross-platform mobile applications with React Native and other modern technologies.",
    },
    {
      "@type": "Service",
      name: "SEO & Optimization",
      description:
        "Improving website visibility and performance with SEO best practices and optimization techniques.",
    },
    {
      "@type": "Service",
      name: "Database Management",
      description:
        "Designing, managing, and optimizing databases for applications to ensure scalability and performance.",
    },
    {
      "@type": "Service",
      name: "Technical Support",
      description:
        "Providing ongoing maintenance and technical support to keep websites and apps running smoothly.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Neel Desai",
    url: "https://www.neeldesai.in",
    jobTitle: "Full Stack Developer",
    description:
      "Freelance Full Stack Developer based in Limbasi, Anand, Nadiad, Vadodara, Ahmedabad — specializing in React, Next.js, and MongoDB.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Opposite Primary Health Center",
      addressLocality: "Limbasi",
      postalCode: "387520",
      addressRegion: "Gujarat",
      addressCountry: "India",
    },
    areaServed: ["Anand", "Nadiad", "Kheda", "Ahmedabad", "Gujarat", "India"],
    sameAs: [
      "https://github.com/neeldesaind",
      "https://linkedin.com/in/neeldesaind",
    ],
    makesOffer: services,
  };

  return (
    <html lang="en">
      <head>
        {/* Schema Markup with Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
