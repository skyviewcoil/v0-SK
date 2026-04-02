"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-end overflow-hidden">
      {/* Background Image with Warm Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/skyview-home-hero-01.jpg-qplpW7das13PASLT3Vl0Xcijxc3V8H.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Warm taupe-brown overlay for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-amber-950/40 to-black/50" style={{
          mixBlendMode: 'multiply'
        }}></div>
        {/* Bottom fade for content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>
      </div>

      {/* Content - Full width editorial layout */}
      <div className="relative z-10 w-full pb-20 md:pb-28 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Main headline - RTL aligned right side */}
            <div className={`lg:col-span-7 lg:order-2 text-right transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-none text-pretty font-sans" style={{ letterSpacing: '-0.03em' }}>
                תקרות
                <br />
                <span className="text-amber-50/90">מתוחות</span>
              </h1>
            </div>

            {/* Supporting content - left side for RTL */}
            <div className={`lg:col-span-5 lg:order-1 space-y-8 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <p className="text-lg md:text-xl text-amber-50/90 leading-relaxed font-light text-right max-w-md ms-auto lg:ms-0">
                פתרונות תקרה יוקרתיים עם שלושה גימורים, שבעה סוגי תאורה ועיצוב בהתאמה אישית לכל חלל.
              </p>

              {/* CTA Buttons - RTL order */}
              <div className="flex gap-4 flex-row-reverse lg:flex-row">
                <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                  לקבלת הצעת מחיר
                </button>
                <button className="px-8 py-4 border border-white/40 text-white text-sm font-medium hover:bg-white/10 hover:border-white/60 transition-all duration-300">
                  לצפייה בפרויקטים
                </button>
              </div>
            </div>
          </div>

          {/* Proof Row - bottom of hero */}
          <div className={`mt-16 md:mt-20 pt-8 border-t border-white/20 transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="text-right md:text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">1000+</p>
                <p className="text-sm text-amber-50/70">התקנות מוצלחות</p>
              </div>
              <div className="text-right md:text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">2017</p>
                <p className="text-sm text-amber-50/70">פעילים מאז</p>
              </div>
              <div className="text-right md:text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">10</p>
                <p className="text-sm text-amber-50/70">שנות אחריות</p>
              </div>
              <div className="text-right md:text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">100%</p>
                <p className="text-sm text-amber-50/70">כיסוי ארצי</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <svg
            className="w-5 h-5 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
