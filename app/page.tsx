"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"
import Footer from "@/components/footer"


export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <div id="home" className="scroll-mt-16">
        <Header />
        <Hero />
      </div>
      <div id="services" className="scroll-mt-16">
        <Services />
      </div>
      <div id="portfolio" className="scroll-mt-16">
        <Portfolio />
      </div>
      <div id="contact" className="scroll-mt-16">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
