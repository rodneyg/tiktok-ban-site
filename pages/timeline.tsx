import React from 'react';
import Link from 'next/link';
import SEOHead from './components/SEOHead';
import NewsTimeline from './components/NewsTimeline';
import { deadlineStatus, statusHeadline, verifiedOn } from '../utils/tiktokStatus';

export default function TimelinePage() {
  const timelineStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "U.S. TikTok Ban Timeline",
    "description": "Key events in the U.S. TikTok ban case, from the January 2025 outage to the 2026 U.S. joint venture.",
    "author": {
      "@type": "Organization",
      "name": "TikTok Ban Tracker"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Did TikTok Get Banned?"
    },
    "datePublished": "2025-01-20",
    "dateModified": verifiedOn,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://didtiktokgetbanned.com/timeline"
    }
  };

  return (
    <>
      <SEOHead
        title="U.S. TikTok Ban Timeline"
        description="Key events in the U.S. TikTok ban case, from the January 2025 outage to the 2026 U.S. joint venture."
        url="https://didtiktokgetbanned.com/timeline"
        keywords="tiktok ban timeline, tiktok ban history, tiktok ban events, tiktok deadline history, bytedance deadline, tiktok ban extensions"
        structuredData={timelineStructuredData}
      />

      <div className="min-h-screen bg-white text-black p-6 max-w-4xl mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold">TikTok Ban Timeline</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Key events from the 2025 court ruling and brief outage to the January 2026 deal.
          </p>
        </header>

        <main>
          <NewsTimeline />
        </main>

        <aside className="bg-blue-50 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">What&apos;s Next?</h2>
          <p className="text-gray-700 mb-4">
            {statusHeadline} {deadlineStatus}
          </p>
          <Link href="/status" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Read the current status
          </Link>
        </aside>

        <nav className="text-center space-x-4 pb-4 border-t pt-6" aria-label="Navigation">
          <Link href="/" className="text-blue-600 underline">← Back to Home</Link>
          <Link href="/status" className="text-blue-600 underline">Current Status</Link>
          <Link href="/faq" className="text-blue-600 underline">FAQ</Link>
          <Link href="/what-this-means" className="text-blue-600 underline">What This Means</Link>
        </nav>
      </div>
    </>
  );
}