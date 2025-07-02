"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Palette, Code } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Animation Part */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div
            className="absolute top-40 right-32 w-24 h-24 bg-white/10 rounded-full animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute bottom-32 left-40 w-20 h-20 bg-white/5 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 right-20 w-28 h-28 bg-white/10 rounded-full animate-bounce"
            style={{ animationDuration: "4s", animationDelay: "0.5s" }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Speech Part 1 - Main Content */}
          <div className="text-white">
            <div
              className={`transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Digital Excellence
                <span className="block text-yellow-300">Made Simple</span>
              </h1>
              <p className="text-xl mb-8 text-orange-100 leading-relaxed">
                We transform your business with professional digital marketing,
                stunning design, and powerful web solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 transition-all duration-300"
                >
                  <Link href="/services" className="text-orange-600">
                    Get Started
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent transition-all duration-300"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Animation Part - Interactive Service Icons */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid grid-cols-1 gap-6">
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Digital Marketing
                    </h3>
                    <p className="text-orange-100 text-sm">
                      SEO, Social Media & PPC
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Palette size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Creative Design
                    </h3>
                    <p className="text-orange-100 text-sm">
                      Branding & Visual Identity
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Code size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Web Development
                    </h3>
                    <p className="text-orange-100 text-sm">
                      Modern & Responsive Sites
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
