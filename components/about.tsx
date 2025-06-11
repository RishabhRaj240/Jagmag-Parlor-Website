"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: Award,
    title: "Expert Professionals",
    description: "Certified beauticians with years of experience",
  },
  {
    icon: Users,
    title: "500+ Happy Clients",
    description: "Trusted by hundreds of satisfied customers",
  },
  {
    icon: Clock,
    title: "Flexible Timing",
    description: "Open 7 days a week with convenient hours",
  },
  {
    icon: Shield,
    title: "Hygiene First",
    description: "Strict sanitization and safety protocols",
  },
];

export function About() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About Jagmag Parlor
              </h2>
              <p className="text-lg text-gray-600">
                Welcome to Jagmag Parlor, where beauty meets excellence. For
                over 2 years, we've been dedicated to providing premium beauty
                services that enhance your natural radiance and boost your
                confidence.
              </p>
              <p className="text-gray-600">
                Our team of certified professionals uses the latest techniques
                and high-quality products to ensure you receive the best
                possible care. From everyday beauty maintenance to special
                occasion makeovers, we're here to make you look and feel your
                absolute best.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className={`border-none shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: isVisible
                      ? `${(index + 2) * 200}ms`
                      : "0ms",
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-pink-200 hover:scale-110 transition-all duration-300">
                        <feature.icon className="h-5 w-5 text-pink-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-700">
              <img
                src="/visit.jpg"
                alt="Jagmag Parlor Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-lg max-w-xs animate-float transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
              style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 animate-count-up">
                  2+ Years
                </div>
                <div className="text-sm text-gray-600 mb-2">of Excellence</div>
                <div className="text-xs text-pink-600 font-medium">
                  Trusted Beauty Partner
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
