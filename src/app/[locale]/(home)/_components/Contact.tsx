"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSection } from "@/components/animated-section";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to start your digital transformation? Contact us today for a
            free consultation
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="h-12"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="h-12"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project and requirements..."
                    rows={5}
                    className="resize-none"
                  />
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 h-12 group">
                  <Send
                    size={20}
                    className="mr-2 group-hover:translate-x-1 transition-transform duration-300"
                  />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                We're here to help you achieve your digital goals. Reach out to
                us through any of the following channels:
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                  <Mail
                    size={24}
                    className="text-orange-500 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600">info@reach4u.com</p>
                  <p className="text-gray-600">support@reach4u.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                  <Phone
                    size={24}
                    className="text-orange-500 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                  <MapPin
                    size={24}
                    className="text-orange-500 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Visit Us</h4>
                  <p className="text-gray-600">123 Digital Street</p>
                  <p className="text-gray-600">Tech City, TC 12345</p>
                </div>
              </div>
            </div>

            <Card className="bg-orange-50 border border-orange-200 mt-8">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Quick Response Guarantee
                </h4>
                <p className="text-gray-600 text-sm">
                  We typically respond to all inquiries within 24 hours during
                  business days. For urgent matters, please call us directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
