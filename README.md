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
npm run lint
npm run build
```

The status copy and source links live in `utils/tiktokStatus.ts`.

## Countdown API

`GET /api/countdown` remains available for integrations. With no announced nationwide ban deadline, it returns:

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
