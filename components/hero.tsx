export function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/skyview-home-hero-01.jpg-qplpW7das13PASLT3Vl0Xcijxc3V8H.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        <div className="space-y-6">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight text-pretty">
            תקרות מתוחות
            <br />
            מעוצבות לבית ולעסק
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl ms-auto leading-relaxed">
            פתרונות תקרה יוקרתיים עם גימורים מבריקים, מט, סאטן, תאורה משולבת ועיצוב בהתאמה אישית.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-row-reverse pt-4">
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors">
              לקבלת הצעת מחיר
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
              לצפייה בפרויקטים
            </button>
          </div>

          {/* Proof Row */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/20">
            <div className="text-right">
              <p className="text-sm text-gray-300">אחריות ל-10 שנים</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-300">שירות בכל הארץ</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-300">מעל 1000 התקנות</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-300">משנת 2017</p>
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
