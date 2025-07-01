import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Star, Target, Users, Zap } from "lucide-react";
import Link from "next/link";
import React from "react";
import { AnimatedSection } from "@/components/animated-section";

export default function WhoWeAre() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Reach4U is a dynamic digital agency dedicated to transforming
            businesses through innovative technology solutions. We combine
            strategic thinking with creative execution to deliver exceptional
            results that drive growth and success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target size={24} className="text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Our Mission
                  </h4>
                  <p className="text-gray-600">
                    To empower businesses with cutting-edge digital solutions
                    that drive measurable growth and create lasting impact in
                    the digital landscape.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap size={24} className="text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Our Vision
                  </h4>
                  <p className="text-gray-600">
                    To be the leading digital partner that businesses trust for
                    innovative solutions, exceptional service, and
                    transformative results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users size={36} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-orange-500 mb-2">1+</div>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Award size={36} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-orange-500 mb-2">13+</div>
              <p className="text-gray-600 font-medium">Happy Clients</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Target size={36} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-orange-500 mb-2">27+</div>
              <p className="text-gray-600 font-medium">Projects Completed</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Star size={36} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-orange-500 mb-2">5.0</div>
              <p className="text-gray-600 font-medium">Client Rating</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Our team of passionate professionals brings together years of
            experience in digital marketing, creative design, and web
            development to help your business reach new heights in the digital
            world.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 group">
            <Link href="/about" className="flex items-center">
              Discover Our Story
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
