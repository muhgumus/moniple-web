"use client";

import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const tick = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          window.location.href = "https://app.moniple.com/dashboard";
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold text-white mb-2">Welcome to Moniple Pro</h1>
        <p className="text-gray-400 mb-2">
          Your subscription is active.
        </p>
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
