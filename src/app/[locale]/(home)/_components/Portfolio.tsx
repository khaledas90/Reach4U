"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { ExternalLink, Eye } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "E-commerce Marketing Campaign",
      category: "marketing",
      description:
        "Complete digital marketing strategy for online retail business",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["SEO", "Social Media", "PPC"],
    },
    {
      id: 2,
      title: "Corporate Website Design",
      category: "web-development",
      description: "Modern responsive website for technology company",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Next.js", "UI/UX"],
    },
    {
      id: 3,
      title: "Brand Identity Package",
      category: "design",
      description: "Complete brand identity design for startup company",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Logo", "Branding", "Print Design"],
    },
    {
      id: 4,
      title: "Mobile App Marketing",
      category: "marketing",
      description: "App store optimization and user acquisition campaign",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["ASO", "Mobile Marketing", "Analytics"],
    },
    {
      id: 5,
      title: "Restaurant Website",
      category: "web-development",
      description: "Online ordering system with modern design",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["WordPress", "E-commerce", "Responsive"],
    },
    {
      id: 6,
      title: "Social Media Graphics",
      category: "design",
      description: "Monthly social media content design package",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Social Media", "Graphics", "Content"],
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "marketing", label: "Digital Marketing" },
    { id: "web-development", label: "Web Development" },
    { id: "design", label: "Graphic Design" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Recent Work
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects across different
            industries and services
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={`transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-orange-500 hover:bg-orange-600 text-white scale-105"
                  : "hover:scale-105"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/50 via-orange-500/30 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="bg-white text-orange-500 hover:bg-gray-100"
                    >
                      <Eye size={16} className="mr-2" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-orange-500 bg-transparent"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Visit
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
