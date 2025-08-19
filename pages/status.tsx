import React from 'react';
import Link from 'next/link';
import SEOHead from './components/SEOHead';

export default function StatusPage() {
  return (
    <>
      <SEOHead
        title="TikTok Ban Status - Did TikTok Get Banned Today? Real-Time Updates"
        description="Current TikTok ban status: TikTok is NOT banned as of now. Get real-time updates on the TikTok ban deadline of September 17, 2025 and latest developments."
        url="https://didtiktokgetbanned.com/status"
        keywords="tiktok ban status, is tiktok banned today, tiktok ban updates, did tiktok get banned, tiktok ban news"
      />

      <article className="min-h-screen bg-white text-black p-6 max-w-2xl mx-auto space-y-6">
        <header>
          <h1 className="text-3xl font-bold">TikTok Ban Status Update</h1>
        </header>
        
        <section className="bg-green-50 border-l-4 border-green-500 p-4">
          <h2 className="text-xl font-semibold text-green-800">Current Status</h2>
          <p className="text-lg">
            TikTok is currently <span className="text-green-600 font-semibold">NOT BANNED</span> in the United States.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">Next Deadline</h2>
          <p>
            The next major decision window closes <strong>Thursday, 17 September 2025</strong>. We&apos;ll update this page as soon as any new decisions or delays happen.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">Latest Update</h2>
          <p>
            On June 19, 2025, President Trump signed a new executive order giving ByteDance an extra 90 days to sell TikTok, pushing the deadline to September 17, 2025.{' '}
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
        
        <aside className="bg-blue-50 p-4 rounded-lg">
          <p>
            Bookmark this page to stay up to date — no trackers, no noise.
          </p>
        </aside>
        
        <footer>
          <Link href="/" className="text-blue-600 underline">← Back to home</Link>
        </footer>
      </article>
    </>
  );
}