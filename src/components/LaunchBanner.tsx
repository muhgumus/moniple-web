'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  SHOW_PH_LAUNCH_BANNER,
  PH_DISCOUNT_CODE,
  PH_DISCOUNT_LABEL,
} from '@/lib/launch';
import { track } from '@/lib/firebase-analytics';

/**
 * Sitewide Product Hunt launch banner. Renders nothing while
 * SHOW_PH_LAUNCH_BANNER is false — flip the flag in src/lib/launch.ts
 * on launch day.
 */
export default function LaunchBanner() {
  const [copied, setCopied] = useState(false);

  if (!SHOW_PH_LAUNCH_BANNER) return null;

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(PH_DISCOUNT_CODE);
      setCopied(true);
      track('ph_banner_copy_code', { code: PH_DISCOUNT_CODE });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (permissions/old browser) — ignore, the
      // code is visible in the banner anyway.
    }
  };

  return (
    <div className="bg-gradient-to-r from-orange-500/15 via-primary/15 to-purple-500/15 border-b border-primary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-center">
        <span className="text-sm text-gray-200">
          🚀 We&apos;re live on Product Hunt — {PH_DISCOUNT_LABEL} with code
        </span>
        <button
          onClick={copyCode}
          className="inline-flex items-center gap-1.5 rounded-md bg-white/10 border border-primary/40 px-2.5 py-0.5 text-sm font-mono font-semibold text-white hover:bg-white/20 transition-colors"
          title="Copy code"
        >
          {PH_DISCOUNT_CODE}
          <span className="text-xs text-gray-300">
            {copied ? '✓ copied' : 'copy'}
          </span>
        </button>
        <Link
          href="/pricing"
          className="text-sm font-semibold text-primary hover:text-blue-400 transition-colors underline"
          onClick={() => track('ph_banner_pricing_click', {})}
        >
          View plans →
        </Link>
      </div>
    </div>
  );
}
