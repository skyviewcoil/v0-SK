"use client"

export function WhyChoose() {
  const reasons = [
    {
      number: "01",
      title: "התקנה מהירה יחסית",
      description:
        "בדרך כלל 1-3 ימי עבודה בלבד, בהשוואה לעבודות רטובות שעלולות להימשך שבועות.",
    },
    {
      number: "02",
      title: "פחות אבק ולכלוך",
      description:
        "התקנה נקייה וחסכונית בהשוואה לעבודות בנייה מסוגות אחרים.",
    },
    {
      number: "03",
      title: "מראה חלק ואחיד",
      description:
        "סיום מושלם ללא גרגרים, שגעים או פגמים ויזואליים שנוצרים מעבודות בנייה קונבנציונליות.",
    },
    {
      number: "04",
      title: "שילוב תאורה גמיש",
      description:
        "אפשרות להשלב פסי לד, ספוטים, אורות תלויים, תקרה מוארת ופתרונות מיוחדים.",
    },
    {
      number: "05",
      title: "מגוון גימורים",
      description:
        "בחירה בין מבריק, סאטן ומט — כל אחד יוצר אפקט ויזואלי ותחושה שונה.",
    },
    {
      number: "06",
      title: "פתרון גם לחללים בעייתיים",
      description:
        "מתאימה לחדרי רחצה, מסדרונות, לוביים, וחללים עם תשתיות מורכבות.",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-right">
          <p className="text-sm font-semibold text-accent mb-4">
            יתרונות
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            למה בוחרים בתקרה מתוחה
          </h2>
          <p className="text-lg text-muted mt-6 max-w-3xl">
            שישה יתרונות עיקריים השהופכים את תקרה מתוחה לפתרון דומיננטי בעיצוב פנים מודרני.
          </p>
        </div>

        {/* Numbered Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="pb-12 border-b border-border last:border-b-0"
            >
              <div className="flex items-start gap-6">
                {/* Number */}
                <div className="flex-shrink-0">
                  <span className="text-5xl font-bold text-accent opacity-30">
                    {reason.number}
                  </span>
                </div>
                {/* Content */}
                <div className="text-right flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
