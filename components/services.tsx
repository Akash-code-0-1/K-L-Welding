"use client"

import { Wrench, Hammer, Building2, Zap } from "lucide-react"
import { useEffect, useState } from "react"

const services = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Metal Fabrication",
    description:
      "Custom metal fabrication for residential, commercial, and industrial projects with precision and excellence.",
  },
  {
    icon: <Hammer className="w-8 h-8" />,
    title: "Welding Services",
    description:
      "Professional welding solutions including MIG, TIG, and stick welding for all structural applications.",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Building Materials",
    description: "High-quality building materials and structural steel components for construction projects.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Custom Design",
    description: "Bespoke metal designs tailored to your specifications and vision with expert consultation.",
  },
]

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    // Stagger reveal animation on mount
    services.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleCards((prev) => [...prev, index])
      }, index * 150)
      return () => clearTimeout(timer)
    })
  }, [])

  return (
    <section id="services" className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Core Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Comprehensive welding and metal fabrication solutions designed to meet your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-smooth transform hover:scale-105 hover:-translate-y-1 ${
                visibleCards.includes(index) ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg text-primary hover:bg-primary hover:text-primary-foreground transition-smooth transform hover:scale-110 hover:-rotate-12">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
