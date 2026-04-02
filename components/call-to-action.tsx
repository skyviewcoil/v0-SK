"use client"

export function CallToAction() {
  return (
    <section id="contact" className="py-32 md:py-40 bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8 text-pretty">
            רוצים לבדוק מה מתאים לחלל שלכם?
          </h2>

          <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto opacity-90">
            נשמח לעזור בבחירת גימור, תאורה ופתרון מתאים לפי סוג החלל והעיצוב הרצוי.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-row-reverse">
            <a
              href="mailto:info@skyview.co.il"
              className="inline-flex items-center justify-center gap-3 bg-accent-foreground text-accent px-8 py-4 text-sm font-medium rounded-lg hover:bg-accent-foreground/90 transition-colors duration-300"
            >
              לקבלת הצעת מחיר
            </a>
            <a
              href="tel:+972722334455"
              className="inline-flex items-center justify-center gap-2 border-2 border-accent-foreground px-8 py-4 text-sm font-medium rounded-lg hover:bg-accent-foreground/10 transition-colors duration-300"
            >
              יצירת קשר
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
