'use client';

import React, { useEffect, useState } from 'react';
import { getTimeRemaining } from '../../utils/time';

export default function LiveCountdown() {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    const update = () => {
      setTimeLeft(getTimeRemaining());
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  const { days, hours, minutes, seconds } = timeLeft;
  const d = days;
  const h = hours.toString().padStart(2, '0');
  const m = minutes.toString().padStart(2, '0');
  const s = seconds.toString().padStart(2, '0');

  return (
    <div className="text-4xl font-bold text-center">
      <span className="text-red-600">{d}</span>d : <span>{h}</span>h : <span>{m}</span>m : <span>{s}</span>s
      <p className="text-sm mt-1 text-gray-500">(Washington D.C. time)</p>
    </div>
  );
}