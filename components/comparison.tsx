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
    {
      benefit: "התאמה אישית מלאה",
      description: "עיצוב והתאמה בהתאם לנכסך ולצרכיך הספציפיים",
    },
  ]

  return (
    <section className="py-32 md:py-40 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-16">
            <p className="text-sm text-accent font-medium tracking-widest mb-3">השוואה</p>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-pretty mb-6">
              למה לבחור תקרה מתוחה
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              תקרה מתוחה מציעה יתרונות משמעותיים לעומת שיטות מסורתיות כמו גבס או עבודות יציקה.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {comparisonPoints.map((point) => (
              <div key={point.benefit} className="text-right">
                <div className="flex items-start gap-4 flex-row-reverse">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-accent-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{point.benefit}</h3>
                    <p className="text-muted text-sm leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
