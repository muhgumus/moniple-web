'use client';

import { openCheckout } from '@/lib/paddle';

export type PricingTier = 'free' | 'pro' | 'team' | 'enterprise';
export type BillingCycle = 'monthly' | 'yearly';

interface PricingCTAProps {
  tier: PricingTier;
  billingCycle?: BillingCycle;
  className?: string;
  children?: React.ReactNode;
}

export function PricingCTA({
  tier,
  billingCycle = 'monthly',
  className,
  children,
}: PricingCTAProps) {
  if (tier === 'free') {
    return (
      <a
        href="https://app.moniple.com/register"
        target="_blank"
        rel="noopener noreferrer"
        className={className}
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
      >
        {children ?? 'Contact Us'}
      </a>
    );
  }

  const plan =
    tier === 'pro'
      ? billingCycle === 'yearly'
        ? 'proYearly'
        : 'proMonthly'
      : billingCycle === 'yearly'
        ? 'teamYearly'
        : 'teamMonthly';

  return (
    <button onClick={() => openCheckout(plan)} className={className}>
      {children ?? (tier === 'pro' ? 'Get Pro' : 'Get Team')}
    </button>
  );
}
