import Link from 'next/link';
import SEOHead from './components/SEOHead';
import { dealSummary, sources, statusSummary } from '../utils/tiktokStatus';

const questions = [
  {
    question: 'Is TikTok banned in the U.S. today?',
    answer: statusSummary,
    sourceUrl: sources.deal,
    sourceName: 'Associated Press coverage',
  },
  {
    question: 'Did TikTok ever stop working in the U.S.?',
    answer: 'Yes. TikTok briefly went offline for U.S. users in January 2025 and began restoring service on January 19.',
    sourceUrl: sources.outage,
    sourceName: 'Associated Press coverage of the outage',
  },
  {
    question: 'Why did the U.S. consider banning TikTok?',
    answer: 'Congress cited national security concerns about access to U.S. user data and potential influence over what users see. In January 2025, the Supreme Court rejected TikTok’s First Amendment challenge to the 2024 law.',
    sourceUrl: sources.court,
    sourceName: 'Supreme Court opinion',
  },
  {
    question: 'What changed in January 2026?',
    answer: dealSummary,
    sourceUrl: sources.jointVenture,
    sourceName: 'Joint venture announcement',
  },
];

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: questions.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};

export default function FAQPage() {
  return (
    <>
      <SEOHead
        title="TikTok U.S. Ban FAQ | Did TikTok Get Banned?"
        description="Answers about TikTok’s U.S. availability, the January 2025 outage and the January 2026 deal."
        url="https://didtiktokgetbanned.com/faq"
        structuredData={faqStructuredData}
      />

      <main className="min-h-screen bg-white text-black p-6 max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">TikTok U.S. Ban FAQ</h1>

        {questions.map(({ question, answer, sourceUrl, sourceName }) => (
          <section key={question} className="space-y-2">
            <h2 className="text-xl font-semibold">{question}</h2>
            <p>{answer}</p>
            <p><a href={sourceUrl} className="text-blue-700 underline">{sourceName}</a></p>
          </section>
        ))}

        <nav className="flex flex-wrap gap-4" aria-label="Navigation">
          <Link href="/" className="text-blue-600 underline">Back to home</Link>
          <Link href="/timeline" className="text-blue-600 underline">Timeline</Link>
          <Link href="/status" className="text-blue-600 underline">Current status</Link>
        </nav>
      </main>
    </>
  );
}
