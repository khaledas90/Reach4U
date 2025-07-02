"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Palette, Code, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function OurServices() {
  const t = useTranslations("common.additionalServices");

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Content Management */}
          <ServiceCard
            icon={<TrendingUp size={32} className="text-white" />}
            title={t("content.title")}
            features={t.raw("content.features")}
            href="/services"
          />

          {/* Video Marketing */}
          <ServiceCard
            icon={<Palette size={32} className="text-white" />}
            title={t("video.title")}
            features={t.raw("video.features")}
            href="/services"
          />

          {/* E-Commerce */}
          <ServiceCard
            icon={<Code size={32} className="text-white" />}
            title={t("ecommerce.title")}
            features={t.raw("ecommerce.features")}
            href="/services"
          />

          {/* Training & Consulting */}
          <ServiceCard
            icon={<CheckCircle size={32} className="text-white" />}
            title={t("training.title")}
            features={t.raw("training.features")}
            href="/services"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  features,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  features: string[];
  href: string;
}) {
  return (
    <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 bg-gradient-to-br from-white to-gray-50">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
      <CardContent className="p-8">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors duration-300">
          {title}
        </h3>
        <div className="space-y-3 mb-6">
          {features.map((text, i) => (
            <div key={i} className="flex items-center text-sm text-gray-600">
              <CheckCircle size={16} className="text-green-500 me-3" />
              {text}
            </div>
          ))}
        </div>
        <Button className="w-full bg-orange-500 hover:bg-orange-600 group-hover:scale-105 transition-transform duration-300">
          <Link href={href}>{title}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
