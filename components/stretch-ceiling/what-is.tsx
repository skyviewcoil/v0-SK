"use client"

import Image from "next/image"

export function WhatIsStretchCeiling() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text on right (RTL) */}
          <div className="order-2 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              מהי תקרה מתוחה
            </h2>

            <div className="space-y-6 text-lg text-muted leading-relaxed">
              <p>
                תקרה מתוחה היא מערכת תקרה המבוססת על יריעה ייעודית (בדרך כלל PVC או פוליאסטר)
                המתוחה על גבי פרופילים היקפיים המותקנים על קירות החלל.
              </p>

              <p>
                המערכת מאפשרת קבלת משטח מדויק, חלק ואחיד, ללא שגעים או אי-סדרים שנוצרים מעבודות
                רטובות או בנייה.
              </p>

              <p>
                התקרה המתוחה מתאימה לפתרונות עיצוב, חידוש תקרה קיימת, הסתרת תשתיות (צנרת,
                כבלים), שילוב תאורה משולבת, וקבלת אפקט ויזואלי דרמטי או מינימליסטי בהתאם
                לבחירת הגימור.
              </p>

              <p>
                פתרון זה נפוץ וידוע בחללים פרטיים (דירות, בתים), מסחריים (משרדים, חנויות),
                ציבוריים (בתי מלון, מסעדות), וגם בחללים ייעודיים (מקווות, חדרי חזוקה).
              </p>
            </div>
          </div>

          {/* Image on left (RTL) */}
          <div className="order-1 md:order-1">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary">
              <Image
                src="/images/philosophy-install.jpg"
                alt="מערכת תקרה מתוחה בתהליך התקנה"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
