import Link from 'next/link'
import Image from 'next/image'

/* Component imports */
import Hero from '@/components/Hero'
import MissionSection from '@/components/MissionSection'
import ChallengeSection from '@/components/ChallengeSection'
import ApproachSection from '@/components/ApproachSection'
import GlobalInitiatives from '@/components/GlobalInitiatives'
import ReadinessIndex from '@/components/ReadinessIndex'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Readiness Gap Clock embed */}
      <div className="mt-6 flex justify-center">
  <iframe
    src="/clock/embed/index.html"
    style={{ border: 'none', width: 260, height: 110 }}
    loading="lazy"
  />
</div>

      {/* Mission Section */}
      <MissionSection />

      {/* The Challenge Section */}
      <ChallengeSection />

      {/* Our Approach Section */}
      <ApproachSection />

      {/* Global Initiatives Section */}
      <GlobalInitiatives />

      {/* Societal Readiness Index Section */}
      <ReadinessIndex />

      {/* Call to Action Section */}
      <CallToAction />
    </main>
  )
}
