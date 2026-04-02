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

export default function Home() {
  return (
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
  )
}
