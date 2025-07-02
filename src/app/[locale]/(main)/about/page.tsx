import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { Users, Lightbulb, Heart, Zap } from "lucide-react";
import { TeamSection } from "@/components/team-section";

export default function AboutPage() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Reach4U
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are passionate about helping businesses reach their full
              potential through innovative digital solutions and strategic
              marketing approaches.
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
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to bridge the gap between businesses and
                their digital potential, Reach4U has been at the forefront of
                digital transformation. We believe that every business,
                regardless of size, deserves access to world-class digital
                marketing and development services.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team combines creativity with technical expertise to deliver
                solutions that not only look great but also drive real business
                results. We're not just service providers; we're your digital
                growth partners.
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

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work
              with our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 h-full">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb size={32} className="text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We constantly explore new technologies and creative approaches
                  to deliver cutting-edge solutions that keep our clients ahead
                  of the competition.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 h-full">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart size={32} className="text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Passion</h3>
                <p className="text-gray-600">
                  We're passionate about what we do and genuinely care about our
                  clients' success. This passion drives us to go above and
                  beyond in every project.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 h-full">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap size={32} className="text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We maintain the highest standards in everything we deliver,
                  ensuring quality, reliability, and exceptional results in
                  every project we undertake.
                </p>
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
