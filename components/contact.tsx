"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import { useState, useEffect } from "react"

export default function Contact() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)

    await fetch("https://formsubmit.co/ken@kandlwelding.com", {
      method: "POST",
      body: data,
    })

    form.reset()
    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Contact K & L Welding
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Ready to bring your project to life? Reach out to us today for a consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Info Section */}
          <div className={`space-y-8 transition-smooth ${isLoaded ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="flex gap-4">
              <MapPin size={24} />
              <p>Settlement Road, Apia, Samoa 0685</p>
            </div>

            <div className="flex gap-4">
              <Phone size={24} />
              <a href="tel:+6857253142">+685 72 53142</a>
            </div>

            <div className="flex gap-4">
              <Mail size={24} />
              <a href="mailto:ken@kandlwelding.com">ken@kandlwelding.com</a>
            </div>

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

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-6 bg-card p-8 rounded-xl border border-border transition-smooth ${
              isLoaded ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            {submitted && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 animate-scale-in">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-smooth hover:border-primary/30"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-smooth hover:border-primary/30"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-smooth hover:border-primary/30"
                placeholder="+685..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none transition-smooth hover:border-primary/30"
                placeholder="Tell us about your project..."
              />
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