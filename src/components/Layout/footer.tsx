import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Reach4U
            </h3>
            <p className="text-black mb-4 max-w-md">
              We are a leading digital services company specializing in search
              engine optimization, marketing, and advertising to enhance brands
              and projects.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-black/70 hover:text-orange-500 transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-black/70 hover:text-orange-500 transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-black/70 hover:text-orange-500 transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="#"
                className="text-black/70 hover:text-orange-500 transition-colors"
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
                  className="text-black/70 hover:text-orange-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-black/70 hover:text-orange-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-black/70 hover:text-orange-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-black/70 hover:text-orange-500 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-black/70 hover:text-orange-500 transition-colors"
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
              <Link href="/services/seo-optimization" className="text-black/70 hover:text-orange-500 transition-colors">
                  SEO Optimization
              </Link>
                </li>
                <li>
              <Link href="/services/digital-marketing" className="text-black/70 hover:text-orange-500 transition-colors">
                Digital Marketing
              </Link>  
              </li>
              <li>
              <Link href="/services/web-development" className="text-black/70 hover:text-orange-500 transition-colors">
                Web Development
              </Link>
              </li>
              <li>
              <Link href="/services/graphic-design" className="text-black/70 hover:text-orange-500 transition-colors">
                Graphic Design
              </Link>
              </li>
              <li>
              <Link href="/services/brand-strategy" className="text-black/70 hover:text-orange-500 transition-colors">
                Brand Strategy
              </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-500 mt-8 pt-8 text-center">
          <p className="text-black/70">
            © {new Date().getFullYear()} <span className="text-orange-500 font-bold">Reach4U</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
