import type { NextApiRequest, NextApiResponse } from 'next';
import { deadlineStatus, verifiedOn } from '../../utils/tiktokStatus';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Allow', 'GET');
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=60');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  res.status(200).json({
    status: 'inactive',
    deadline: null,
    timeRemaining: null,
    progress: { percentage: null, description: deadlineStatus },
    lastUpdated: verifiedOn,
    nextDeadline: null,
  });
}
