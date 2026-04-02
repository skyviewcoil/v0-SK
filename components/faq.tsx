"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "מהי תקרה מתוחה?",
    answer:
      "תקרה מתוחה היא רשת פוליסטר או בד מיוחד המתוחה בפרופילים אלומיניום מסביב החלל. זה יוצר משטח חלק ואחיד בגימור שנבחר, מה שמאפשר אפילו להסתיר עמודים ותעלות אוויר.",
  },
  {
    question: "כמה זמן לוקחת התקנה?",
    answer:
      "זמן ההתקנה תלוי בגודל החלל וההצורך שלך, אך בממוצע תקרה מתוחה בחדר בגודל רגיל תוקן ב-1-2 ימים. החדש שלך נקי והמהיר יחסית לשיטות מסורתיות.",
  },
  {
    question: "האם זה מתאים לאמבטיה?",
    answer:
      "כן! תקרות מתוחות עמידות בפני לחות גבוהה ונוזלים, מה שהופכות אותן לאידיאליות לחדרי אמבטיה ומטבחים. הם לא משמשים, לא מתפיחים ופשוטים לנקוי.",
  },
  {
    question: "אילו גימורים קיימים?",
    answer:
      "ישנם שלושה גימורים עיקריים: מבריק (משטח반תוך בחזר זוהר), סאטן (מראה חלק ומעודן), ומט (סיום לא מחזיר אור). בחר בהתאם לעיצוב החדר וההשפעה הרצויה.",
  },
  {
    question: "האם אפשר לשלב תאורה?",
    answer:
      "בהחלט! אנחנו מספקים ספוטים, פסי לד שקועים, תאורה היקפית ועוד. התאורה משולבת בחלק התחתון של התקרה המתוחה, יוצרת אור רך ומעוצב.",
  },
  {
    question: "מה עם אחריות?",
    answer:
      "כל התקרות המתוחות שלנו מגיעות עם אחריות של 10 שנים כנגד פגיעות ממכניות ובעיות בציפוי. אנחנו גם מספקים שירות תחזוקה קל אם יש צורך.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-32 md:py-40 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-accent font-medium tracking-widest mb-3">שאלות נפוצות</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            יש לך שאלות?
          </h2>
        </div>

        <div className="max-w-3xl">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-right group flex-row-reverse"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
