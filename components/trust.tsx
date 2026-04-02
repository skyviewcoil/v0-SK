"use client"

import { useEffect, useRef, useState } from "react"

export function Trust() {
  const [isRevealed, setIsRevealed] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsRevealed(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 md:py-44 bg-foreground text-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content side */}
          <div className={`text-right order-2 lg:order-1 transition-all duration-1000 ${
            isRevealed ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}>
            <p className="text-accent text-sm font-medium tracking-widest mb-4">אמינות ומקצועיות</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6">
              אנחנו כאן כדי<br />לעזור לך
            </h2>
            <p className="text-background/70 text-lg leading-relaxed mb-10 max-w-lg">
              עם ניסיון של שנים בתחום, בנינו קשרים עמוקים עם לקוחות מרוצים בכל רחבי הארץ. אנחנו מתחייבים לאיכות, מקצועיות ושירות אישי.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              לקבלת הצעת מחיר
            </a>
          </div>

          {/* Stats grid */}
          <div className={`order-1 lg:order-2 transition-all duration-1000 delay-200 ${
            isRevealed ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 md:p-10 bg-background/5 border border-background/10 text-center">
                <p className="text-5xl md:text-6xl font-bold text-accent mb-2">1000+</p>
                <p className="text-background/70 text-sm">התקנות מוצלחות</p>
              </div>
              <div className="p-8 md:p-10 bg-background/5 border border-background/10 text-center">
                <p className="text-5xl md:text-6xl font-bold text-accent mb-2">2017</p>
                <p className="text-background/70 text-sm">פעילים מאז</p>
              </div>
              <div className="p-8 md:p-10 bg-background/5 border border-background/10 text-center">
                <p className="text-5xl md:text-6xl font-bold text-accent mb-2">100%</p>
                <p className="text-background/70 text-sm">כיסוי ארצי</p>
              </div>
              <div className="p-8 md:p-10 bg-background/5 border border-background/10 text-center">
                <p className="text-5xl md:text-6xl font-bold text-accent mb-2">10</p>
                <p className="text-background/70 text-sm">שנות אחריות</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
