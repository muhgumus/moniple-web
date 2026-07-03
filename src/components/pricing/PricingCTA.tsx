'use client';

import { track } from '@/lib/firebase-analytics';

export type PricingTier = 'free' | 'pro' | 'team' | 'enterprise';
export type BillingCycle = 'monthly' | 'yearly';

interface PricingCTAProps {
  tier: PricingTier;
  billingCycle?: BillingCycle;
  className?: string;
  children?: React.ReactNode;
  /** Where this CTA lives (e.g. 'pricing_card', 'home_hero'). Forwarded to
   *  the analytics event so we can segment by surface. */
  source?: string;
}

/**
 * Plan CTAs.
 *
 * Pro and Team route users to the app's signup with a `notify=<plan>` hint;
 * the upgrade itself happens in-app (Billing screen → Polar checkout, which
 * needs an authenticated user). Pro starts a 14-day free trial at checkout.
 *
 * Every click fires a `signup_click` analytics event with the tier, billing
 * cycle and source surface as parameters.
 */
export function PricingCTA({
  tier,
  billingCycle = 'monthly',
  className,
  children,
  source,
}: PricingCTAProps) {
  const handleClick = () => {
    track('signup_click', {
      tier,
      billing_cycle: billingCycle,
      source: source ?? 'pricing_card',
    });
  };

  if (tier === 'free') {
    return (
      <a
        href="https://app.moniple.com/register"
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={handleClick}
      >
        {children ?? 'Sign Up Free'}
      </a>
    );
  }

  if (tier === 'enterprise') {
    return (
      <a
        href="mailto:enterprise@moniple.com?subject=Moniple%20Enterprise%20Inquiry"
        className={className}
        onClick={handleClick}
      >
        {children ?? 'Contact Us'}
      </a>
    );
  }

  const plan =
    tier === 'pro'
      ? billingCycle === 'yearly'
        ? 'pro_yearly'
        : 'pro_monthly'
      : billingCycle === 'yearly'
        ? 'team_yearly'
        : 'team_monthly';

  return (
    <a
      href={`https://app.moniple.com/register?notify=${plan}`}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children ?? (tier === 'pro' ? 'Get Pro' : 'Get Team')}
    </a>
  );
}
