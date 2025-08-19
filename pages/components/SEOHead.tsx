import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  url?: string;
  keywords?: string;
  structuredData?: object;
}

export default function SEOHead({
  title = 'Did TikTok Get Banned? No - Current Status & Ban Countdown',
  description = 'Is TikTok banned today? No. Track the official U.S. TikTok ban deadline: September 17, 2025. Get real-time updates on TikTok ban status, what it means, and how to protect your access.',
  url = 'https://didtiktokgetbanned.com',
  keywords = 'did tiktok get banned, is tiktok banned, tiktok ban, tiktok ban deadline, tiktok ban countdown, tiktok ban status, tiktok ban news, when is tiktok getting banned',
  structuredData
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${url}/tiktok-ban-card.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Did TikTok Get Banned?" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}/tiktok-ban-card.png`} />
      <meta name="twitter:site" content="@didtiktokgetbanned" />
      
      {/* Additional SEO meta tags */}
      <meta name="author" content="TikTok Ban Tracker" />
      <meta name="application-name" content="Did TikTok Get Banned?" />
      <meta name="theme-color" content="#ffffff" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
}