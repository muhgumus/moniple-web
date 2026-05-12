export default function RefundPolicyPage() {
  const lastUpdated = 'May 13, 2026';
  const supportEmail = 'support@moniple.com';

  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="mt-4 text-gray-400">Last updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-gray-300 leading-relaxed">
          {/* 1. Overview */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Overview</h2>
            <p className="text-gray-400">
              Moniple offers monthly and annual subscription plans (Moniple Pro) billed through{' '}
              <strong className="text-gray-300">Lemon Squeezy</strong>, our payment processor and
              Merchant of Record. Lemon Squeezy handles all payment processing, VAT/tax collection,
              and chargebacks on our behalf. By subscribing to Moniple Pro you agree to this Refund
              &amp; Cancellation Policy.
            </p>
          </section>

          {/* 2. Cancellation */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Cancellation</h2>
            <p className="text-gray-400">
              You may cancel your Pro subscription at any time from the{' '}
              <strong className="text-gray-300">Billing</strong> screen inside the Moniple app.
              After you cancel:
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-400">
              <li>
                Your Pro features remain fully active until the end of the current billing period.
              </li>
              <li>
                No further charges are made after the current period ends.
              </li>
              <li>
                Consumed (past) billing periods are not refunded under the standard cancellation
                flow (see the plan-specific sections below for exceptions).
              </li>
            </ul>
          </section>

          {/* 3. Annual plans */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              3. Annual Plans — 14-Day Refund Window
            </h2>
            <p className="text-gray-400">
              If you purchase a yearly Moniple Pro plan, you may request a{' '}
              <strong className="text-gray-300">full refund within 14 days</strong> of the
              original purchase date. To request a refund email us at{' '}
              <a
                href={`mailto:${supportEmail}`}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {supportEmail}
              </a>{' '}
              with the subject line &ldquo;Annual Plan Refund Request&rdquo; and include the
              email address associated with your account.
            </p>
            <p className="text-gray-400 mt-4">
              After the 14-day window closes, the standard &ldquo;no refund for consumed
              periods&rdquo; policy applies. You may still cancel at any time; access continues
              until your annual renewal date without any further charge.
            </p>
          </section>

          {/* 4. Monthly plans */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Monthly Plans</h2>
            <p className="text-gray-400">
              Monthly subscriptions are <strong className="text-gray-300">non-refundable</strong>{' '}
              for the current billing period. You can cancel at any time; your Pro access continues
              until the end of the period you have already paid for, and no further charges are made.
            </p>
          </section>

          {/* 5. Technical or billing issues */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Technical or Billing Issues
            </h2>
            <p className="text-gray-400">
              If you experience a service outage attributable to Moniple, a duplicate charge, or any
              other technical or billing issue, please contact us at{' '}
              <a
                href={`mailto:${supportEmail}`}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {supportEmail}
              </a>
              . We review each case individually and may issue a partial or full refund at our
              discretion.
            </p>
          </section>

          {/* 6. Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact</h2>
            <p className="text-gray-400">
              For any questions about this policy or to request a refund, reach us at:
            </p>
            <div className="mt-4 bg-white/5 border border-gray-800 rounded-xl p-6">
              <p className="text-white font-semibold">Moniple Support</p>
              <p className="text-gray-400 mt-2">
                Email:{' '}
                <a
                  href={`mailto:${supportEmail}`}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  {supportEmail}
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
