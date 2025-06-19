import React from 'react';
import Link from 'next/link';
import SEOHead from './components/SEOHead';

export default function WhatThisMeans() {
  return (
    <>
      <SEOHead
        title="TikTok Ban Countdown – Is TikTok Banned Today?"
        description="Countdown to the new TikTok ban deadline: 17 September 2025. Get updates, stay informed, and protect your access now."
        url="https://didtiktokgetbanned.com"
      />

      <div className="min-h-screen bg-white text-black p-6 max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Why the New Ban Date Matters</h1>
        <p>
          The original TikTok ban deadline was set for <strong>April 4, 2025</strong>, giving ByteDance 75 days to divest from TikTok&apos;s U.S. operations or face removal from U.S. app stores and potential ISP blocking.
        </p>
        <p>
          On <strong>April 4, 2025</strong>, President Trump signed an extension, pushing the deadline to June 19, 2025. Then on <strong>June 19, 2025</strong>, he signed another executive order granting a 90-day extension. The current deadline is:
        </p>
        <p className="text-xl font-semibold text-red-600">
          <strong>Thursday, 17 September 2025</strong>
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
        <p>
          On June 19, 2025, President Trump signed a new executive order giving ByteDance an extra 90 days to sell TikTok, pushing the deadline to September 17, 2025.{' '}
          <a
            href="https://www.reuters.com/world/us/trump-says-he-signed-executive-order-extending-deadline-tiktok-closing-2025-06-19/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            (Source: Reuters, June 19, 2025)
          </a>
        </p>
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold">Potential Buyers</h3>
          <p className="mt-2">
            Several entities have expressed interest in acquiring TikTok&apos;s U.S. operations, including Amazon, Frank McCourt with Kevin O&apos;Leary, Microsoft, Blackstone, Andreessen Horowitz, and Perplexity AI.{' '}
            <a
              href="https://www.bbc.com/news/articles/cx256dd1znpo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              (Source: BBC, April 4, 2025)
            </a>
          </p>
        </div>        
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
    <li>
      <a
        href="https://www.reuters.com/world/us/trump-says-he-signed-executive-order-extending-deadline-tiktok-closing-2025-06-19/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-600"
      >
        Jun 2025 – Trump extends TikTok sale deadline to September
      </a>
    </li>
    <li>
      <a
        href="https://www.bbc.com/news/articles/cx256dd1znpo"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-600"
      >
        Apr 2025 – BBC reports on potential TikTok buyers
      </a>
    </li>
  </ul>
</div>
      </div>
    </>
  );
}