"use client"

import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Youtube, href: "#" },
]

const quickLinks = ["home", "services", "about", "gallery", "contact"]
const serviceLinks = ["Hair Styling", "Makeup Services", "Facial Treatments", "Nail Care", "Bridal Packages"]

export function Footer() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 text-white" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className={`space-y-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-pink-400">Jagmag Parlor</h3>
            <p className="text-gray-300">
              Your trusted beauty partner for over 5 years. We're dedicated to making you look and feel your absolute
              best.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:scale-110 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms" }}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li
                  key={link}
                  className={`transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                  }`}
                  style={{ transitionDelay: isVisible ? `${400 + index * 100}ms` : "0ms" }}
                >
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:translate-x-2 block"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((service, index) => (
                <li
                  key={service}
                  className={`transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                  }`}
                  style={{ transitionDelay: isVisible ? `${600 + index * 100}ms` : "0ms" }}
                >
                  <a
                    href="#"
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:translate-x-2 block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              {[
                { icon: MapPin, text: "Birsa Munda Chowk,Jashpur nagar, C.G" },
                { icon: Phone, text: "+91 9329441554" },
                { icon: Mail, text: "info@jagmagparlor.com" },
              ].map((contact, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 transition-all duration-700 hover:translate-x-2 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: isVisible ? `${800 + index * 100}ms` : "0ms" }}
                >
                  <contact.icon className="h-5 w-5 text-pink-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{contact.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`border-t border-gray-800 mt-12 pt-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: isVisible ? "1000ms" : "0ms" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Jagmag Parlor. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
                <a
                  key={link}
                  href="#"
                  className={`text-gray-400 hover:text-pink-400 text-sm transition-all duration-300 hover:scale-105 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: isVisible ? `${1200 + index * 100}ms` : "0ms" }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
