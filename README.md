# Did TikTok Get Banned?

The site tracks TikTok’s availability in the United States and explains the history of the 2024 law, the brief January 2025 outage, and the January 2026 U.S. joint venture.

- [Live site](https://didtiktokgetbanned.com/)
- [Current status](https://didtiktokgetbanned.com/status)
- [Timeline](https://didtiktokgetbanned.com/timeline)

## Local development

This site uses Next.js (Pages Router) and Tailwind CSS.

```bash
npm ci
npm run dev
```

Run `npm run lint` and `npm run build` separately to check changes.

The shared status summary, verification date, and source URLs live in [`utils/tiktokStatus.ts`](utils/tiktokStatus.ts). The status page and timeline add their own explanations in [`pages/status.tsx`](pages/status.tsx) and [`pages/components/NewsTimeline.tsx`](pages/components/NewsTimeline.tsx).

See the [changelog](CHANGELOG.md) for site updates.

## Countdown API

`GET /api/countdown` remains available for integrations. It reports the last verified status. The current response marks the deadline as inactive and sets the countdown fields to null.

```json
{
  "status": "inactive",
  "deadline": null,
  "timeRemaining": null,
  "progress": {
    "percentage": null,
    "description": "There is no announced nationwide ban deadline."
  },
  "lastUpdated": "2026-11-20",
  "nextDeadline": null
}
```

`lastUpdated` is the date the status was verified.

## About

Built by [@rodneyg](https://github.com/rodneyg). The site is independent of TikTok, ByteDance, and any government entity.

[Support the site on Ko-fi](https://ko-fi.com/rg2official)
