"use client"

import { useState, useEffect } from "react"
import { Play, X } from "lucide-react"

const portfolioItems = [
  {
    type: "image",
    title: "Commercial Steel Structures",
    src: "/commercial-steel-welded-structure.jpg",
  },
  {
    type: "image",
    title: "Custom Decorative Gates",
    src: "/ornate-decorative-metal-gates.jpg",
  },
  {
    type: "image",
    title: "Industrial Fabrication",
    src: "/heavy-industrial-metal-fabrication.jpg",
  },
  {
    type: "video",
    title: "Welding Process Showcase",
    thumbnail: "/welding-process-sparks.jpg",
  },
  {
    type: "image",
    title: "Structural Steel Assembly",
    src: "/structural-steel-framework.jpg",
  },
  {
    type: "video",
    title: "Precision Metal Work",
    thumbnail: "/precision-metal-welding.jpg",
  },
  {
    type: "image",
    title: "Staircase Handrails",
    src: "/welded-metal-staircase-handrails.jpg",
  },
  {
    type: "image",
    title: "Storage Tank Fabrication",
    src: "/metal-storage-tank-welded.jpg",
  },
  {
    type: "video",
    title: "Cutting & Fabrication Demo",
    thumbnail: "/metal-cutting-fabrication.jpg",
  },
  {
    type: "image",
    title: "Building Support Beams",
    src: "/steel-building-support-beams.jpg",
  },
  {
    type: "image",
    title: "Welded Pipe Systems",
    src: "/welded-industrial-pipes.jpg",
  },
  {
    type: "video",
    title: "On-Site Installation",
    thumbnail: "/metal-installation-site.jpg",
  },
  {
    type: "image",
    title: "Custom Metal Art",
    src: "/custom-welded-metal-art.jpg",
  },
  {
    type: "image",
    title: "Bridge Framework",
    src: "/steel-bridge-framework-welded.jpg",
  },
  {
    type: "video",
    title: "Quality Inspection Process",
    thumbnail: "/metal-welding-inspection.jpg",
  },
  {
    type: "image",
    title: "Industrial Platforms",
    src: "/placeholder.svg?height=500&width=500",
  },
]

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    portfolioItems.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleItems((prev) => [...prev, index])
      }, index * 50)
      return () => clearTimeout(timer)
    })
  }, [])

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Impressive Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Browse through our extensive collection of completed projects showcasing our expertise and craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {portfolioItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedItem(index)}
              className={`group relative aspect-square rounded-lg overflow-hidden bg-muted hover:shadow-xl transition-smooth transform hover:scale-105 ${
                visibleItems.includes(index) ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={item.type === "image" ? item.src : item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay with title and play button */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-between p-4">
                {item.type === "video" && (
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-smooth">
                    <Play size={24} className="text-primary-foreground ml-0.5" fill="currentColor" />
                  </div>
                )}
                <p className="text-white font-semibold text-sm text-left w-full">{item.title}</p>
              </div>

              {/* Video indicator badge */}
              {item.type === "video" && (
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded animate-glow">
                  VIDEO
                </div>
              )}
            </button>
          ))}
        </div>

        {selectedItem !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-black rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <h3 className="text-white font-semibold">{portfolioItems[selectedItem].title}</h3>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-white hover:bg-white/10 p-2 rounded-lg transition-smooth hover:scale-110"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Media container */}
              <div className="flex-1 overflow-auto flex items-center justify-center p-4">
                {portfolioItems[selectedItem].type === "image" ? (
                  <img
                    src={portfolioItems[selectedItem].src || "/placeholder.svg"}
                    alt={portfolioItems[selectedItem].title}
                    className="max-h-full max-w-full object-contain rounded animate-fade-in"
                  />
                ) : (
                  <div className="aspect-video w-full bg-black rounded flex items-center justify-center animate-fade-in">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-smooth">
                        <Play size={40} className="text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                      <p className="text-white text-lg font-semibold">{portfolioItems[selectedItem].title}</p>
                      <p className="text-white/60 mt-2">Video content preview</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center justify-between p-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedItem((prev) => (prev! - 1 + portfolioItems.length) % portfolioItems.length)}
                  className="text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-smooth hover:scale-110 active:scale-95"
                >
                  ← Previous
                </button>
                <span className="text-white/60 text-sm">
                  {selectedItem + 1} / {portfolioItems.length}
                </span>
                <button
                  onClick={() => setSelectedItem((prev) => (prev! + 1) % portfolioItems.length)}
                  className="text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-smooth hover:scale-110 active:scale-95"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-border">
          <div className="text-center hover:translate-y-2 transition-smooth">
            <p className="text-3xl font-bold text-primary mb-2">500+</p>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div className="text-center hover:translate-y-2 transition-smooth">
            <p className="text-3xl font-bold text-primary mb-2">98%</p>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
          <div className="text-center hover:translate-y-2 transition-smooth">
            <p className="text-3xl font-bold text-primary mb-2">15+</p>
            <p className="text-muted-foreground">Years in Industry</p>
          </div>
        </div>
      </div>
    </section>
  )
}
