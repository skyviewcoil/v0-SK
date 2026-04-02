"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between flex-row-reverse">
          {/* Logo - right side for RTL */}
          <Link href="/" className="flex-shrink-0 group">
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? "text-foreground group-hover:text-accent" : "text-white group-hover:text-accent"
            }`}>SkyView</span>
          </Link>

          {/* Desktop Navigation - center */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/stretch-ceiling"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground hover:text-accent" : "text-white/90 hover:text-white"
              }`}
            >
              תקרה מתוחה
            </Link>
            <Link
              href="#faq"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground hover:text-accent" : "text-white/90 hover:text-white"
              }`}
            >
              שאלות נפוצות
            </Link>
            <Link
              href="#services"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground hover:text-accent" : "text-white/90 hover:text-white"
              }`}
            >
              שירותים
            </Link>
            <Link
              href="#about"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground hover:text-accent" : "text-white/90 hover:text-white"
              }`}
            >
              אודות
            </Link>
            <Link
              href="#projects"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground hover:text-accent" : "text-white/90 hover:text-white"
              }`}
            >
              פרויקטים
            </Link>
          </nav>

          {/* CTA Button + Mobile Menu - left side for RTL */}
          <div className="flex items-center gap-4">
            <button className="hidden md:inline-block px-6 py-2.5 bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-colors">
              להצעת מחיר
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-6 pt-2 border-t border-border/20 space-y-1 bg-background/95 backdrop-blur-md -mx-4 px-4">
            <Link
              href="/stretch-ceiling"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-medium text-foreground hover:text-accent py-3 text-right"
            >
              תקרה מתוחה
            </Link>
            <Link
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-medium text-foreground hover:text-accent py-3 text-right"
            >
              פרויקטים
            </Link>
            <Link
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-medium text-foreground hover:text-accent py-3 text-right"
            >
              אודות
            </Link>
            <Link
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-medium text-foreground hover:text-accent py-3 text-right"
            >
              שירותים
            </Link>
            <Link
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-medium text-foreground hover:text-accent py-3 text-right"
            >
              שאלות נפוצות
            </Link>
            <button className="w-full mt-4 px-6 py-3 bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-colors">
              להצעת מחיר
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
