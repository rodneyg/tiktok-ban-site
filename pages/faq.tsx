// pages/faq.tsx
import React from 'react';
import Link from 'next/link';
import SEOHead from './components/SEOHead';

export default function FAQPage() {
  return (
    <>
      <SEOHead
        title="TikTok Ban FAQ – What You Need to Know"
        description="Top questions about the TikTok ban in the U.S., including legality, access, VPN use, and what happens on June 19, 2025."
        url="https://didtiktokgetbanned.com/faq"
      />

      <div className="min-h-screen bg-white text-black p-6 max-w-2xl mx-auto space-y-10">
        <h1 className="text-3xl font-bold">TikTok Ban: Frequently Asked Questions</h1>

        <div className="space-y-6 text-base leading-7">
          <div>
            <h2 className="text-xl font-semibold">Can the U.S. government legally ban TikTok?</h2>
            <p>
              The bill mandates ByteDance sell TikTok to a U.S.-approved buyer or face platform bans.
              The law targets national security risks, not individual users — but it forces app stores and ISPs to block access if ByteDance doesn’t comply.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">What happens on June 19, 2025?</h2>
            <p>
              If ByteDance hasn’t sold TikTok by then, Apple and Google will be legally required to remove it from their app stores in the U.S.
              Internet providers may also block access. No one will be forced to delete the app — but reinstalling or updating it may become impossible.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Can I still use TikTok with a VPN after the ban?</h2>
            <p>
              Yes, if the app is already installed. A VPN may allow continued access, but legality is a gray area. VPNs won’t help if TikTok has already been deleted from your device after the ban takes effect.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Will I lose my TikTok content or followers?</h2>
            <p>
              TikTok content won’t automatically disappear, but without updates or server access, the app could degrade over time. It’s smart to save your best videos and migrate followers to other platforms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Why is the U.S. banning TikTok now?</h2>
            <p>
              Lawmakers cite data privacy and Chinese government access through ByteDance. The concern is that TikTok could be used for surveillance or influence operations targeting U.S. citizens.
            </p>
          </div>
        </div>

        <div className="pt-10 text-sm text-center border-t">
          <Link href="/" className="text-blue-600 underline">← Back to home</Link>
        </div>
      </div>
    </>
  );
}