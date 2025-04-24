export const books = [
  {
    id: 'self-correcting-future',
    title: 'The Self-Correcting Future',
    subtitle: 'Building the World\'s AI TownSquare',
    description: 'Reframing the biggest challenge of our time from man versus machine to exponential growth versus linear adaptation',
    coverImage: '/images/book_image.jpg',
    status: 'pre-order',
    author: 'Allan Sendagi',
    price: 29.99,
    formats: [
      {
        type: "hardcover",
        price: 39.99,
        available: true,
        description: "Premium hardcover edition"
      },
      {
        type: "ebook",
        price: 19.99,
        available: true,
        description: "Digital edition (PDF, EPUB & MOBI)"
      }
    ],
    overview: [
      "The Self-Correcting Future explores how artificial intelligence is reshaping our world and how we can navigate this transformation.",
      "This thought-provoking book challenges conventional thinking about AI and offers a new framework for understanding humanity's relationship with technology.",
      "Rather than viewing AI through the lens of competition between humans and machines, Sendagi reframes the discussion around adapting our societal structures to match the pace of technological advancement."
    ],
    highlights: [
      "A new framework for thinking about AI and society",
      "Practical approaches for institutions to adapt to rapid technological change",
      "Case studies of successful human-AI collaboration",
      "Ethical considerations for developing responsible AI systems",
      "Vision for an inclusive AI future"
    ],
    authorBio: "Allan Sendagi is a thought leader in artificial intelligence ethics and societal impacts. His research and writing focus on creating frameworks for responsible AI development and implementation.",
    authorSocial: {
      linkedin: "https://linkedin.com/in/allansendagi",
      twitter: "https://twitter.com/allansendagi",
      website: "https://allansendagi.com"
    }
  },
  {
    id: 'societal-readiness',
    title: 'Societal Readiness',
    subtitle: 'Preparing for the Intelligence Age',
    description: 'A framework for adapting our institutions and societies for the transformative impact of artificial intelligence',
    coverImage: '/images/societal-readiness-cover.jpg',
    status: 'available',
    author: 'Allan Sendagi',
    price: 24.99,
    formats: [
      {
        type: "hardcover",
        price: 34.99,
        available: true,
        description: "Premium hardcover edition"
      },
      {
        type: "paperback",
        price: 24.99,
        available: true,
        description: "Standard paperback"
      },
      {
        type: "ebook",
        price: 14.99,
        available: true,
        description: "Digital edition (PDF, EPUB & MOBI)"
      }
    ],
    overview: [
      "Societal Readiness examines how our social structures, educational systems, and governance models must evolve in the age of artificial intelligence.",
      "Drawing on research from multiple disciplines, this book provides a roadmap for institutions to adapt to the rapid changes brought by advanced AI systems.",
      "Sendagi outlines practical frameworks that organizations, governments, and communities can implement to thrive amid technological transformation."
    ],
    highlights: [
      "Comprehensive assessment of institutional AI readiness",
      "Educational reforms for the intelligence age",
      "Governance models for AI-integrated societies",
      "Economic transitions and workforce adaptation",
      "Future-proofing social safety nets"
    ],
    authorBio: "Allan Sendagi is a thought leader in artificial intelligence ethics and societal impacts. His research and writing focus on creating frameworks for responsible AI development and implementation.",
    authorSocial: {
      linkedin: "https://linkedin.com/in/allansendagi",
      twitter: "https://twitter.com/allansendagi",
      website: "https://allansendagi.com"
    }
  }
];

export const getBookById = (id: string) => {
  return books.find(book => book.id === id) || null;
};