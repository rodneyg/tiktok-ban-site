import React from 'react';
import Link from 'next/link';
import SEOHead from './components/SEOHead';

export default function WhatThisMeans() {
  return (
    <>
      <SEOHead
        title="TikTok Ban Countdown – Is TikTok Banned Today?"
        description="Countdown to the new TikTok ban deadline: June 19, 2025. Get updates, stay informed, and protect your access now."
        url="https://didtiktokgetbanned.com"
      />

      <div className="min-h-screen bg-white text-black p-6 max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Why the New Ban Date Matters</h1>
        <p>
          The original TikTok ban deadline was set for <strong>April 4, 2025</strong>, giving ByteDance 75 days to divest from TikTok&apos;s U.S. operations or face removal from U.S. app stores and potential ISP blocking.
        </p>
        <p>
          On <strong>April 4, 2025</strong>, former President Trump officially signed an extension, pushing the deadline out another 75 days. The new date is:
        </p>
        <p className="text-xl font-semibold text-red-600">
          <strong>Thursday, June 19, 2025</strong>
        </p>
        <p>
          This means TikTok could still be banned if ByteDance does not sell its U.S. operations to an approved American buyer by then.
        </p>
        <p>
          The ban would legally require Apple and Google to remove TikTok from their app stores, and U.S. internet providers could be ordered to block access entirely. If you&apos;re a creator or user, the clock is still ticking.
        </p>
        <p>
          We&apos;ll continue tracking legal changes and update this site immediately if anything shifts again.
        </p>        
        <Link href="/" className="text-blue-600 underline">← Back to home</Link>

        <div className="mt-8 text-sm text-gray-600 border-t pt-4">
  <p>Related Sources:</p>
  <ul className="list-disc ml-6 mt-2 space-y-1">
    <li>
      <a
        href="https://www.npr.org/2025/01/20/nx-s1-5268701/trump-executive-order-tiktok-ban"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-600"
      >
        Jan 2025 – Trump signs original TikTok ban executive order
      </a>
    </li>
    <li>
      <a
        href="https://www.npr.org/2025/04/04/nx-s1-5347418/trump-tiktok-second-ban-delay"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-600"
      >
        Apr 2025 – Trump delays TikTok ban by another 75 days
      </a>
    </li>
  </ul>
</div>
      </div>
    </>
  );
}