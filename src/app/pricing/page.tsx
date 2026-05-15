"use client";

import Link from "next/link";
import { useState } from "react";
import { PricingCTA } from "@/components/pricing/PricingCTA";

const freeFeatures = [
  "Up to 5 clusters",
  "Up to 5 team members",
  "Realtime metrics & alerts",
  "1-hour & 6-hour history",
  "Moniple AI Doctor — 4 scans/day",
  "AI Doctor cron schedule min 6h",
  "Custom LLM (your API key) — unlimited",
  "Community support",
];

const proFeatures = [
  "Everything in Free",
  "Unlimited clusters",
  "Unlimited per-seat team members",
  "30-day metric history",
  "Moniple AI Doctor — 25 scans/day",
  "AI Doctor cron schedule min 1h",
  "Email support",
];

const teamFeatures = [
  "Everything in Pro",
  "Block pricing (5 seats per block)",
  "Effective $6.98/seat — 30% off vs Pro",
  "SSO-ready (SAML / OIDC)",
  "Priority email support",
  "Shared cluster ownership transfer",
];

const enterpriseFeatures = [
  "Everything in Team",
  "On-premise deployment",
  "Dedicated support engineer",
  "Custom SLA",
  "SSO + audit logs",
  "SOC2 compliance package",
  "Custom data residency",
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

function EnterpriseBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/20 px-2 py-0.5 text-xs font-semibold text-purple-300">
      Enterprise only
    </span>
  );
}

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Start free, scale per seat as your team grows. On-premise deployment
            available on Enterprise.
          </p>
        </div>

        {/* Global billing toggle */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setYearly(false)}
            className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
              !yearly
                ? "bg-primary text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`text-sm font-medium px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 ${
              yearly ? "bg-primary text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            Yearly
            <span className="bg-green-500/20 text-green-400 text-xs px-1.5 py-0.5 rounded-full font-semibold">
              Save 17%
            </span>
          </button>
        </div>

        {/* 4-tier grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Free Card */}
          <div className="rounded-2xl p-6 bg-white/5 border border-gray-700 flex flex-col">
            <h2 className="text-xl font-bold text-white">Free</h2>
            <p className="mt-2 text-sm text-gray-400">
              Get started at no cost, forever.
            </p>
            <div className="mt-6">
              <span className="text-4xl font-bold text-white">$0</span>
              <span className="text-gray-400 text-sm"> forever</span>
            </div>
            <p className="mt-2 text-xs text-gray-500 min-h-[1.5rem]">
              No credit card required
            </p>

            <ul className="mt-6 space-y-3 flex-1">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 flex-shrink-0 text-primary mt-0.5" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <PricingCTA
                tier="free"
                className="block w-full text-center rounded-lg px-4 py-3 text-sm font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors border border-gray-600"
              >
                Sign Up Free
              </PricingCTA>
            </div>
          </div>

          {/* Pro Card */}
          <div className="relative rounded-2xl p-6 bg-gradient-to-b from-primary/20 to-primary/5 border-2 border-primary flex flex-col">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
            </div>

            <h2 className="text-xl font-bold text-white">Pro</h2>
            <p className="mt-2 text-sm text-gray-300">
              Per-seat pricing for growing teams.
            </p>

            <div className="mt-6">
              {yearly ? (
                <div>
                  <span className="text-4xl font-bold text-white">$99</span>
                  <span className="text-gray-300 text-sm"> per seat/year</span>
                </div>
              ) : (
                <div>
                  <span className="text-4xl font-bold text-white">$9.90</span>
                  <span className="text-gray-300 text-sm"> per seat/month</span>
                </div>
              )}
            </div>
            <p className="mt-2 text-xs text-green-400 min-h-[1.5rem]">
              {yearly ? "$8.25/mo — 2 months free" : "Billed monthly per seat"}
            </p>

            <ul className="mt-6 space-y-3 flex-1">
              {proFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 flex-shrink-0 text-primary mt-0.5" />
                  <span className="text-sm text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <PricingCTA
                tier="pro"
                billingCycle={yearly ? "yearly" : "monthly"}
                className="block w-full text-center rounded-lg px-4 py-3 text-sm font-semibold bg-primary text-white hover:bg-blue-600 transition-colors"
              >
                Get Pro
              </PricingCTA>
            </div>
          </div>

          {/* Team Card */}
          <div className="rounded-2xl p-6 bg-white/5 border border-gray-700 flex flex-col">
            <h2 className="text-xl font-bold text-white">Team</h2>
            <p className="mt-2 text-sm text-gray-300">
              Block pricing for larger teams.
            </p>

            <div className="mt-6">
              {yearly ? (
                <div>
                  <span className="text-4xl font-bold text-white">$348</span>
                  <span className="text-gray-300 text-sm">
                    {" "}
                    per 5-seat block/year
                  </span>
                </div>
              ) : (
                <div>
                  <span className="text-4xl font-bold text-white">$34.90</span>
                  <span className="text-gray-300 text-sm">
                    {" "}
                    per 5-seat block/month
                  </span>
                </div>
              )}
            </div>
            <p className="mt-2 text-xs text-gray-400 min-h-[1.5rem]">
              Each block includes 5 seats. Effective $6.98/seat — 30% off Pro.
            </p>

            <ul className="mt-6 space-y-3 flex-1">
              {teamFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 flex-shrink-0 text-primary mt-0.5" />
                  <span className="text-sm text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <PricingCTA
                tier="team"
                billingCycle={yearly ? "yearly" : "monthly"}
                className="block w-full text-center rounded-lg px-4 py-3 text-sm font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors border border-gray-600"
              >
                Get Team
              </PricingCTA>
            </div>
          </div>

          {/* Enterprise Card */}
          <div className="rounded-2xl p-6 bg-gradient-to-b from-purple-500/15 to-purple-500/5 border border-purple-500/40 flex flex-col">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Enterprise</h2>
              <EnterpriseBadge />
            </div>
            <p className="mt-2 text-sm text-gray-300">
              On-premise deployment, dedicated support, custom SLA.
            </p>

            <div className="mt-6">
              <span className="text-4xl font-bold text-white">Custom</span>
            </div>
            <p className="mt-2 text-xs text-purple-300 min-h-[1.5rem]">
              Talk to sales for a tailored quote
            </p>

            <ul className="mt-6 space-y-3 flex-1">
              {enterpriseFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 flex-shrink-0 text-purple-400 mt-0.5" />
                  <span className="text-sm text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <PricingCTA
                tier="enterprise"
                className="block w-full text-center rounded-lg px-4 py-3 text-sm font-semibold bg-purple-600 text-white hover:bg-purple-700 transition-colors"
              >
                Contact Us
              </PricingCTA>
            </div>
          </div>
        </div>

        {/* Payment note */}
        <p className="mt-10 text-center text-sm text-gray-500 max-w-2xl mx-auto">
          Payments processed by{" "}
          <span className="text-gray-400">Paddle</span> (Merchant of Record).
          VAT/tax handled automatically.{" "}
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
                How does per-seat pricing work?
              </h3>
              <p className="mt-2 text-gray-400">
                <span className="text-gray-200">Pro</span> charges $9.90 per
                team member per month (or $99/year per seat). Add or remove
                seats anytime — your bill adjusts at the next cycle.{" "}
                <span className="text-gray-200">Team</span> bundles seats in
                5-seat blocks at $34.90/month (or $348/year), giving you an
                effective $6.98/seat — about 30% off Pro pricing.
              </p>
            </div>
            <div className="bg-white/5 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white">
                What happens if I add more team members?
              </h3>
              <p className="mt-2 text-gray-400">
                On <span className="text-gray-200">Pro</span>, your seat count
                grows 1-to-1 with team size. On{" "}
                <span className="text-gray-200">Team</span>, blocks scale in
                groups of 5: 1–5 members = 1 block, 6–10 members = 2 blocks,
                and so on. The app prompts you to add more blocks before you
                hit the cap.
              </p>
            </div>
            <div className="bg-white/5 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white">
                Can I switch between plans?
              </h3>
              <p className="mt-2 text-gray-400">
                Yes. Upgrades take effect immediately and are prorated for the
                remainder of the cycle. Downgrades apply at the end of the
                current billing period.
              </p>
            </div>
            <div className="bg-white/5 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white">
                What about on-premise deployment?
              </h3>
              <p className="mt-2 text-gray-400">
                On-premise deployment is available exclusively on the{" "}
                <span className="text-gray-200">Enterprise</span> plan. Run
                Moniple entirely inside your own infrastructure with zero
                outbound dependencies, including the AI Doctor (via your
                self-hosted LLM endpoint).{" "}
                <a
                  href="mailto:enterprise@moniple.com?subject=Moniple%20Enterprise%20Inquiry"
                  className="text-primary hover:text-primary/80 transition-colors underline"
                >
                  Contact us
                </a>{" "}
                to discuss your requirements.
              </p>
            </div>
            <div className="bg-white/5 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white">
                Can I cancel anytime?
              </h3>
              <p className="mt-2 text-gray-400">
                Yes. Cancel from the Billing screen in the app — paid features
                remain active until the end of the current billing period, with
                no further charges.
              </p>
            </div>
            <div className="bg-white/5 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white">
                What is the refund policy?
              </h3>
              <p className="mt-2 text-gray-400">
                All paid subscriptions — monthly and annual — are eligible for
                a full refund within 14 days of purchase or renewal. See our
                full{" "}
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
                Paddle supports all major credit and debit cards (Visa,
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
