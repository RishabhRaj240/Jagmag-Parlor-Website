"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b transition-all duration-500 animate-slide-down ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-pink-600 animate-fade-in">Jagmag Parlor</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["home", "services", "about", "gallery", "contact"].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-pink-600 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4 animate-fade-in" style={{ animationDelay: "500ms" }}>
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-2" />
              <span>+91 9329441554</span>
            </div>
            <Button className="bg-pink-600 hover:bg-pink-700 hover:scale-105 transition-all duration-300">
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {["home", "services", "about", "gallery", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md transition-all duration-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-pink-600 hover:bg-pink-700">Book Now</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
