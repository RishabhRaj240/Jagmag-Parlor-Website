"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scissors, Palette, Sparkles, Heart, Crown, Zap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    icon: Scissors,
    title: "Hair Styling",
    description: "Professional cuts, styling, and treatments for all hair types",
    features: ["Hair Cut & Style", "Hair Wash", "Blow Dry", "Hair Treatment"],
  },
  {
    icon: Palette,
    title: "Makeup Services",
    description: "Bridal, party, and everyday makeup by certified artists",
    features: ["Bridal Makeup", "Party Makeup", "HD Makeup", "Makeup Trial"],
  },
  {
    icon: Sparkles,
    title: "Facial Treatments",
    description: "Rejuvenating facials for glowing and healthy skin",
    features: ["Deep Cleansing", "Anti-Aging", "Hydrating Facial", "Acne Treatment"],
  },
  {
    icon: Heart,
    title: "Nail Care",
    description: "Manicure, pedicure, and nail art services",
    features: ["Manicure", "Pedicure", "Nail Art", "Gel Polish"],
  },
  {
    icon: Crown,
    title: "Bridal Packages",
    description: "Complete bridal makeover packages for your special day",
    features: ["Pre-Bridal Care", "Bridal Makeup", "Hair Styling", "Mehendi"],
  },
  {
    icon: Zap,
    title: "Skin Treatments",
    description: "Advanced skin care treatments and therapies",
    features: ["Skin Analysis", "Chemical Peels", "Microdermabrasion", "LED Therapy"],
  },
]

export function Services() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="services" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of beauty services designed to enhance your natural beauty and boost your
            confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-700 hover:-translate-y-3 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-200 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-6 w-6 text-pink-600 group-hover:animate-pulse" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-pink-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600 opacity-0 animate-fade-in"
                        style={{ animationDelay: `${index * 150 + featureIndex * 100}ms` }}
                      >
                        <div className="w-1.5 h-1.5 bg-pink-600 rounded-full mr-3 animate-pulse"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-pink-600 hover:bg-pink-700 hover:scale-105 transition-all duration-300 btn-hover-effect">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
