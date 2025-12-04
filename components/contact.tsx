"use client"

import type React from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import { useState, useEffect } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Contact K & L Welding</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Ready to bring your project to life? Reach out to us today for a consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className={`space-y-8 transition-smooth ${isLoaded ? "animate-slide-in-left" : "opacity-0"}`}>
            {/* Address */}
            <div className="flex gap-4 hover:translate-x-2 transition-smooth">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth transform hover:scale-110">
                  <MapPin size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground">Settlement Road, Apia, Samoa 0685</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 hover:translate-x-2 transition-smooth">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth transform hover:scale-110">
                  <Phone size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                <a href="tel:+68572531.42" className="text-muted-foreground hover:text-primary transition-smooth">
                  +685 72 53142
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 hover:translate-x-2 transition-smooth">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth transform hover:scale-110">
                  <Mail size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                <a
                  href="mailto:kendoking2010@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  kendoking2010@gmail.com
                </a>
              </div>
            </div>

            {/* Categories */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-smooth transform hover:scale-110">
                  Metal Fabricator
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-smooth transform hover:scale-110">
                  Building Materials
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-smooth transform hover:scale-110">
                  Custom Welding
                </span>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`space-y-6 bg-card p-8 rounded-xl border border-border transition-smooth ${
              isLoaded ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            {submitted && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 animate-scale-in">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-smooth hover:border-primary/30"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-smooth hover:border-primary/30"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-smooth hover:border-primary/30"
                placeholder="+685..."
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none transition-smooth hover:border-primary/30"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent hover:shadow-lg transition-smooth transform hover:scale-105 active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
