import Link from 'next/link'
import RadarChart from '@/components/RadarChart'

export default function ClockPage() {
  const pillars = [
    ['Governance Agility', 'Speed & effectiveness of policy updates'],
    ['Citizen Empowerment', 'Digital literacy & engagement'],
    ['Ethical AI Infrastructure', 'Bias audits & transparency'],
    ['Economic Adaptability', 'Reskilling & safety nets'],
    ['Tech & Data Infrastructure', 'Connectivity & cybersecurity'],
    ['Inclusive Foresight', 'Diverse horizon scanning'],
  ]

  return (
    <>
      {/* HERO */}
      <header className="bg-sh-dark text-white text-center py-16">
        <div className="max-w-3xl mx-auto px-4">
          <iframe
            src="/clock/embed/index.html"
            style={{ border: 'none', width: '100%', height: '90px', overflow: 'hidden' }}
            scrolling="no"
            loading="lazy"
          />
          <p className="mt-4 text-lg">How long we've been rolling the dice.</p>
        </div>
      </header>

      {/* LATEST INCIDENT */}
      <section className="px-6 py-10 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Latest Incident</h2>
        <article className="bg-white shadow rounded-xl p-8">
          <h3 className="text-xl font-semibold">
            Deep‑fake stock‑market hoax wipes $130 B in tech value
          </h3>
          <p className="mt-4">
            On 15 March 2025, a coordinated deep‑fake video campaign spread across social media
            caused a sharp sell‑off of major tech stocks before markets halted trading. Regulators
            cited algorithmic moderation failure and inadequate public resilience to AI‑driven
            misinformation.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="tag">#Trust & Resilience</span>
            <span className="tag">#Information Integrity</span>
          </div>
          <Link href="#methodology" className="inline-block mt-4 underline text-sh-dark">
            See methodology
          </Link>
        </article>
      </section>

      {/* PILLARS */}
      <section className="px-6 py-10 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6 text-center">SRI Pillars</h2>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6 text-center">
          {pillars.map(([label, tip]) => (
            <div key={label} className="pillar group">
              {label}
              <span className="tooltip">{tip}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Rest of the components remain unchanged */}
      {/* COUNTRY LOOKUP */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">How does your country score?</h2>
        <RadarChart />
      </section>

      {/* NEXT STEPS */}
      <section className="px-6 py-10 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6 text-center">Next Steps</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Citizens"
            text="Join the next AI TownSquare to learn, deliberate, and shape local policy."
            btn="Register interest"
          />
          <Card
            title="Policymakers"
            text="Book a 30‑minute briefing to see your full readiness dashboard and pilot options."
            btn="Schedule briefing"
          />
          <Card
            title="Journalists"
            text="Access datasets, expert quotes, and incident archives for your coverage."
            btn="Get press kit"
          />
        </div>
      </section>

      {/* DOWNLOADS */}
      <section className="px-6 py-10 text-center">
        <h2 className="text-2xl font-semibold mb-6">Download Resources</h2>
        <Download label="Manifesto PDF" href="/docs/manifesto.pdf" />
        <Download label="White Paper PDF" href="/docs/white-paper.pdf" />
        <Download label="Dataset CSV" href="/data/sri_2025.csv" />
      </section>

      {/* EMBED SNIPPET */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Embed the Clock</h2>
        <textarea
          readOnly
          className="w-full border rounded p-4 text-xs"
          rows={4}
          value={`<iframe src="https://safehavenai.world/clock/embed/index.html" style="border:none;width:100%;height:90px;overflow:hidden" scrolling="no" loading="lazy"></iframe>`}
        />
      </section>

      {/* JOIN SECTION */}
      <section className="bg-sh-dark text-white py-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Join the Movement</h2>
        <p className="mb-6">Get monthly readiness insights & early invites to AI TownSquare events.</p>
        <form className="flex flex-col sm:flex-row justify-center gap-3">
          <input
            type="email"
            placeholder="you@example.com"
            required
            className="px-4 py-2 rounded text-sh-dark"
          />
          <button className="bg-sh-accent text-sh-dark px-4 py-2 rounded font-semibold">
            Subscribe
          </button>
        </form>
        <p className="mt-6 text-sm">Next AI TownSquare: Doha • 12 June 2025</p>
      </section>
    </>
  )
}

/* --- Helper components --- */
function Card({ title, text, btn }: { title: string; text: string; btn: string }) {
  return (
    <div className="bg-white rounded shadow p-6 flex flex-col justify-between">
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p>{text}</p>
      </div>
      <button className="mt-4 bg-sh-dark text-white px-4 py-2 rounded">{btn}</button>
    </div>
  )
}

function Download({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="inline-block bg-sh-dark text-white px-5 py-2 rounded mr-3 mb-3"
      download
    >
      {label}
    </a>
  )
}