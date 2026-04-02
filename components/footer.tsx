import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-20 md:py-28 border-t border-border bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand - larger presence */}
          <div className="md:col-span-5 text-right">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-bold text-background">SkyView</span>
            </Link>
            <p className="text-background/60 leading-relaxed max-w-sm text-lg">
              תקרות מתוחות יוקרתיות עם שלושה גימורים, שבעה סוגי תאורה ועיצוב בהתאמה אישית.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-8 text-right">
            <h4 className="text-sm font-semibold text-background mb-5 tracking-wider">ניווט</h4>
            <ul className="space-y-3 text-background/60">
              <li>
                <Link href="#projects" className="hover:text-background transition-colors">
                  פרויקטים
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-background transition-colors">
                  אודות
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-background transition-colors">
                  שירותים
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-background transition-colors">
                  שאלות נפוצות
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 text-right">
            <h4 className="text-sm font-semibold text-background mb-5 tracking-wider">יצירת קשר</h4>
            <ul className="space-y-3 text-background/60">
              <li>
                <a href="mailto:info@skyview.co.il" className="hover:text-background transition-colors">
                  info@skyview.co.il
                </a>
              </li>
              <li>
                <a href="tel:+972722334455" className="hover:text-background transition-colors">
                  072-233-4455
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row-reverse md:items-center justify-between gap-4 text-sm text-background/40">
          <p>SkyView 2025 כל הזכויות שמורות.</p>
          <div className="flex gap-6 flex-row-reverse">
            <Link href="#" className="hover:text-background/70 transition-colors">
              מדיניות פרטיות
            </Link>
            <Link href="#" className="hover:text-background/70 transition-colors">
              תנאי שימוש
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
