import Link from 'next/link';
import HomeNewsletterSignup from './HomeNewsletterSignup';

const FinalCTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[var(--primary)] to-[#2c4c7c] text-white">
      <div className="container-wide px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Help build the Intelligence Age.
          </h2>
          <p className="text-base md:text-xl mb-8 md:mb-10 text-white/90">
            SafeHaven is building the systems humanity needs to understand AI, measure readiness, adapt institutions, and govern increasingly intelligent machines.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 md:mb-14">
            <a href="#system" className="btn-accent text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
              Explore the work →
            </a>
            <Link href="/join" className="bg-white text-[var(--primary)] font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-gray-100 transition-colors text-base md:text-lg">
              Get involved →
            </Link>
          </div>

          <div className="pt-8 md:pt-10 border-t border-white/20">
            <p className="text-sm md:text-base text-white/70 mb-4 md:mb-5">
              Or stay informed on AI developments and SafeHaven initiatives.
            </p>
            <HomeNewsletterSignup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
