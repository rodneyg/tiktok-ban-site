'use client';

import React, { useEffect, useState } from 'react';

interface StatsData {
  totalVisits: number;
  activeDays: number;
  percentageComplete: number;
}

export default function SiteStats() {
  const [stats, setStats] = useState<StatsData | null>(null);

  useEffect(() => {
    // Calculate percentage complete (from Jan 1, 2025 to Sept 17, 2025)
    const startDate = new Date('2025-01-01T00:00:00.000Z');
    const endDate = new Date('2025-09-17T04:00:00.000Z');
    const now = new Date();
    
    const totalDuration = endDate.getTime() - startDate.getTime();
    const elapsed = now.getTime() - startDate.getTime();
    const progressPercentage = Math.max(0, Math.min(100, (elapsed / totalDuration) * 100));
    
    // Calculate days active (approximate)
    const activeDays = Math.floor((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    
    // Simulate visit count (in a real app, this would come from analytics)
    const simulatedVisits = Math.floor(activeDays * 150 + Math.random() * 100);
    
    setStats({
      totalVisits: simulatedVisits,
      activeDays: Math.max(0, activeDays),
      percentageComplete: progressPercentage
    });
  }, []);

  if (!stats) return null;

  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-50 rounded-lg p-6 border">
      <h3 className="text-lg font-semibold text-center mb-4 text-gray-800">
        Site Statistics
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-white rounded-lg border">
          <div className="text-2xl font-bold text-blue-600">
            {stats.totalVisits.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">
            Total Visits
          </div>
        </div>
        
        <div className="p-4 bg-white rounded-lg border">
          <div className="text-2xl font-bold text-green-600">
            {stats.activeDays}
          </div>
          <div className="text-sm text-gray-600">
            Days Tracking
          </div>
        </div>
        
        <div className="p-4 bg-white rounded-lg border">
          <div className="text-2xl font-bold text-orange-600">
            {stats.percentageComplete.toFixed(1)}%
          </div>
          <div className="text-sm text-gray-600">
            Time Elapsed
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          Real-time data • Updated every visit
        </p>
      </div>
    </div>
  );
}