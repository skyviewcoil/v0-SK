"use client"

import { useEffect, useRef, useState } from "react"

const benefitItems = [
  {
    number: "01",
    title: "התקנה מהירה",
    description: "ביצוע עבודה ב-1-2 ימים בלבד, לעומת שבועות של עבודות גבס",
  },
  {
    number: "02",
    title: "עבודה נקייה",
    description: "כמעט ללא אבק או לכלוך, ללא פגיעה בריצוף או בקירות",
  },
  {
    number: "03",
    title: "התאמה אישית מלאה",
    description: "גימורים, צבעים ותאורה בהתאמה לעיצוב החלל הספציפי",
  },
  {
    number: "04",
    title: "פתרונות תאורה מתקדמים",
    description: "שבעה סוגי תאורה שונים לשילוב מדויק בתקרה המתוחה",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [imageRevealed, setImageRevealed] = useState(false)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute("data-index")
          if (index !== null && entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, Number(index)])])
          }
          if (entry.target === imageRef.current && entry.isIntersecting) {
            setImageRevealed(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })
    if (imageRef.current) observer.observe(imageRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-44 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial header with asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-20 md:mb-28">
          <div className="lg:col-span-5 lg:col-start-8 text-right">
            <p className="text-accent text-sm font-medium tracking-widest mb-4">אודות התהליך</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-none text-pretty">
              פתרונות<br />תקרה מדויקים
            </h2>
          </div>
        </div>

        {/* Main content grid - image + benefits */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Large editorial image - takes more space */}
          <div 
            ref={imageRef}
            className="lg:col-span-7 lg:order-2"
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src="/images/philosophy-install.jpg"
                alt="התקנת תקרה מתוחה"
                className={`w-full h-full object-cover transition-transform duration-1000 ${
                  imageRevealed ? "scale-100" : "scale-110"
                }`}
              />
              {/* Reveal overlay */}
              <div 
                className="absolute inset-0 bg-foreground origin-right"
                style={{
                  transform: imageRevealed ? "scaleX(0)" : "scaleX(1)",
                  transition: "transform 1.2s cubic-bezier(0.76, 0, 0.24, 1)",
                }}
              />
            </div>
            {/* Caption */}
            <p className="text-muted text-sm mt-4 text-right">
              תהליך התקנה מקצועי עם פרופילי אלומיניום מדויקים
            </p>
          </div>

          {/* Benefits list - compact on the side */}
          <div className="lg:col-span-5 lg:order-1 space-y-6">
            <p className="text-lg text-muted leading-relaxed text-right mb-8">
              תקרה מתוחה מאפשרת לקבל מראה אחיד, יוקרתי ונקי בזמן עבודה קצר, עם אפשרות לשלב תאורה, הדפסים, פרופילים מיוחדים ופתרונות לכל סוג חלל.
            </p>

            <div className="space-y-4">
              {benefitItems.map((item, index) => (
                <div
                  key={item.title}
                  ref={(el) => { itemRefs.current[index] = el }}
                  data-index={index}
                  className={`flex items-start gap-5 flex-row-reverse p-5 border-r-2 border-transparent hover:border-accent hover:bg-card transition-all duration-500 ${
                    visibleItems.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="text-accent/40 text-xs font-mono tracking-wider mt-1">
                    {item.number}
                  </span>
                  <div className="flex-1 text-right">
                    <h3 className="text-base font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
