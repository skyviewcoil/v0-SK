"use client"

import Image from "next/image"

export function WhereItFits() {
  const spaces = [
    {
      name: "סלון",
      description: "תקרה מתוחה מוסיפה דרמה וקסם, בעיקר בגימור מבריק או תאורה משלבת.",
      image: "/images/service-living-room.jpg",
    },
    {
      name: "אמבטיה",
      description: "פתרון אידיאלי לחללים רטובים, עמיד ללחות ומקל על ניקיון.",
      image: "/images/service-bathroom-installation.jpg",
    },
    {
      name: "מטבח",
      description: "מתאימה במיוחד כאשר יש צנרת או תשתיות שרוצים להסתיר, בעיקר עם תאורה משלבת.",
      image: "/images/service-kitchen-ceiling.jpg",
    },
    {
      name: "משרד/למסחר",
      description: "פתרון מרשים לחללי עבודה והלוביים, בעיקר עם תאורה משלבת ותקרה מוארת.",
      image: "/images/service-office-commercial.jpg",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-right">
          <p className="text-sm font-semibold text-accent mb-4">
            יישומים
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            לאילו חללים תקרה מתוחה מתאימה
          </h2>
        </div>

        {/* Featured Spaces with Images */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {spaces.map((space, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg mb-6 bg-secondary">
                <Image
                  src={space.image}
                  alt={`תקרה מתוחה בחלל: ${space.name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 text-right">
                {space.name}
              </h3>
              <p className="text-muted leading-relaxed text-right">
                {space.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional use cases */}
        <div className="bg-card border border-border rounded-lg p-8">
          <p className="text-sm font-semibold text-accent mb-4 text-right">
            שימושים נוספים
          </p>
          <p className="text-muted text-right mb-6 leading-relaxed">
            בנוסף לחללים פרטיים ועסקיים, תקרה מתוחה מתאימה גם לחללים מיוחדים כגון מקווות, חדרי כושר, משקפיות, קליניקות, בתי קפה, מסעדות, בתי מלון וחללים עם דרישות אקוסטיות מיוחדות.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-right">
            <div>
              <p className="font-semibold text-foreground mb-2">חללים רטובים</p>
              <p className="text-sm text-muted">אמבטיה, מטבח, בר קרח</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">חללים מסחריים</p>
              <p className="text-sm text-muted">משרד, חנות, רסטורציה</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">חללים ייעודיים</p>
              <p className="text-sm text-muted">מקווה, קליניקה, סטודיו</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
