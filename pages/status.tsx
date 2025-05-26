import React from 'react';
import Link from 'next/link';
import SEOHead from './components/SEOHead';

export default function StatusPage() {
  return (
    <>
      <SEOHead
        title="TikTok Ban Countdown – Is TikTok Banned Today?"
        description="Countdown to the new TikTok ban deadline: June 19, 2025. Get updates, stay informed, and protect your access now."
        url="https://didtiktokgetbanned.com"
      />

      <div className="min-h-screen bg-white text-black p-6 max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">TikTok Ban Status Update</h1>
        <p>
          <strong>Status:</strong> TikTok is currently <span className="text-green-600 font-semibold">NOT BANNED</span> in the United States.
        </p>
        <p>
          The next major deadline is <strong>Thursday, June 19, 2025</strong>. We&apos;ll update this page as soon as any new decisions or delays happen.
        </p>
        <p>
          As of May 4, 2025, the deal is stalled due to China&apos;s reluctance following the tariff announcements. The Trump administration, led by Vice-President JD Vance, is actively working to find a buyer.{' '}
          <a
            href="https://www.reuters.com/business/media-telecom/trump-says-would-extend-tiktok-deadline-if-there-is-still-no-deal-2025-05-04/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            (Source: Reuters, May 4, 2025)
          </a>
        </p>
        <p>
          Bookmark this page to stay up to date — no trackers, no noise.
        </p>
        <Link href="/" className="text-blue-600 underline">← Back to home</Link>
      </div>
    </>
  );
}