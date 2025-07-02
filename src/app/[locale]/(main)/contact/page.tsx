"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("common.contact");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("contact_title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("contact_subtitle")}
          </p>
        </div>
      </section>
 
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  {t("contact_form_title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {t("contact_form_first_name")}
                      </label>
                      <Input
                        id="firstName"
                        placeholder={t("contact_form_first_name")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {t("contact_form_last_name")}
                      </label>
                      <Input
                        id="lastName"
                        placeholder={t("contact_form_last_name")}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("contact_form_email")}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("contact_form_phone")}
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+966 50 XXX XXXX"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("contact_form_service")}
                    </label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">{t("contact_form_service")}</option>
                      <option value="digital-marketing">
                        {t("contact_form_digital_marketing")}
                      </option>
                      <option value="seo">{t("contact_form_seo")}</option>
                      <option value="web-development">{t("contact_form_web_development")}</option>
                      <option value="graphic-design">{t("contact_form_graphic_design")}</option>
                      <option value="brand-strategy">{t("contact_form_brand_strategy")}</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("contact_form_message")}
                    </label>
                    <Textarea
                      id="message"
                      placeholder={t("contact_form_message")}
                      rows={5}
                    />
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    {t("contact_form_button")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t("contact_info_title")}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t("contact_info_desc")}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {t("contact_email_label")}
                  </h3>
                  <p className="text-gray-600">{t("contact_email_1")}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {t("contact_phone_label")}
                  </h3>
                  <p className="text-gray-600">{t("contact_phone_1")}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {t("contact_address_label")}
                  </h3>
                  <p className="text-gray-600">{t("contact_address_1")}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {t("business_hours_label")}
                  </h3>
                  <p className="text-gray-600">{t("business_hours_week")}</p>
                  <p className="text-gray-600">{t("business_hours_weekend")}</p>
                </div>
              </div>
            </div>

            <Card className="bg-orange-50 border-orange-200">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t("quick_response_title")}
                </h3>
                <p className="text-gray-600">{t("quick_response_desc")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t("map_title")}</h3>
              <p>{t("map_placeholder")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
