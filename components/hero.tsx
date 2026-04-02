export function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-amber-950/35 to-black/40" style={{
          mixBlendMode: 'multiply'
        }}></div>
        {/* Additional warmth layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        <div className="space-y-8">
          {/* Main Heading - Premium scale */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight text-pretty font-sans" style={{ letterSpacing: '-0.02em' }}>
            תקרות מתוחות
            <br />
            <span className="text-amber-50">מעוצבות לבית</span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-lg md:text-xl text-amber-50 max-w-2xl ms-auto leading-relaxed font-light">
            פתרונות תקרה יוקרתיים עם גימורים בחירה, תאורה משולבת ועיצוב בהתאמה אישית לכל חלל.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-row-reverse pt-6">
            <button className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              לקבלת הצעת מחיר
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors duration-300">
              לצפייה בפרויקטים
            </button>
          </div>

          {/* Proof Row */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-white/30">
            <div className="text-right">
              <p className="text-sm text-amber-50/80">אחריות ל-10 שנים</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-amber-50/80">שירות בכל הארץ</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-amber-50/80">מעל 1000 התקנות</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-amber-50/80">משנת 2017</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-white text-xs">גלול למטה</p>
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
