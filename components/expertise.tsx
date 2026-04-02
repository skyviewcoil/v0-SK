"use client"

import { useEffect, useRef, useState } from "react"

const serviceCards = [
  {
    title: "סלון ומרחבים",
    description: "מראה אחיד ויוקרתי למרחבי מגורים גדולים",
    image: "/images/service-living-room.jpg",
  },
  {
    title: "אמבטיה ומטבח",
    description: "עמידה מושלמת בלחות ונקיון פשוט",
    image: "/images/service-bathroom.jpg",
  },
  {
    title: "חדרי שינה",
    description: "אווירה רגועה עם גימור מט או סאטן",
    image: "/images/service-modern-bedroom.jpg",
  },
  {
    title: "משרדים ועסקים",
    description: "פתרונות מקצועיים למתחמים מסחריים",
    image: "/images/service-commercial.jpg",
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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
      { threshold: 0.15 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-32 md:py-44 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header - editorial asymmetric */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 md:mb-20 items-end">
          <div className="order-2 lg:order-1">
            <p className="text-muted text-lg leading-relaxed max-w-md">
              פתרונות תקרה מתוחה לכל סוג חלל, מדירות פרטיות ועד מתחמים מסחריים גדולים.
            </p>
          </div>
          <div className="order-1 lg:order-2 text-right">
            <p className="text-accent text-sm font-medium tracking-widest mb-4">סוגי חללים</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-none text-pretty">
              פתרונות<br />לכל חלל
            </h2>
          </div>
        </div>

        {/* Service cards - 2x2 grid with larger cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {serviceCards.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => { itemRefs.current[index] = el }}
              data-index={index}
              className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  hoveredIndex === index 
                    ? "bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" 
                    : "bg-gradient-to-t from-foreground/70 via-transparent to-transparent"
                }`} />
                
                {/* Content overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="text-accent text-xs font-medium tracking-widest mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-right">
                    {service.title}
                  </h3>
                  <p className={`text-white/80 text-sm leading-relaxed text-right transition-all duration-500 ${
                    hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
