"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { Linkedin, Twitter, Mail } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Ahmed Al-Rashid",
      position: "CEO & Founder",
      description:
        "Digital marketing expert with 10+ years of experience in growing businesses online.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "ahmed@reach4u.com",
      },
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Creative Director",
      description:
        "Award-winning designer specializing in brand identity and user experience design.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@reach4u.com",
      },
    },
    {
      id: 3,
      name: "Mohammed Hassan",
      position: "Lead Developer",
      description:
        "Full-stack developer passionate about creating scalable web applications and solutions.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        email: "mohammed@reach4u.com",
      },
    },
    {
      id: 4,
      name: "Emily Chen",
      position: "Marketing Strategist",
      description:
        "Data-driven marketing professional focused on ROI optimization and growth strategies.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@reach4u.com",
      },
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our diverse team of experts brings together creativity, technical
            expertise, and strategic thinking to deliver exceptional results for
            our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id}>
              <Card className="group text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-orange-500 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {member.description}
                  </p>

                  <div className="flex justify-center space-x-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
                      >
                        <Twitter size={18} />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
                      >
                        <Mail size={18} />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
