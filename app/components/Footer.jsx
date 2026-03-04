"use client";

import Image from "next/image";
import Link from "next/link";
import footerData from "../data/footer.json";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const iconMap = {
  FaFacebookF: FaFacebookF,
  FaInstagram: FaInstagram,
  FaLinkedinIn: FaLinkedinIn,
  FaTwitter: FaTwitter
};

export default function Footer() {
  const { logo, companyName, contact, help, policy, socials } = footerData;

  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Contact */}
        <div className="flex flex-col space-y-4">
          <Image src={logo} alt="Logo" width={60} height={60} className="rounded-full" />
        </div>

        {/* Help & Support */}
        <div>
          <h3 className="text-lg font-semibold mb-2">{help.heading}</h3>
          <ul className="space-y-1">
            {help.links.map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="hover:text-red-600 transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-2">{policy.heading}</h3>
          <ul className="space-y-1">
            {policy.links.map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="hover:text-red-600 transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            {socials.map((social, idx) => {
              const Icon = iconMap[social.icon];
              return (
                <Link key={idx} href={social.href} target="_blank" className="hover:text-red-600 transition-colors">
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
      </div>
    </footer>
  );

}
