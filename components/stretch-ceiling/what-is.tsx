"use client"

import Image from "next/image"

export function WhatIsStretchCeiling() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image on the right (RTL) */}
          <div className="relative aspect-square overflow-hidden rounded-lg order-first md:order-last">
            <Image
              src="/images/service-what-is-ceiling.jpg"
              alt="מבנה תקרה מתוחה - יריעה משוזרת במסגרת אלומיניום"
              fill
              className="object-cover"
            />
          </div>

          {/* Content on the left (RTL) */}
          <div className="md:order-first text-right">
            <p className="text-sm font-semibold text-accent mb-4">
              הגדרה וטכנולוגיה
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              מה בדיוק הוא תקרה מתוחה?
            </h2>

            <div className="space-y-6 text-lg text-muted leading-relaxed">
              <p>
                תקרה מתוחה היא מערכת תקרה המורכבת משתי רכיבים עיקריים: מסגרת אלומיניום המחוברת לקיר או מבנה קיים, ויריעה דקה של פלדות PVC או פוליאסטר המשוזרת בתוך המסגרת.
              </p>

              <p>
                היריעה המתוחה יוצרת חלל אוויר בין התקרה הקיימת לבין היריעה החדשה. חלל זה משמש לשילוב מערכות תאורה, עקמול אוויר, צינורות וחוטי חשמל, וכל זאת תוך הבלטת מראה חלק ודקיק.
              </p>

              <p>
                התיקנון המקצועי מאפשר שליטה מדויקת בטנזיון היריעה, הצבע, הגימור, וההשלמה עם פתרונות תאורה מתקדמים.
              </p>
            </div>

            <div className="mt-10 p-6 bg-card border border-border rounded-lg text-right">
              <p className="text-sm font-semibold text-foreground mb-4">
                ההבדל בין תקרה מתוחה לגבס או עבודות רטובות
              </p>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex items-center justify-end gap-3">
                  <span>גבס דורש עבודות רטובות, שחיקת קירות ותקרה, והשלמה כללית</span>
                  <span className="text-accent">•</span>
                </li>
                <li className="flex items-center justify-end gap-3">
                  <span>תקרה מתוחה היא התקנה שחורה, נקייה, ללא אבק וללא נזקים לסביבה</span>
                  <span className="text-accent">•</span>
                </li>
                <li className="flex items-center justify-end gap-3">
                  <span>התקנה של תקרה מתוחה לוקחת בדרך כלל יום עד שלושה ימים בלבד</span>
                  <span className="text-accent">•</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
