"use client"

export function ComparisonToDrywall() {
  const comparisonItems = [
    {
      category: "זמן עבודה",
      stretchCeiling: "1-3 ימים בדרך כלל",
      drywall: "שבועות (גבס, טיח, ציפוי)",
    },
    {
      category: "ניקיון עבודה",
      stretchCeiling: "מינימלי, בעיקר אבק",
      drywall: "הרבה אבק וחומרי בנייה",
    },
    {
      category: "רמת גימור",
      stretchCeiling: "מושלמת מיד, ללא צורך בעבודות סיום",
      drywall: "דרוש טיח, שיוף וציפוי",
    },
    {
      category: "שילוב תאורה",
      stretchCeiling: "קל וגמיש, אפשרויות רבות",
      drywall: "מוגבל, בדרך כלל רק ספוטים",
    },
    {
      category: "תחזוקה",
      stretchCeiling: "מינימלית, עמידה להתגבשות",
      drywall: "עלול להידרדר, נזקים קלים",
    },
    {
      category: "גמישות עיצובית",
      stretchCeiling: "גבוהה מאוד, מגוון גימורים ופתרונות",
      drywall: "סטנדרטית, בעיקר צבע",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          תקרה מתוחה מול גבס
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary border-b-2 border-border">
                <th className="px-6 py-4 text-right font-bold text-foreground">
                  הקטגוריה
                </th>
                <th className="px-6 py-4 text-right font-bold text-accent">
                  תקרה מתוחה
                </th>
                <th className="px-6 py-4 text-right font-bold text-muted">
                  גבס
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonItems.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b border-border ${
                    index % 2 === 0 ? "bg-card" : "bg-background"
                  } hover:bg-secondary/30 transition-colors`}
                >
                  <td className="px-6 py-4 font-semibold text-foreground">
                    {item.category}
                  </td>
                  <td className="px-6 py-4 text-accent">{item.stretchCeiling}</td>
                  <td className="px-6 py-4 text-muted">{item.drywall}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-sm text-muted">
          *הן תקרה מתוחה והן גבס הם פתרונות תקרה תקפים. הבחירה תלויה בצורך, תקציב,
          וההשפעה הרצויה על החלל.{" "}
          <a href="#" className="text-accent font-medium hover:underline">
            לעמוד השוואה מפורט יותר
          </a>
        </p>
      </div>
    </section>
  )
}
