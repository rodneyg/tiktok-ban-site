# TikTok Ban Countdown - Enhanced

**Is TikTok banned yet?**  
A comprehensive, real-time tracker showing how many days are left until the U.S. TikTok ban deadline with enhanced features, timeline tracking, and user engagement tools.

> **Next Deadline: April 4, 2025**  
> Stay informed. Protect your access. Track the clock.

![tiktok-ban-card](https://github.com/user-attachments/assets/438d2715-5d42-4c8f-a893-b71445c1d1dc)

---

## 🚀 What's New in This Enhanced Version

### ✨ Major Features Added
- **📊 Enhanced Countdown Display** - Beautiful progress bars, urgency indicators, and visual status badges
- **📰 Interactive News Timeline** - Complete history of TikTok ban events, extensions, and developments  
- **📧 Email Subscription System** - Stay updated when deadlines change (ready for integration)
- **📈 Site Statistics Dashboard** - Real-time engagement metrics and progress tracking
- **🌐 PWA Support** - Progressive Web App capabilities for mobile users
- **🔌 REST API Endpoint** - `/api/countdown` provides JSON data for external integrations
- **🎨 Mobile-First Enhanced Design** - Improved responsive layout and touch interactions

### 🆕 New Pages & Components
- **Timeline Page** (`/timeline`) - Complete chronological history of events
- **Enhanced Countdown** - Visual progress bars with urgency states
- **Status Badge** - Dynamic visual indicator based on time remaining
- **Email Subscription** - Newsletter signup component (backend integration ready)
- **Site Statistics** - Engagement metrics and progress visualization

---

## 🔥 Live Site

https://tiktok-ban-site.vercel.app/

Site uses Vercel's built-in, cookie-less analytics and is now a Progressive Web App (PWA) with enhanced mobile experience.

---

## 📌 Enhanced Features

- ✅ **Real-time Countdown** with visual progress tracking
- ✅ **Interactive Timeline** showing all ban-related events
- ✅ **Email Subscription System** for deadline change notifications  
- ✅ **REST API** for external integrations (`/api/countdown`)
- ✅ **Progressive Web App** support for mobile users
- ✅ **Enhanced SEO** with structured data and social sharing
- ✅ **Site Statistics** showing engagement metrics
- ✅ **Visual Status Indicators** (Active, Urgent, Critical states)
- ✅ **Mobile-optimized** responsive design
- ✅ **Ad-free, fast loading** with performance optimizations

---

## 🛠 Tech Stack

- **Framework**: Next.js 15 (Pages Router)
- **Styling**: Tailwind CSS
- **Date/Time**: Luxon for timezone handling
- **Hosting**: Vercel
- **SEO**: Enhanced Open Graph, Twitter Cards, structured data
- **PWA**: Web App Manifest, mobile optimization
- **API**: REST endpoint for countdown data

---

## 📂 Enhanced Project Structure

```
.
├── pages/
│   ├── index.tsx              # Enhanced main landing page
│   ├── timeline.tsx           # NEW: Interactive timeline page
│   ├── what-this-means.tsx    # Legal context and explanation
│   ├── status.tsx             # Current TikTok ban status
│   ├── support.tsx            # Donation and support options
│   ├── faq.tsx                # FAQ with structured data
│   ├── api/
│   │   └── countdown.ts       # NEW: REST API endpoint
│   └── components/
│       ├── SEOHead.tsx        # Enhanced SEO + PWA support
│       ├── EnhancedCountdown.tsx    # NEW: Visual countdown
│       ├── NewsTimeline.tsx   # NEW: Interactive timeline
│       ├── EmailSubscription.tsx    # NEW: Newsletter signup
│       ├── StatusBadge.tsx    # NEW: Dynamic status indicator
│       ├── SiteStats.tsx      # NEW: Engagement metrics
│       ├── LiveCountdown.tsx  # Original simple countdown
│       └── ShareBlock.tsx     # Social sharing
├── utils/
│   └── time.ts                # Date/time calculations
├── public/
│   ├── manifest.json          # NEW: PWA manifest
│   ├── tiktok-ban-card.png    # Social share preview image
│   └── robots.txt             # SEO optimization
└── README.md                  # This enhanced documentation
```

---

## 🚀 Local Development

```bash
git clone https://github.com/rodneyg/tiktok-ban-site.git
cd tiktok-ban-site
npm install
npm run dev

# Visit: http://localhost:3000
# API: http://localhost:3000/api/countdown
```

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

---

## 🔌 API Usage

The site now includes a REST API endpoint at `/api/countdown` that returns real-time countdown data:

```bash
curl https://didtiktokgetbanned.com/api/countdown
```

**Response Format:**
```json
{
  "status": "active",
  "deadline": "2025-09-17T04:00:00.000+00:00",
  "timeRemaining": {
    "days": 27,
    "hours": 10,
    "minutes": 43,
    "seconds": 0,
    "totalSeconds": 2371380
  },
  "progress": {
    "percentage": 89.41,
    "description": "Time remaining until TikTok ban deadline"
  },
  "lastUpdated": "2025-08-20T17:16:59.268Z",
  "nextDeadline": "Thursday, September 17, 2025"
}
```

---

## 📱 Progressive Web App

The site now supports PWA features:
- **Installable** on mobile devices
- **Offline-ready** countdown functionality
- **Mobile-optimized** touch interactions
- **App-like experience** when installed

---

## 🧠 Author

Built by @rodneyg

Support the site:
https://ko-fi.com/rg2official

---

## 📣 Attribution

- Countdown logic hand-coded with Luxon for timezone accuracy
- TikTok logo and references used under fair use (news & commentary)
- No affiliation with TikTok, ByteDance, or any government entity
- Enhanced UI components built with React and Tailwind CSS

---

## 📢 License

This project is open-source. Feel free to fork, remix, or reuse.
