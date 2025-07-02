"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Check, Star, Zap, Crown } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PricingPage() {
  const t = useTranslations("common.pricing");
  const plans = t.raw("plans");

  // Icon mapping for plans
  const planIcons = [Zap, Star, Crown, Crown];
  const planColors = [
    "from-blue-500 to-blue-600",
    "from-orange-500 to-orange-600", 
    "from-purple-500 to-purple-600",
    "from-yellow-500 to-yellow-600"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("title")}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {plans.map((plan: any, index: number) => {
              const IconComponent = planIcons[index];
              const colorClass = planColors[index];
              
              return (
                <div key={index}>
                  <Card
                    className={`relative h-full z-10 ${
                      plan.popular
                        ? "border-orange-500 border-2 scale-105"
                        : "border-gray-200"
                    } hover:shadow-2xl transition-all duration-300`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-40">
                        <span className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                          {t("mostPopular")}
                        </span>
                      </div>
                    )}

                    <div
                      className={`bg-gradient-to-r ${colorClass} p-6 text-white rounded-t-md`}
                    >
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <IconComponent size={32} className="text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-bold text-center">
                        {plan.name}
                      </CardTitle>
                      <div className="text-center mt-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-white/80"> {plan.period}</span>
                      </div>
                      <p className="text-white/90 text-center mt-2 text-sm">
                        {plan.description}
                      </p>
                    </div>

                    <CardContent className="p-6">
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature: string, featureIndex: number) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check
                              size={20}
                              className="text-green-500 me-3 flex-shrink-0 mt-0.5"
                            />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full ${
                          plan.popular
                            ? "bg-orange-500 hover:bg-orange-600 text-white"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                        } transition-all duration-300 hover:scale-105`}
                        size="lg"
                      >
                        {plan.price === "Custom"
                          ? t("contactSales")
                          : t("getStarted")}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("faqTitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("faqSubtitle")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t
                .raw("faqs")
                .map((faq: { question: string; answer: string }, i: number) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <h3 className="text-lg font-bold mb-3 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("commitmentTitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("commitmentDescription")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
