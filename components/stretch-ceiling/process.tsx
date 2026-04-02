"use client"

export function Process() {
  const steps = [
    {
      number: "01",
      title: "שיחה ראשונית והבנת הצורך",
      description:
        "נחזיק שיחה בטלפון או פנים אל פנים כדי להבין את הצורך שלך, התקציב, האפקט הרצוי, והאתגרים של החלל.",
    },
    {
      number: "02",
      title: "בדיקת חלל, מידות ותכנון",
      description:
        "אנחנו נבדוק את החלל, נמדוד, נבדוק את התשתיות (צנרת, כבלים), וננתח את האפשרויות.",
    },
    {
      number: "03",
      title: "בחירת גימור ופתרונות תאורה",
      description:
        "ביחד נחליט על סוג הגימור (מבריק, סאטן, מט) ועל פתרון התאורה המתאים ביותר לחלל.",
    },
    {
      number: "04",
      title: "ייצור והתקנה",
      description:
        "היריעה תוייצר לפי המידות המדויקות, ואנחנו נתקין אותה ביוקרה ובדיוק גבוה.",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
          איך מתבצע התהליך
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="p-8 bg-card rounded-lg border border-border">
              <div className="mb-4">
                <span className="text-5xl font-bold text-accent">{step.number}</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
