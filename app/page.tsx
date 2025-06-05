// app/page.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const contract = '4Zk62yQAnHEaJTsSCCH5bU47yzC1gxXpu9X2hMj8pump';
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contract).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 bg-gray-100 text-gray-800 text-center">
      <h1 className="text-4xl font-bold mt-6 mb-2">🌍 Travel Coin</h1>
      <p className="text-lg text-gray-600 mb-6">
        Vote on where the journey goes next. Powered by crypto.
      </p>

      <div className="w-full max-w-4xl mb-6">
        <Image
          src="/travel-coin.png"
          alt="Travel Coin Banner"
          width={1500}
          height={500}
          className="rounded-md shadow-md"
        />
      </div>

      <div className="bg-white p-4 rounded-md shadow w-full max-w-xl">
        <h2 className="text-xl font-semibold mb-3">Contract Address</h2>
        <div className="flex items-center justify-center">
        <code className="bg-gray-200 px-3 py-2 rounded font-mono text-sm break-all text-gray-900">
          {contract}
        </code>
          <button
            onClick={copyToClipboard}
            className="ml-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </main>
  );
}
