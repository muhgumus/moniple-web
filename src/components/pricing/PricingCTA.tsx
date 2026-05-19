'use client';

export type PricingTier = 'free' | 'pro' | 'team' | 'enterprise';
export type BillingCycle = 'monthly' | 'yearly';

interface PricingCTAProps {
  tier: PricingTier;
  billingCycle?: BillingCycle;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Plan CTAs.
 *
 * Pro and Team currently route users to the app's free-tier signup with a
 * `notify=<plan>` hint so we can email them when paid plans go live —
 * payment integration is in progress. Once the new payment provider is wired
 * up, switch the Pro/Team branch back to a checkout call.
 */
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
    >
      {children ?? (tier === 'pro' ? 'Get Pro' : 'Get Team')}
    </a>
  );
}
