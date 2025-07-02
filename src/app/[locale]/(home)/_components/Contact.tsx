"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import React from "react";

export function Contact() {
  const t = useTranslations("common.contact");

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t("sendHeader")}
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    id="name"
                    label={t("fullName")}
                    placeholder={t("fullName")}
                  />
                  <InputField
                    id="email"
                    label={t("email")}
                    type="email"
                    placeholder={t("email")}
                  />
                </div>
                <InputField
                  id="subject"
                  label={t("subject")}
                  placeholder={t("subject")}
                />
                <TextareaField
                  id="message"
                  label={t("message")}
                  placeholder={t("message")}
                />
                <Button className="w-full bg-orange-500 hover:bg-orange-600 h-12 group">
                  <Send
                    size={20}
                    className="mr-2 group-hover:translate-x-1 transition-transform duration-300"
                  />
                  {t("sendButton")}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <ContactInfo
              icon={<Mail size={24} />}
              header={t("emailUs")}
              lines={t.raw("emails")}
            />
            <ContactInfo
              icon={<Phone size={24} />}
              header={t("callUs")}
              lines={t.raw("phones")}
            />
            <ContactInfo
              icon={<MapPin size={24} />}
              header={t("visitUs")}
              lines={t.raw("addressLines")}
            />

            <Card className="bg-orange-50 border border-orange-200 mt-8">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {t("guaranteeHeader")}
                </h4>
                <p className="text-gray-600 text-sm">{t("guaranteeText")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function InputField({ id, label, ...props }: any) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <Input id={id} {...props} className="h-12" />
    </div>
  );
}

function TextareaField({ id, label, ...props }: any) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <Textarea id={id} rows={5} className="resize-none" {...props} />
    </div>
  );
}

function ContactInfo({
  icon,
  header,
  lines,
}: {
  icon: React.ReactNode;
  header: string;
  lines: string[];
}) {
  return (
    <div className="flex items-start space-x-4 group">
      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
        {React.cloneElement(icon as any, {
          className: "text-orange-500 group-hover:text-white",
        })}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{header}</h4>
        {lines.map((text, i) => (
          <p key={i} className="text-gray-600">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
