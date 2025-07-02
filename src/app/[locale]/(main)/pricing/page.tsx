import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { Check, Star, Zap, Crown } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "599",
      period: "monthly",
      description:
        "Perfect for small businesses starting their digital journey",
      icon: Zap,
      features: [
        "Basic SEO Optimization",
        "Social Media Setup (2 platforms)",
        "Monthly Analytics Report",
        "Email Support",
        "Content Creation (5 posts/month)",
        "Basic Website Audit",
      ],
      popular: false,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Professional",
      price: "1299",
      period: "monthly",
      description: "Ideal for growing businesses looking to expand their reach",
      icon: Star,
      features: [
        "Everything in Starter",
        "Advanced SEO Strategy",
        "PPC Campaign Management",
        "Weekly Analytics Reports",
        "Content Creation (15 posts/month)",
        "Graphic Design Support",
        "Priority Support",
        "Competitor Analysis",
        "Custom Landing Pages",
      ],
      popular: true,
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description:
        "Comprehensive solution for large businesses and enterprises",
      icon: Crown,
      features: [
        "Everything in Professional",
        "Custom Web Development",
        "Advanced Analytics Dashboard",
        "Dedicated Account Manager",
        "24/7 Priority Support",
        "Custom Integrations",
        "Training & Consultation",
        "Multi-location Management",
        "White-label Solutions",
      ],
      popular: false,
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Success Plan
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect package to accelerate your digital growth and
              achieve your business goals
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index}>
                <Card
                  className={`relative h-full  z-10 ${
                    plan.popular
                      ? "border-orange-500 border-2 scale-105"
                      : "border-gray-200"
                  } hover:shadow-2xl transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-40">
                      <span className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Header with gradient */}
                  <div
                    className={`bg-gradient-to-r ${plan.color} p-6 text-white rounded-t-md`}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <plan.icon size={32} className="text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-center">
                      {plan.name}
                    </CardTitle>
                    <div className="text-center mt-4">
                      <span className="text-4xl font-bold">
                        {plan.price === "Custom"
                          ? plan.price
                          : `$${plan.price}`}
                      </span>
                      {plan.price !== "Custom" && (
                        <span className="text-white/80">/{plan.period}</span>
                      )}
                    </div>
                    <p className="text-white/90 text-center mt-2 text-sm">
                      {plan.description}
                    </p>
                  </div>

                  <CardContent className="p-6">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check
                            size={20}
                            className="text-green-500 mr-3 flex-shrink-0 mt-0.5"
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
                        ? "Contact Sales"
                        : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our pricing and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "Can I upgrade my plan later?",
                  answer:
                    "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle with prorated adjustments.",
                },
                {
                  question: "Do you offer custom packages?",
                  answer:
                    "We can create custom packages tailored to your specific needs, budget, and business objectives.",
                },
                {
                  question: "What's included in support?",
                  answer:
                    "All plans include email support. Professional and Enterprise plans include priority support, phone consultations, and dedicated account management.",
                },
                {
                  question: "Is there a contract commitment?",
                  answer:
                    "We offer both monthly and annual billing options. Annual plans come with significant discounts and additional benefits.",
                },
              ].map((faq, i) => (
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-lg font-bold mb-3 text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
