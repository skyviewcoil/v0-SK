"use client"

import Image from "next/image"

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
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
          {/* Text Section */}
          <div className="text-right md:order-last">
            <p className="text-sm font-semibold text-accent mb-4">
              תהליך
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              איך מתבצע התהליך
            </h2>
            <p className="text-lg text-muted mb-12 leading-relaxed">
              מהשיחה הראשונית דרך ההתקנה, תהליך דדיקטד ומקצועי כדי להבטיח את התוצאה המושלמת.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-6">
                  {/* Number */}
                  <div className="flex-shrink-0 pt-1">
                    <span className="text-4xl font-bold text-accent opacity-40">
                      {step.number}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="text-right flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative aspect-square overflow-hidden rounded-lg md:order-first">
            <Image
              src="/images/service-installation-process.jpg"
              alt="תהליך התקנת תקרה מתוחה"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
