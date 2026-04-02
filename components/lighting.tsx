"use client"

import { useEffect, useRef, useState } from "react"

const lightingSolutions = [
  {
    title: "פסי לד שקועים בתקרה",
    description: "פסי תאורה ליניאריים משולבים במבנה התקרה המתוחה עצמה, יוצרים קווי אור נקיים ואדריכליים.",
    image: "/images/lighting-recessed-led-lines.jpg",
  },
  {
    title: "פסי תאורה מגנטיים",
    description: "מערכת פסים מגנטית משולבת בתקרה המאפשרת התאמה מודולרית וגמישה של נקודות התאורה.",
    image: "/images/lighting-magnetic-track.jpg",
  },
  {
    title: "ספוטים שקועים בתקרה",
    description: "ספוטים קטנים ונקיים המשולבים בתקרה בצורה שטוחה ומדויקת.",
    image: "/images/lighting-recessed-spots.jpg",
  },
  {
    title: "תאורה צמודת תקרה",
    description: "גוף תאורה המורכב ישירות על משטח התקרה, לא שקוע ולא תלוי.",
    image: "/images/lighting-surface-mount.jpg",
  },
  {
    title: "תאורה תלויה",
    description: "מנורות תלויות מעוצבות התלויות מתחת לתקרה המתוחה.",
    image: "/images/lighting-pendant.jpg",
  },
  {
    title: "תקרה מוארת",
    description: "תקרה מתוחה הזוהרת באופן אחיד על כל שטחה, כשהאור מפוזר מאחורי הממברנה.",
    image: "/images/lighting-full-illuminated.jpg",
  },
  {
    title: "תקרה מוארת עם הדפס",
    description: "תקרה מוארת הכוללת הדפס ויזואלי כמו שמיים או עיצוב מותאם אישית.",
    image: "/images/lighting-printed-illuminated.jpg",
  },
]

export function Lighting() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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
      { threshold: 0.15 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  // Featured solutions (first 3) and grid solutions (rest)
  const featuredSolutions = lightingSolutions.slice(0, 3)
  const gridSolutions = lightingSolutions.slice(3)

  return (
    <section className="py-32 md:py-44 bg-foreground text-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header - RTL aligned */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-20 items-end">
          <div className="order-2 lg:order-1">
            <p className="text-background/60 text-lg leading-relaxed max-w-lg">
              משלבים פתרונות תאורה מתקדמים בתקרה המתוחה ליצירת אפקטים אדריכליים מדויקים ואווירה מושלמת לכל חלל.
            </p>
          </div>
          <div className="order-1 lg:order-2 text-right">
            <p className="text-accent text-sm font-medium tracking-widest mb-4">שבעה פתרונות תאורה</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-background leading-none text-pretty">
              תאורה<br />אדריכלית
            </h2>
          </div>
        </div>

        {/* Featured solutions - large editorial cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {featuredSolutions.map((solution, index) => (
            <div
              key={solution.title}
              ref={(el) => { itemRefs.current[index] = el }}
              data-index={index}
              className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Content overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="text-accent text-xs font-medium tracking-widest mb-3">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-right leading-tight">
                    {solution.title}
                  </h3>
                  <p className={`text-white/70 text-sm leading-relaxed text-right transition-all duration-500 ${
                    hoveredIndex === index ? "opacity-100 max-h-24" : "opacity-0 max-h-0"
                  }`}>
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grid solutions - smaller cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gridSolutions.map((solution, i) => {
            const index = i + 3
            return (
              <div
                key={solution.title}
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
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredIndex === index ? "scale-110" : "scale-100"
                    }`}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Content overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <p className="text-accent text-xs font-medium tracking-widest mb-2">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="text-sm md:text-base font-semibold text-white text-right leading-snug">
                      {solution.title}
                    </h3>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
