import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { Expertise } from "@/components/expertise"
import { Finishes } from "@/components/finishes"
import { Lighting } from "@/components/lighting"
import { Comparison } from "@/components/comparison"
import { Projects } from "@/components/projects"
import { Trust } from "@/components/trust"
import { FAQ } from "@/components/faq"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import { faqSchema, localBusinessSchema } from "@/lib/schema"

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Philosophy />
        <Expertise />
        <Finishes />
        <Lighting />
        <Comparison />
        <Projects />
        <Trust />
        <FAQ />
        <CallToAction />
        <Footer />
      </main>
    </>
  )
}
