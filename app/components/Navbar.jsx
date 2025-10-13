  "use client";
  import { useState } from "react";
  import Link from "next/link";
  import { usePathname } from "next/navigation";
  import { Menu, X } from "lucide-react";
  import navData from "../data/navbar.json";
  import logoImage from "/public/test.png";
  import Image from "next/image";

  export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const { menu, cta } = navData;
    const pathname = usePathname();

    return (
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-purple-50/90  shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={logoImage}
                alt="Logo"
                width={40}
                height={40}
                className="object-contain"
              />
          
            </Link>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {menu.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`font-medium transition-colors ${
                      isActive
                        ? "text-purple-600"
                        : "text-gray-700 hover:text-purple-600 "
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* CTA */}
              <Link
                href={cta.href}
                className="ml-4 px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md hover:shadow-xl transform hover:scale-105 transition-all"
              >
                {cta.text}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700  p-2 rounded-md hover:bg-purple-200  transition"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-in Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white  z-40 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={toggleMenu}
              className="text-gray-700  p-2 rounded-md hover:bg-purple-100  transition"
            >
              <X size={28} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col justify-center items-center space-y-8 mt-16">
            {menu.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-semibold transition ${
                    isActive
                      ? "text-purple-600"
                      : "text-gray-800 hover:text-purple-600 "
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* CTA Button */}
            <Link
              href={cta.href}
              onClick={() => setIsOpen(false)}
              className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              {cta.text}
            </Link>
          </div>
        </div>
      </nav>
    );
  }
