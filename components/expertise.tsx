"use client"

import { useEffect, useRef, useState } from "react"
import { Home, Droplets, Lightbulb, Image, Building2, Music } from "lucide-react"

const serviceCards = [
  {
    title: "תקרה מתוחה לסלון",
    description: "מראה אחיד ויוקרתי למרחבים גדולים",
    icon: Home,
  },
  {
    title: "תקרה מתוחה לאמבטיה",
    description: "עמידה בלחות ונקיוני דיוק",
    icon: Droplets,
  },
  {
    title: "תקרה מתוחה מוארת",
    description: "שילוב תאורה LED משולבת בתקרה",
    icon: Lightbulb,
  },
  {
    title: "תקרה מתוחה עם הדפס",
    description: "עיצוב מודפס בהתאמה אישית",
    icon: Image,
  },
  {
    title: "תקרה מתוחה לעסקים",
    description: "פתרונות למשרדים ומתחמים מסחריים",
    icon: Building2,
  },
  {
    title: "תקרה מתוחה אקוסטית",
    description: "בידוד קול וספיגת רעשים",
    icon: Music,
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
    <section id="services" ref={sectionRef} className="py-32 md:py-40 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-accent font-medium tracking-widest mb-3">קטגוריות ישירוות</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-pretty">
            פתרונות לכל סוג חלל
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`group p-8 rounded-lg bg-background border border-border hover:border-accent transition-all duration-500 cursor-pointer ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
