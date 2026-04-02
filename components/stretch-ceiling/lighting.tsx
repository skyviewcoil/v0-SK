"use client"

import Image from "next/image"

export function LightingIntegration() {
  const lightingTypes = [
    {
      name: "פסי לד שקועים",
      image: "/images/lighting-recessed-led-lines.jpg",
      description:
        "קווים ישרים של אור לד המשולבים ישירות בתוך היריעה, יוצרים אפקט גיאומטרי מודרני ותאורה אמביאנטית גבוהה.",
    },
    {
      name: "פסי תאורה מגנטיים",
      image: "/images/lighting-magnetic-track.jpg",
      description:
        "מערכת פסים המחוברת לתקרה, המאפשרת הנחת גופי תאורה קבועים או ניתנים לתזוזה לתיאום דקיק של האור.",
    },
    {
      name: "ספוטים שקועים",
      image: "/images/lighting-recessed-spots.jpg",
      description:
        "אורות ספט קטנים וחדים השקועים ישירות בתקרה, יוצרים תאורה מודגשת וממוקדת למוקדי עניין.",
    },
    {
      name: "תאורה צמודת תקרה",
      image: "/images/lighting-surface-mount.jpg",
      description:
        "גופי תאורה הנעוצים ישירות על פני היריעה, נראו כחלק אינטגרלי מהתקרה, ויוצרים ממשק דקיק.",
    },
    {
      name: "תאורה תלויה",
      image: "/images/lighting-pendant.jpg",
      description:
        "גופי תאורה תלויים שיורדים מתחת לתקרה, מעניקים אפקט ויזואלי משמעותי ויוצרים אור ממוקד.",
    },
    {
      name: "תקרה מוארת",
      image: "/images/lighting-full-illuminated.jpg",
      description:
        "היריעה עצמה מוארת מבפנים, יוצרת אור אמביאנטי עדין וכולל מכל החלל — אפקט רך ואלגנטי.",
    },
    {
      name: "תקרה מוארת עם הדפס",
      image: "/images/lighting-printed-illuminated.jpg",
      description:
        "היריעה מודפסת בהדפס מיוחד (שמיים, דוגמה, תמונה) ומוארת מבפנים, יוצרת אפקט ויזואלי חד ודרמטי.",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          פתרונות תאורה שאפשר לשלב בתקרה מתוחה
        </h2>
        <p className="text-lg text-muted mb-16 max-w-2xl">
          לכל סוג תאורה יתרונות משלו ופתרון שונה בהתאם לרצון, הצורך והאפקט הרצוי.
        </p>

        {/* Grid of lighting types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lightingTypes.map((lighting, index) => (
            <div
              key={index}
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
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {lighting.name}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {lighting.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
