'use client';

import { openCheckout } from '@/lib/paddle';

interface PricingCTAProps {
  plan: 'monthly' | 'yearly';
  className?: string;
  children?: React.ReactNode;
}

export function PricingCTA({ plan, className, children }: PricingCTAProps) {
  return (
    <button
      onClick={() => openCheckout(plan)}
      className={className}
    >
      {children ?? 'Upgrade to Pro'}
    </button>
  );
}
