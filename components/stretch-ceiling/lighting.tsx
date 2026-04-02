"use client"

import Image from "next/image"

export function LightingIntegration() {
  const lightingTypes = [
    {
      name: "פסי לד שקועים בתקרה",
      image: "/images/stretch-led-recessed-lines.jpg",
      description:
        "קווים ישרים של אור לד משולבים ישירות בתוך המשטח הממתיח. הקווים הגיאומטריים יוצרים דוגמה חזותית מודרנית וברורה. התאורה שקועה בתוך הממברנה ויוצרת אפקט מינימליסטי וחלק.",
      keyPoints: [
        "דוגמה גיאומטרית ברורה",
        "תאורה אמביאנטית עדינה",
        "משטח חלק בלי בולטות",
      ],
    },
    {
      name: "מסילה מגנטית שקועה בתקרה",
      image: "/images/stretch-magnetic-recessed-track.jpg",
      description:
        "מערכת מסילה מגנטית משולבת בתוך היריעה, המאפשרת הנחת גופי תאורה מודולריים. המסילה נראית כמערכת משולבת אך בולטת באופן ברור ככלי מקצועי. גמישות מלאה: הנחת אורות ניתנים להעברה, שינוי כיווני אור, והתאמה קבועה.",
      keyPoints: [
        "מודולריות מלאה",
        "אורות ניתנים להעברה",
        "שליטה דקיקה בכיווני האור",
      ],
    },
    {
      name: "ספוטים שקועים בתקרה",
      image: "/images/stretch-recessed-spotlights.jpg",
      description:
        "אורות ספוט קטנים וחדים השקועים ישירות בתקרה. כל אור יושב בדיוק בפני המשטח ללא בליטה. מושלם לתאורה ממוקדת של אזורים ספציפיים או יצירות אומנות.",
      keyPoints: [
        "תאורה ממוקדת ודקיקה",
        "אינטגרציה מלאה",
        "אפקט מינימליסטי",
      ],
    },
    {
      name: "תאורה צמודת תקרה",
      image: "/images/stretch-surface-mounted.jpg",
      description:
        "גופי תאורה המחוברים ישירות לפני המשטח הממתיח. הגופים יושבים על הממברנה בעיצוב דקיק. הם מהווים חלק אינטגרלי מהתקרה כיצור עיצובי ופונקציונלי בו-זמנית.",
      keyPoints: [
        "עיצוב ופונקציונליות",
        "ממשק ויזואלי דקיק",
        "חלק מעיצוב התקרה",
      ],
    },
    {
      name: "תאורה תלויה",
      image: "/images/stretch-pendant-light.jpg",
      description:
        "גופי תאורה תלויים היורדים מתחת לתקרה. הם יוצרים נקודות עניין תאורתיות ברורות ויכולים לשמש כאלמנט עיצובי בולט. משלבים פונקציונליות עם הצהרה דיזיין.",
      keyPoints: [
        "נקודות עניין בולטות",
        "הצהרה עיצובית",
        "תאורה ופונקציה בו-זמנית",
      ],
    },
    {
      name: "תקרה מוארת (fully illuminated)",
      image: "/images/stretch-backlit-ceiling.jpg",
      description:
        "היריעה עצמה מוארת מבפנים בשכבה של אורות מוגנים. הממברנה כולה נראית כמו מקור אור אחיד. אפקט זה יוצר אור אמביאנטי רך וכולל מכל החלל, ללא כל צל.",
      keyPoints: [
        "אור אמביאנטי רך",
        "אפקט פוטוריסטי",
        "תאורה אחידה לחלוטין",
      ],
    },
    {
      name: "תקרה מוארת עם הדפס",
      image: "/images/stretch-printed-backlit.jpg",
      description:
        "יריעה מודפסת בהדפס מיוחד (שמיים, עננים, תמונה, דוגמה) ומוארת מבפנים. ההדפס מוצג דרך האור האחיד מתחת. פתרון המשלב תאורה עם ערך עיצובי גבוה וחזותי דרמטי.",
      keyPoints: [
        "הדפס מיוחד ומוצג",
        "אפקט דרמטי",
        "ערך עיצובי גבוה",
      ],
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            פתרונות תאורה משולבים
          </h2>
          <p className="text-lg text-muted max-w-3xl leading-relaxed">
            לכל אפשרות תאורה יתרונות משלה והתאמה שונה בהתאם לצורך התאורתי, התכנית ההנדסית והאפקט הרצוי.
            בחרו בפתרון שמתאים למטרה שלכם.
          </p>
        </div>

        {/* Featured first two lighting types - split layout for emphasis */}
        <div className="space-y-16 mb-20">
          {lightingTypes.slice(0, 2).map((lighting, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image - positioned for RTL flow */}
              <div
                className={`relative aspect-square overflow-hidden rounded-lg bg-secondary ${
                  index === 0 ? "md:order-last" : "md:order-first"
                }`}
              >
                <Image
                  src={lighting.image}
                  alt={`פתרון תאורה: ${lighting.name}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className={index === 0 ? "md:order-first" : "md:order-last"}>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-right">
                  {lighting.name}
                </h3>
                <p className="text-muted leading-relaxed mb-6 text-right">
                  {lighting.description}
                </p>
                <div className="space-y-2 text-right">
                  {lighting.keyPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-end gap-2 text-sm text-muted"
                    >
                      <span>{point}</span>
                      <span className="text-accent">•</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining lighting types - grid layout */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-8 text-right">
            אפשרויות תאורה נוספות
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lightingTypes.slice(2).map((lighting, index) => (
              <div
                key={index + 2}
                className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all group"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-secondary">
                  <Image
                    src={lighting.image}
                    alt={`פתרון תאורה: ${lighting.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-right">
                  <h4 className="text-lg font-bold text-foreground mb-3">
                    {lighting.name}
                  </h4>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {lighting.description}
                  </p>
                  <ul className="space-y-1 text-xs text-muted/80">
                    {lighting.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-center justify-end gap-2">
                        <span>{point}</span>
                        <span className="text-accent text-xs">•</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
