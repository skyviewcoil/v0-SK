import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SkyView - תקרות מתוחות יוקרתיות | תאורה משולבת ותאים שונים",
  description:
    "תקרות מתוחות פרימיום עם 3 גימורים (מבריק, סאטן, מט), 7 סוגי תאורה משולבת, ותאימות לחללים רטובים. התקנה מהירה בתל אביב וכל הארץ. אחריות 10 שנים.",
  keywords: [
    "תקרה מתוחה",
    "תקרות מתוחות",
    "תקרה יוקרתית",
    "תאורה משולבת",
    "תקרה לאמבטיה",
    "תקרה לחלל רטוב",
    "תקרה מוארת",
    "תקרה מודפסת",
    "דרוק",
  ],
  authors: [{ name: "SkyView" }],
  creator: "SkyView",
  publisher: "SkyView",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://skyview.co.il",
    siteName: "SkyView",
    title: "SkyView - תקרות מתוחות יוקרתיות",
    description: "תקרות מתוחות פרימיום עם תאורה משולבת, 3 גימורים, ותאימות לכל סוג חלל",
    images: [
      {
        url: "https://skyview.co.il/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SkyView - תקרות מתוחות",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyView - תקרות מתוחות יוקרתיות",
    description: "תקרות מתוחות פרימיום עם תאורה משולבת",
  },
  alternates: {
    canonical: "https://skyview.co.il",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SkyView",
    description: "ספק תקרות מתוחות יוקרתיות בישראל",
    url: "https://skyview.co.il",
    telephone: "+972-72-233-4455",
    email: "info@skyview.co.il",
    foundingDate: "2017",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IL",
      addressLocality: "תל אביב",
    },
    sameAs: [
      "https://www.facebook.com/skyview",
      "https://www.instagram.com/skyview",
    ],
  }

  return (
    <html lang="he" dir="rtl" className={geist.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
