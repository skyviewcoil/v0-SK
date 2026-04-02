import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "תקרה מתוחה | SkyView",
  description:
    "תקרה מתוחה - פתרון תקרה מתקדם עם גימורים מגוונים, תאורה משולבת והתקנה נקייה. אחריות ל־10 שנים. שירות בכל הארץ.",
}

// Proof row items
const proofItems = [
  { value: "10 שנים", label: "אחריות" },
  { value: "1-3 ימים", label: "זמן התקנה" },
  { value: "3 סוגים", label: "גימורים" },
  { value: "7 אפשרויות", label: "תאורה" },
]

// Why choose - branded section (like "Why Boty")
const whyChoose = [
  {
    title: "התקנה נקייה",
    description: "ללא עבודות רטובות, ללא אבק, ללא הנזקים שמתלווים לעבודות בנייה קונבנציונליות.",
    icon: "✓",
  },
  {
    title: "מראה מושלם",
    description: "משטח חלק ואחיד, ללא גרגרים או שגעים. סיום מקצועי בדיוק גבוה.",
    icon: "✓",
  },
  {
    title: "תאורה משולבת",
    description: "שבע אפשרויות תאורה — מפסי לד עד תקרה מוארת מלאה עם הדפס מוכתם.",
    icon: "✓",
  },
  {
    title: "עמידה ללחות",
    description: "מתאימה לחללים רטובים — אמבטיות, מטבחים, מקווות. עמידות מלאה.",
    icon: "✓",
  },
]

// Finishes (compact)
const finishes = [
  {
    id: "glossy",
    name: "מבריק",
    description: "משקף אור ומרחב, יוצר יוקרה ודרמטיות.",
  },
  {
    id: "satin",
    name: "סאטן",
    description: "ברק רך וקלוש, אלגנטי ויומיומי בו־זמנית.",
  },
  {
    id: "matte",
    name: "מט",
    description: "לא מבריק, דומה לגבס קלאסי, שקט ומשלים.",
  },
]

// Lighting (compact showcase)
const lightingTypes = [
  { name: "פסי לד שקועים", image: "/images/stretch-led-recessed-lines.jpg" },
  { name: "מסילה מגנטית", image: "/images/stretch-magnetic-recessed-track.jpg" },
  { name: "ספוטים שקועים", image: "/images/stretch-recessed-spotlights.jpg" },
  { name: "תאורה תלויה", image: "/images/stretch-pendant-light.jpg" },
  { name: "תאורה צמודה", image: "/images/stretch-surface-mounted.jpg" },
  { name: "תקרה מוארת", image: "/images/stretch-backlit-ceiling.jpg" },
]

// Room applications (proof/evidence)
const applications = [
  { name: "סלון", image: "/images/service-living-room.jpg" },
  { name: "אמבטיה", image: "/images/service-bathroom-installation.jpg" },
  { name: "מטבח", image: "/images/service-kitchen-ceiling.jpg" },
  { name: "משרד", image: "/images/service-office-commercial.jpg" },
]

// FAQ
const faqItems = [
  {
    question: "כמה זמן לוקחת התקנה?",
    answer: "בדרך כלל 1-3 ימי עבודה, בהתאם לגודל החלל ומורכבות פתרון התאורה.",
  },
  {
    question: "האם מתאימה לאמבטיה?",
    answer: "כן. תקרה מתוחה עמידה ללחות ומתאימה לכל חללי הרטיבות.",
  },
  {
    question: "מה ההבדל בין הגימורים?",
    answer: "מבריק משקף אור חזק, סאטן משקף בעדינות, ומט לא משקף כלל.",
  },
  {
    question: "כמה גובה מאבדים?",
    answer: "בדרך כלל 5-10 ס״מ, תלוי בסוג התאורה ובמצב התקרה הקיימת.",
  },
]

