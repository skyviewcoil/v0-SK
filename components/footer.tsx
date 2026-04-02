import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16 text-right">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-foreground">SkyView</span>
            </Link>
            <p className="text-muted leading-relaxed max-w-sm">
              תקרות מתוחות מעוצבות לבית ולעסק עם גימורים מבריקים, מט, סאטן, תאורה משולבת ועיצוב בהתאמה אישית.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">ניווט</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <Link href="#projects" className="hover:text-foreground transition-colors">
                  פרויקטים
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-foreground transition-colors">
                  אודות
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground transition-colors">
                  שירותים
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-foreground transition-colors">
                  צור קשר
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">יצירת קשר</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a href="mailto:info@skyview.co.il" className="hover:text-foreground transition-colors">
                  info@skyview.co.il
                </a>
              </li>
              <li>
                <a href="tel:+972722334455" className="hover:text-foreground transition-colors">
                  +972-72-233-4455
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row-reverse md:items-center justify-between gap-4 text-sm text-muted">
          <p>© 2025 SkyView. כל הזכויות שמורות.</p>
          <div className="flex gap-6 flex-row-reverse">
            <Link href="#" className="hover:text-foreground transition-colors">
              פרטיות
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              תנאים
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
