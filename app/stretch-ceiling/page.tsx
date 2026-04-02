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

// Proof items for the trust row
const proofItems = [
  { label: "אחריות על היריעה", value: "10 שנים" },
  { label: "התקנה", value: "נקייה ומהירה" },
  { label: "גימורים עיקריים", value: "3 סוגים" },
  { label: "פתרונות תאורה", value: "7 אפשרויות" },
  { label: "שירות", value: "בכל הארץ" },
]

// Reasons to choose stretch ceiling
const reasons = [
  {
    title: "התקנה מהירה יחסית",
    description: "בדרך כלל 1-3 ימי עבודה בלבד, בהשוואה לעבודות רטובות שעלולות להימשך שבועות.",
  },
  {
    title: "פחות אבק ולכלוך",
    description: "התקנה נקייה וחסכונית בהשוואה לעבודות בנייה קונבנציונליות.",
  },
  {
    title: "מראה חלק ואחיד",
    description: "סיום מושלם ללא גרגרים, שגעים או פגמים שנוצרים מעבודות רטובות.",
  },
  {
    title: "שילוב תאורה גמיש",
    description: "אפשרות לשלב פסי לד, ספוטים, אורות תלויים, תקרה מוארת ופתרונות מיוחדים.",
  },
  {
    title: "מגוון גימורים",
    description: "בחירה בין מבריק, סאטן ומט — כל אחד יוצר אפקט ויזואלי שונה.",
  },
  {
    title: "פתרון לחללים בעייתיים",
    description: "מתאימה לחדרי רחצה, מסדרונות, לוביים, וחללים עם תשתיות מורכבות.",
  },
]

// Finishes data
const finishes = [
  {
    id: "glossy",
    name: "מבריק",
    description: "גימור מבריק המשקף אור ומרחב. יוצר תחושה של יוקרה, עומק ודרמטיות.",
    best: "סלונים, לוביים, משרדים פרימיום",
  },
  {
    id: "satin",
    name: "סאטן",
    description: "ברק רך וקלוש המאזן בין מבריק למט. תחושה אלגנטית ויומיומית.",
    best: "חדרי שינה, דירות, משרדים",
  },
  {
    id: "matte",
    name: "מט",
    description: "גימור לא מבריק, דומה לתקרת גבס קלאסית. שקט ומשלים.",
    best: "חדרי שינה, חדרי ילדים, חללי עבודה",
  },
]

// Lighting types
const lightingTypes = [
  {
    name: "פסי לד שקועים",
    image: "/images/stretch-led-recessed-lines.jpg",
    description: "קווים ישרים של אור משולבים בתוך המשטח הממתיח.",
  },
  {
    name: "מסילה מגנטית שקועה",
    image: "/images/stretch-magnetic-recessed-track.jpg",
    description: "מערכת מסילה מגנטית המאפשרת הנחת גופי תאורה מודולריים.",
  },
  {
    name: "ספוטים שקועים",
    image: "/images/stretch-recessed-spotlights.jpg",
    description: "אורות ספוט קטנים השקועים ישירות בתקרה.",
  },
  {
    name: "תאורה צמודת תקרה",
    image: "/images/stretch-surface-mounted.jpg",
    description: "גופי תאורה המחוברים ישירות לפני המשטח.",
  },
  {
    name: "תאורה תלויה",
    image: "/images/stretch-pendant-light.jpg",
    description: "גופי תאורה תלויים היורדים מתחת לתקרה.",
  },
  {
    name: "תקרה מוארת",
    image: "/images/stretch-backlit-ceiling.jpg",
    description: "היריעה עצמה מוארת מבפנים ויוצרת אור אמביאנטי רך.",
  },
  {
    name: "תקרה מוארת עם הדפס",
    image: "/images/stretch-printed-backlit.jpg",
    description: "יריעה מודפסת ומוארת מבפנים יוצרת אפקט דרמטי.",
  },
]

// Room applications
const rooms = [
  { name: "סלון", description: "מוסיפה דרמה וקסם, בעיקר בגימור מבריק או תאורה משולבת." },
  { name: "אמבטיה", description: "פתרון אידיאלי לחללים רטובים, עמידה ללחות." },
  { name: "מטבח", description: "מתאימה במיוחד כשיש צנרת או תשתיות שרוצים להסתיר." },
  { name: "חדר שינה", description: "גימור מט או סאטן עם תאורה רכה יוצרים אווירה רגועה." },
  { name: "משרד", description: "פתרון מרשים לחללי עבודה עם תאורה משולבת." },
  { name: "לובי", description: "תקרה גדולה עם תאורה משולבת יוצרת רושם ראשוני חזק." },
]

