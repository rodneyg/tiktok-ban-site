import React from 'react';
import Link from 'next/link';
import SEOHead from './components/SEOHead';

export default function SupportPage() {
  return (
    <>
      <SEOHead
        title="Support Did TikTok Get Banned?"
        description="Support independent coverage of TikTok’s availability in the United States."
        url="https://didtiktokgetbanned.com/support"
      />

      <div className="min-h-screen bg-white text-black p-6 max-w-2xl mx-auto text-center space-y-6">
        <h1 className="text-3xl font-bold">Support This Site</h1>
        <p>This site is run by independent creators. No ads, no paywall — just truth.</p>
        <p>If you found it helpful, buy us a coffee to help cover hosting costs and keep it going.</p>
        <a
          href="https://ko-fi.com/rg2official/?tier=Support%20with%20%243"
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