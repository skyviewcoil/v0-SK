"use client"

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        <h2 className="text-4xl md:text-5xl font-bold text-accent-foreground mb-6">
          רוצים לבדוק איזה פתרון מתאים לחלל שלכם?
        </h2>

        <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl leading-relaxed">
          אפשר להתחיל מהצעת מחיר, מפרויקט דומה, או משיחה קצרה להבנת האפשרויות המתאימות
          לחלל, לגימור ולתאורה.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-end">
          <button className="px-8 py-3 bg-accent-foreground text-accent font-medium hover:bg-accent-foreground/90 transition-colors">
            לקבלת הצעת מחיר
          </button>
          <button className="px-8 py-3 bg-accent-foreground/20 text-accent-foreground font-medium hover:bg-accent-foreground/30 transition-colors border border-accent-foreground/50">
            מעבור למחשבון
          </button>
        </div>
      </div>
    </section>
  )
}
