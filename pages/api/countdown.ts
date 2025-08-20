import type { NextApiRequest, NextApiResponse } from 'next';
import { getTimeRemaining, TIKTOK_DEADLINE } from '../../utils/time';

interface CountdownResponse {
  status: 'active' | 'expired';
  deadline: string;
  timeRemaining: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    totalSeconds: number;
  };
  progress: {
    percentage: number;
    description: string;
  };
  lastUpdated: string;
  nextDeadline: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CountdownResponse | { error: string }>
) {
  try {
    const timeLeft = getTimeRemaining();
    const now = new Date();
    const deadlineDate = TIKTOK_DEADLINE.toJSDate();
    
    // Calculate total time from start of year to deadline for progress
    const startOfYear = new Date('2025-01-01T00:00:00.000Z');
    const totalTimespan = deadlineDate.getTime() - startOfYear.getTime();
    const remainingTime = deadlineDate.getTime() - now.getTime();
    const progress = Math.max(0, Math.min(100, ((totalTimespan - remainingTime) / totalTimespan) * 100));
    
    const totalSeconds = Math.max(0, Math.floor(remainingTime / 1000));
    
    const response: CountdownResponse = {
      status: totalSeconds > 0 ? 'active' : 'expired',
      deadline: TIKTOK_DEADLINE.toISO() || '',
      timeRemaining: {
        ...timeLeft,
        totalSeconds
      },
      progress: {
        percentage: Math.round(progress * 100) / 100,
        description: totalSeconds > 0 ? 'Time remaining until TikTok ban deadline' : 'TikTok ban deadline has passed'
      },
      lastUpdated: now.toISOString(),
      nextDeadline: 'Thursday, September 17, 2025'
    };

    // Set cache headers for 1 second to keep data fresh
    res.setHeader('Cache-Control', 'public, s-maxage=1, stale-while-revalidate=5');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    res.status(200).json(response);
  } catch (error) {
    console.error('Error generating countdown data:', error);
    res.status(500).json({ error: 'Failed to generate countdown data' });
  }
}