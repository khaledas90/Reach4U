import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Palette, Code, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function OurServices() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We offer comprehensive digital solutions designed to elevate your
            brand, engage your audience, and drive sustainable business growth
            in today's competitive marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 bg-gradient-to-br from-white to-gray-50">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <TrendingUp size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors duration-300">
                Digital Marketing
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive marketing strategies that boost your online
                presence, drive qualified traffic, and convert visitors into
                loyal customers through data-driven campaigns.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Search Engine Optimization (SEO)",
                  "Social Media Marketing & Management",
                  "Pay-Per-Click (PPC) Advertising",
                  "Content Marketing & Strategy",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <CheckCircle size={16} className="text-green-500 mr-3" />
                    {text}
                  </div>
                ))}
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 group-hover:scale-105 transition-transform duration-300">
                <Link href="/services">Explore Marketing</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 bg-gradient-to-br from-white to-gray-50">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Palette size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors duration-300">
                Creative Design
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Professional visual identity and creative solutions that capture
                your brand essence, communicate your message effectively, and
                leave lasting impressions on your audience.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Logo Design & Brand Identity",
                  "Print & Digital Design Materials",
                  "UI/UX Design & Prototyping",
                  "Marketing Collateral Design",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <CheckCircle size={16} className="text-green-500 mr-3" />
                    {text}
                  </div>
                ))}
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 group-hover:scale-105 transition-transform duration-300">
                <Link href="/services">View Design Work</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 bg-gradient-to-br from-white to-gray-50">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Code size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors duration-300">
                Web Development
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Modern, responsive websites and web applications built with
                cutting-edge technology, optimized for performance, security,
                and user experience across all devices.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Responsive Website Development",
                  "E-commerce Solutions & Integration",
                  "Custom Web Applications",
                  "Website Maintenance & Support",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <CheckCircle size={16} className="text-green-500 mr-3" />
                    {text}
                  </div>
                ))}
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 group-hover:scale-105 transition-transform duration-300">
                <Link href="/services">Start Your Project</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