// Important to know items
const importantItems = [
  {
    title: "תקרה מתוחה מורידה את גובה התקרה",
    description: "יש לקחת בחשבון הפרש של 5-10 ס\"מ לפחות בין התקרה הקיימת לבין היריעה.",
  },
  {
    title: "לא מתאימה לכל סוג תקרה",
    description: "תקרות עם בעיות מבניות חמורות או רטיבות פעילה דורשות טיפול מקדים.",
  },
  {
    title: "דורשת תכנון תאורה מראש",
    description: "יש לתכנן את מיקום גופי התאורה לפני ההתקנה.",
  },
  {
    title: "רגישות לחום גבוה מאוד",
    description: "לא מומלץ להתקין ליד מקורות חום ישירים.",
  },
]

// Comparison data
const comparisonData = [
  { category: "זמן התקנה", stretch: "1-3 ימים", drywall: "שבוע ומעלה" },
  { category: "אבק ולכלוך", stretch: "מינימלי", drywall: "משמעותי" },
  { category: "גמישות עיצובית", stretch: "גבוהה", drywall: "בינונית" },
  { category: "שילוב תאורה", stretch: "מגוון רחב", drywall: "מוגבל" },
  { category: "עמידות ללחות", stretch: "גבוהה", drywall: "נמוכה" },
  { category: "תחזוקה", stretch: "מינימלית", drywall: "דורשת צביעה מחדש" },
]

// Process steps
const processSteps = [
  { number: "01", title: "שיחה ראשונית", description: "הבנת הצורך, התקציב והאפקט הרצוי." },
  { number: "02", title: "בדיקת חלל", description: "מדידות, בדיקת תשתיות וניתוח אפשרויות." },
  { number: "03", title: "בחירת גימור ותאורה", description: "החלטה משותפת על סוג הגימור ופתרון התאורה." },
  { number: "04", title: "ייצור והתקנה", description: "ייצור לפי מידות מדויקות והתקנה מקצועית." },
]

// FAQ data
const faqItems = [
  {
    question: "כמה זמן לוקחת התקנה של תקרה מתוחה?",
    answer: "התקנה רגילה לוקחת בין יום לשלושה ימים, בהתאם לגודל החלל ומורכבות פתרונות התאורה.",
  },
  {
    question: "האם תקרה מתוחה מתאימה לאמבטיה?",
    answer: "כן. תקרה מתוחה עמידה ללחות ומתאימה לחללים רטובים כמו אמבטיות ומטבחים.",
  },
  {
    question: "מה ההבדל בין גימור מבריק לסאטן?",
    answer: "גימור מבריק משקף אור ותמונות בצורה חזקה, בעוד סאטן מציע ברק רך וקלוש יותר.",
  },
  {
    question: "כמה גובה מאבדים בהתקנת תקרה מתוחה?",
    answer: "בדרך כלל 5-10 ס\"מ, תלוי בסוג התאורה ובמצב התקרה הקיימת.",
  },
  {
    question: "האם אפשר לשלב תאורה בתקרה מתוחה?",
    answer: "כן. יש 7 אפשרויות תאורה שונות, מפסי לד שקועים ועד תקרה מוארת מלאה.",
  },
  {
    question: "מה האחריות על תקרה מתוחה?",
    answer: "אנחנו מעניקים אחריות ל-10 שנים על היריעה בתנאי שימוש רגילים.",
  },
]

