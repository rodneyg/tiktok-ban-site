# TikTok Ban Countdown

**Is TikTok banned yet?**  
A minimalist, real-time tracker showing how many days are left until the U.S. TikTok ban deadline.

> **Next Deadline: September 17, 2025**  
> Stay informed. Protect your access. Track the clock.

![tiktok-ban-card](https://github.com/user-attachments/assets/438d2715-5d42-4c8f-a893-b71445c1d1dc)

---

## 🔥 Live Site

https://tiktok-ban-site.vercel.app/

Site uses Vercel's built-in, cookie-less analytics.

---

## 📌 What It Does

- ✅ Countdown to the official U.S. TikTok ban deadline  
- ✅ Clear guidance for users with or without the app  
- ✅ Pages for legal context, status updates, and support  
- ✅ Fast, ad-free, mobile-first

---

## 🛠 Tech Stack

- **Framework**: Next.js 15 (Pages Router)
- **Styling**: Tailwind CSS
- **Hosting**: Vercel
- **SEO**: Open Graph, Twitter Cards, metadata
- **Social Image**: `/public/tiktok-ban-card.png`

---

## 📂 Project Structure

.
├── pages/
│   ├── index.tsx              # Main landing page (countdown)
│   ├── what-this-means.tsx    # Legal context and explanation
│   ├── status.tsx             # Current TikTok ban status
│   └── support.tsx            # Donation and support options
├── components/
│   └── SEOHead.tsx            # SEO meta component (OG + Twitter)
├── public/
│   └── tiktok-ban-card.png    # Social share preview image
├── tailwind.config.js
└── README.md

---

## 🚀 Local Development

```bash
git clone https://github.com/yourusername/tiktok-ban-site.git
cd tiktok-ban-site
npm install
npm run dev

Then visit: http://localhost:3000

You can start editing the page by modifying pages/index.tsx. The page auto-updates as you edit the file.

⸻

⚙️ Framework Notes

This is a Next.js project bootstrapped with create-next-app.

API routes can be accessed at http://localhost:3000/api/*. For example, pages/api/hello.ts maps to /api/hello.

This project uses next/font to automatically optimize and load Geist, a new font family for Vercel.

⸻

🌐 Deployment

git init
git remote add origin https://github.com/yourusername/tiktok-ban-site.git
git push -u origin main

Then deploy via Vercel

⸻

🧠 Author

Built by @rodneyg

Support the site:
https://ko-fi.com/rg2official

⸻

📣 Attribution
	•	Countdown logic by hand (no dependencies)
	•	TikTok logo and references used under fair use (news & commentary)
	•	No affiliation with TikTok, ByteDance, or any government entity

⸻

📚 Learn More About Next.js
	•	Next.js Documentation
	•	Learn Next.js
	•	Next.js GitHub

⸻

📢 License

This project is open-source. Feel free to fork, remix, or reuse.
