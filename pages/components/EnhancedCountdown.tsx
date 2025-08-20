'use client';

import React, { useEffect, useState } from 'react';
import { getTimeRemaining } from '../../utils/time';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function EnhancedCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const remaining = getTimeRemaining();
      setTimeLeft(remaining);
      
      // Calculate progress (from Jan 1, 2025 to Sept 17, 2025)
      const startDate = new Date('2025-01-01T00:00:00.000Z');
      const endDate = new Date('2025-09-17T04:00:00.000Z');
      const now = new Date();
      
      const totalDuration = endDate.getTime() - startDate.getTime();
      const elapsed = now.getTime() - startDate.getTime();
      const progressPercentage = Math.max(0, Math.min(100, (elapsed / totalDuration) * 100));
      
      setProgress(progressPercentage);
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  const { days, hours, minutes, seconds } = timeLeft;
  const totalSeconds = days * 86400 + hours * 3600 + minutes * 60 + seconds;
  const isUrgent = days <= 30;
  const isCritical = days <= 7;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full transition-all duration-1000 ease-out ${
            isCritical ? 'bg-red-500' : isUrgent ? 'bg-orange-500' : 'bg-blue-500'
          }`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Progress Text */}
      <p className="text-center text-sm text-gray-600">
        {progress.toFixed(1)}% of time has elapsed since January 1, 2025
      </p>

      {/* Main Countdown Display */}
      <div className="text-center space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {/* Days */}
          <div className={`p-4 rounded-lg border-2 ${
            isCritical ? 'border-red-300 bg-red-50' : 
            isUrgent ? 'border-orange-300 bg-orange-50' : 
            'border-blue-300 bg-blue-50'
          }`}>
            <div className={`text-3xl md:text-4xl font-bold ${
              isCritical ? 'text-red-600' : 
              isUrgent ? 'text-orange-600' : 
              'text-blue-600'
            }`}>
              {days}
            </div>
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              Day{days !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Hours */}
          <div className="p-4 rounded-lg border-2 border-gray-300 bg-gray-50">
            <div className="text-3xl md:text-4xl font-bold text-gray-700">
              {hours.toString().padStart(2, '0')}
            </div>
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              Hour{hours !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Minutes */}
          <div className="p-4 rounded-lg border-2 border-gray-300 bg-gray-50">
            <div className="text-3xl md:text-4xl font-bold text-gray-700">
              {minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              Min{minutes !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Seconds */}
          <div className="p-4 rounded-lg border-2 border-gray-300 bg-gray-50">
            <div className="text-3xl md:text-4xl font-bold text-gray-700">
              {seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              Sec{seconds !== 1 ? 's' : ''}
            </div>
          </div>
        </div>

        {/* Status Message */}
        <div className={`p-4 rounded-lg ${
          isCritical ? 'bg-red-100 border border-red-300' :
          isUrgent ? 'bg-orange-100 border border-orange-300' :
          'bg-blue-100 border border-blue-300'
        }`}>
          <p className={`font-semibold ${
            isCritical ? 'text-red-800' :
            isUrgent ? 'text-orange-800' :
            'text-blue-800'
          }`}>
            {isCritical ? '⚠️ Critical: Less than 1 week remaining' :
             isUrgent ? '🔔 Urgent: Less than 30 days remaining' :
             '⏰ Countdown in progress'}
          </p>
        </div>

        {/* Technical Details */}
        <div className="text-xs text-gray-500 space-y-1">
          <p>Total seconds remaining: {totalSeconds.toLocaleString()}</p>
          <p className="font-mono">Washington D.C. time zone</p>
        </div>
      </div>
    </div>
  );
}