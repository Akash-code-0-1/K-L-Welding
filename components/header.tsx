"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border transition-smooth">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 flex-shrink-0 hover:opacity-80 transition-smooth transform hover:scale-105 active:scale-95"
          >
            <img src="/kl-welding-logo.jpeg" alt="K & L Welding Logo" className="h-10 w-10 object-contain rounded-full" />
            <h1 className="text-2xl font-bold text-primary hidden sm:block">K & L Welding</h1>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-smooth relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-smooth duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-smooth relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-smooth duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground hover:text-primary transition-smooth relative group"
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-smooth duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-smooth transform hover:scale-105 active:scale-95 hover:shadow-lg"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 transition-smooth hover:bg-secondary rounded-lg"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4 animate-slide-in-left">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-smooth text-left hover:translate-x-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-smooth text-left hover:translate-x-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground hover:text-primary transition-smooth text-left hover:translate-x-2"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-smooth w-full transform hover:scale-105 active:scale-95"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