export default function StretchCeilingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Header />

      <main>
        {/* ===== FULL HERO ===== */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/stretch-ceiling-hero.jpg"
              alt="תקרה מתוחה בסלון מודרני"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              תקרה מתוחה
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              פתרון תקרה נקי, מהיר ומדויק. התקנה בלי אבק ובלי עבודות רטובות.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="px-8 py-4 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
              >
                לקבלת הצעת מחיר
              </Link>
              <Link
                href="#projects"
                className="px-8 py-4 bg-white/15 text-white font-medium hover:bg-white/25 transition-colors border border-white/30"
              >
                צפייה בפרויקטים
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            <div className="flex flex-col items-center gap-2">
              <span>גלול</span>
              <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* ===== PROOF ROW ===== */}
        <section className="py-8 bg-secondary/60 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {proofItems.map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">{item.value}</p>
                  <p className="text-sm text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== INTRO: WHAT IS IT ===== */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              מה זה תקרה מתוחה
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8 max-w-2xl mx-auto">
              מערכת תקרה המורכבת ממסגרת אלומיניום ויריעה דקה של PVC או פוליאסטר. התקנה נקייה, מהירה, וללא כל אבק או הנזקים שמתלווים לעבודות רטובות.
            </p>
            <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
              זמן התקנה: 1-3 ימים. אחריות: 10 שנים. גימורים: 3 סוגים. תאורה: 7 אפשרויות.
            </p>
          </div>
        </section>

        {/* ===== LARGE SPLIT: HOW & WHY ===== */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/service-what-is-ceiling.jpg"
                  alt="מבנה תקרה מתוחה"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="text-right">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                  איך זה עובד
                </h2>
                <div className="space-y-6 text-lg text-muted leading-relaxed">
                  <p>
                    מסגרת אלומיניום מחוברת לקירות החלל. יריעת PVC או פוליאסטר משוזרת בתוך המסגרת תוך הפעלת חום מדויק.
                  </p>
                  <p>
                    חלל אוויר נוצר בין התקרה הקיימת לבין היריעה החדשה. במרחב זה מתקינים את מערכות התאורה, צינורות וחוטי חשמל.
                  </p>
                  <p>
                    התוצאה: משטח חלק ודקיק, קום בלי כל בליטה או חוט ראוי.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== "WHY CHOOSE" BRANDED SECTION ===== */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                למה SkyView
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChoose.map((reason, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl text-accent mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FINISHES & LIGHTING SHOWCASE ===== */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Finishes */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  גימורים
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {finishes.map((finish) => (
                  <div key={finish.id} className="text-center">
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-secondary">
                      <Image
                        src={`/images/stretch-finish-${finish.id}.jpg`}
                        alt={finish.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {finish.name}
                    </h3>
                    <p className="text-muted">{finish.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lighting */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  פתרונות תאורה
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lightingTypes.map((lighting, index) => (
                  <div key={index} className="group">
                    <div className="relative aspect-square rounded-lg overflow-hidden mb-3 bg-secondary">
                      <Image
                        src={lighting.image}
                        alt={lighting.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-foreground text-center">
                      {lighting.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== APPLICATIONS / PROOF SECTION ===== */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                יישומים בפועל
              </h2>
              <p className="text-lg text-muted mt-4 max-w-2xl mx-auto">
                תקרה מתוחה של SkyView בחללים אמיתיים
              </p>
            </div>

            <div id="projects" className="grid md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-secondary">
                    <Image
                      src={app.image}
                      alt={app.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground text-right">
                    {app.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ / CLOSING CTA ===== */}
        <section className="py-20 md:py-28 bg-secondary/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                שאלות נפוצות
              </h2>
            </div>

            <div className="space-y-8 mb-16">
              {faqItems.map((item, index) => (
                <div key={index} className="text-right">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.question}
                  </h3>
                  <p className="text-lg text-muted">{item.answer}</p>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div id="contact" className="bg-accent/10 border border-accent/20 rounded-lg p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                מוכנים להשקיע בתקרה מתוחה?
              </h2>
              <p className="text-lg text-muted mb-8 max-w-xl mx-auto">
                צרו איתנו קשר לייעוץ חינם, בדיקה במקום, והצעת מחיר מדויקת.
              </p>
              <Link
                href="tel:+972-XXX-XXXX"
                className="inline-block px-8 py-4 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors text-lg"
              >
                בואו נדבר
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
