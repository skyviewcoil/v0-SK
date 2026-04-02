"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "מהי תקרה מתוחה?",
    answer:
      "תקרה מתוחה היא רשת פוליסטר או בד מיוחד המתוחה בפרופילים אלומיניום מסביב החלל. זה יוצר משטח חלק ואחיד בגימור שנבחר, מה שמאפשר להסתיר עמודים ותעלות אוויר, ולשלב תאורה ופתרונות קונפורטיים.",
  },
  {
    question: "כמה זמן לוקחת התקנה?",
    answer:
      "זמן ההתקנה תלוי בגודל החלל, אך בממוצע תקרה מתוחה בחדר רגיל תוקן ב-1-2 ימים בלבד. זה מהיר יחסית לשיטות מסורתיות כמו גבס, ובנוסף - כמעט ללא אבק או לכלוך.",
  },
  {
    question: "האם זה מתאים לאמבטיה?",
    answer:
      "כן, ממש מתאים! תקרות מתוחות עמידות בפני לחות גבוהה ונוזלים, מה שהופכות אותן לאידיאליות לחדרי אמבטיה ומטבחים. הן לא ספוגות, לא מתפיחות, ופשוטות לנקוי.",
  },
  {
    question: "אילו גימורים קיימים?",
    answer:
      "ישנם שלושה גימורים עיקריים: מבריק (משטח זוהר הקולט אור), סאטן (מראה חלק ומעודן), ומט (סיום לא מחזיר אור). בחר בהתאם לעיצוב החדר וההשפעה הרצויה.",
  },
  {
    question: "האם אפשר לשלב תאורה?",
    answer:
      "בהחלט! אנחנו מספקים פסי לד שקועים, תאורה היקפית, ספוטים ועוד. התאורה משולבת בתקרה המתוחה, יוצרת אור רך ומעוצב בהתאמה אישית לחלל שלך.",
  },
  {
    question: "מה עם אחריות?",
    answer:
      "כל התקרות המתוחות שלנו מגיעות עם אחריות של 10 שנים כנגד בעיות ביצוע ופגיעות. אנחנו גם מספקים שירות תחזוקה ותמיכה טכנית בכל שעה שתזדקק.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-40 md:py-48 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16 text-right">
          <p className="text-sm text-accent font-medium tracking-widest uppercase mb-3">שאלות נפוצות</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-pretty">
            יש לך שאלות?
          </h2>
        </div>

        <div className="max-w-3xl">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-7 flex items-start justify-between gap-6 text-right group flex-row-reverse hover:text-accent transition-colors"
              >
                <span className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300 ${
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
                <p className="text-muted leading-relaxed pb-8 pr-12 text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
