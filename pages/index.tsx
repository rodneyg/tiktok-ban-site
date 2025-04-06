import React from 'react';
import Link from 'next/link';
import SEOHead from './components/SEOHead';

export default function Home() {
  const banDate = new Date('2025-06-19T00:00:00');
  const now = new Date();
  const daysLeft = Math.max(Math.ceil((banDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)), 0);

  return (
    <>
      <SEOHead
        title="TikTok Ban Countdown – Is TikTok Banned Today?"
        description="Countdown to the new TikTok ban deadline: June 19, 2025. Get updates, stay informed, and protect your access now."
        url="https://yourdomain.com"
      />

      <div className="min-h-screen bg-white text-black p-6 flex flex-col items-center justify-center space-y-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Did TikTok Get Banned Today?</h1>
          <p className="text-xl">No — but the clock is ticking.</p>
          <p
            className={`text-5xl font-extrabold ${
              daysLeft < 30 ? 'text-red-600' : daysLeft < 60 ? 'text-yellow-500' : 'text-green-600'
            }`}
          >
            {daysLeft} Days Left
          </p>
          <p className="text-sm text-gray-500">(Based on current U.S. deadline: Thursday, June 19, 2025)</p>
        </div>

        <nav className="text-center space-x-4 pb-4">
          <Link href="/what-this-means" className="text-blue-600 underline">What This Means</Link>
          <Link href="/status" className="text-blue-600 underline">Status</Link>
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
              <strong>Thursday, June 19, 2025</strong>.
            </p>
          </div>

          <div className="text-center border-t pt-6">
            <p className="text-sm">Built by creators. Help us stay independent and ad-free.</p>
            <a
              href="https://ko-fi.com/rg2official"
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