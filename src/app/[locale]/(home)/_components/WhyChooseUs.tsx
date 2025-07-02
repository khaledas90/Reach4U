"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Shield, Users, Target, Zap } from "lucide-react";

export default function WhyChooseUs() {
  const t = useTranslations("common.whyChooseUs");

  const features = [
    {
      icon: Shield,
      title: t("features.0.title"),
      description: t("features.0.description"),
    },
    {
      icon: Users,
      title: t("features.1.title"),
      description: t("features.1.description"),
    },
    {
      icon: Target,
      title: t("features.2.title"),
      description: t("features.2.description"),
    },
    {
      icon: Zap,
      title: t("features.3.title"),
      description: t("features.3.description"),
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("heading")}
          </h2>
          <p className="text-lg text-gray-600 mb-8">{t("description")}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {features.map((item, index) => (
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
                <h3 className="text-2xl font-bold mb-4">
                  {t("commitmentTitle")}
                </h3>
                <p className="text-orange-100 max-w-sm mx-auto">
                  {t("commitmentDescription")}
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
