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
    date: '2025-01-20',
    title: 'Trump Signs 75-Day Extension',
    description: 'President Trump signed an executive order providing a 75-day extension of the TikTok ban enforcement, pushing the deadline to April 4, 2025.',
    source: {
      name: 'White House',
      url: 'https://www.whitehouse.gov/presidential-actions/2025/01/application-protecting-americans-foreign-adversary-controlled-applications-act-tiktok/'
    },
    type: 'extension'
  },
  {
    date: '2025-01-19',
    title: 'Supreme Court Upholds TikTok Ban Law',
    description: 'The Supreme Court unanimously upheld the Protecting Americans from Foreign Adversary Controlled Applications Act (PAFACA), confirming the legal requirement for ByteDance to divest U.S. TikTok operations or face a ban.',
    source: {
      name: 'Supreme Court',
      url: 'https://www.supremecourt.gov/opinions/24pdf/24-656_ca7d.pdf'
    },
    type: 'legal'
  },
  {
    date: '2025-01-19',
    title: 'TikTok Briefly Goes Dark',
    description: 'TikTok went offline for U.S. users for several hours before the ban deadline, displaying a message that the app would be unavailable. Service was restored after Trump\'s commitment to issue an extension.',
    source: {
      name: 'The Verge',
      url: 'https://www.theverge.com/2025/1/18/24346353/tiktok-ban-us-shutdown'
    },
    type: 'news'
  },
  {
    date: '2024-04-24',
    title: 'President Biden Signs TikTok Ban Bill',
    description: 'President Biden signed the Protecting Americans from Foreign Adversary Controlled Applications Act into law, requiring ByteDance to divest TikTok within 270 days (with possible 90-day extension) or face a ban.',
    source: {
      name: 'NPR',
      url: 'https://www.npr.org/2024/04/24/1246902000/biden-signs-tiktok-ban-bill'
    },
    type: 'legal'
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