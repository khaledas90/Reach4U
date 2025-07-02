import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  Palette,
  Code,
  Search,
  Megaphone,
  Smartphone,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Comprehensive marketing strategies to increase your sales and reach your target audience",
      features: [
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "PPC Advertising",
        "Analytics & Reporting",
      ],
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and drive organic traffic to your website",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Link Building",
        "Local SEO",
      ],
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description:
        "Professional visual identity design, logos, banners, and marketing materials",
      features: [
        "Logo Design",
        "Brand Identity",
        "Print Design",
        "Digital Graphics",
        "UI/UX Design",
      ],
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Professional and attractive website design that meets your business needs",
      features: [
        "Responsive Design",
        "E-commerce Solutions",
        "CMS Development",
        "Web Applications",
        "Maintenance & Support",
      ],
    },
    {
      icon: Megaphone,
      title: "Brand Strategy",
      description:
        "Develop a strong brand presence that resonates with your target audience",
      features: [
        "Brand Positioning",
        "Market Research",
        "Competitive Analysis",
        "Brand Guidelines",
        "Brand Messaging",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Marketing",
      description:
        "Reach your customers on mobile devices with targeted mobile marketing campaigns",
      features: [
        "Mobile App Marketing",
        "SMS Marketing",
        "Mobile-First Design",
        "App Store Optimization",
        "Mobile Analytics",
      ],
    },
  ];

  return (
    <div className="min-h-screen  ">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of digital services to help your
              business grow and succeed online
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-secondary hover:bg-secondary/90">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to ensure the success of every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We understand your business goals and requirements",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "We develop a customized strategy for your project",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "We execute the plan with precision and attention to detail",
              },
              {
                step: "04",
                title: "Optimization",
                description:
                  "We continuously monitor and optimize for better results",
              },
            ].map((item, index) => (
              <div key={index}>
                <div className="text-center ring-[0.5px] ring-black/20 shadow-md p-4 rounded-2xl">
                  <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
