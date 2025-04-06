// components/ShareBlock.tsx
'use client';
import React from 'react';

const message = encodeURIComponent(
  "TikTok could be banned in the U.S. by June 19, 2025. Track it live:"
);
const url = encodeURIComponent('https://tiktokbanfacts.com');

export default function ShareBlock() {
  return (
    <div className="mt-6 flex flex-col items-center space-y-2">
      <span className="text-sm font-medium">Share this site:</span>
      <div className="flex space-x-4">
        <a
          href={`https://twitter.com/intent/tweet?text=${message}&url=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Twitter/X
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline"
        >
          Facebook
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}