import React from 'react';

const QUESTIONS = [
  'What should we do?',
  'Who gets to decide?',
  'Are people ready?',
  'What authority governs the action?',
  'How do we know the system acted correctly?',
];

const WhyItMattersSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[var(--primary)] text-white">
      <div className="container-wide px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            The Intelligence Age needs more than intelligence.
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 md:mb-12">
            AI is becoming increasingly capable of reasoning, creating, predicting and acting. But intelligence alone does not tell us:
          </p>

          <ul className="grid sm:grid-cols-2 gap-4 md:gap-6 text-left mb-10 md:mb-12">
            {QUESTIONS.map((q) => (
              <li
                key={q}
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-base md:text-lg font-medium"
              >
                {q}
              </li>
            ))}
          </ul>

          <p className="text-lg md:text-xl font-semibold text-[var(--accent)]">
            SafeHaven works on the layer between AI capability and human systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyItMattersSection;
