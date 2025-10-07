import React from 'react';
import Link from 'next/link';
import SEOHead from './components/SEOHead';

export default function StatusPage() {
  return (
    <>
      <SEOHead
        title="TikTok Ban Status - Did TikTok Get Banned Today? Real-Time Updates"
        description="Current TikTok ban status: TikTok is NOT banned as of now. Get real-time updates on the TikTok ban deadline of December 16, 2025 and latest developments."
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
            The next major decision window closes <strong>Monday, 16 December 2025</strong>. We&apos;ll update this page as soon as any new decisions or delays happen.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">Latest Update - September 2025</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Legal Framework</h3>
              <p>
                The Protecting Americans from Foreign Adversary Controlled Applications Act (PAFACA) requires ByteDance to divest U.S. TikTok or face a ban. The Supreme Court upheld this law in TikTok v. Garland (January 2025).{' '}
                <a
                  href="https://en.wikipedia.org/wiki/Protecting_Americans_from_Foreign_Adversary_Controlled_Applications_Act?utm_source=chatgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600"
                >
                  (Source: Wikipedia – PAFACA)
                </a>{' '}
                <a
                  href="https://en.wikipedia.org/wiki/TikTok_v._Garland?utm_source=chatgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600"
                >
                  (Source: Wikipedia – TikTok v. Garland)
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Deadline Extension</h3>
              <p>
                Enforcement deadline extended to December 16, 2025.{' '}
                <a
                  href="https://www.whitehouse.gov/presidential-actions/2025/09/further-extending-the-tiktok-enforcement-delay-9dde/?utm_source=chatgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600"
                >
                  (Source: White House announcement)
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Framework Deal</h3>
              <p className="mb-2">
                A U.S.–China framework deal has been announced with the following key points:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li>U.S. investors (Oracle, Silver Lake, Andreessen Horowitz) to control ~80% of TikTok U.S. operations</li>
                <li>ByteDance to retain ~19.9%</li>
                <li>U.S. user data hosted in Oracle data centers</li>
                <li>Algorithm control remains unresolved, with possible licensing from ByteDance</li>
              </ul>
              <div className="mt-2 space-x-2 text-sm">
                <a
                  href="https://www.reuters.com/sustainability/boards-policy-regulation/tiktok-lives-us-china-deal-app-keep-operating-us-2025-09-16/?utm_source=chatgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600"
                >
                  Reuters – TikTok lives
                </a>
                <span>•</span>
                <a
                  href="https://www.reuters.com/world/china/oracle-silver-lake-consortium-control-80-stake-tiktok-us-wsj-reports-2025-09-16/?utm_source=chatgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600"
                >
                  Reuters – Oracle consortium
                </a>
                <span>•</span>
                <a
                  href="https://www.ft.com/content/550e4680-89e7-4b59-bb5d-2064cd6799c7?utm_source=chatgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600"
                >
                  FT – Algorithm concerns
                </a>
                <span>•</span>
                <a
                  href="https://www.reuters.com/world/china/china-says-us-tiktok-deal-win-win-will-review-apps-technology-ip-transfers-2025-09-17/?utm_source=chatgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600"
                >
                  Reuters – China response
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Unresolved Issues</h3>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li>Control of the recommendation algorithm is still a sticking point</li>
                <li>U.S. regulators must still confirm whether this deal meets national security requirements</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">Previous Update - June 2025</h2>
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