"use client"

import { useEffect, useRef, useState } from "react"

const finishes = [
  {
    name: "מבריק",
    englishName: "Glossy",
    description: "משטח זוהר המשקף את החלל ומעניק תחושה של עומק וחלל גדול יותר",
    uses: "סלונים מודרניים, חללים עם תאורה מלאכותית",
    mood: "מראה יוקרתי ודרמטי",
    image: "/images/finish-glossy-new.jpg",
  },
  {
    name: "סאטן",
    englishName: "Satin",
    description: "משטח חלק עם זוהר עדין ומאוזן, לא מחזיר אור ישיר",
    uses: "חדרי מגורים, משרדים, מרחבים ציבוריים",
    mood: "איזון אלגנטי בין מבריק למט",
    image: "/images/finish-satin-new.jpg",
  },
  {
    name: "מט",
    englishName: "Matte",
    description: "משטח רך ללא החזרת אור, מראה טבעי ומרגיע",
    uses: "חדרי שינה, חללים אינטימיים ונעימים",
    mood: "מראה רגוע ומודרני",
    image: "/images/finish-matte-new.jpg",
  },
]

export function Finishes() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isRevealed, setIsRevealed] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsRevealed(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 md:py-44 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 md:mb-20 items-end">
          <div className="order-2 lg:order-1">
            <p className="text-muted text-lg leading-relaxed max-w-md">
              שלושה גימורים שונים המשנים את אופי החלל ואת תחושת האור והמרחב.
            </p>
          </div>
          <div className="order-1 lg:order-2 text-right">
            <p className="text-accent text-sm font-medium tracking-widest mb-4">שלושה גימורים</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-none text-pretty">
              סוגי<br />גימור
            </h2>
          </div>
        </div>

        {/* Large editorial layout - selected finish showcase */}
        <div className={`grid lg:grid-cols-12 gap-6 lg:gap-8 transition-all duration-1000 ${
          isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          {/* Main large image */}
          <div className="lg:col-span-8 lg:order-2">
            <div className="relative aspect-[16/10] overflow-hidden">
              {finishes.map((finish, index) => (
                <img
                  key={finish.name}
                  src={finish.image}
                  alt={finish.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    activeIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              {/* Active finish label */}
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-foreground/90 backdrop-blur-sm px-6 py-4">
                <p className="text-background text-2xl md:text-3xl font-bold">
                  {finishes[activeIndex].name}
                </p>
                <p className="text-background/60 text-sm mt-1">
                  {finishes[activeIndex].englishName}
                </p>
              </div>
            </div>
          </div>

          {/* Finish selector cards */}
          <div className="lg:col-span-4 lg:order-1 flex lg:flex-col gap-4">
            {finishes.map((finish, index) => (
              <button
                key={finish.name}
                onClick={() => setActiveIndex(index)}
                className={`flex-1 lg:flex-none text-right p-5 md:p-6 border transition-all duration-300 ${
                  activeIndex === index 
                    ? "border-accent bg-background shadow-lg" 
                    : "border-border bg-transparent hover:border-muted hover:bg-background/50"
                }`}
              >
                <div className="flex items-center gap-4 flex-row-reverse mb-3">
                  <span className={`text-xs font-mono tracking-wider ${
                    activeIndex === index ? "text-accent" : "text-muted"
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className={`text-lg font-semibold transition-colors ${
                    activeIndex === index ? "text-foreground" : "text-muted"
                  }`}>
                    {finish.name}
                  </h3>
                </div>
                <p className={`text-sm leading-relaxed hidden md:block transition-colors ${
                  activeIndex === index ? "text-muted" : "text-muted/60"
                }`}>
                  {finish.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Active finish details */}
        <div className={`mt-8 grid md:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${
          isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="p-6 bg-background border border-border text-right">
            <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">שימוש מומלץ</p>
            <p className="text-foreground">{finishes[activeIndex].uses}</p>
          </div>
          <div className="p-6 bg-background border border-border text-right">
            <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">אפקט</p>
            <p className="text-foreground">{finishes[activeIndex].mood}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
