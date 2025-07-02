"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  LucideIcon,
  Star,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

export default function WhoWeAre() {
  const t = useTranslations("common.aboutUs");

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t("sectionTitle")}
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target size={24} className="text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t("missionTitle")}
                  </h4>
                  <p className="text-gray-600">{t("missionText")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap size={24} className="text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t("visionTitle")}
                  </h4>
                  <p className="text-gray-600">{t("visionText")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Stats icon={<Users />} value="1+" label={t("stats.experience")} />
            <Stats icon={<Award />} value="13+" label={t("stats.clients")} />
            <Stats icon={<Target />} value="27+" label={t("stats.projects")} />
            <Stats icon={<Star />} value="5.0" label={t("stats.rating")} />
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            {t("closing")}
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 group">
            <Link href="/about" className="flex items-center">
              {t("cta")}
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

function Stats({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="text-center group">
      <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
        {React.cloneElement(
          icon as React.ReactElement<LucideIcon>,
          {
            size: 36 as const,
            className: "text-white",
          } as any
        )}
      </div>
      <div className="text-3xl font-bold text-orange-500 mb-2">{value}</div>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
}
