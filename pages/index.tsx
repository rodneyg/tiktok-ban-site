import React from 'react';
import Link from 'next/link';
import SEOHead from './components/SEOHead';
import EnhancedCountdown from './components/EnhancedCountdown';
import StatusBadge from './components/StatusBadge';
import ShareBlock from './components/ShareBlock';
import EmailSubscription from './components/EmailSubscription';
import SiteStats from './components/SiteStats';
import { getTimeRemaining } from '../utils/time';

export default function Home() {
  const timeLeft = getTimeRemaining();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Did TikTok Get Banned?",
    "url": "https://didtiktokgetbanned.com",
    "description": "Real-time TikTok ban status tracker for the United States",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://didtiktokgetbanned.com/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Question",
      "name": "Did TikTok get banned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, TikTok is not banned in the United States as of now. The current deadline for the TikTok ban is September 17, 2025. ByteDance has until this date to sell TikTok to a US-approved buyer or face removal from US app stores."
      }
    },
    "about": {
      "@type": "Thing",
      "name": "TikTok Ban",
      "description": "US government legislation requiring ByteDance to sell TikTok or face platform restrictions"
    }
  };

  return (
    <>
      <SEOHead
        title="Did TikTok Get Banned? No - Current Status & Ban Countdown"
        description="Is TikTok banned today? No. Track the official U.S. TikTok ban deadline: September 17, 2025. Get real-time updates on TikTok ban status, what it means, and how to protect your access."
        url="https://didtiktokgetbanned.com"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-white text-black p-6 flex flex-col items-center justify-center space-y-10">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Did TikTok Get Banned Today?</h1>
          <StatusBadge daysRemaining={timeLeft.days} />
          <p className="text-xl font-semibold text-green-600">No — but the clock is ticking.</p>
          <p className="text-lg text-gray-600">
            Next Deadline: <strong>Thursday, 17 September 2025</strong>{' '}
            <span className="text-sm">
              (Source:{' '}
              <a
                href="https://www.reuters.com/world/us/trump-says-he-signed-executive-order-extending-deadline-tiktok-closing-2025-06-19/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600"
              >
                Reuters, 19 Jun 2025
              </a>
              )
            </span>
          </p>
        </header>

        <section aria-label="TikTok Ban Countdown">
          <EnhancedCountdown />
          <p className="text-sm text-gray-500 text-center mt-4">
            (Based on current U.S. deadline: <strong>Thursday, September 17, 2025</strong>.{' '}
            <a
              href="https://www.reuters.com/world/us/trump-says-he-signed-executive-order-extending-deadline-tiktok-closing-2025-06-19/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              Source: Reuters, June 19, 2025
            </a>
            )
          </p>
          <p className="text-sm text-amber-600 text-center mt-2">
            Note: President Trump signed an executive order on June 19, 2025 granting a 90-day extension to the TikTok sale deadline.{' '}
            <a
              href="https://www.reuters.com/world/us/trump-says-he-signed-executive-order-extending-deadline-tiktok-closing-2025-06-19/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              (Source: Reuters, June 19, 2025)
            </a>
          </p>
        </section>

        <section aria-label="Site Statistics">
          <SiteStats />
        </section>

        <section aria-label="Email Updates">
          <EmailSubscription />
        </section>

        <section aria-label="Share this information">
          <ShareBlock />
        </section>

        <nav className="text-center space-x-4 pb-4" aria-label="Main navigation">
          <Link href="/what-this-means" className="text-blue-600 underline">What This Means</Link>
          <Link href="/timeline" className="text-blue-600 underline">Timeline</Link>
          <Link href="/status" className="text-blue-600 underline">Status</Link>
          <Link href="/faq" className="text-blue-600 underline">FAQ</Link>
          <Link href="/support" className="text-blue-600 underline">Support</Link>
        </nav>

        <main className="w-full max-w-xl space-y-6">
          <article className="border p-4 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Do you still have TikTok installed?</h2>
            <div className="space-y-4">
              <section className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">✅ Yes - You still have TikTok:</h3>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Do NOT delete the app — you may not be able to redownload it.</li>
                  <li>Turn off auto-updates to avoid forced removal or lockout.</li>
                  <li>Install a VPN now, before the ban, to keep future access.</li>
                  <li>Start following your favorite creators on other platforms (Instagram, YouTube).</li>
                </ul>
                <a
                  href="https://nordvpn.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-blue-600 underline"
                >
                  Set up a VPN that works with TikTok
                </a>
              </section>

              <section className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">❌ No - You don&apos;t have TikTok:</h3>
                <ul className="list-disc ml-5 space-y-1">
                  <li>You likely won&apos;t be able to reinstall TikTok after the ban hits.</li>
                  <li>VPNs won&apos;t help unless you already have the app on your device.</li>
                  <li>To keep up with creators, try finding them on Instagram or YouTube Shorts.</li>
                </ul>
              </section>
            </div>
          </article>

          <aside className="border p-4 rounded-xl shadow-md bg-blue-50">
            <h3 className="text-xl font-bold mb-2">📅 This Week&apos;s Status</h3>
            <p>
              <strong>TikTok is still live.</strong> There is no ban this weekend. The next major decision window closes{' '}
              <strong>Thursday, 17 September 2025</strong>.
            </p>
          </aside>

          <footer className="text-center border-t pt-6">
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
        </main>
      </div>
    </>
  );
}