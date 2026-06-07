"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const PRIMARY = "#1B3A6B"
const PRIMARY_LIGHT = "#2A4F94"
const CTA_GREEN = "#22A85A"
const CTA_GREEN_HOVER = "#1A8F4A"
const LIGHT_BG = "#F0F4F9"

const FAQS = [
  {
    q: "המערכת כבר פעילה?",
    a: "רשמתי לפני פיילוט. ההרשמה עכשיו בוחרת את 50 המשתמשים הראשונים שיקבלו גישה.",
  },
  {
    q: "צריך לקנות CRM חדש?",
    a: "לא. רשמתי נבנתה לעצמאי שלא רוצה מערכת מסובכת. זה כלי אחד שעושה דבר אחד — זוכר בשבילך.",
  },
  {
    q: "צריך מספר טלפון חדש?",
    a: "לא. המערכת עובדת על המספר הקיים שלך (אנדרואיד). באייפון — ייבדק במסגרת הפיילוט.",
  },
  {
    q: "המידע שלי פרטי?",
    a: "כן. כל המידע שמור בחשבון שלך בלבד, מאובטח, וניתן למחיקה בכל עת.",
  },
  {
    q: "מה קורה אם הפיילוט לא יוצא לפועל?",
    a: "החזר מלא של 49₪, ללא שאלות.",
  },
]

const AUDIENCE = [
  "מתקיני פרגולות",
  "שיפוצניקים",
  "חשמלאים",
  "אינסטלטורים",
  "מתקיני מזגנים",
  "אלומיניום ותריסים",
  "תקרות מתוחות",
  "מוסכים ומכונאים",
]

const LEADS = [
  { name: "דוד כהן", desc: "פרגולה 4 מטר", status: "הצעת מחיר", color: "#F59E0B", when: "ראשון" },
  { name: "מיכל לוי", desc: "שיפוץ מקלחת", status: "ליד חם 🔥", color: "#EF4444", when: "היום" },
  { name: "אבי רוזן", desc: "תקרה מתוחה", status: "ממתין", color: "#6B7280", when: "מחר" },
]

