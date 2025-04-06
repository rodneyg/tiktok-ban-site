import React from 'react';
import Link from 'next/link';
import SEOHead from './components/SEOHead';

export default function SupportPage() {
  return (
    <>
      <SEOHead
        title="TikTok Ban Countdown – Is TikTok Banned Today?"
        description="Countdown to the new TikTok ban deadline: June 19, 2025. Get updates, stay informed, and protect your access now."
        url="https://yourdomain.com"
      />

      <div className="min-h-screen bg-white text-black p-6 max-w-2xl mx-auto text-center space-y-6">
        <h1 className="text-3xl font-bold">Support This Site</h1>
        <p>This site is run by independent creators. No ads, no paywall — just truth.</p>
        <p>If you found it helpful, buy us a coffee to help cover hosting costs and keep it going.</p>
        <a
          href="https://ko-fi.com/rg2official"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white bg-black px-6 py-3 rounded-full font-semibold"
        >
          Donate $3 on Ko-fi
        </a>
        <p>
          <Link href="/" className="text-blue-600 underline">← Back to home</Link>
        </p>
      </div>
    </>
  );
}