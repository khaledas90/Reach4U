import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import {
  TrendingUp,
  Palette,
  Code,
  Users,
  Award,
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Reach4U?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We combine creativity, technical expertise, and strategic thinking
            to deliver results that exceed expectations and drive real business
            growth.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {[
              {
                icon: Shield,
                title: "Proven Results",
                description:
                  "Track record of successful campaigns and satisfied clients across various industries",
              },
              {
                icon: Users,
                title: "Expert Team",
                description:
                  "Skilled professionals with years of industry experience and continuous learning",
              },
              {
                icon: Target,
                title: "Custom Solutions",
                description:
                  "Tailored strategies that fit your unique business needs and goals",
              },
              {
                icon: Zap,
                title: "24/7 Support",
                description:
                  "Always available to help you achieve your goals and resolve any issues",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                  <item.icon
                    size={24}
                    className="text-orange-500 group-hover:text-white"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <div className="text-center text-white">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <Target size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                <p className="text-orange-100 max-w-sm">
                  Delivering exceptional digital solutions that transform
                  businesses and create lasting success
                </p>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full animate-bounce"></div>
            <div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-300 rounded-full animate-bounce"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
