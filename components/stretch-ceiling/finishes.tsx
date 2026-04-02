"use client"

import { useState } from "react"
import Image from "next/image"

export function Finishes() {
  const [activeFinish, setActiveFinish] = useState("glossy")

  const finishes = [
    {
      id: "glossy",
      name: "מבריק",
      image: "/images/finish-glossy-new.jpg",
      description:
        "גימור מבריק וחלק הוצר קול, משקף אור ומרחב, ומוסיף דרמטיות וקסם. גימור זה מעניק תחושה של יוקרה וגדלנות לחלל.",
      use:
        "אידיאלי לסלונים, משרדים פרימיום, לוביים וחללים שבהם רוצים להדגיש עומק וקסם ויזואלי.",
    },
    {
      id: "satin",
      name: "סאטן",
      image: "/images/finish-satin-new.jpg",
      description:
        "גימור בעל ברק רך וקלוש, המאזנת בין מבריק למט. הברק השעוך יוצר תחושה אלגנטית וקל להנגדת אור ללא כל להט.",
      use:
        "מתאים לכמעט כל סוג חלל — בחדרי שינה, דירות, משרדים וחללים שבהם רוצים איזון ועדינות.",
    },
    {
      id: "matte",
      name: "מט",
      image: "/images/finish-matte-new.jpg",
      description:
        "גימור לא מבריק וגדול, שנראה דומה לתקרת גבס קלאסית. גימור זה מעניק תחושה של דומיום וריחוק דרמטי מהמקור.",
      use:
        "מתאים לחדרי שינה, חדרי ילדים, משכנתאות עבודה, ולחללים כאשר רוצים תופעה נקייה וקלאסית.",
    },
  ]

  const activeData = finishes.find((f) => f.id === activeFinish)

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section with Image */}
        <div className="mb-20 grid md:grid-cols-2 gap-16 items-center">
          {/* Image on right */}
          <div className="relative aspect-square overflow-hidden rounded-lg order-first md:order-last">
            <Image
              src="/images/service-finishes-detail.jpg"
              alt="שלושה גימורים של תקרה מתוחה - מבריק, סאטן, מט"
              fill
              className="object-cover"
            />
          </div>

          {/* Content on left */}
          <div className="md:order-first text-right">
            <p className="text-sm font-semibold text-accent mb-4">
              בחירת משטח
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              גימור התקרה
            </h2>
            <p className="text-lg text-muted mb-6 leading-relaxed">
              תקרה מתוחה זמינה בשלושה גימורים ראשיים, כל אחד מהם מציע הערכה שונה וסגנון ייחודי. בחירת הגימור משפיעה הן על המראה הן על התנהגות האור בחלל.
            </p>
            <ul className="space-y-2 text-muted text-sm">
              <li className="flex items-center justify-end gap-2">
                <span>מבריק — זוהר וחזק, משקף אור ותמונות</span>
                <span className="text-accent">•</span>
              </li>
              <li className="flex items-center justify-end gap-2">
                <span>סאטן — ברק קל וקלוש, איזון וגמישות</span>
                <span className="text-accent">•</span>
              </li>
              <li className="flex items-center justify-end gap-2">
                <span>מט — לא מבריק, קלאסי ודקיק</span>
                <span className="text-accent">•</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Finish Selector Tabs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-end">
          {finishes.map((finish) => (
            <button
              key={finish.id}
              onClick={() => setActiveFinish(finish.id)}
              className={`px-6 py-3 font-medium transition-all ${
                activeFinish === finish.id
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              {finish.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-2">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary">
              {activeData && (
                <Image
                  src={activeData.image}
                  alt={`תקרה מתוחה גימור ${activeData.name}`}
                  fill
                  className="object-cover transition-all duration-500"
                />
              )}
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-1">
            {activeData && (
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  {activeData.name}
                </h3>
                <p className="text-lg text-muted mb-6 leading-relaxed">
                  {activeData.description}
                </p>
                <div className="pt-6 border-t border-border">
                  <p className="text-sm font-semibold text-accent mb-3">היכן זה מתאים:</p>
                  <p className="text-muted leading-relaxed">{activeData.use}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