export default function StretchCeilingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Header />

      <main>
        {/* ========== HERO SECTION ========== */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
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

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm md:text-base text-white/80 mb-4 tracking-wide">
              פתרונות תקרה מתקדמים
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              תקרה מתוחה
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl mx-auto leading-relaxed">
              פתרון תקרה נקי, מהיר ומדויק עם אפשרויות גימור, תאורה ועיצוב לחללים פרטיים ועסקיים.
            </p>
            <p className="text-base md:text-lg text-white/75 mb-10 max-w-xl mx-auto leading-relaxed">
              התקנה מהירה, מראה חלק ואחיד, שילוב פתרונות תאורה מתקדמים — ללא עבודות רטובות וללא אבק.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="px-8 py-4 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors text-lg"
              >
                לקבלת הצעת מחיר
              </Link>
              <Link
                href="#projects"
                className="px-8 py-4 bg-white/15 text-white font-medium hover:bg-white/25 transition-colors border border-white/30 text-lg"
              >
                צפייה בפרויקטים
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            <div className="flex flex-col items-center gap-2">
              <span>גלול למטה</span>
              <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* ========== PROOF ROW ========== */}
        <section className="py-8 bg-secondary/60 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
              {proofItems.map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">{item.value}</p>
                  <p className="text-sm text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== WHAT IS STRETCH CEILING ========== */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary order-last md:order-first">
                <Image
                  src="/images/service-what-is-ceiling.jpg"
                  alt="מבנה תקרה מתוחה - מסגרת אלומיניום ויריעה"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="text-right">
                <p className="text-sm font-semibold text-accent mb-4">הגדרה</p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                  מהי תקרה מתוחה
                </h2>
                <div className="space-y-6 text-lg text-muted leading-relaxed">
                  <p>
                    תקרה מתוחה היא מערכת תקרה המורכבת ממסגרת אלומיניום המחוברת לקירות, ויריעה דקה של PVC או פוליאסטר המשוזרת בתוך המסגרת.
                  </p>
                  <p>
                    היריעה יוצרת חלל אוויר בין התקרה הקיימת לבין המשטח החדש. חלל זה משמש לשילוב מערכות תאורה, צינורות וחוטי חשמל — תוך שמירה על מראה חלק ונקי.
                  </p>
                  <p>
                    ההתקנה נקייה, מהירה וללא אבק. ניתן לבחור מ־3 גימורים ו־7 אפשרויות תאורה.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== WHEN MAKES SENSE ========== */}
        <section className="py-20 md:py-28 bg-secondary/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent mb-4">מתי לבחור</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                מתי תקרה מתוחה היא הפתרון הנכון
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                תקרה מתוחה מתאימה במיוחד למצבים הבאים:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">חידוש תקרה קיימת</h3>
                <p className="text-muted">כשהתקרה הקיימת פגומה, לא אחידה, או דורשת עבודות שיפוץ יקרות.</p>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">הסתרת תשתיות</h3>
                <p className="text-muted">כשיש צנרת, כבלים או תשתיות שרוצים להסתיר בצורה אסתטית.</p>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">שילוב תאורה מתקדמת</h3>
                <p className="text-muted">כשרוצים לשלב פתרונות תאורה משולבים בתקרה עצמה.</p>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">חללים רטובים</h3>
                <p className="text-muted">אמבטיות, מטבחים וחללים עם לחות גבוהה שדורשים פתרון עמיד.</p>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">התקנה מהירה</h3>
                <p className="text-muted">כשצריך לסיים את העבודה מהר, ללא עבודות רטובות ואבק.</p>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">אפקט עיצובי מיוחד</h3>
                <p className="text-muted">כשרוצים להשיג מראה מיוחד כמו תקרה מוארת או הדפס מותאם.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== WHY CHOOSE ========== */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-right mb-16">
              <p className="text-sm font-semibold text-accent mb-4">יתרונות</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                למה בוחרים בתקרה מתוחה
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, index) => (
                <div key={index} className="pb-8 border-b border-border last:border-b-0 md:border-b-0 md:pb-0">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-bold text-accent/30">0{index + 1}</span>
                    <div className="text-right flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                      <p className="text-muted">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== FINISHES ========== */}
        <section className="py-20 md:py-28 bg-secondary/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent mb-4">גימורים</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                סוגי גימור עיקריים
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                שלושה גימורים שונים, כל אחד עם אופי ויזואלי ייחודי.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {finishes.map((finish) => (
                <div key={finish.id} className="bg-card rounded-lg overflow-hidden border border-border">
                  <div className="relative aspect-video bg-secondary">
                    <Image
                      src={`/images/stretch-finish-${finish.id}.jpg`}
                      alt={`גימור ${finish.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 text-right">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{finish.name}</h3>
                    <p className="text-muted mb-4">{finish.description}</p>
                    <p className="text-sm text-accent">מתאים ל: {finish.best}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== LIGHTING ========== */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-right mb-16">
              <p className="text-sm font-semibold text-accent mb-4">תאורה</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                פתרונות תאורה שאפשר לשלב
              </h2>
              <p className="text-lg text-muted max-w-3xl">
                שבע אפשרויות תאורה שונות, כל אחת עם אופי ויתרונות משלה.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {lightingTypes.map((lighting, index) => (
                <div key={index} className="group">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary mb-4">
                    <Image
                      src={lighting.image}
                      alt={lighting.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 text-right">{lighting.name}</h3>
                  <p className="text-sm text-muted text-right">{lighting.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== ROOM APPLICATIONS ========== */}
        <section className="py-20 md:py-28 bg-secondary/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent mb-4">יישומים</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                התאמה לפי חללים
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rooms.map((room, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border text-right">
                  <h3 className="text-xl font-bold text-foreground mb-2">{room.name}</h3>
                  <p className="text-muted">{room.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== IMPORTANT TO KNOW ========== */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="text-right">
                <p className="text-sm font-semibold text-accent mb-4">חשוב לדעת</p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                  לפני שמתקינים
                </h2>
                <div className="space-y-6">
                  {importantItems.map((item, index) => (
                    <div key={index} className="pb-6 border-b border-border last:border-b-0 last:pb-0">
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary">
                <Image
                  src="/images/service-installation-process.jpg"
                  alt="התקנת תקרה מתוחה"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========== COMPARISON ========== */}
        <section className="py-20 md:py-28 bg-secondary/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent mb-4">השוואה</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                תקרה מתוחה מול גבס
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-lg border border-border overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-3 bg-secondary/60 p-4 border-b border-border">
                  <div className="text-right font-bold text-foreground">קטגוריה</div>
                  <div className="text-center font-bold text-accent">תקרה מתוחה</div>
                  <div className="text-center font-bold text-muted">גבס</div>
                </div>
                {/* Rows */}
                {comparisonData.map((row, index) => (
                  <div key={index} className="grid grid-cols-3 p-4 border-b border-border last:border-b-0">
                    <div className="text-right text-foreground">{row.category}</div>
                    <div className="text-center text-accent font-medium">{row.stretch}</div>
                    <div className="text-center text-muted">{row.drywall}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== PROJECTS ========== */}
        <section id="projects" className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent mb-4">גלריה</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                פרויקטים נבחרים
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary group">
                <Image
                  src="/images/service-living-room.jpg"
                  alt="פרויקט סלון"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 right-6 text-white text-right">
                  <p className="text-lg font-bold">סלון פרטי</p>
                  <p className="text-sm text-white/80">גימור מבריק + תאורה שקועה</p>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary group">
                <Image
                  src="/images/service-bathroom-installation.jpg"
                  alt="פרויקט אמבטיה"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 right-6 text-white text-right">
                  <p className="text-lg font-bold">אמבטיה יוקרתית</p>
                  <p className="text-sm text-white/80">גימור מט + ספוטים שקועים</p>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary group">
                <Image
                  src="/images/service-kitchen-ceiling.jpg"
                  alt="פרויקט מטבח"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 right-6 text-white text-right">
                  <p className="text-lg font-bold">מטבח מודרני</p>
                  <p className="text-sm text-white/80">גימור סאטן + מסילה מגנטית</p>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary group">
                <Image
                  src="/images/service-office-commercial.jpg"
                  alt="פרויקט משרד"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 right-6 text-white text-right">
                  <p className="text-lg font-bold">משרד מסחרי</p>
                  <p className="text-sm text-white/80">תקרה מוארת + פסי לד</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== PROCESS ========== */}
        <section className="py-20 md:py-28 bg-secondary/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent mb-4">תהליך</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                איך מתבצע התהליך
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-accent/30 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== WHY SKYVIEW ========== */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary">
                <Image
                  src="/images/philosophy-install.jpg"
                  alt="צוות SkyView בעבודה"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="text-right">
                <p className="text-sm font-semibold text-accent mb-4">למה אנחנו</p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                  למה לעבוד עם SkyView
                </h2>
                <div className="space-y-6 text-lg text-muted leading-relaxed">
                  <p>
                    SkyView מתמחה בתקרות מתוחות כבר שנים, עם מאות פרויקטים מוצלחים בכל רחבי הארץ.
                  </p>
                  <p>
                    אנחנו מציעים ייעוץ מקצועי, תכנון מדויק, והתקנה ברמה הגבוהה ביותר — עם אחריות מלאה ל-10 שנים על היריעה.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <p className="text-3xl font-bold text-accent">10+</p>
                    <p className="text-sm text-muted">שנות ניסיון</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <p className="text-3xl font-bold text-accent">500+</p>
                    <p className="text-sm text-muted">פרויקטים</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <p className="text-3xl font-bold text-accent">10</p>
                    <p className="text-sm text-muted">שנות אחריות</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <p className="text-3xl font-bold text-accent">100%</p>
                    <p className="text-sm text-muted">שביעות רצון</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== FAQ ========== */}
        <section className="py-20 md:py-28 bg-secondary/40">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent mb-4">שאלות נפוצות</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                שאלות ותשובות
              </h2>
            </div>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-card rounded-lg border border-border p-6 text-right">
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.question}</h3>
                  <p className="text-muted">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== FINAL CTA ========== */}
        <section id="contact" className="py-20 md:py-28 bg-accent text-accent-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              מוכנים להתחיל?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              צרו קשר עוד היום לקבלת הצעת מחיר מותאמת אישית ללא התחייבות.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+972501234567"
                className="px-8 py-4 bg-white text-accent font-medium hover:bg-white/90 transition-colors text-lg"
              >
                התקשרו עכשיו
              </Link>
              <Link
                href="https://wa.me/972501234567"
                className="px-8 py-4 bg-transparent border-2 border-white font-medium hover:bg-white/10 transition-colors text-lg"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
