"use client"

export function WhereItFits() {
  const spaces = [
    {
      name: "סלון",
      description: "תקרה מתוחה מוסיפה דרמה וקסם, בעיקר בגימור מבריק או תאורה משלבת.",
    },
    {
      name: "אמבטיה",
      description: "פתרון אידיאלי לחללים רטובים, עמיד ללחות ומקל על ניקיון.",
    },
    {
      name: "מטבח",
      description: "מתאימה במיוחד כאשר יש צנרת או תשתיות שרוצים להסתיר, בעיקר עם תאורה משלבת.",
    },
    {
      name: "חדר שינה",
      description: "גימור מט או סאטן עם תאורה רכה יוצרים אווירה רגועה והרמונית.",
    },
    {
      name: "מסדרון",
      description: "פתרון טוב להעלאת תחושת הגובה והרוחקות, בעיקר בחללים צרים או נמוכים.",
    },
    {
      name: "משרד",
      description: "פתרון מרשים לחללי עבודה, בעיקר עם תאורה משלבת ותקרה מוארת.",
    },
    {
      name: "לובי",
      description: "תקרה מתוחה גדולה עם תאורה משולבת יוצרת רושם ראשוני חזק ומקצועי.",
    },
    {
      name: "חללים ייעודיים",
      description: "מקווות, חדרי חזוקה, חדרי רחצה מקוריים — עמיד ללחות וקל לניקוי.",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          לאילו חללים זה מתאים
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {spaces.map((space, index) => (
            <div key={index} className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-3">{space.name}</h3>
              <p className="text-sm text-muted leading-relaxed">{space.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
