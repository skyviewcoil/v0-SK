"use client"

import Image from "next/image"

export function LightingIntegration() {
  const lightingTypes = [
    {
      name: "פסי לד שקועים בתקרה",
      image: "/images/service-led-recessed-lines.jpg",
      description:
        "קווים ישרים של אור לד המשולבים ישירות בתוך היריעה, יוצרים דוגמה גיאומטרית מודרנית. הפסים השקועים בתוך המשטח הממתיח יוצרים אפקט אור מוגדר ותאורה אמביאנטית עדינה.",
    },
    {
      name: "מסילה מגנטית שקועה בתקרה",
      image: "/images/service-magnetic-track-recessed.jpg",
      description:
        "מערכת מסילה מגנטית משולבת בתוך היריעה המתוחה, המאפשרת הרכבה של גופי תאורה מודולריים. המסילה השקועה מספקת גמישות מלאה: הנחת אורות ניתנים להעברה, שינוי כיווני אור, והתאמה קבועה של התאורה.",
    },
    {
      name: "ספוטים שקועים בתקרה",
      image: "/images/lighting-recessed-spots.jpg",
      description:
        "אורות ספוט קטנים וחדים השקועים ישירות בתקרה, יוצרים תאורה ממוקדת ומדויקת. אידיאליים לתאורת נקודות מרכזיות, משטחים או יצירות אומנות.",
    },
    {
      name: "תאורה צמודת תקרה",
      image: "/images/lighting-surface-mount.jpg",
      description:
        "גופי תאורה המחוברים ישירות לפני היריעה, משלבים עיצוב ופונקציונליות. הם נחשבים כחלק אינטגרלי מהתקרה ויוצרים ממשק ויזואלי דקיק.",
    },
    {
      name: "תאורה תלויה",
      image: "/images/lighting-pendant.jpg",
      description:
        "גופי תאורה תלויים היורדים מתחת לתקרה, מעניקים אפקט ויזואלי משמעותי. הם יוצרים נקודות עניין תאורתיות ויכולים לשמש כאלמנט עיצובי ובולט בחלל.",
    },
    {
      name: "תקרה מוארת (fully illuminated)",
      image: "/images/lighting-full-illuminated.jpg",
      description:
        "היריעה עצמה מוארת מבפנים בשכבה מוגנת של אורות, יוצרת אור אמביאנטי רך וכולל מכל החלל. אפקט זה מעניק מראה מודרני ופוטוריסטי, עם תאורה אחידה וללא כל צל.",
    },
    {
      name: "תקרה מוארת עם הדפס מיוחד",
      image: "/images/lighting-printed-illuminated.jpg",
      description:
        "היריעה מודפסת בהדפס מיוחד (שמיים, עננים, תמונה, דוגמה) ומוארת מבפנים. פתרון זה יוצר אפקט דרמטי וייחודי, המשלב תאורה עם ערך עיצובי גבוה.",
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
        <div className="space-y-12 mb-16">
          {lightingTypes.slice(0, 2).map((lighting, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Image - always on the right for RTL */}
              <div
                className={`relative aspect-video overflow-hidden rounded-lg bg-secondary order-first md:order-first`}
              >
                <Image
                  src={lighting.image}
                  alt={`פתרון תאורה: ${lighting.name}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className={index === 0 ? "md:order-last" : "md:order-first"}>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {lighting.name}
                </h3>
                <p className="text-muted leading-relaxed mb-6">
                  {lighting.description}
                </p>
                <ul className="space-y-2 text-sm text-muted">
                  {index === 0 && (
                    <>
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        תאורה אמביאנטית עדינה
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        דוגמה גיאומטרית מודרנית
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        אפקט מינימליסטי וחלק
                      </li>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        מודולריות מלאה
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        אורות ניתנים להעברה
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        שליטה דקיקה בכיווני האור
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining lighting types - grid layout */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-8">
            אפשרויות תאורה נוספות
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lightingTypes.slice(2).map((lighting, index) => (
              <div
                key={index + 2}
                className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-md transition-all group"
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
                <div className="p-6">
                  <h4 className="text-lg font-bold text-foreground mb-3">
                    {lighting.name}
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    {lighting.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
