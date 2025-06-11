"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const galleryItems = [
  { id: 1, category: "Hair", image: "/2.jpg", title: "Bridal Hair Styling" },
  {
    id: 2,
    category: "Makeup",
    image: "/3.jpg",
    title: "Glamour Makeup",
  },
  {
    id: 3,
    category: "Facial",
    image: "/4.jpg",
    title: "Glowing Skin Treatment",
  },
  {
    id: 4,
    category: "Hair",
    image: "/5.jpg",
    title: "Modern Hair Cut",
  },
  {
    id: 5,
    category: "Makeup",
    image: "/6.jpg",
    title: "Party Makeup",
  },
  {
    id: 6,
    category: "Nails",
    image: "/7.jpg",
    title: "Nail Art Design",
  },
  {
    id: 7,
    category: "Facial",
    image: "/8.jpg",
    title: "Anti-Aging Treatment",
  },
  {
    id: 8,
    category: "Hair",
    image: "/9.jpg",
    title: "Hair Color & Style",
  },
  {
    id: 9,
    category: "Makeup",
    image: "/10.jpg",
    title: "Bridal Makeup",
  },
];

const categories = ["All", "Hair", "Makeup", "Facial", "Nails"];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Work Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Take a look at our beautiful transformations and see the quality of
            work that sets us apart.
          </p>

          <div
            className={`flex flex-wrap justify-center gap-2 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
          >
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`transition-all duration-300 hover:scale-105 ${
                  activeCategory === category
                    ? "bg-pink-600 hover:bg-pink-700"
                    : ""
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{
                  transitionDelay: isVisible ? `${400 + index * 100}ms` : "0ms",
                }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className={`group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-700 hover:-translate-y-3 cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.category}</p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <span className="text-white text-xs">✨</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
