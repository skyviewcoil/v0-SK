"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const serviceCards = [
  {
    title: "תקרה מתוחה לסלון",
    description: "מראה אחיד ויוקרתי למרחבים גדולים",
    image: "/images/service-living-room.jpg",
  },
  {
    title: "תקרה מתוחה לאמבטיה",
    description: "עמידה בלחות ונקיוני דיוק",
    image: "/images/service-bathroom.jpg",
  },
  {
    title: "תקרה מתוחה מוארת",
    description: "שילוב תאורה LED משולבת בתקרה",
    image: "/images/service-lighting.jpg",
  },
  {
    title: "תקרה מתוחה עם הדפס",
    description: "עיצוב מודפס בהתאמה אישית",
    image: "/images/service-printed.jpg",
  },
  {
    title: "תקרה מתוחה לעסקים",
    description: "פתרונות למשרדים ומתחמים מסחריים",
    image: "/images/service-commercial.jpg",
  },
  {
    title: "תקרה מתוחה אקוסטית",
    description: "בידוד קול וספיגת רעשים",
    image: "/images/service-acoustic.jpg",
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16 text-right">
          <p className="text-sm text-accent font-medium tracking-widest mb-3">קטגוריות שירותים</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-pretty">
            פתרונות לכל סוג חלל
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service, index) => {
            return (
              <div
                key={service.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`group overflow-hidden rounded-lg border border-border hover:border-accent transition-all duration-500 cursor-pointer ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-secondary">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 bg-card">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
