"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { initFirebaseAnalytics, track } from "@/lib/firebase-analytics";

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Init is a no-op if the user hasn't accepted cookies; once they do,
    // the very next navigation will pick up tracking.
    initFirebaseAnalytics();
    const qs = searchParams?.toString() ?? "";
    const path = pathname + (qs ? "?" + qs : "");
    track("page_view", {
      page_path: path,
      page_location:
        typeof window !== "undefined" ? window.location.href : undefined,
      page_title: typeof document !== "undefined" ? document.title : undefined,
    });
  }, [pathname, searchParams]);

  return null;
}

/**
 * Auto page_view tracker for Next.js App Router. Listens to route + query
 * changes and fires a page_view event each time.
 *
 * useSearchParams() requires a Suspense boundary for static export builds,
 * so we wrap it. The Suspense renders nothing — this component is invisible.
 */
export default function AnalyticsListener() {
  return (
    <Suspense fallback={null}>
      <PageViewTracker />
    </Suspense>
  );
}
