'use client';

import React, { useEffect, useState } from 'react';
import { DateTime, Interval } from 'luxon';

const target = DateTime.fromISO('2025-06-19T00:00:00', { zone: 'America/New_York' });

export default function LiveCountdown() {
  const [timeLeft, setTimeLeft] = useState<Interval | null>(null);

  useEffect(() => {
    const update = () => {
      const now = DateTime.now().setZone('America/New_York');
      const interval = Interval.fromDateTimes(now, target);
      setTimeLeft(interval);
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  const duration = timeLeft.toDuration(['days', 'hours', 'minutes', 'seconds']).shiftTo('days', 'hours', 'minutes', 'seconds');
  const d = Math.floor(duration.days);
  const h = duration.hours.toString().padStart(2, '0');
  const m = duration.minutes.toString().padStart(2, '0');
  const s = duration.seconds.toFixed(0).padStart(2, '0');

  return (
    <div className="text-4xl font-bold text-center">
      <span className="text-red-600">{d}</span>d : <span>{h}</span>h : <span>{m}</span>m : <span>{s}</span>s
      <p className="text-sm mt-1 text-gray-500">(Washington D.C. time)</p>
    </div>
  );
}