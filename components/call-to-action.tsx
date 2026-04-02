"use client"

import { useEffect, useRef, useState } from "react"

export function CallToAction() {
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
    <section ref={sectionRef} id="contact" className="py-32 md:py-44 bg-accent text-accent-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className={`lg:col-span-7 text-right transition-all duration-1000 ${
            isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 text-pretty">
              רוצים לבדוק מה מתאים לחלל שלכם?
            </h2>

            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl opacity-90">
              נשמח לעזור בבחירת גימור, תאורה ופתרון מתאים לפי סוג החלל והעיצוב הרצוי.
            </p>
          </div>

          {/* CTA buttons */}
          <div className={`lg:col-span-5 transition-all duration-1000 delay-200 ${
            isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@skyview.co.il"
                className="flex items-center justify-center gap-3 bg-accent-foreground text-accent px-8 py-5 text-base font-medium hover:bg-accent-foreground/90 transition-colors"
              >
                לקבלת הצעת מחיר
              </a>
              <a
                href="tel:+972722334455"
                className="flex items-center justify-center gap-3 border-2 border-accent-foreground px-8 py-5 text-base font-medium hover:bg-accent-foreground/10 transition-colors"
              >
                072-233-4455
              </a>
            </div>

            {/* Contact info */}
            <div className="mt-8 pt-8 border-t border-accent-foreground/20 text-right">
              <p className="text-sm opacity-70 mb-2">או שלחו לנו הודעה:</p>
              <a href="mailto:info@skyview.co.il" className="text-lg font-medium hover:opacity-80 transition-opacity">
                info@skyview.co.il
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
