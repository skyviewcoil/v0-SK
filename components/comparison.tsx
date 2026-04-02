export function Comparison() {
  const comparisonPoints = [
    {
      benefit: "פחות לכלוך בתהליך",
      description: "העבודה נעשית בחדר ללא פרשנות של קירות או רצפות",
    },
    {
      benefit: "זמן עבודה קצר יותר",
      description: "התקנה ב-1-2 ימים בלבד, לעומת שבועות של עבודות גבס",
    },
    {
      benefit: "אפשרויות תאורה וגימור מגוונות",
      description: "גימורים שונים, צבעים, תאורה LED, הדפסים ועוד",
    },
    {
      benefit: "פתרון טוב לחללים רטובים",
      description: "עמידה בלחות ללא ספיגה או שינוי צורה",
    },
    {
      benefit: "מראה אחיד ומדויק",
      description: "משטח חלק ואחיד ללא סדקים או חוסרים",
    },
  ]

  return (
    <section className="py-32 md:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16 text-right">
          <p className="text-sm text-accent font-medium tracking-widest mb-3">השוואה</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-pretty">
            למה לבחור תקרה מתוחה במקום גבס
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {comparisonPoints.map((point, index) => (
            <div key={point.benefit} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{point.benefit}</h3>
                <p className="text-muted leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
