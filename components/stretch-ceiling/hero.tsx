"use client"

import Image from "next/image"

export function StretchCeilingHero() {
  return (
    <section
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
      style={{
        backgroundImage: "url('/images/lighting-glossy-ceiling-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay to preserve text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
          תקרה מתוחה
        </h1>

        <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-2xl text-balance leading-relaxed">
          פתרון תקרה נקי, מהיר ומדויק עם אפשרויות גימור, תאורה ועיצוב לחללים פרטיים ועסקיים.
        </p>

        <p className="text-lg text-white/85 mb-10 max-w-2xl leading-relaxed">
          תקרה מתוחה מאפשרת לקבל מראה חלק ואחיד, התקנה מהירה יחסית, שילוב פתרונות תאורה
          מתקדמים וגמישות עיצובית גבוהה יותר לעומת פתרונות מסוימים המבוססים על עבודות רטובות
          או גבס.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-end">
          <button className="px-8 py-3 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors">
            לקבלת הצעת מחיר
          </button>
          <button className="px-8 py-3 bg-white/20 text-white font-medium hover:bg-white/30 transition-colors border border-white/30">
            לצפייה בפרויקטים
          </button>
        </div>

        {/* Proof items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
          <div className="text-center md:text-right">
            <p className="text-sm text-white/80 mb-1">אחריות ל־10 שנים</p>
            <p className="text-2xl font-bold text-white">על היריעה</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-white/80 mb-1">התקנה</p>
            <p className="text-2xl font-bold text-white">נקייה ומהירה</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-white/80 mb-1">מתאים</p>
            <p className="text-2xl font-bold text-white">לחללים פרטיים ועסקיים</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-white/80 mb-1">שירות</p>
            <p className="text-2xl font-bold text-white">בכל הארץ</p>
          </div>
        </div>
      </div>
    </section>
  )
}
