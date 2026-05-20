"use client";

import { useEffect, useState } from "react";

/**
 * Post-checkout landing page.
 *
 * Polar's checkout API requires `success_url` to start with http(s)://,
 * so the server always sends users here after a successful payment. This
 * page is the bridge that fans the user out to the right destination:
 *
 *   - `source=native` (iOS/Android app launched the browser) →
 *       redirect to the `moniple://welcome?plan=<plan>` custom-scheme
 *       deep link so the user bounces back into the native app and the
 *       WelcomeUpgradeDialog appears.
 *   - everything else (web) → redirect to app.moniple.com/dashboard
 *       with `?welcome=<plan>` so the SPA shows the same dialog.
 */
export default function SuccessPage() {
  const [countdown, setCountdown] = useState(5);
  const [native, setNative] = useState(false);

  // First effect: parse query params + fire the immediate redirect for
  // native users. Web users see the countdown card for ~5 seconds before
  // bouncing to the SPA.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get("source") ?? "web";
    const plan = params.get("plan") ?? "1";

    if (source === "native") {
      setNative(true);
      // Defer one tick so the UI renders ("Returning to the app...") before
      // the OS takes over with the moniple:// scheme prompt.
      const t = setTimeout(() => {
        window.location.href = `moniple://welcome?plan=${encodeURIComponent(
          plan,
        )}`;
      }, 300);
      return () => clearTimeout(t);
    }

    const tick = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          window.location.href = `https://app.moniple.com/dashboard?welcome=${encodeURIComponent(
            plan,
          )}`;
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  if (native) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold text-white mb-2">Payment received</h1>
          <p className="text-gray-400 mb-6">Returning to the Moniple app…</p>
          <a
            href={`moniple://welcome?plan=pro_monthly`}
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Open Moniple
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold text-white mb-2">Welcome to Moniple Pro</h1>
        <p className="text-gray-400 mb-2">Your subscription is active.</p>
        <p className="text-gray-500 text-sm mb-8">
          Redirecting to your dashboard in {countdown}s...
        </p>
        <a
          href="https://app.moniple.com/dashboard"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
        >
          Open Moniple Now
        </a>
      </div>
    </main>
  );
}
