"use client"

export function WhyChoose() {
  const reasons = [
    {
      title: "התקנה מהירה יחסית",
      description:
        "בדרך כלל 1-3 ימי עבודה בלבד, בהשוואה לעבודות רטובות שעלולות להימשך שבועות.",
    },
    {
      title: "פחות אבק ולכלוך",
      description:
        "התקנה נקייה וחסכונית בהשוואה לעבודות בנייה מסוגות אחרים.",
    },
    {
      title: "מראה חלק ואחיד",
      description:
        "סיום מושלם ללא גרגרים, שגעים או פגמים ויזואליים שנוצרים מעבודות בנייה קונבנציונליות.",
    },
    {
      title: "שילוב תאורה גמיש",
      description:
        "אפשרות להשלב פסי לד, ספוטים, אורות תלויים, תקרה מוארת ופתרונות מיוחדים.",
    },
    {
      title: "מגוון גימורים",
      description:
        "בחירה בין מבריק, סאטן ומט — כל אחד יוצר אפקט וירואלי ותחושה שונה.",
    },
    {
      title: "פתרון גם לחללים בעייתיים",
      description:
        "מתאימה לחדרי רחצה, מסדרונות, לוביים, וחללים עם תשתיות מורכבות.",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            למה בוחרים בתקרה מתוחה
          </h2>
        </div>

        {/* Staggered grid layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`p-8 bg-card rounded-lg border border-border transition-all hover:shadow-md ${
                index % 2 === 1 ? "md:translate-y-8" : ""
              }`}
            >
              <h3 className="text-xl font-bold text-foreground mb-4">
                {reason.title}
              </h3>
              <p className="text-muted leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
