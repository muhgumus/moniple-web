"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { hasConsentDecision, initFirebaseAnalytics } from "@/lib/firebase-analytics";

/**
 * GDPR cookie consent banner.
 *
 * Renders nothing on the server (SSG export). On the client:
 *   - First visit (no localStorage flag) → show the banner
 *   - Accept → store 'accepted' + init Firebase Analytics + hide banner
 *   - Reject → store 'rejected' + hide banner
 *
 * Styling matches the moniple-web dark theme (#1a1a2e background, blue
 * accept CTA). Banner is fixed at the bottom of the viewport with z-9999.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!hasConsentDecision()) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      window.localStorage.setItem("moniple_consent", "accepted");
    } catch {
      // ignore — banner still hides, just no analytics
    }
    setVisible(false);
    initFirebaseAnalytics();
  };

  const reject = () => {
    try {
      window.localStorage.setItem("moniple_consent", "rejected");
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#1a1a2e] text-white shadow-[0_-2px_12px_rgba(0,0,0,0.3)]"
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-4 px-4 py-4 sm:px-6">
        <div className="min-w-[240px] flex-1 text-sm leading-relaxed">
          We use cookies for analytics to improve your experience.{" "}
          <Link
            href="/privacy-policy"
            className="text-primary underline hover:text-blue-300"
          >
            Privacy Policy
          </Link>
          .
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={reject}
            className="rounded-md border border-gray-500 bg-transparent px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
