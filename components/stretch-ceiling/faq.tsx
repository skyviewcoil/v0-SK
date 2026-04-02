"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function StretchCeilingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: "מה זה תקרה מתוחה?",
      a: "תקרה מתוחה היא מערכת תקרה המבוססת על יריעה ייעודית המתוחה על גבי פרופילים היקפיים. הפרופילים מחוברים לקירות החלל, והיריעה מתוחה בעיתוות גבוהה עד שהיא נהיית חלקה ואחידה לחלוטין.",
    },
    {
      q: "האם אפשר להתקין תקרה מתוחה גם בחדר רחצה?",
      a: "כן, בעצם תקרה מתוחה היא פתרון אידיאלי לחדרי רחצה. היריעה עמידה ללחות 100%, לא מתגבשת ולא קוראת לעובש. זה הפתרון הטוב ביותר עבור חללים רטובים.",
    },
    {
      q: "מה ההבדל בין מבריק, סאטן ומט?",
      a: "מבריק הוא ברוח וחלק, משקף אור ומרחב, ויוצר דרמה ויוקרה. סאטן הוא בעל ברק רך שמאזן בין מבריק למט. מט הוא לא מבריק וגדול, קרוב לתקרת גבס קלאסית. בחירה בגימור תלויה בתחושה הרצויה.",
    },
    {
      q: "האם אפשר לשלב תאורה בתוך התקרה?",
      a: "כן, אפשר לשלב 7 סוגי תאורה: פסי לד שקועים, פסי תאורה מגנטיים, ספוטים שקועים, תאורה צמודת תקרה, תאורה תלויה, תקרה מוארת, או תקרה מוארת עם הדפס. לכל סוג יתרונות משלו.",
    },
    {
      q: "כמה זמן נמשכת התקנה?",
      a: "בדרך כלל התקנה לוקחת 1-3 ימי עבודה בהתאם לגודל החלל, מורכבות התקרה, וסוג התאורה. זה הרבה יותר מהיר מעבודות גבס.",
    },
    {
      q: "האם תקרה מתוחה מתאימה גם לעסקים?",
      a: "כן, תקרה מתוחה מתאימה למשרדים, חנויות, מסעדות, בתי מלון, ולובים. היא משדרת יוקרה ומקצועיות, וגם עמידה וקלה לתחזוקה.",
    },
    {
      q: "האם אפשר להתקין על תקרה קיימת?",
      a: "כן, אפשר להתקין על תקרה קיימת. אנחנו נבדוק את ההגדרה, אנחנו נבדוק את המבנה, ואנחנו נבדוק את ההערכות של הצנרת או הכבלים שעלולים להיות למעלה.",
    },
    {
      q: "מה משפיע על המחיר?",
      a: "המחיר תלוי בגודל החלל, סוג הגימור (מבריק, סאטן, מט), סוג התאורה, מורכבות התקרה (צורות, עקומות, פתחים), ומיקום החלל בארץ.",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          שאלות נפוצות
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-md transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-right flex items-center justify-between hover:bg-secondary/20 transition-colors"
              >
                <ChevronDown
                  className={`w-5 h-5 text-accent transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
                <span className="text-lg font-semibold text-foreground">{faq.q}</span>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-secondary/10 border-t border-border">
                  <p className="text-muted leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
