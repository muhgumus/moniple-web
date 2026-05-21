"use client";

import Link from "next/link";
import { useState } from "react";
import { PricingCTA } from "@/components/pricing/PricingCTA";

const freeFeatures = [
  "Up to 5 clusters",
  "1 invited member (try-sharing)",
  "Realtime metrics & alerts",
  "1-hour & 6-hour history",
  "Moniple AI Doctor — 5 scans/day",
  "AI Doctor cron schedule min 6h",
  "Custom LLM (your API key) — 5 scans/day",
  "Community support",
];

const proFeatures = [
  "Everything in Free",
  "Unlimited clusters",
  "Per-seat pricing — 1 seat per active user (you + each invited member)",
  "30-day metric history",
  "100 Moniple AI scans / day",
  "Unlimited Custom LLM scans / day (bring your own API key)",
  "AI Doctor cron schedule min 1h",
  "Approve AI diagnostic actions",
  "Realtime push notifications (alerts, AI Doctor, invitations)",
  "Email support",
];

const teamFeatures = [
  "Everything in Pro",
  "$8 per seat — 20% off Pro, 5-seat minimum",
  "Per-seat pricing — 1 seat per active user (you + each invited member)",
  "100 Moniple AI scans / day",
  "Unlimited Custom LLM scans / day (bring your own API key)",
  "SSO-ready (SAML / OIDC)",
  "Priority email support",
  "Dedicated customer success",
  "Shared cluster ownership transfer",
];

const enterpriseFeatures = [
  "Everything in Team",
  "Unlimited seats / members",
  "Custom limits — clusters, scans, schedule interval (fully parametric)",
  "Unlimited AI Doctor scans (by default)",
  "On-premise deployment",
  "SSO + audit logs",
  "Dedicated support engineer",
  "Custom SLA",
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
                  <span className="text-4xl font-bold text-white">$100</span>
                  <span className="text-gray-300 text-sm"> per seat/year</span>
                </div>
              ) : (
                <div>
                  <span className="text-4xl font-bold text-white">$10</span>
                  <span className="text-gray-300 text-sm"> per seat/month</span>
                </div>
              )}
            </div>
            <p className="mt-2 text-xs text-green-400 min-h-[1.5rem]">
              {yearly ? "$8.33/mo — 2 months free" : "Billed monthly per seat"}
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
              For small teams.
            </p>

            <div className="mt-6">
              {yearly ? (
                <div>
                  <span className="text-4xl font-bold text-white">$400</span>
                  <span className="text-gray-300 text-sm"> /yr for 5 seats</span>
                </div>
              ) : (
                <div>
                  <span className="text-4xl font-bold text-white">$40</span>
                  <span className="text-gray-300 text-sm"> /mo for 5 seats</span>
                </div>
              )}
            </div>
            <p className="mt-2 text-xs text-gray-400 min-h-[1.5rem]">
              {yearly ? "Then $80/seat/year for additional seats" : "Then $8/seat/month for additional seats"}
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
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-white">Enterprise</h2>
              <span className="inline-flex items-center rounded-full bg-purple-500/20 px-2 py-0.5 text-xs font-semibold text-purple-300">
                Custom
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-300">
              Dedicated support, custom SLA.
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
          Paid plans are launching soon — sign up free today and we&apos;ll
          notify you the moment Pro &amp; Team go live.{" "}
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
                What counts as a seat?
              </h3>
              <p className="mt-2 text-gray-400">
                A seat is one active user with access to your clusters — that
                includes you (the cluster owner) plus every member you&apos;ve
                invited or shared a cluster with via a team. A 1-seat Pro
                subscription covers just you; to share clusters with a
                teammate, increase your seat count. Free tier allows 1 invited
                member as a try-sharing allowance.
              </p>
            </div>
            <div className="bg-white/5 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white">
                How does per-seat pricing work?
              </h3>
              <p className="mt-2 text-gray-400">
                <span className="text-gray-200">Pro</span> charges $10 per
                active user per month (or $100/year per seat). Add or remove
                seats anytime — your bill adjusts at the next cycle.{" "}
                <span className="text-gray-200">Team</span> is per-seat pricing
                with a 5-seat minimum: starts at $40/month (or $400/year) for
                5 seats, then $8 per additional seat per month ($80 per
                additional seat per year). At 5 seats you save 20% vs
                Pro&apos;s $10/seat rate.
              </p>
            </div>
            <div className="bg-white/5 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white">
                What happens if I add more team members than my seats?
              </h3>
              <p className="mt-2 text-gray-400">
                You&apos;ll get a prompt to upgrade your seat count when
                inviting someone past your current limit. Existing customers
                who already exceed their seats get a 14-day grace period to
                upgrade or remove members.{" "}
                <span className="text-gray-200">Pro</span> scales 1-to-1 per
                seat at $10/seat/month.{" "}
                <span className="text-gray-200">Team</span> scales 1-to-1 per
                seat at $8/seat/month with a 5-seat minimum — adding a 6th
                seat brings your total to $48/month.
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
                What does Enterprise include?
              </h3>
              <p className="mt-2 text-gray-400">
                Enterprise plans are fully customizable. We tune cluster limits,
                scan quotas, schedule frequency, retention periods, and feature
                flags (SSO, audit logs, approval workflows) per organization.{" "}
                <a
                  href="mailto:enterprise@moniple.com?subject=Moniple%20Enterprise%20Inquiry"
                  className="text-primary hover:text-primary/80 transition-colors underline"
                >
                  Contact us
                </a>{" "}
                for a tailored quote.
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
                How many AI Doctor scans can I run?
              </h3>
              <p className="mt-2 text-gray-400">
                There are two separate daily budgets.{" "}
                <span className="text-gray-200">Moniple AI</span> (our hosted
                LLM, throttled to control cost): 5 scans/day on Free, 100/day
                on Pro &amp; Team, unlimited on Enterprise.{" "}
                <span className="text-gray-200">Custom LLM</span> (bring your
                own OpenAI, Anthropic, Google, Zhipu, or any
                OpenAI-compatible key): 5 scans/day on Free, unlimited on Pro,
                Team &amp; Enterprise — since you&apos;re paying your own
                provider directly, there&apos;s no upper limit on paid plans.
              </p>
            </div>
            <div className="bg-white/5 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white">
                Can I approve AI-suggested actions?
              </h3>
              <p className="mt-2 text-gray-400">
                Yes, on Pro and above. Free users can view recommendations but
                cannot approve or execute actions.
              </p>
            </div>
            <div className="bg-white/5 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white">
                What payment methods are accepted?
              </h3>
              <p className="mt-2 text-gray-400">
                Once paid plans launch, we&apos;ll accept all major credit and
                debit cards (Visa, Mastercard, American Express) in both
                Turkish Lira (TRY) and US Dollar (USD), including installment
                support for Turkish bank cards (Maximum, Bonus, World, Axess,
                CardFinans, Paraf).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
