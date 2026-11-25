import Head from 'next/head';
import { statusSummary } from '../../utils/tiktokStatus';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const socialImage = 'https://didtiktokgetbanned.com/tiktok-status-card.png';

interface SEOHeadProps {
  title?: string;
  description?: string;
  url?: string;
  keywords?: string;
  structuredData?: object;
}

export default function SEOHead({
  title = 'Did TikTok Get Banned? Current U.S. Status',
  description = statusSummary,
  url = 'https://didtiktokgetbanned.com',
  keywords = 'did tiktok get banned, is tiktok banned, tiktok ban, tiktok ban deadline, tiktok ban status, tiktok ban news, when is tiktok getting banned',
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
      
      {/* PWA Manifest */}
      <link rel="manifest" href={`${basePath}/manifest.json`} />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="TikTok Ban Tracker" />
      <link rel="apple-touch-icon" href={`${basePath}/favicon.ico`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Did TikTok Get Banned?" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />
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