export default function RashamtiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    field: "",
    city: "",
    calls: "",
    device: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to payment provider (Invoice4U) and save registration
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Arial, 'Segoe UI', sans-serif" }}>

      {/* STICKY NAV */}
      <nav
        className="sticky top-0 z-50 border-b border-gray-100 shadow-sm"
        style={{ backgroundColor: "rgba(255,255,255,0.97)", backdropFilter: "blur(8px)" }}
      >
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-xl font-bold" style={{ color: PRIMARY }}>
            רשמתי
          </span>
          <a
            href="#pilot"
            className="text-white text-sm font-bold px-5 py-2 rounded-full transition-colors"
            style={{ backgroundColor: CTA_GREEN }}
          >
            מקום בפיילוט — 49₪
          </a>
        </div>
      </nav>

      {/* ─── SECTION 1: HERO ─── */}
      <section className="py-16 px-4 text-center" style={{ backgroundColor: PRIMARY }}>
        <div className="max-w-2xl mx-auto">
          <div
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-6"
            style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#A8D5B7" }}
          >
            50 מקומות בלבד · פיילוט מוגבל
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            הטלפון שלך מלא בלידים.
            <br />
            <span style={{ color: "#7FD4A0" }}>רשמתי דואגת שלא תשכח אף אחד.</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed">
            כל שיחה שנכנסת אליך נרשמת אוטומטית —<br className="hidden md:block" />
            מי התקשר, מה ביקש, ומתי לחזור אליו. בלי שתרשום מילה.
          </p>
          <a
            href="#pilot"
            className="inline-block text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl mb-5 transition-transform active:scale-95"
            style={{ backgroundColor: CTA_GREEN }}
          >
            אני רוצה מקום בפיילוט
          </a>
          <p className="text-blue-200 text-sm">מחיר השקה לנרשמים הראשונים · החזר מלא אם הפיילוט לא נפתח</p>
        </div>
      </section>

      {/* ─── SECTION 2: PROBLEM ─── */}
      <section className="py-16 px-4" style={{ backgroundColor: LIGHT_BG }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: PRIMARY }}>
            כמה עבודות הפסדת כי שכחת לחזור ללקוח?
          </h2>
          <div className="bg-white rounded-2xl p-7 shadow-sm text-gray-700 text-lg leading-relaxed">
            <p>אתה על סולם, באמצע התקנה. הטלפון מצלצל.</p>
            <p className="mt-4">
              אחד רוצה הצעת מחיר. אחד מבקש שתחזור ביום ראשון. אחד שואל על אחריות.
            </p>
            <p className="mt-4">
              בסוף היום הכל מתערבב — מי ביקש מה? למי לחזור? איזה מחיר אמרת?
            </p>
            <p className="mt-5 font-bold text-xl" style={{ color: PRIMARY }}>
              ככה לידים נופלים, ואתה אפילו לא יודע כמה.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: SOLUTION ─── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: PRIMARY }}>
            רשמתי שומעת כל שיחה ורושמת בשבילך
          </h2>
          <p className="text-center text-gray-500 mb-9">
            אחרי כל שיחה, רשמתי שולפת אוטומטית את מה שחשוב ומסדרת בטבלה אחת:
          </p>
          <div className="space-y-3">
            {[
              { icon: "👤", text: "שם הלקוח ומספר טלפון" },
              { icon: "💬", text: "מה הוא רוצה — פרגולה, שיפוץ, מה הגודל" },
              { icon: "📊", text: "באיזה שלב הוא — מתעניין / ביקש הצעה / מוכן לסגור" },
              { icon: "🔔", text: "מתי ביקש שתחזור אליו" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 rounded-xl p-4" style={{ backgroundColor: LIGHT_BG }}>
                <span className="text-2xl w-10 text-center flex-shrink-0">{item.icon}</span>
                <span className="text-gray-700 text-lg">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-7 font-bold text-xl" style={{ color: PRIMARY }}>
            במקום לזכור הכל בראש — רשמתי זוכרת בשבילך.
          </p>
        </div>
      </section>

      {/* ─── SECTION 4: MOCKUPS ─── */}
      <section className="py-16 px-4" style={{ backgroundColor: LIGHT_BG }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: PRIMARY }}>
            ככה זה נראה אצלך בטלפון
          </h2>

          {/* Mobile: vertical stack / Desktop: 3 columns */}
          <div className="flex flex-col md:flex-row gap-10 justify-center items-start">

            {/* Mockup 1 */}
            <div className="flex flex-col items-center flex-1">
              <p className="font-semibold text-gray-600 mb-4 text-center">כל הלידים שלך במקום אחד</p>
              <PhoneMockup>
                <div className="text-white text-xs py-2 px-3 font-bold text-right" style={{ backgroundColor: PRIMARY }}>
                  רשמתי — הלידים שלי
                </div>
                <div className="p-2 space-y-2">
                  {LEADS.map((lead, i) => (
                    <div key={i} className="bg-white rounded-lg p-2.5 shadow-sm border border-gray-100">
                      <div className="flex justify-between items-start gap-1">
                        <span
                          className="text-white rounded-full px-1.5 py-0.5 flex-shrink-0"
                          style={{ backgroundColor: lead.color, fontSize: "8px" }}
                        >
                          {lead.status}
                        </span>
                        <div className="text-right">
                          <div className="font-bold text-gray-800" style={{ fontSize: "11px" }}>{lead.name}</div>
                          <div className="text-gray-400" style={{ fontSize: "9px" }}>{lead.desc}</div>
                        </div>
                      </div>
                      <div className="text-gray-400 mt-1 text-left" style={{ fontSize: "9px" }}>
                        ⏰ לחזור: {lead.when}
                      </div>
                    </div>
                  ))}
                </div>
              </PhoneMockup>
            </div>

            {/* Mockup 2 */}
            <div className="flex flex-col items-center flex-1">
              <p className="font-semibold text-gray-600 mb-4 text-center">מה שנאמר בשיחה — מסודר לבד</p>
              <PhoneMockup>
                <div className="text-white text-xs py-2 px-3 font-bold text-right" style={{ backgroundColor: PRIMARY }}>
                  פרטי לקוח
                </div>
                <div className="p-3 space-y-2.5 text-right">
                  <div>
                    <div className="font-bold text-gray-800" style={{ fontSize: "12px" }}>דוד כהן</div>
                    <div style={{ color: PRIMARY, fontSize: "10px" }}>050-0000000 · ראשון לציון</div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-2">
                    <div className="text-amber-700 font-bold mb-1" style={{ fontSize: "9px" }}>סיכום השיחה</div>
                    <div className="text-gray-700 leading-relaxed" style={{ fontSize: "10px" }}>
                      ביקש פרגולה לבנה 4 מטר. רוצה הצעת מחיר עד ראשון. שאל על אחריות וזמן התקנה.
                    </div>
                  </div>
                  <div className="flex gap-1.5 flex-wrap">
                    <span
                      className="rounded-full px-2 py-0.5"
                      style={{ backgroundColor: "#EFF6FF", color: "#1D4ED8", fontSize: "9px" }}
                    >
                      ביקש הצעה
                    </span>
                    <span
                      className="rounded-full px-2 py-0.5"
                      style={{ backgroundColor: "#F0FDF4", color: "#15803D", fontSize: "9px" }}
                    >
                      ⏰ ראשון
                    </span>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-2">
                    <div className="text-gray-400 font-bold" style={{ fontSize: "9px" }}>פעולה הבאה</div>
                    <div className="text-gray-700 mt-0.5" style={{ fontSize: "10px" }}>
                      לחזור ביום ראשון עם הצעת מחיר
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </div>

            {/* Mockup 3 */}
            <div className="flex flex-col items-center flex-1">
              <p className="font-semibold text-gray-600 mb-4 text-center">רשמתי אומרת לך למי לחזור היום</p>
              <PhoneMockup>
                <div className="text-white text-xs py-2 px-3 font-bold text-right" style={{ backgroundColor: PRIMARY }}>
                  היום — לחזור אליהם
                </div>
                <div className="p-2 space-y-2">
                  {[
                    { time: "09:30", action: "לחזור לדוד", hot: true },
                    { time: "11:00", action: "הצעה למיכל", hot: false },
                    { time: "14:00", action: "לבדוק אם אבי קיבל", hot: false },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white rounded-lg p-2 shadow-sm border border-gray-100">
                      <span className="text-gray-400 font-mono flex-shrink-0" style={{ fontSize: "9px" }}>
                        {item.time}
                      </span>
                      <span className="flex-1 text-right text-gray-700 font-medium" style={{ fontSize: "10px" }}>
                        {item.action}
                      </span>
                      {item.hot && <span style={{ fontSize: "12px" }}>🔥</span>}
                    </div>
                  ))}
                  <div className="rounded-lg p-2 text-right border" style={{ backgroundColor: "#EFF6FF", borderColor: "#BFDBFE" }}>
                    <div className="font-bold" style={{ color: "#1D4ED8", fontSize: "9px" }}>💡 המלצת רשמתי</div>
                    <div className="text-gray-600 mt-0.5" style={{ fontSize: "9px" }}>
                      עברו 3 ימים מהצעה למיכל — שווה הודעת המשך
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 5: HOW IT WORKS ─── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: PRIMARY }}>
            3 צעדים, ואתה מסודר
          </h2>
          <div className="space-y-6">
            {[
              {
                num: "1",
                title: "שיחה נכנסת",
                desc: "רשמתי שומעת ורושמת אוטומטית — אתה לא צריך לעשות כלום",
              },
              {
                num: "2",
                title: "ה-AI שולף מה שחשוב",
                desc: "מה הלקוח רוצה, באיזה שלב הוא, ומה הפעולה הבאה",
              },
              {
                num: "3",
                title: "הכל מסתדר בטבלה",
                desc: "אתה פותח את האפליקציה ורואה בדיוק למי לחזור ומתי",
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ backgroundColor: PRIMARY }}
                >
                  {step.num}
                </div>
                <div className="pt-1">
                  <div className="font-bold text-gray-800 text-lg">{step.title}</div>
                  <div className="text-gray-500 mt-1">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: FEATURES ─── */}
      <section className="py-16 px-4" style={{ backgroundColor: LIGHT_BG }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: PRIMARY }}>
            מה תקבל
          </h2>
          <div className="bg-white rounded-2xl p-7 shadow-sm space-y-4">
            {[
              "כל שיחה נרשמת אוטומטית",
              "סיכום קצר של מה הלקוח רצה",
              "סטטוס ליד: חדש / חם / מחכה להצעה / נסגר / אבוד",
              "תזכורת למי לחזור ומתי",
              "טבלה אחת עם כל הלקוחות",
              "עובד על המספר שכבר יש לך",
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xl flex-shrink-0" style={{ color: CTA_GREEN }}>✓</span>
                <span className="text-gray-700 text-lg">{feature}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-5 text-gray-400 text-sm">
            רשמתי לפני פיילוט. מתמקדת בדבר אחד שעובד — לא עוד CRM מסובך.
          </p>
        </div>
      </section>

      {/* ─── SECTION 7: TARGET AUDIENCE ─── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: PRIMARY }}>
            למי זה מתאים
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {AUDIENCE.map((item, i) => (
              <div
                key={i}
                className="border-2 rounded-xl p-3 text-center font-medium text-gray-700"
                style={{ borderColor: "#CBD5E1" }}
              >
                {item}
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-gray-500 font-medium">
            כל מי שהטלפון שלו הוא העסק.
          </p>
        </div>
      </section>

      {/* ─── SECTION 8: PILOT OFFER ─── */}
      <section id="pilot" className="py-16 px-4" style={{ backgroundColor: PRIMARY }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              הצטרפות מוקדמת — 50 מקומות בלבד
            </h2>
            <p className="text-blue-200">מחיר השקה לנרשמים הראשונים</p>
          </div>

          {/* Pricing card */}
          <div className="bg-white rounded-2xl p-7 shadow-2xl mb-6 text-center">
            <div className="text-gray-400 line-through text-base mb-0.5">199₪ / חודש</div>
            <div className="text-5xl font-bold mb-1" style={{ color: PRIMARY }}>99₪</div>
            <div className="text-gray-500 text-sm mb-1">לחודש, לחצי שנה הראשונה</div>
            <div className="w-16 border-t border-gray-100 mx-auto my-4" />
            <div className="text-gray-600 mb-1">דמי הרשמה עכשיו</div>
            <div className="text-4xl font-bold" style={{ color: CTA_GREEN }}>49₪</div>
            <div className="text-gray-400 text-sm mb-5">מתקזזים מהחודש הראשון</div>
            <div className="rounded-xl p-3 mb-6 text-sm font-medium" style={{ backgroundColor: "#F0FDF4", color: "#15803D", border: "1px solid #BBF7D0" }}>
              ✓ אם הפיילוט לא נפתח עד לתאריך שיקבע — החזר מלא, ללא שאלות
            </div>

            {/* Registration form */}
            {formSubmitted ? (
              <div className="text-center py-6">
                <div className="text-4xl mb-3">🎉</div>
                <div className="font-bold text-lg text-gray-800 mb-2">שמרנו לך מקום!</div>
                <p className="text-gray-500 text-sm">
                  הסכום מתקזז מהחודש הראשון. אם הפיילוט לא נפתח — החזר מלא.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-right">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="שם מלא"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 text-sm focus:outline-none focus:ring-2"
                    style={{ "--tw-ring-color": PRIMARY } as React.CSSProperties}
                  />
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="טלפון"
                    type="tel"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 text-sm focus:outline-none focus:ring-2"
                  />
                </div>
                <input
                  name="field"
                  value={formData.field}
                  onChange={handleChange}
                  required
                  placeholder="תחום עיסוק (למשל: שיפוצים, חשמל, פרגולות)"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 text-sm focus:outline-none focus:ring-2"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="עיר"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 text-sm focus:outline-none focus:ring-2"
                  />
                  <select
                    name="calls"
                    value={formData.calls}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-500 text-sm focus:outline-none bg-white"
                  >
                    <option value="" disabled>שיחות בשבוע?</option>
                    <option value="1-5">1–5</option>
                    <option value="6-15">6–15</option>
                    <option value="16-30">16–30</option>
                    <option value="30+">30+</option>
                  </select>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData((p) => ({ ...p, device: "Android" }))}
                    className="flex-1 border-2 rounded-lg py-2.5 text-sm font-medium transition-colors"
                    style={{
                      borderColor: formData.device === "Android" ? CTA_GREEN : "#E2E8F0",
                      backgroundColor: formData.device === "Android" ? "#F0FDF4" : "white",
                      color: formData.device === "Android" ? CTA_GREEN : "#6B7280",
                    }}
                  >
                    📱 Android
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData((p) => ({ ...p, device: "iPhone" }))}
                    className="flex-1 border-2 rounded-lg py-2.5 text-sm font-medium transition-colors"
                    style={{
                      borderColor: formData.device === "iPhone" ? CTA_GREEN : "#E2E8F0",
                      backgroundColor: formData.device === "iPhone" ? "#F0FDF4" : "white",
                      color: formData.device === "iPhone" ? CTA_GREEN : "#6B7280",
                    }}
                  >
                    🍎 iPhone
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full text-white font-bold text-lg py-4 rounded-full shadow-lg transition-transform active:scale-95"
                  style={{ backgroundColor: CTA_GREEN }}
                >
                  אני רוצה מקום בפיילוט — 49₪
                </button>
                <p className="text-center text-gray-400 text-xs">
                  לאחר הרישום תועבר לדף תשלום מאובטח
                </p>
              </form>
            )}
          </div>

          <div className="text-center">
            <a href="#survey" className="text-blue-200 text-sm underline">
              עדיין מתלבט? ענה על 5 שאלות קצרות →
            </a>
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: FUTURE PRICING ─── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold text-center mb-6 text-gray-500">
            מחיר עתידי (אחרי הפיילוט)
          </h2>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { name: "Basic", price: "49₪", sub: "לחודש" },
              { name: "Pro", price: "199₪", sub: "לחודש" },
              { name: "Business", price: "399₪", sub: "לחודש" },
            ].map((plan, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4">
                <div className="text-gray-500 text-sm font-medium mb-1">{plan.name}</div>
                <div className="font-bold text-xl" style={{ color: PRIMARY }}>{plan.price}</div>
                <div className="text-gray-400 text-xs">{plan.sub}</div>
              </div>
            ))}
          </div>
          <p className="text-center mt-4 text-gray-400 text-sm">
            משתתפי הפיילוט נועלים מחיר השקה לתקופה ממושכת.
          </p>
        </div>
      </section>

      {/* ─── SECTION 10: FAQ ─── */}
      <section className="py-16 px-4" style={{ backgroundColor: LIGHT_BG }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: PRIMARY }}>
            שאלות נפוצות
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  className="w-full text-right px-5 py-4 flex items-center justify-between gap-3"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-gray-800">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-gray-600 leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 11: FINAL CTA ─── */}
      <section className="py-16 px-4 text-center" style={{ backgroundColor: PRIMARY }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-snug">
            לאבד ליד אחד עולה הרבה יותר מ-49₪.
          </h2>
          <a
            href="#pilot"
            className="inline-block text-white font-bold text-xl px-12 py-4 rounded-full shadow-xl transition-transform active:scale-95"
            style={{ backgroundColor: CTA_GREEN }}
          >
            אני רוצה מקום בפיילוט
          </a>
          <p className="text-blue-200 text-sm mt-4">50 מקומות · מחיר השקה · החזר מלא אם לא נפתח</p>
        </div>
      </section>

      {/* ─── SURVEY SECTION ─── */}
      <section id="survey" className="py-16 px-4 bg-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-2" style={{ color: PRIMARY }}>
            עדיין מתלבט? 5 שאלות וסיימנו
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8">
            נשמח להבין אם רשמתי מתאימה לך ונעדכן אותך בהמשך
          </p>
          <SurveyForm />
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-8 px-4 bg-gray-900 text-center">
        <p className="text-gray-400 text-sm">רשמתי © 2025 · כל הזכויות שמורות</p>
      </footer>

      {/* ─── MOBILE STICKY CTA ─── */}
      <div className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-40" style={{ backgroundColor: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)", borderTop: "1px solid #E2E8F0" }}>
        <a
          href="#pilot"
          className="block w-full text-white font-bold text-center py-4 rounded-full shadow-lg"
          style={{ backgroundColor: CTA_GREEN }}
        >
          מקום בפיילוט — 49₪
        </a>
      </div>

    </div>
  )
}

