/* Component imports */
import Hero from '@/components/Hero'
import GapSection from '@/components/GapSection'
import WhyItMattersSection from '@/components/WhyItMattersSection'
import ThreePillarsSection from '@/components/ThreePillarsSection'
import VisionSection from '@/components/VisionSection'
import BookSection from '@/components/BookSection'
import FinalCTASection from '@/components/FinalCTASection'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 01 — Hero */}
      <Hero />

      {/* 02 — The AI Readiness Gap */}
      <GapSection />

      {/* 03 — Why It Matters */}
      <WhyItMattersSection />

      {/* 04/05 — The SafeHaven System + the four systems */}
      <ThreePillarsSection />

      {/* 06 — Our Vision */}
      <VisionSection />

      {/* 07 — The Book */}
      <BookSection />

      {/* 08 — Get Involved */}
      <FinalCTASection />
    </main>
  )
}
