import Link from 'next/link';
import SEOHead from './components/SEOHead';
import { courtChallengeUpdate, deadlineStatus, dealSummary, sources, statusHeadline, statusSummary, verifiedOn, verifiedOnLabel } from '../utils/tiktokStatus';

export default function StatusPage() {
  return (
    <>
      <SEOHead
        title="TikTok U.S. Status | Did TikTok Get Banned?"
        description={statusSummary}
        url="https://didtiktokgetbanned.com/status"
      />

      <main className="min-h-screen bg-white text-black p-6 max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">TikTok U.S. Status</h1>

        <section className="bg-green-50 border-l-4 border-green-500 p-4 space-y-2">
          <h2 className="text-xl font-semibold text-green-800">{statusHeadline}</h2>
          <p>{deadlineStatus}</p>
          <p className="text-sm text-gray-600">Last verified <time dateTime={verifiedOn}>{verifiedOnLabel}</time></p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">The January 2026 deal</h2>
          <p>{dealSummary} ByteDance holds 19.9% of the venture, which is responsible for protecting U.S. user data and securing the recommendation system.</p>
          <p><a href={sources.jointVenture} className="text-blue-700 underline">Read the joint venture announcement</a></p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">What happened to the law?</h2>
          <p>The 2024 law remains in place. The September 25, 2025 executive order determined that the deal would meet the law&apos;s divestiture requirements once the agreements were signed.</p>
          <p><a href={sources.order} className="text-blue-700 underline">Read the executive order</a></p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">{courtChallengeUpdate.title}</h2>
          <p>{courtChallengeUpdate.description}</p>
          <p><a href={courtChallengeUpdate.source.url} className="text-blue-700 underline">Read the November 6 court order</a></p>
        </section>

        <nav className="flex flex-wrap gap-4" aria-label="Navigation">
          <Link href="/" className="text-blue-600 underline">Back to home</Link>
          <Link href="/timeline" className="text-blue-600 underline">Timeline</Link>
          <Link href="/what-this-means" className="text-blue-600 underline">What this means</Link>
        </nav>
      </main>
    </>
  );
}
