"use client";

import Link from "next/link";
import { useState } from "react";

const freeFeatures = [
  "Unlimited clusters",
  "Unlimited team members",
  "Realtime metrics & alerts",
  "1-hour & 6-hour history",
  "Moniple AI Doctor — 4 scans/day",
  "AI Doctor cron schedule min 6h",
  "Custom LLM (your API key) — unlimited",
];

const proFeatures = [
  "Everything in Free",
  "30-day metric history",
  "Moniple AI Doctor — 25 scans/day",
  "AI Doctor cron schedule min 1h",
  "Priority email support",
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "w-5 h-5 flex-shrink-0 text-primary"}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function PricingPage() {
  const [proYearly, setProYearly] = useState(false);

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Start monitoring your Kubernetes clusters for free. Upgrade to Pro
            for more AI Doctor power and priority support.
          </p>
        </div>

        {/* Pricing Cards — 2-column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Card */}
          <div className="rounded-2xl p-8 bg-white/5 border border-gray-700">
            <h2 className="text-2xl font-bold text-white">Free</h2>
            <p className="mt-2 text-sm text-gray-400">
              Everything you need to get started — at no cost, forever.
            </p>
            <div className="mt-6">
              <span className="text-4xl font-bold text-white">$0</span>
              <span className="text-gray-400">/month</span>
            </div>

            <ul className="mt-8 space-y-4">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="https://app.moniple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-lg px-6 py-3 text-base font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors border border-gray-600"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Pro Card */}
          <div className="relative rounded-2xl p-8 bg-gradient-to-b from-primary/20 to-primary/5 border-2 border-primary">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full">
                Most Popular
              </span>
            </div>

            <h2 className="text-2xl font-bold text-white">Pro</h2>
            <p className="mt-2 text-sm text-gray-300">
              More AI Doctor capacity and priority support for power users.
            </p>

            {/* Billing toggle */}
            <div className="mt-5 flex items-center gap-3">
              <button
                onClick={() => setProYearly(false)}
                className={`text-sm font-medium px-3 py-1 rounded-full transition-colors ${
                  !proYearly
                    ? "bg-primary text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setProYearly(true)}
                className={`text-sm font-medium px-3 py-1 rounded-full transition-colors flex items-center gap-1.5 ${
                  proYearly
                    ? "bg-primary text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Yearly
                <span className="bg-green-500/20 text-green-400 text-xs px-1.5 py-0.5 rounded-full font-semibold">
                  Save 17%
                </span>
              </button>
            </div>

            <div className="mt-4">
              {proYearly ? (
                <div>
                  <span className="text-4xl font-bold text-white">$99</span>
                  <span className="text-gray-300">/year</span>
                  <p className="mt-1 text-sm text-green-400">
                    $8.25/mo — 2 months free
                  </p>
                </div>
              ) : (
                <div>
                  <span className="text-4xl font-bold text-white">$9.90</span>
                  <span className="text-gray-300">/month</span>
                </div>
              )}
            </div>

            <ul className="mt-8 space-y-4">
              {proFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 flex-shrink-0 text-primary" />
                  <span className="text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="https://app.moniple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-lg px-6 py-3 text-base font-semibold bg-primary text-white hover:bg-blue-600 transition-colors"
              >
                Upgrade to Pro
              </a>
            </div>
          </div>
        </div>

        {/* Payment note */}
        <p className="mt-8 text-center text-sm text-gray-500 max-w-2xl mx-auto">
          Payments processed by{" "}
          <span className="text-gray-400">Lemon Squeezy</span> (Merchant of
          Record). VAT/tax handled automatically.{" "}
          <Link
            href="/refund-policy"
            className="text-primary hover:text-primary/80 transition-colors underline"
          >
            Refund &amp; Cancellation Policy
          </Link>
          .
        </p>

        {/* FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white/5 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white">
                Can I cancel anytime?
              </h3>
              <p className="mt-2 text-gray-400">
                Yes. You can cancel your Pro subscription at any time from the
                Billing screen in the app. Your Pro features remain active until
                the end of your current billing period — no further charges are
                made.
              </p>
            </div>
            <div className="bg-white/5 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white">
                What is the refund policy?
              </h3>
              <p className="mt-2 text-gray-400">
                Annual plans are eligible for a full refund within 14 days of
                purchase. Monthly subscriptions are non-refundable for the
                current period. See our full{" "}
                <Link
                  href="/refund-policy"
                  className="text-primary hover:text-primary/80 transition-colors underline"
                >
                  Refund &amp; Cancellation Policy
                </Link>{" "}
                for details.
              </p>
            </div>
            <div className="bg-white/5 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white">
                What payment methods are accepted?
              </h3>
              <p className="mt-2 text-gray-400">
                Lemon Squeezy supports all major credit and debit cards (Visa,
                Mastercard, American Express) as well as PayPal in supported
                regions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
