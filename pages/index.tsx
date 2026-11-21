import Link from 'next/link';
import SEOHead from './components/SEOHead';
import ShareBlock from './components/ShareBlock';
import { deadlineStatus, dealSummary, sources, statusHeadline, statusSummary, verifiedOn, verifiedOnLabel } from '../utils/tiktokStatus';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Did TikTok Get Banned?',
  url: 'https://didtiktokgetbanned.com',
  description: statusSummary,
};

export default function Home() {
  return (
    <>
      <SEOHead structuredData={structuredData} />

      <div className="min-h-screen bg-white text-black p-6 flex flex-col items-center justify-center space-y-10">
        <main className="w-full max-w-2xl space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Did TikTok Get Banned Today?</h1>
            <p className="text-xl font-semibold text-green-700">{statusHeadline}</p>
            <p className="text-lg text-gray-700">{deadlineStatus}</p>
            <p className="text-sm text-gray-600">Last verified <time dateTime={verifiedOn}>{verifiedOnLabel}</time></p>
          </header>

          <section aria-label="Why TikTok is available" className="border border-green-200 bg-green-50 p-5 rounded-xl text-center">
            <h2 className="text-xl font-semibold mb-2">What changed</h2>
            <p>{dealSummary}</p>
            <p className="mt-2"><a href={sources.deal} className="text-blue-700 underline">Read the Associated Press coverage</a></p>
          </section>

          <section aria-label="Share this information">
            <ShareBlock />
          </section>

          <nav className="flex flex-wrap justify-center gap-4 text-center" aria-label="Main navigation">
            <Link href="/what-this-means" className="text-blue-600 underline">What This Means</Link>
            <Link href="/timeline" className="text-blue-600 underline">Timeline</Link>
            <Link href="/status" className="text-blue-600 underline">Status</Link>
            <Link href="/faq" className="text-blue-600 underline">FAQ</Link>
            <Link href="/support" className="text-blue-600 underline">Support</Link>
          </nav>
        </main>

        <footer className="text-center border-t pt-6 w-full max-w-2xl">
          <p className="text-sm">Built by creators. Help us stay independent and ad-free.</p>
          <a
            href="https://ko-fi.com/rg2official/?tier=Support%20with%20%243"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-white bg-black px-4 py-2 rounded-full font-semibold"
          >
            Support with $3
          </a>
        </footer>
      </div>
    </>
  );
}
