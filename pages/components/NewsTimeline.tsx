'use client';

import React from 'react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  source?: {
    name: string;
    url: string;
  };
  type: 'extension' | 'deadline' | 'legal' | 'news';
}

const timelineEvents: TimelineEvent[] = [
  {
    date: '2025-06-19',
    title: 'Trump Signs 90-Day Extension',
    description: 'President Trump signed another executive order granting ByteDance an additional 90 days to sell TikTok, pushing the deadline to September 17, 2025.',
    source: {
      name: 'Reuters',
      url: 'https://www.reuters.com/world/us/trump-says-he-signed-executive-order-extending-deadline-tiktok-closing-2025-06-19/'
    },
    type: 'extension'
  },
  {
    date: '2025-04-04',
    title: 'First Extension Signed',
    description: 'Trump signed the first extension, pushing the original deadline from April 4 to June 19, 2025.',
    source: {
      name: 'NPR',
      url: 'https://www.npr.org/2025/04/04/nx-s1-5347418/trump-tiktok-second-ban-delay'
    },
    type: 'extension'
  },
  {
    date: '2025-01-20',
    title: 'Original TikTok Ban Executive Order',
    description: 'Trump signs the original executive order setting the TikTok ban process in motion with initial deadline.',
    source: {
      name: 'NPR',
      url: 'https://www.npr.org/2025/01/20/nx-s1-5268701/trump-executive-order-tiktok-ban'
    },
    type: 'legal'
  },
  {
    date: '2025-04-04',
    title: 'Potential Buyers Emerge',
    description: 'Several major companies including Amazon, Microsoft, and others express interest in acquiring TikTok\'s U.S. operations.',
    source: {
      name: 'BBC',
      url: 'https://www.bbc.com/news/articles/cx256dd1znpo'
    },
    type: 'news'
  }
];

const getEventIcon = (type: TimelineEvent['type']) => {
  switch (type) {
    case 'extension':
      return '⏰';
    case 'deadline':
      return '🚨';
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
    case 'deadline':
      return 'border-red-500 bg-red-50';
    case 'legal':
      return 'border-purple-500 bg-purple-50';
    case 'news':
      return 'border-green-500 bg-green-50';
    default:
      return 'border-gray-500 bg-gray-50';
  }
};

export default function NewsTimeline() {
  const sortedEvents = timelineEvents.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">TikTok Ban Timeline</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
        
        {sortedEvents.map((event, index) => (
          <div key={index} className="relative flex items-start mb-8 last:mb-0">
            {/* Timeline dot */}
            <div className="flex-shrink-0 w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-sm z-10">
              {getEventIcon(event.type)}
            </div>
            
            {/* Event content */}
            <div className={`ml-6 p-4 rounded-lg border-l-4 ${getEventColor(event.type)} flex-1`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="font-semibold text-lg">{event.title}</h3>
                <span className="text-sm text-gray-600 mt-1 sm:mt-0">
                  {new Date(event.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                {event.description}
              </p>
              {event.source && (
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
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}