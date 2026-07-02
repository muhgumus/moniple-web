"use client";

import type { ReactNode } from "react";
import { track } from "@/lib/firebase-analytics";

interface DemoLinkProps {
  source: string;
  className?: string;
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

/**
 * Link that opens the live web app straight into Demo Mode (sample data, no
 * signup) via the `?demo=1` deep-link. Fires a `demo_click` analytics event
 * before navigating so we can attribute demo sessions to the landing-page
 * surface they came from (`source`, e.g. 'home_hero', 'closing_cta').
 *
 * The app's main() detects `?demo=1` on web and enters Demo Mode before the
 * router builds, landing the visitor directly on the dashboard.
 */
export default function DemoLink({
  source,
  className,
  children,
  href = "https://app.moniple.com/?demo=1",
  target = "_blank",
  rel = "noopener noreferrer",
}: DemoLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      onClick={() => track("demo_click", { source })}
    >
      {children}
    </a>
  );
}
