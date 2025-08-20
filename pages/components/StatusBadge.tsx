'use client';

import React, { useEffect, useState } from 'react';

interface StatusBadgeProps {
  daysRemaining: number;
}

export default function StatusBadge({ daysRemaining }: StatusBadgeProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const getStatus = () => {
    if (daysRemaining <= 0) {
      return {
        label: 'DEADLINE PASSED',
        color: 'bg-red-600 text-white',
        icon: '🚨',
        pulse: true
      };
    } else if (daysRemaining <= 7) {
      return {
        label: 'CRITICAL',
        color: 'bg-red-500 text-white',
        icon: '⚠️',
        pulse: true
      };
    } else if (daysRemaining <= 30) {
      return {
        label: 'URGENT',
        color: 'bg-orange-500 text-white',
        icon: '🔔',
        pulse: false
      };
    } else {
      return {
        label: 'ACTIVE',
        color: 'bg-green-600 text-white',
        icon: '⏰',
        pulse: false
      };
    }
  };

  const status = getStatus();

  return (
    <div className="flex justify-center mb-6">
      <div
        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide ${
          status.color
        } ${status.pulse ? 'animate-pulse' : ''}`}
      >
        <span className="mr-2 text-lg">{status.icon}</span>
        {status.label}
        <span className="ml-2 text-xs font-normal">
          ({daysRemaining} days left)
        </span>
      </div>
    </div>
  );
}