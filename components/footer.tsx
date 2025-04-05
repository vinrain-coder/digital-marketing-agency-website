// Footer.js

"use client";

import Link from "next/link";
import SocialLinks from "./shared/footer-social-links";

export default function Footer() {
  return (
    <footer className="bg-black py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold">DevAgency</h4>
            <p className="text-lg">
              Bringing your digital ideas to life. We specialize in web
              development, mobile apps, and software solutions.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-lg hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-lg hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-lg hover:text-gray-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-lg hover:text-gray-300"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-lg hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-lg">📍 123 Agency St, City, Country</li>
              <li className="text-lg">📞 +123 456 7890</li>
              <li className="text-lg">📧 contact@devagency.com</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t border-gray-700 pt-8 text-center">
          <p className="text-lg text-gray-300">
            &copy; {new Date().getFullYear()} DevAgency. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
