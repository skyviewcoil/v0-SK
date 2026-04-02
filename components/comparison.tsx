"use client"

import { useEffect, useRef, useState } from "react"

const comparisonPoints = [
  {
    benefit: "פחות לכלוך בתהליך",
    description: "עבודה נקייה כמעט ללא אבק, ללא פגיעה בריצוף או בקירות",
  },
  {
    benefit: "זמן עבודה קצר",
    description: "התקנה ב-1-2 ימים בלבד, לעומת שבועות של עבודות גבס",
  },
  {
    benefit: "מגוון אפשרויות",
    description: "שלושה גימורים, שבעה סוגי תאורה, הדפסים ועוד",
  },
  {
    benefit: "עמידות בלחות",
    description: "מתאים לאמבטיות ומטבחים ללא ספיגה או שינוי צורה",
  },
  {
    benefit: "מראה אחיד",
    description: "משטח חלק ומדויק ללא סדקים או תפרים נראים",
  },
  {
    benefit: "התאמה אישית",
    description: "עיצוב והתאמה בהתאם לצרכים ולעיצוב הספציפי",
  },
]

export function Comparison() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [isRevealed, setIsRevealed] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === sectionRef.current && entry.isIntersecting) {
            setIsRevealed(true)
          }
          const index = entry.target.getAttribute("data-index")
          if (index !== null && entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, Number(index)])])
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 md:py-44 bg-secondary/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header - centered for this section */}
        <div className={`max-w-3xl mx-auto text-center mb-16 md:mb-20 transition-all duration-1000 ${
          isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <p className="text-accent text-sm font-medium tracking-widest mb-4">יתרונות</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-none text-pretty mb-6">
            למה תקרה מתוחה
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            תקרה מתוחה מציעה יתרונות משמעותיים לעומת שיטות מסורתיות כמו גבס או יציקה.
          </p>
        </div>

        {/* Benefits grid - 3x2 with equal spacing */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {comparisonPoints.map((point, index) => (
            <div 
              key={point.benefit}
              ref={(el) => { itemRefs.current[index] = el }}
              data-index={index}
              className={`flex items-start gap-5 flex-row-reverse text-right transition-all duration-700 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center h-10 w-10 bg-accent text-accent-foreground">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{point.benefit}</h3>
                <p className="text-muted text-sm leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
