'use client';
import React from 'react';

const message = encodeURIComponent(
  "TikTok could be banned in the U.S. by September 17, 2025. Track it live: https://www.didtiktokgetbanned.com/"
);
const url = 'https://www.didtiktokgetbanned.com/';

export default function ShareBlock() {
  return (
    <div className="mt-8 w-full flex flex-col items-center space-y-3">
      <p className="text-sm font-medium text-gray-700">Share this countdown:</p>
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href={`https://twitter.com/intent/tweet?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full text-white bg-[#1DA1F2] hover:bg-[#0d8ddb] transition"
        >
          Share on Twitter/X
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full text-white bg-[#1877F2] hover:bg-[#0f66e8] transition"
        >
          Share on Facebook
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full text-white bg-[#0077B5] hover:bg-[#005f94] transition"
        >
          Share on LinkedIn
        </a>
        <a
          href={`https://www.threads.net/intent/post?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full text-white bg-black hover:bg-gray-900 transition"
        >
          Share on Threads
        </a>
      </div>
    </div>
  );
}