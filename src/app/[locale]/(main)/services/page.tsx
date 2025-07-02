import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProccessSection from "@/components/proccess-section";
import {
  Globe,
  Megaphone,
  Palette,
  Target,
  FileText,
  Video,
  ShoppingCart,
  GraduationCap,
} from "lucide-react";

export default function ServicesPage() {
  const t = useTranslations("common.services");
  const mainServices = t.raw("mainServices");
  const additionalServices = t.raw("additionalServices");
  const additionalServicesTitle = t("additionalServicesTitle");
  const pageTitle = t("title");

  // Icon mapping for main services
  const mainServiceIcons = [Globe, Megaphone, Palette, Target];

  // Icon mapping for additional services
  const additionalServiceIcons = [FileText, Video, ShoppingCart, GraduationCap];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {pageTitle}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service: any, index: number) => {
              const IconComponent = mainServiceIcons[index];
              return (
                <div key={index}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent size={32} className="text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.points.map((feature: string, featureIndex: number) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <div className="w-2 h-2 bg-orange-500 rounded-full me-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {additionalServicesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service: any, index: number) => {
              const IconComponent = additionalServiceIcons[index];
              return (
                <div key={index}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.points.map((feature: string, featureIndex: number) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <div className="w-2 h-2 bg-orange-500 rounded-full me-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <ProccessSection />
    </div>
  );
}
