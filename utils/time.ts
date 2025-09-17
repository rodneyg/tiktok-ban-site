import { DateTime, Interval } from "luxon";

// Hard-coded UTC-5 timestamp (00:00 16 Dec 2025 America/New_York)
export const TIKTOK_DEADLINE = DateTime.fromISO("2025-12-16T05:00:00.000Z");

// Returns { days, hours, minutes, seconds } until the deadline
export const getTimeRemaining = () => {
  const now = DateTime.local().setZone("America/New_York");
  const interval = Interval.fromDateTimes(now, TIKTOK_DEADLINE);
  const duration = interval
    .toDuration(["days", "hours", "minutes", "seconds"])
    .shiftTo("days", "hours", "minutes", "seconds")
    .toObject();

  return {
    days: Math.max(0, Math.floor(duration.days ?? 0)),
    hours: Math.max(0, Math.floor(duration.hours ?? 0)),
    minutes: Math.max(0, Math.floor(duration.minutes ?? 0)),
    seconds: Math.max(0, Math.floor(duration.seconds ?? 0))
  };
};