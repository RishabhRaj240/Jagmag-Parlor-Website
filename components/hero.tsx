import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <div
                className="flex items-center space-x-2 text-pink-600 animate-fade-in"
                style={{ animationDelay: "200ms" }}
              >
                <Sparkles className="h-5 w-5 animate-pulse" />
                <span className="text-sm font-medium">
                  Premium Beauty Services
                </span>
              </div>
              <h1
                className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up"
                style={{ animationDelay: "400ms" }}
              >
                Transform Your
                <span className="text-pink-600 block gradient-text animate-gradient">
                  Beauty Journey
                </span>
              </h1>
              <p
                className="text-lg text-gray-600 max-w-lg animate-fade-in-up"
                style={{ animationDelay: "600ms" }}
              >
                Experience luxury beauty treatments at Jagmag Parlor. Our expert
                stylists and beauticians are dedicated to making you look and
                feel your absolute best.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: "800ms" }}
            >
              <Button
                size="lg"
                className="bg-pink-600 hover:bg-pink-700 hover:scale-105 transition-all duration-300 btn-hover-effect"
              >
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:scale-105 transition-all duration-300"
              >
                View Services
              </Button>
            </div>

            <div
              className="flex items-center space-x-8 animate-fade-in-up"
              style={{ animationDelay: "1000ms" }}
            >
              <div className="text-center hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-gray-900 animate-count-up">
                  500+
                </div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-gray-900 animate-count-up">
                  5+
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center hover:scale-110 transition-transform duration-300">
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-bounce"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600">5.0 Rating</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div
              className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-pink-200 to-purple-200 animate-scale-in"
              style={{ animationDelay: "600ms" }}
            >
              <img
                src="/1.jpg"
                alt="Jagmag Parlor Interior"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg animate-float animate-fade-in"
              style={{ animationDelay: "1200ms" }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-pink-600 animate-pulse" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Premium Care
                  </div>
                  <div className="text-sm text-gray-600">
                    Expert Beauticians
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
