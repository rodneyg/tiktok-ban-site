'use client';

import { sources } from '../../utils/tiktokStatus';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  source: {
    name: string;
    url: string;
  };
  type: 'extension' | 'legal' | 'news';
}

const timelineEvents: TimelineEvent[] = [
  {
    date: '2026-08-10',
    title: 'Federal device guidance rescinded',
    description: 'The Office of Management and Budget withdrew its earlier TikTok guidance after the Justice Department concluded that the federal device law does not cover the joint venture version of the app.',
    source: { name: 'Office of Management and Budget', url: sources.devices },
    type: 'legal',
  },
  {
    date: '2026-01-23',
    title: 'U.S. joint venture announced',
    description: 'TikTok announced that the new U.S. joint venture had been established. The deal kept the app available to U.S. users.',
    source: { name: 'TikTok USDS Joint Venture', url: sources.jointVenture },
    type: 'news',
  },
  {
    date: '2025-09-25',
    title: 'Executive order approves the deal framework',
    description: 'The order found that the proposed deal would satisfy the divestiture requirement once signed and directed a 120-day enforcement pause.',
    source: { name: 'Federal Register', url: sources.order },
    type: 'legal',
  },
  {
    date: '2025-09-16',
    title: 'Enforcement delayed again',
    description: 'The September order delayed enforcement into December 2025. The September 25 order later set a new enforcement pause.',
    source: { name: 'Federal Register', url: sources.order },
    type: 'extension',
  },
  {
    date: '2025-06-19',
    title: 'June enforcement delay',
    description: 'An executive order delayed enforcement until September 17, 2025.',
    source: { name: 'Federal Register', url: sources.order },
    type: 'extension',
  },
  {
    date: '2025-04-04',
    title: 'April enforcement delay',
    description: 'An executive order delayed enforcement until June 19, 2025.',
    source: { name: 'Federal Register', url: sources.order },
    type: 'extension',
  },
  {
    date: '2025-01-20',
    title: 'Initial enforcement pause',
    description: 'An executive order instructed the Justice Department to pause enforcement for 75 days.',
    source: { name: 'Federal Register', url: sources.order },
    type: 'extension',
  },
  {
    date: '2025-01-19',
    title: 'TikTok starts restoring U.S. service',
    description: 'TikTok began restoring service hours after it went offline around the date the 2024 law took effect.',
    source: { name: 'Associated Press', url: sources.outage },
    type: 'news',
  },
  {
    date: '2025-01-17',
    title: 'Supreme Court rejects TikTok’s First Amendment challenge',
    description: 'The Court upheld the 2024 law against a First Amendment challenge brought by TikTok and others.',
    source: { name: 'U.S. Supreme Court', url: sources.court },
    type: 'legal',
  },
];

const getEventIcon = (type: TimelineEvent['type']) => {
  switch (type) {
    case 'extension':
      return '⏰';
    case 'legal':
      return '⚖️';
    case 'news':
      return '📰';
    default:
      return '📅';
  }
};

const getEventColor = (type: TimelineEvent['type']) => {
  switch (type) {
    case 'extension':
      return 'border-blue-500 bg-blue-50';
    case 'legal':
      return 'border-purple-500 bg-purple-50';
    case 'news':
      return 'border-green-500 bg-green-50';
    default:
      return 'border-gray-500 bg-gray-50';
  }
};

export default function NewsTimeline() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">TikTok Ban Timeline</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
        
        {timelineEvents.map((event) => (
          <div key={event.date} className="relative flex items-start mb-8 last:mb-0">
            {/* Timeline dot */}
            <div className="flex-shrink-0 w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-sm z-10">
              {getEventIcon(event.type)}
            </div>
            
            {/* Event content */}
            <div className={`ml-6 p-4 rounded-lg border-l-4 ${getEventColor(event.type)} flex-1`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="font-semibold text-lg">{event.title}</h3>
                <time dateTime={event.date} className="text-sm text-gray-600 mt-1 sm:mt-0">
                  {new Date(event.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    timeZone: 'UTC'
                  })}
                </time>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                {event.description}
              </p>
              <a
                href={event.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Source: {event.source.name}
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}