"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("common.team");

  // Management Team
  const managementTeam = [
    {
      id: 1,
      name: t("management.ibrahimGharib.name"),
      position: t("management.ibrahimGharib.position"),
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: t("management.abdullahHilal.name"),
      position: t("management.abdullahHilal.position"),
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  // Work Team
  const workTeam = [
    {
      id: 1,
      name: t("workTeam.abdulrahmanAdwan.name"),
      position: t("workTeam.abdulrahmanAdwan.position"),
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: t("workTeam.khaledAhmed.name"),
      position: t("workTeam.khaledAhmed.position"),
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: t("workTeam.shaabanElsayed.name"),
      position: t("workTeam.shaabanElsayed.position"),
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: t("workTeam.abdulrahmanQassas.name"),
      position: t("workTeam.abdulrahmanQassas.position"),
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      name: t("workTeam.ahmedKhammar.name"),
      position: t("workTeam.ahmedKhammar.position"),
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 6,
      name: t("workTeam.mahmoudHilal.name"),
      position: t("workTeam.mahmoudHilal.position"),
      position2: t("workTeam.mahmoudHilal.position2"),
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Management Team Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-0">
              {t("management.title")}
            </h2>
            {/* QR Code Placeholder */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-white border-2 border-dashed border-orange-500 rounded-xl flex items-center justify-center mb-2">
                {/* Replace with real QR code if needed */}
                <span className="text-orange-500 font-bold text-lg">QR</span>
              </div>
              <span className="text-sm text-gray-700 font-semibold mb-1">{t("qr.scan")}</span>
              <span className="text-sm text-orange-500 font-bold">{t("qr.contact")}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {managementTeam.map((member) => (
              <Card key={member.id} className="text-center">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200 mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-orange-500 font-medium mb-1">
                    {member.position}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Work Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("workTeam.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            {t("workTeam.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {workTeam.map((member) => (
            <Card key={member.id} className="group text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-medium mb-1">
                  {member.position}
                </p>
                {member.position2 && (
                  <p className="text-orange-500 font-medium mb-1">
                    {member.position2}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Slogan Section */}
        <div className="mt-16 text-center">
          <p className="text-2xl font-bold text-gray-900 mb-2">
            {t("slogan")}
          </p>
        </div>
      </div>
    </section>
  );
}
