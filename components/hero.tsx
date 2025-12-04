"use client"

import { useState, useEffect } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      id="home"
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden bg-gradient-to-b from-secondary/20 to-background"
    >
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p
                className={`text-primary font-semibold text-sm uppercase tracking-wider transition-smooth ${
                  isLoaded ? "animate-fade-in-up" : "opacity-0"
                }`}
              >
                Professional Metal Solutions
              </p>
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight transition-smooth ${
                  isLoaded ? "animate-fade-in-up delay-1" : "opacity-0"
                }`}
              >
                Expert Welding & Metal Fabrication
              </h1>
              <p
                className={`text-lg text-muted-foreground max-w-xl leading-relaxed transition-smooth ${
                  isLoaded ? "animate-fade-in-up delay-2" : "opacity-0"
                }`}
              >
                K & L Welding delivers exceptional craftsmanship and innovative solutions for all your metal fabrication
                needs. Trusted by businesses across Samoa for quality and precision.
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 pt-4 transition-smooth ${
                isLoaded ? "animate-fade-in-up delay-3" : "opacity-0"
              }`}
            >
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent hover:shadow-lg transition-smooth transform hover:scale-105 active:scale-95"
              >
                Get in Touch
              </button>
              <button
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-smooth hover:shadow-lg transform hover:scale-105 active:scale-95"
              >
                View Our Work
              </button>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-8 pt-8 border-t border-border transition-smooth ${
                isLoaded ? "animate-fade-in-up delay-4" : "opacity-0"
              }`}
            >
              <div className="hover:translate-y-1 transition-smooth">
                <p className="text-2xl font-bold text-primary">281+</p>
                <p className="text-sm text-muted-foreground">Satisfied Clients</p>
              </div>
              <div className="hover:translate-y-1 transition-smooth">
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Projects Done</p>
              </div>
              <div className="hover:translate-y-1 transition-smooth">
                <p className="text-2xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div
              className={`aspect-square rounded-2xl overflow-hidden bg-muted shadow-lg transition-smooth ${
                isLoaded ? "animate-slide-in-right" : "opacity-0"
              }`}
            >
              <img
                src="/professional-welder-working-with-metal-sparks.jpg"
                alt="Professional welding work"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
