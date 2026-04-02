"use client"

export function Limitations() {
  const points = [
    {
      title: "לא כל פתרון מתאים לכל חלל",
      text: "תקרה מתוחה דורשת גובה מינימלי ומבנה קיר איתן להצמדת הפרופילים. חללים מסוימים עשויים להיות בעייתיים.",
    },
    {
      title: "בחירת גימור ותאורה משפיעה",
      text: "בחירת סוג גימור ופתרונות תאורה צריכה להתאים למבנה החלל, גובהו, שימוש, וקיום תשתיות מסוגות שונות.",
    },
    {
      title: "הבדל בין פתרון פשוט למורכב",
      text: "יש הבדל משמעותי בעלות והמורכבות בין תקרה מתוחה פשוטה לבין מערכת עם תאורה משלבת ופרטים טכניים.",
    },
    {
      title: "תכנון מראש משפיע על התוצאה",
      text: "תכנון נכון של התקרה, הגימור, הפרטים והתאורה מראש משפר משמעותית את התוצאה ואת הדיוק בביצוע.",
    },
    {
      title: "יתכן צורך בפתרונות היקפיים",
      text: "בחללים מסוימים נדרש פתחים טכניים, התאמות היקפיות, או פתרונות נוספים שמעלים את עלות הפרויקט.",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            חשוב לדעת לפני שמתקינים
          </h2>
          <p className="text-lg text-muted mb-12">
            כדי לקבל תוצאה טובה ובטוחה, חשוב להבין את המגבלות והצורכים של כל חלל.
          </p>
        </div>

        <div className="space-y-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-lg border border-border"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">
                {point.title}
              </h3>
              <p className="text-muted leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
