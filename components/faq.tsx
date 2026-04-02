"use client"

import { useState, useEffect, useRef } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "מהי תקרה מתוחה?",
    answer:
      "תקרה מתוחה היא ממברנה מפוליסטר או PVC המתוחה בפרופילי אלומיניום מסביב לחלל. היא יוצרת משטח חלק ואחיד בגימור שנבחר, מאפשרת להסתיר תעלות ואלמנטים טכניים, ולשלב תאורה ופתרונות מתקדמים.",
  },
  {
    question: "כמה זמן לוקחת התקנה?",
    answer:
      "זמן ההתקנה תלוי בגודל החלל, אך בממוצע תקרה מתוחה בחדר רגיל מותקנת ב-1-2 ימים בלבד. זה מהיר משמעותית לעומת גבס, ובנוסף העבודה נקייה כמעט ללא אבק או לכלוך.",
  },
  {
    question: "האם זה מתאים לאמבטיה?",
    answer:
      "בהחלט. תקרות מתוחות עמידות בפני לחות גבוהה ונוזלים, מה שהופך אותן לאידיאליות לחדרי אמבטיה ומטבחים. הן לא סופגות לחות, לא מתנפחות, ופשוטות לניקוי.",
  },
  {
    question: "אילו גימורים קיימים?",
    answer:
      "ישנם שלושה גימורים עיקריים: מבריק (משטח זוהר המשקף את החלל), סאטן (מראה חלק עם זוהר עדין), ומט (סיום רך ללא החזרת אור). הבחירה תלויה בסגנון העיצוב ובאפקט הרצוי.",
  },
  {
    question: "אילו סוגי תאורה אפשר לשלב?",
    answer:
      "אנחנו מספקים שבעה סוגי תאורה שונים: פסי לד שקועים, פסי תאורה מגנטיים, ספוטים שקועים, תאורה צמודת תקרה, תאורה תלויה, תקרה מוארת באופן אחיד, ותקרה מוארת עם הדפס. כל סוג מותאם לצרכים שונים.",
  },
  {
    question: "מה עם אחריות?",
    answer:
      "כל התקרות המתוחות שלנו מגיעות עם אחריות של 10 שנים כנגד בעיות ביצוע ופגמים. אנחנו גם מספקים שירות תחזוקה ותמיכה טכנית בכל עת שתזדקקו.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isRevealed, setIsRevealed] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsRevealed(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={sectionRef} id="faq" className="py-32 md:py-44 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Section header - sticky on desktop */}
          <div className={`lg:col-span-4 lg:sticky lg:top-32 lg:self-start text-right transition-all duration-1000 ${
            isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <p className="text-accent text-sm font-medium tracking-widest mb-4">שאלות נפוצות</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              יש לך<br />שאלות?
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              כאן תמצאו תשובות לשאלות הנפוצות ביותר על תקרות מתוחות.
            </p>
          </div>

          {/* FAQ items */}
          <div className={`lg:col-span-8 transition-all duration-1000 delay-200 ${
            isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full py-6 md:py-7 flex items-start justify-between gap-6 text-right group flex-row-reverse hover:text-accent transition-colors"
                >
                  <span className="text-base md:text-lg font-medium text-foreground group-hover:text-accent transition-colors text-right flex-1">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 mt-0.5">
                    <Plus
                      className={`w-5 h-5 text-accent transition-transform duration-300 ${
                        openIndex === index ? "rotate-45" : "rotate-0"
                      }`}
                      strokeWidth={1.5}
                    />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-muted leading-relaxed pb-7 text-right text-base">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
