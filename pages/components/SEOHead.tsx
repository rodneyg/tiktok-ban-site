import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  url?: string;
}

export default function SEOHead({
  title = 'Is TikTok Banned Today? | TikTok Ban Countdown',
  description = 'Track the official U.S. TikTok ban deadline: Thursday, 17 September 2025. Stay updated, protect your access, and get clear answers.',
  url = 'https://didtiktokgetbanned.com'
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${url}/tiktok-ban-card.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}/tiktok-ban-card.png`} />
    </Head>
  );
}