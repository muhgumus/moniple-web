"use client";

import { initializeApp, type FirebaseApp } from "firebase/app";
import {
  getAnalytics,
  logEvent,
  setUserProperties,
  type Analytics,
} from "firebase/analytics";

/**
 * Public Firebase web config — same project as the Flutter web build.
 * Web API keys are NOT secrets; they identify the project to Google's edge.
 * See: https://firebase.google.com/docs/projects/api-keys
 */
const firebaseConfig = {
  apiKey: "AIzaSyBHZckUOSDrGWg0zOvBdSshQI27Q8d4VPI",
  authDomain: "moniple-prod.firebaseapp.com",
  projectId: "moniple-prod",
  storageBucket: "moniple-prod.firebasestorage.app",
  messagingSenderId: "114020388342",
  appId: "1:114020388342:web:b4f1386ace4b72740f4bd7",
  measurementId: "G-PCNP7L1X58",
};

let _app: FirebaseApp | null = null;
let _analytics: Analytics | null = null;

/**
 * Initialize Firebase Analytics if (and only if) the visitor has accepted
 * cookies. Safe to call multiple times — subsequent calls are no-ops.
 *
 * Called from:
 *   - CookieConsent (on Accept click)
 *   - AnalyticsListener (every route change; no-op until consent given)
 */
export function initFirebaseAnalytics(): void {
  if (typeof window === "undefined") return;
  if (_app) return;
  let consent: string | null = null;
  try {
    consent = window.localStorage.getItem("moniple_consent");
  } catch {
    // localStorage may be blocked (incognito, third-party cookies off, etc.)
    return;
  }
  if (consent !== "accepted") return;
  try {
    _app = initializeApp(firebaseConfig);
    _analytics = getAnalytics(_app);
    setUserProperties(_analytics, { site: "marketing" });
    // eslint-disable-next-line no-console
    console.log("[moniple] Firebase Analytics initialized (marketing)");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("[moniple] Firebase Analytics init failed:", e);
  }
}

/**
 * Fire-and-forget event tracker. Silently no-ops if Analytics isn't yet
 * initialized (e.g. visitor rejected cookies).
 */
export function track(event: string, params?: Record<string, unknown>): void {
  if (!_analytics) return;
  try {
    logEvent(_analytics, event, params as Record<string, string | number | boolean | undefined>);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`[moniple] track(${event}) failed:`, e);
  }
}

/**
 * True if the user has accepted cookies. Used by the consent banner to
 * decide whether to render itself on initial mount.
 */
export function hasConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem("moniple_consent") === "accepted";
  } catch {
    return false;
  }
}

/**
 * True if a consent decision (accepted OR rejected) has been recorded.
 * Used by the banner to decide whether to show itself.
 */
export function hasConsentDecision(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem("moniple_consent") !== null;
  } catch {
    return false;
  }
}
