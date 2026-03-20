import Link from 'next/link'

/* Component imports */
import Hero from '@/components/Hero'
import ThreePillarsSection from '@/components/ThreePillarsSection'
import HomeNewsletterSignup from '@/components/HomeNewsletterSignup'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* YouTube Video */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container-wide px-4 md:px-6">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2">
              SafeHaven&apos;s Vision
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
              To create a globally resilient and adaptive civilization where every individual, institution, and society can thrive safely and equitably in the era shaped by advanced AI and superintelligence.
            </p>
          </div>
          <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-4xl mx-auto rounded-xl md:rounded-2xl shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/DfFzAlDSeUY"
              title="Preparing Civilisation for the Advent of AI and Superintelligence"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <ThreePillarsSection />

      {/* Call to Action - Newsletter Focus */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-[var(--primary)] to-[#2c4c7c] text-white">
        <div className="container-wide px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Stay Informed</h2>
            <p className="text-base md:text-xl mb-6 md:mb-8 text-white/90">
              Subscribe to our newsletter for updates on AI developments, SafeHaven initiatives, and opportunities to get involved.
            </p>
            <HomeNewsletterSignup />
            <div className="mt-6 md:mt-8">
              <Link href="/join" className="btn-accent text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
