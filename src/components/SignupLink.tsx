"use client";

import type { ReactNode } from "react";
import { track } from "@/lib/firebase-analytics";

interface SignupLinkProps {
  href: string;
  source: string;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
}

/**
 * Drop-in replacement for an `<a>` that points at the app signup/register.
 * Fires a `signup_click` analytics event before the browser navigates.
 *
 * `source` is the surface the click came from (e.g. 'home_hero',
 * 'closing_cta', 'header_nav') and ends up as an event parameter in
 * Firebase so we can attribute signups to landing-page sections.
 */
export default function SignupLink({
  href,
  source,
  className,
  children,
  target = "_blank",
  rel = "noopener noreferrer",
}: SignupLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      onClick={() => track("signup_click", { source })}
    >
      {children}
    </a>
  );
}
