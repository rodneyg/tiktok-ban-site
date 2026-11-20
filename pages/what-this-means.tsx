import Link from 'next/link';
import SEOHead from './components/SEOHead';
import { dealSummary, deadlineStatus, sources, statusSummary } from '../utils/tiktokStatus';

export default function WhatThisMeansPage() {
  return (
    <>
      <SEOHead
        title="What the TikTok deal means for U.S. users"
        description={statusSummary}
        url="https://didtiktokgetbanned.com/what-this-means"
      />

      <main className="min-h-screen bg-white text-black p-6 max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">What the TikTok deal means for U.S. users</h1>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Using TikTok</h2>
          <p>{dealSummary} {deadlineStatus} You can keep using the app as usual.</p>
          <p><a href={sources.deal} className="text-blue-700 underline">Read the Associated Press coverage</a></p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">U.S. user data</h2>
          <p>The joint venture says it stores protected U.S. user data in Oracle&apos;s U.S. cloud and is responsible for securing the U.S. recommendation system.</p>
          <p><a href={sources.jointVenture} className="text-blue-700 underline">Read the joint venture announcement</a></p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Federal government devices</h2>
          <p>In August 2026, the Office of Management and Budget withdrew its earlier guidance banning TikTok on federal devices. If you use a work device, follow your employer&apos;s policies.</p>
          <p><a href={sources.devices} className="text-blue-700 underline">Read the federal device memo</a></p>
        </section>

        <nav className="flex flex-wrap gap-4" aria-label="Navigation">
          <Link href="/" className="text-blue-600 underline">Back to home</Link>
          <Link href="/status" className="text-blue-600 underline">Current status</Link>
          <Link href="/faq" className="text-blue-600 underline">FAQ</Link>
        </nav>
      </main>
    </>
  );
}
