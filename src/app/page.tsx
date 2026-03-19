import Link from 'next/link'

/* Component imports */
import Hero from '@/components/Hero'
import ThreePillarsSection from '@/components/ThreePillarsSection'

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
              Our Vision
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Watch how SafeHaven is preparing civilization for the advent of AI
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
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-base"
                />
                <button className="btn-accent py-3 px-6 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
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
