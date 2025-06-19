import React from 'react';
import Link from 'next/link';
import SEOHead from './components/SEOHead';
import LiveCountdown from './components/LiveCountdown';
import ShareBlock from './components/ShareBlock';

export default function Home() {
  return (
    <>
      <SEOHead
        title="TikTok Ban Countdown – Is TikTok Banned Today?"
        description="Countdown to the new TikTok ban deadline: September 17, 2025. Get updates, stay informed, and protect your access now."
        url="https://didtiktokgetbanned.com"
      />

      <div className="min-h-screen bg-white text-black p-6 flex flex-col items-center justify-center space-y-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Did TikTok Get Banned Today?</h1>
          <p className="text-xl">No — but the clock is ticking.</p>
          <LiveCountdown />
          <p className="text-sm text-gray-500">
  (Based on current U.S. deadline: <strong>Thursday, September 17, 2025</strong>.{' '}
  <a
    href="https://www.reuters.com/business/media-telecom/trump-extends-tiktok-sale-deadline-to-september-2025-06-19/"
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-blue-600"
  >
    Source: Reuters, June 19, 2025
  </a>
  )
</p>
          <p className="text-sm text-amber-600">
            Note: President Trump signed an executive order on June 19, 2025 granting a 90-day extension to the TikTok sale deadline.{' '}
            <a
              href="https://www.reuters.com/business/media-telecom/trump-extends-tiktok-sale-deadline-to-september-2025-06-19/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              (Source: Reuters, June 19, 2025)
            </a>
          </p>
          <ShareBlock />
        </div>

        <nav className="text-center space-x-4 pb-4">
          <Link href="/what-this-means" className="text-blue-600 underline">What This Means</Link>
          <Link href="/status" className="text-blue-600 underline">Status</Link>
          <Link href="/faq" className="text-blue-600 underline">FAQ</Link>
          <Link href="/support" className="text-blue-600 underline">Support</Link>
        </nav>

        <div className="w-full max-w-xl space-y-6">
          <div className="border p-4 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Do you still have TikTok installed?</h2>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold">Yes:</p>
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
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold">No:</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>You likely won&apos;t be able to reinstall TikTok after the ban hits.</li>
                  <li>VPNs won&apos;t help unless you already have the app on your device.</li>
                  <li>To keep up with creators, try finding them on Instagram or YouTube Shorts.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border p-4 rounded-xl shadow-md bg-blue-50">
            <h3 className="text-xl font-bold mb-2">This Week&apos;s Status</h3>
            <p>
              TikTok is still live. There is no ban this weekend. The next major decision deadline is{' '}
              <strong>Thursday, September 17, 2025</strong>.
            </p>
          </div>

          <div className="text-center border-t pt-6">
            <p className="text-sm">Built by creators. Help us stay independent and ad-free.</p>
            <a
  href="https://ko-fi.com/rg2official/?tier=Support%20with%20%243"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-2 inline-block text-white bg-black px-4 py-2 rounded-full font-semibold"
>
  Support with $3
</a>
          </div>
        </div>
      </div>
    </>
  );
}