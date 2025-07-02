import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { Users, Lightbulb, Heart, Zap, BarChart2, LifeBuoy, Circle } from "lucide-react";
import { TeamSection } from "@/components/team-section";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("common.about");
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("whoWeAre")} <span className="text-orange-500 font-bold">Reach4U</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("companyOverviewText")}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("companyOverview")}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t("companyOverviewText")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("expertise")}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t("expertiseText")}
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">1+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">13+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">27+</div>
                  <div className="text-sm text-gray-600">
                    Projects Completed
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Users size={64} className="mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Our Team</h3>
                  <p className="text-orange-100">
                    Dedicated professionals working for your success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("vision")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("visionText")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-10">
              {t("whyChoose")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-start p-8 h-full">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb size={32} className="text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-6 text-center">{t("localExpertise")}</h3>
                <div className="text-gray-600 space-y-2">
                  <div className="flex items-start gap-2"><Circle size={16} className="mt-1 text-orange-500 shrink-0" />{t("localExpertisePoint1")}</div>
                  <div className="flex items-start gap-2"><Circle size={16} className="mt-1 text-orange-500 shrink-0" />{t("localExpertisePoint2")}</div>
                  <div className="flex items-start gap-2"><Circle size={16} className="mt-1 text-orange-500 shrink-0" />{t("localExpertisePoint3")}</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-start p-8 h-full">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart size={32} className="text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-6 text-center">{t("specializedTeam")}</h3>
                <div className="text-gray-600 space-y-2">
                  <div className="flex items-start gap-2"><Circle size={16} className="mt-1 text-orange-500 shrink-0" />{t("specializedTeamPoint1")}</div>
                  <div className="flex items-start gap-2"><Circle size={16} className="mt-1 text-orange-500 shrink-0" />{t("specializedTeamPoint2")}</div>
                  <div className="flex items-start gap-2"><Circle size={16} className="mt-1 text-orange-500 shrink-0" />{t("specializedTeamPoint3")}</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-start p-8 h-full">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap size={32} className="text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-6 text-center">{t("advancedTech")}</h3>
                <div className="text-gray-600 space-y-2">
                  <div className="flex items-start gap-2"><Circle size={16} className="mt-1 text-orange-500 shrink-0" />{t("advancedTechPoint1")}</div>
                  <div className="flex items-start gap-2"><Circle size={16} className="mt-1 text-orange-500 shrink-0" />{t("advancedTechPoint2")}</div>
                  <div className="flex items-start gap-2"><Circle size={16} className="mt-1 text-orange-500 shrink-0" />{t("advancedTechPoint3")}</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="text-start p-8 h-full">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart2 size={32} className="text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-6 text-center">{t("measurableResults")}</h3>
                <div className="text-gray-600 space-y-2">
                  <div className="flex items-start gap-2"><Circle size={16} className="mt-1 text-orange-500 shrink-0" />{t("measurableResultsPoint1")}</div>
                  <div className="flex items-start gap-2"><Circle size={16} className="mt-1 text-orange-500 shrink-0" />{t("measurableResultsPoint2")}</div>
                  <div className="flex items-start gap-2"><Circle size={16} className="mt-1 text-orange-500 shrink-0" />{t("measurableResultsPoint3")}</div>
                </div>
              </CardContent>
            </Card>
            <Card className="text-start p-8 h-full">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <LifeBuoy size={32} className="text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-6 text-center">{t("continuousSupport")}</h3>
                <div className="text-gray-600 space-y-2">
                  <div className="flex items-start gap-2"><Circle size={16} className="mt-1 text-orange-500 shrink-0" />{t("continuousSupportPoint1")}</div>
                  <div className="flex items-start gap-2"><Circle size={16} className="mt-1 text-orange-500 shrink-0" />{t("continuousSupportPoint2")}</div>
                  <div className="flex items-start gap-2"><Circle size={16} className="mt-1 text-orange-500 shrink-0" />{t("continuousSupportPoint3")}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />
    </div>
  );
}
