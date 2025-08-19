// pages/faq.tsx
import React from 'react';
import Link from 'next/link';
import SEOHead from './components/SEOHead';

export default function FAQPage() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can the U.S. government legally ban TikTok?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The bill mandates ByteDance sell TikTok to a U.S.-approved buyer or face platform bans. The law targets national security risks, not individual users — but it forces app stores and ISPs to block access if ByteDance doesn't comply."
        }
      },
      {
        "@type": "Question", 
        "name": "What happens to my TikTok videos if it gets banned?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TikTok content won't automatically disappear, but without updates or server access, the app could degrade over time. It's smart to save your best videos and migrate followers to other platforms."
        }
      },
      {
        "@type": "Question",
        "name": "Why is the U.S. banning TikTok now?", 
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lawmakers cite data privacy and Chinese government access through ByteDance. The concern is that TikTok could be used for surveillance or influence operations targeting U.S. citizens."
        }
      },
      {
        "@type": "Question",
        "name": "Did TikTok get banned?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "No, TikTok is not banned in the United States as of now. The current deadline for the TikTok ban is September 17, 2025."
        }
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="TikTok Ban FAQ – Did TikTok Get Banned? Common Questions Answered"
        description="Frequently asked questions about the TikTok ban: Is TikTok banned? What happens to my videos? Can the government ban TikTok? Get answers to top TikTok ban questions."
        url="https://didtiktokgetbanned.com/faq"
        keywords="tiktok ban faq, is tiktok banned, tiktok ban questions, did tiktok get banned, tiktok ban answers"
        structuredData={faqStructuredData}
      />

      <div className="min-h-screen bg-white text-black p-6 max-w-2xl mx-auto space-y-10">
        <h1 className="text-3xl font-bold">TikTok Ban: Frequently Asked Questions</h1>

        <div className="space-y-6 text-base leading-7">
          <div itemScope itemType="https://schema.org/Question">
            <h2 className="text-xl font-semibold" itemProp="name">Did TikTok get banned?</h2>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">
                <strong>No, TikTok is not banned in the United States as of now.</strong> The current deadline for the TikTok ban is September 17, 2025. ByteDance has until this date to sell TikTok to a US-approved buyer or face removal from US app stores.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Can the U.S. government legally ban TikTok?</h2>
            <p>
              The bill mandates ByteDance sell TikTok to a U.S.-approved buyer or face platform bans.
              The law targets national security risks, not individual users — but it forces app stores and ISPs to block access if ByteDance doesn’t comply.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">What happens on 17 September 2025?</h2>
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