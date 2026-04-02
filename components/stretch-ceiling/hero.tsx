"use client"

export function StretchCeilingHero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-secondary/60 to-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb/category */}
        <p className="text-sm text-muted mb-6 block text-right">
          פתרונות תקרה
        </p>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 text-balance text-right">
          תקרה מתוחה
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted mb-10 max-w-3xl leading-relaxed text-right">
          פתרון תקרה בעל ביצועים גבוהים המשלב יתרונות בתחומי העיצוב, התאורה, ההתקנה והתחזוקה.
          שמור, מהיר, דקיק וגמיש.
        </p>

        {/* Key attributes in a list format - more editorial */}
        <div className="bg-card border border-border rounded-lg p-8 mb-12 text-right">
          <p className="text-sm font-semibold text-accent mb-6 block">
            מאפיינים עיקריים
          </p>
          <ul className="space-y-3 text-muted">
            <li className="flex items-center justify-end gap-3">
              <span>התקנה נקייה ומהירה בהשוואה לעבודות רטובות או גבס</span>
              <span className="text-accent font-bold">•</span>
            </li>
            <li className="flex items-center justify-end gap-3">
              <span>תמיכה בשלוש סוגי גימור — מבריק, סאטן, מט</span>
              <span className="text-accent font-bold">•</span>
            </li>
            <li className="flex items-center justify-end gap-3">
              <span>שבע אפשרויות תאורה משולבות בתקרה</span>
              <span className="text-accent font-bold">•</span>
            </li>
            <li className="flex items-center justify-end gap-3">
              <span>עמידות 10 שנים בתנאים רגילים</span>
              <span className="text-accent font-bold">•</span>
            </li>
            <li className="flex items-center justify-end gap-3">
              <span>מתאימה לחללים רטובים כמו אמבטיות, מטבחים וברים</span>
              <span className="text-accent font-bold">•</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-end">
          <button className="px-8 py-3 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors">
            לקבלת הצעת מחיר
          </button>
          <button className="px-8 py-3 bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors border border-border">
            צפייה בפרויקטים
          </button>
        </div>
      </div>
    </section>
  )
}
