import React from 'react';
import Link from 'next/link';
import SEOHead from './components/SEOHead';

export default function StatusPage() {
  return (
    <>
      <SEOHead
        title="TikTok Ban Status - Did TikTok Get Banned Today? Real-Time Updates"
        description="Current TikTok ban status: TikTok is NOT banned as of now. Get real-time updates on the TikTok ban deadline of April 4, 2025 and latest developments."
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
            The next major decision window closes <strong>Friday, April 4, 2025</strong>. We&apos;ll update this page as soon as any new decisions or delays happen.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">Latest Update - January 2025</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Legal Framework</h3>
              <p>
                The Protecting Americans from Foreign Adversary Controlled Applications Act (PAFACA) requires ByteDance to divest U.S. TikTok or face a ban. The Supreme Court unanimously upheld this law on January 19, 2025.{' '}
                <a
                  href="https://www.supremecourt.gov/opinions/24pdf/24-656_ca7d.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600"
                >
                  (Source: Supreme Court Opinion)
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Trump Administration Extension</h3>
              <p>
                On January 20, 2025, President Trump signed an executive order providing a 75-day extension of the TikTok ban enforcement, pushing the deadline to April 4, 2025.{' '}
                <a
                  href="https://www.whitehouse.gov/presidential-actions/2025/01/application-protecting-americans-foreign-adversary-controlled-applications-act-tiktok/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600"
                >
                  (Source: White House)
                </a>{' '}
                <a
                  href="https://www.npr.org/2025/01/20/nx-s1-5268701/trump-executive-order-tiktok-ban"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600"
                >
                  (Source: NPR)
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">TikTok Goes Dark Briefly</h3>
              <p>
                On January 19, 2025, TikTok went offline for U.S. users for several hours ahead of the ban deadline, displaying a message that the service would be unavailable. The app was restored after President Trump indicated he would issue an extension upon taking office.{' '}
                <a
                  href="https://www.theverge.com/2025/1/18/24346353/tiktok-ban-us-shutdown"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600"
                >
                  (Source: The Verge)
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">What&apos;s Next?</h3>
              <p>
                ByteDance has until April 4, 2025 to complete a sale of TikTok&apos;s U.S. operations to an approved buyer, or the app will face a ban. Several potential buyers have expressed interest, and negotiations are ongoing.
              </p>
            </div>
          </div>
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