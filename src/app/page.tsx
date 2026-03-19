import Link from 'next/link'
import Image from 'next/image'

/* Component imports */
import Hero from '@/components/Hero'
import ThreePillarsSection from '@/components/ThreePillarsSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Readiness Gap Clock embed */}
      <div className="mt-6 flex justify-center">
  <iframe
            src="/clock/embed/index.html"
            style={{ border: 'none', width: '100%', height: '90px', overflow: 'hidden' }}
            scrolling="no"
            loading="lazy"
          />
</div>

      {/* Three Pillars Section */}
      <ThreePillarsSection />

      {/* Call to Action - Newsletter Focus */}
      <section className="py-20 bg-gradient-to-r from-[var(--primary)] to-[#2c4c7c] text-white">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Informed</h2>
            <p className="text-xl mb-8 text-white/90">
              Subscribe to our newsletter for updates on AI developments, SafeHaven initiatives, and opportunities to get involved.
            </p>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="btn-accent py-3">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/join" className="btn-accent text-lg px-8 py-4">
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
