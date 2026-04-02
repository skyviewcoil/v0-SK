"use client"

import { useEffect, useRef, useState } from "react"

const benefitItems = [
  {
    title: "התקנה מהירה",
    description: "ביצוע עבודה מהיר וחסכוני בזמן",
  },
  {
    title: "עבודה נקייה יחסית",
    description: "עם הפחתת בחלוק וחדירה של אבק",
  },
  {
    title: "התאמה אישית מלאה",
    description: "גימורים וצבעים בהתאמה לעיצוב החלל",
  },
  {
    title: "פתרונות תאורה מתקדמים",
    description: "שילוב תאורה LED וספוטים מהודקים",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
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
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column - Title and intro */}
          <div className="space-y-8">
            <div>
              <p className="text-sm text-accent font-medium tracking-widest mb-3">SkyView</p>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-pretty">
                פתרונות תקרה מדויקים, נקיים ומהירים יותר
              </h2>
            </div>

            <p className="text-lg text-muted leading-relaxed max-w-xl">
              תקרה מתוחה מאפשרת לקבל מראה אחיד, יוקרתי ונקי בזמן עבודה קצר, עם אפשרות לשלב תאורה, הדפסים, פרופילים מיוחדים ופתרונות לחללים פרטיים ומסחריים.
            </p>
          </div>

          {/* Right column - Benefit cards */}
          <div className="space-y-6">
            {benefitItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`p-6 rounded-lg bg-secondary/50 border border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
