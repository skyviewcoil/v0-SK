import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StretchCeilingHero } from "@/components/stretch-ceiling/hero"
import { WhatIsStretchCeiling } from "@/components/stretch-ceiling/what-is"
import { WhyChoose } from "@/components/stretch-ceiling/why-choose"
import { Finishes } from "@/components/stretch-ceiling/finishes"
import { LightingIntegration } from "@/components/stretch-ceiling/lighting"
import { WhereItFits } from "@/components/stretch-ceiling/where-fits"
import { Limitations } from "@/components/stretch-ceiling/limitations"
import { ComparisonToDrywall } from "@/components/stretch-ceiling/comparison"
import { ProjectPreview } from "@/components/stretch-ceiling/projects"
import { Process } from "@/components/stretch-ceiling/process"
import { WhySkyView } from "@/components/stretch-ceiling/why-skyview"
import { StretchCeilingFAQ } from "@/components/stretch-ceiling/faq"
import { FinalCTA } from "@/components/stretch-ceiling/final-cta"

export const metadata = {
  title: "תקרה מתוחה | מה זה, יתרונות, סוגים ופתרונות תאורה | SkyView",
  description:
    "תקרה מתוחה היא פתרון תקרה נקי, מהיר ומעוצב לחללים פרטיים ועסקיים. בעמוד זה תמצאו הסבר על סוגי גימור, אפשרויות תאורה, יתרונות, מגבלות ושימושים נפוצים.",
  keywords: [
    "תקרה מתוחה",
    "תקרות מתוחות",
    "מה זה תקרה מתוחה",
    "תקרה מתוחה מחיר",
    "תקרה מתוחה לסלון",
    "תקרה מתוחה לאמבטיה",
    "תקרה מתוחה מוארת",
    "תקרה מתוחה עם תאורה",
    "תקרה מתוחה מבריקה",
    "תקרה מתוחה מט",
    "תקרה מתוחה סאטן",
    "בריסול",
  ],
}

export default function StretchCeilingPage() {
  return (
    <>
      <main className="min-h-screen">
        <Header />
        <StretchCeilingHero />
        <WhatIsStretchCeiling />
        <WhyChoose />
        <Finishes />
        <LightingIntegration />
        <WhereItFits />
        <Limitations />
        <ComparisonToDrywall />
        <ProjectPreview />
        <Process />
        <WhySkyView />
        <StretchCeilingFAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}
