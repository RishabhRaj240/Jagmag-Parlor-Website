"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: ["Birsa Munda Chowk,Jashpur nagar, C.G"],
  },
  {
    icon: Phone,
    title: "Phone",
    content: ["+91 9329441554"],
  },
  {
    icon: Mail,
    title: "Email",
    content: ["info@jagmagparlor.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    content: ["Monday - Sunday: 10:30 AM - 7:30 PM"],
  },
]

export function Contact() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="contact" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your look? Contact us today to book your appointment or ask any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 transition-all duration-700 hover:translate-x-2 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: isVisible ? `${400 + index * 150}ms` : "0ms" }}
                  >
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-pink-200 hover:scale-110 transition-all duration-300">
                      <info.icon className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <div className="text-gray-600">
                        {info.content.map((line, lineIndex) => (
                          <p key={lineIndex}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Card
            className={`transition-all duration-1000 hover:shadow-xl ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div
                    className={`transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
                  >
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      className="hover:border-pink-300 focus:border-pink-500 transition-colors duration-300"
                    />
                  </div>
                  <div
                    className={`transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: isVisible ? "650ms" : "0ms" }}
                  >
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      className="hover:border-pink-300 focus:border-pink-500 transition-colors duration-300"
                    />
                  </div>
                </div>

                {["email", "phone", "service"].map((field, index) => (
                  <div
                    key={field}
                    className={`transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: isVisible ? `${700 + index * 50}ms` : "0ms" }}
                  >
                    <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-2">
                      {field === "email" ? "Email" : field === "phone" ? "Phone Number" : "Service Interested In"}
                    </label>
                    <Input
                      id={field}
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      placeholder={
                        field === "email"
                          ? "your.email@example.com"
                          : field === "phone"
                            ? "+1 (555) 123-4567"
                            : "e.g., Bridal Makeup, Hair Styling"
                      }
                      className="hover:border-pink-300 focus:border-pink-500 transition-colors duration-300"
                    />
                  </div>
                ))}

                <div
                  className={`transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: isVisible ? "850ms" : "0ms" }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements or ask any questions..."
                    rows={4}
                    className="hover:border-pink-300 focus:border-pink-500 transition-colors duration-300"
                  />
                </div>

                <Button
                  className={`w-full bg-pink-600 hover:bg-pink-700 hover:scale-105 transition-all duration-300 btn-hover-effect ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: isVisible ? "900ms" : "0ms" }}
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
