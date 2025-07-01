import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-500 mb-4">
              Reach4U
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              We are a leading digital services company specializing in search
              engine optimization, marketing, and advertising to enhance brands
              and projects.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-primary-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-primary-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-primary-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-300 hover:text-primary-500 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-primary-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">SEO Optimization</span>
              </li>
              <li>
                <span className="text-gray-300">Digital Marketing</span>
              </li>
              <li>
                <span className="text-gray-300">Web Development</span>
              </li>
              <li>
                <span className="text-gray-300">Graphic Design</span>
              </li>
              <li>
                <span className="text-gray-300">Brand Strategy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Reach4U. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