// ─── Phone Mockup Component ───────────────────────────────────────────
function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: "190px" }}>
      <div
        className="relative overflow-hidden shadow-2xl"
        style={{
          border: "5px solid #1F2937",
          borderRadius: "28px",
          backgroundColor: "#1F2937",
        }}
      >
        {/* top notch */}
        <div className="h-5 flex items-center justify-center" style={{ backgroundColor: "#1F2937" }}>
          <div className="w-14 h-2 rounded-full bg-gray-600" />
        </div>
        {/* screen */}
        <div className="bg-gray-100 overflow-hidden" style={{ minHeight: "300px" }}>
          {children}
        </div>
        {/* bottom bar */}
        <div className="h-5 flex items-center justify-center" style={{ backgroundColor: "#1F2937" }}>
          <div className="w-10 h-2 rounded-full bg-gray-600" />
        </div>
      </div>
    </div>
  )
}

// ─── Survey Form Component ────────────────────────────────────────────
function SurveyForm() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [contact, setContact] = useState({ name: "", phone: "" })
  const [done, setDone] = useState(false)

  const questions = [
    {
      key: "field",
      q: "במה אתה עוסק?",
      options: ["מתקיני פרגולות / אלומיניום", "שיפוצניקים", "חשמלאים / אינסטלטורים", "אחר"],
    },
    {
      key: "calls",
      q: "כמה שיחות מלקוחות חדשים אתה מקבל בשבוע?",
      options: ["1–5", "6–15", "16–30", "30+"],
    },
    {
      key: "current",
      q: "איך אתה מנהל לידים היום?",
      options: ["בראש / בלי כלום", "פתקים / וואטסאפ", "אקסל", "CRM"],
    },
    {
      key: "pain",
      q: "מה הכי מפריע לך?",
      options: ["שוכח לחזור ללקוח", "שוכח מה נאמר בשיחה", "אין סדר בכלל"],
    },
    {
      key: "price",
      q: "כמה היית משלם על פתרון שזוכר הכל?",
      options: ["0 (לא הייתי משלם)", "עד 49₪", "99₪", "199₪+"],
    },
  ]

  const current = questions[step]

  if (done) {
    return (
      <div className="text-center py-6">
        <div className="text-4xl mb-3">🙏</div>
        <div className="font-bold text-lg text-gray-800 mb-2">תודה!</div>
        <p className="text-gray-500 text-sm">נעדכן אותך כשנפתח.</p>
      </div>
    )
  }

  if (step >= questions.length) {
    return (
      <div className="space-y-3">
        <p className="font-medium text-gray-700 text-center">שם וטלפון לעדכון:</p>
        <input
          placeholder="שם"
          value={contact.name}
          onChange={(e) => setContact((p) => ({ ...p, name: e.target.value }))}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm"
        />
        <input
          placeholder="טלפון"
          value={contact.phone}
          onChange={(e) => setContact((p) => ({ ...p, phone: e.target.value }))}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm"
        />
        <button
          onClick={() => setDone(true)}
          className="w-full text-white font-bold py-3 rounded-full"
          style={{ backgroundColor: PRIMARY }}
        >
          שלח
        </button>
      </div>
    )
  }

  return (
    <div>
      {/* Progress */}
      <div className="flex gap-1 mb-6">
        {questions.map((_, i) => (
          <div
            key={i}
            className="h-1.5 flex-1 rounded-full"
            style={{ backgroundColor: i <= step ? PRIMARY : "#E2E8F0" }}
          />
        ))}
      </div>

      <p className="font-semibold text-gray-800 text-center mb-5">{current.q}</p>
      <div className="space-y-2">
        {current.options.map((opt) => (
          <button
            key={opt}
            className="w-full border-2 rounded-xl py-3 px-4 text-right font-medium transition-colors"
            style={{
              borderColor: answers[current.key] === opt ? PRIMARY : "#E2E8F0",
              backgroundColor: answers[current.key] === opt ? "#EFF6FF" : "white",
              color: answers[current.key] === opt ? PRIMARY : "#374151",
            }}
            onClick={() => {
              setAnswers((prev) => ({ ...prev, [current.key]: opt }))
              setTimeout(() => setStep((s) => s + 1), 300)
            }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}
