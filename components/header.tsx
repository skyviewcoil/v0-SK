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
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-foreground">SkyView</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 flex-row-reverse">
            <Link
              href="#"
              className="text-sm text-foreground hover:text-accent transition-colors"
            >
              דף הבית
            </Link>
            <Link
              href="#"
              className="text-sm text-foreground hover:text-accent transition-colors"
            >
              תקרות מתוחות
            </Link>
            <Link
              href="#"
              className="text-sm text-foreground hover:text-accent transition-colors"
            >
              מחירים
            </Link>
            <Link
              href="#"
              className="text-sm text-foreground hover:text-accent transition-colors"
            >
              פרויקטים
            </Link>
            <Link
              href="#"
              className="text-sm text-foreground hover:text-accent transition-colors"
            >
              לעסקים
            </Link>
            <Link
              href="#"
              className="text-sm text-foreground hover:text-accent transition-colors"
            >
              אודות
            </Link>
          </nav>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center gap-4 flex-row-reverse">
            <button className="hidden md:inline-block px-6 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors">
              להצעת מחיר
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
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
          <nav className="md:hidden pb-4 space-y-3 flex flex-col-reverse">
            <button className="w-full px-6 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors">
              להצעת מחיר
            </button>
            <Link
              href="#"
              className="block text-sm text-foreground hover:text-accent py-2"
            >
              אודות
            </Link>
            <Link
              href="#"
              className="block text-sm text-foreground hover:text-accent py-2"
            >
              לעסקים
            </Link>
            <Link
              href="#"
              className="block text-sm text-foreground hover:text-accent py-2"
            >
              פרויקטים
            </Link>
            <Link
              href="#"
              className="block text-sm text-foreground hover:text-accent py-2"
            >
              מחירים
            </Link>
            <Link
              href="#"
              className="block text-sm text-foreground hover:text-accent py-2"
            >
              תקרות מתוחות
            </Link>
            <Link
              href="#"
              className="block text-sm text-foreground hover:text-accent py-2"
            >
              דף הבית
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
