import React from 'react';
import Link from 'next/link';
import SEOHead from './components/SEOHead';

export default function WhatThisMeans() {
  return (
    <>
      <SEOHead
        title="TikTok Ban Countdown – Is TikTok Banned Today?"
        description="Countdown to the TikTok ban deadline: April 4, 2025. Get updates, stay informed, and protect your access now."
        url="https://didtiktokgetbanned.com"
      />

      <div className="min-h-screen bg-white text-black p-6 max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Why the Ban Date Matters</h1>
        <p>
          The original TikTok ban deadline was set for <strong>January 19, 2025</strong>, when the Protecting Americans from Foreign Adversary Controlled Applications Act (PAFACA) was scheduled to take effect. This law requires ByteDance to divest from TikTok&apos;s U.S. operations or face removal from U.S. app stores.
        </p>
        <p>
          On <strong>January 19, 2025</strong>, the Supreme Court unanimously upheld the ban law. TikTok briefly went dark for U.S. users that evening. On <strong>January 20, 2025</strong>, President Trump signed an executive order granting a 75-day extension. The current deadline is:
        </p>
        <p className="text-xl font-semibold text-red-600">
          <strong>Friday, April 4, 2025</strong>
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
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold">What Happened on January 19-20?</h3>
          <p className="mt-2">
            The Supreme Court upheld the TikTok ban law, and TikTok went offline for several hours on January 19. President Trump signed an executive order on January 20 providing a 75-day extension to allow more time for a potential sale.{' '}
            <a
              href="https://www.npr.org/2025/01/20/nx-s1-5268701/trump-executive-order-tiktok-ban"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              (Source: NPR, January 20, 2025)
            </a>
          </p>
        </div>        
        <Link href="/" className="text-blue-600 underline">← Back to home</Link>

        <div className="mt-8 text-sm text-gray-600 border-t pt-4">
  <p>Related Sources:</p>
  <ul className="list-disc ml-6 mt-2 space-y-1">
    <li>
      <a
        href="https://www.supremecourt.gov/opinions/24pdf/24-656_ca7d.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-600"
      >
        Jan 19, 2025 – Supreme Court upholds TikTok ban law
      </a>
    </li>
    <li>
      <a
        href="https://www.npr.org/2025/01/20/nx-s1-5268701/trump-executive-order-tiktok-ban"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-600"
      >
        Jan 20, 2025 – Trump signs 75-day extension executive order
      </a>
    </li>
    <li>
      <a
        href="https://www.theverge.com/2025/1/18/24346353/tiktok-ban-us-shutdown"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-600"
      >
        Jan 19, 2025 – TikTok briefly goes dark in the U.S.
      </a>
    </li>
    <li>
      <a
        href="https://www.npr.org/2024/04/24/1246902000/biden-signs-tiktok-ban-bill"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-600"
      >
        Apr 24, 2024 – Biden signs TikTok ban bill into law
      </a>
    </li>
  </ul>
</div>
      </div>
    </>
  );
}