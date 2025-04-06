import React from 'react';
import Link from 'next/link';
import SEOHead from './components/SEOHead';

export default function StatusPage() {
  return (
    <>
      <SEOHead
        title="TikTok Ban Countdown – Is TikTok Banned Today?"
        description="Countdown to the new TikTok ban deadline: June 19, 2025. Get updates, stay informed, and protect your access now."
        url="https://yourdomain.com"
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
          Bookmark this page to stay up to date — no trackers, no noise.
        </p>
        <Link href="/" className="text-blue-600 underline">← Back to home</Link>
      </div>
    </>
  );
}