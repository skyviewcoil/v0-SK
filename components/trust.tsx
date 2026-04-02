export function Trust() {
  const trustPoints = [
    {
      stat: "1000+",
      label: "התקנות מוצלחות",
    },
    {
      stat: "2017",
      label: "פעילים מאז",
    },
    {
      stat: "100%",
      label: "כיסוי מדינה",
    },
    {
      stat: "10 שנים",
      label: "אחריות",
    },
  ]

  return (
    <section className="py-32 md:py-40 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            אנחנו כאן כדי לעזור לך
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            עם מעל עשר שנות ניסיון, אנחנו בנינו קשרים עמוקים עם לקוחות בכל הארץ
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {trustPoints.map((point) => (
            <div key={point.label} className="text-center p-8 rounded-lg bg-background border border-border">
              <p className="text-4xl md:text-5xl font-bold text-accent mb-3">{point.stat}</p>
              <p className="text-foreground font-medium">{point.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
