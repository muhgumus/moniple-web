export default function RefundPolicyPage() {
  const lastUpdated = 'May 15, 2026';
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

          {/* 1. 14-day money-back guarantee */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              14-Day Money-Back Guarantee
            </h2>
            <p className="text-gray-400">
              We offer a <strong className="text-gray-300">14-day money-back guarantee</strong> on
              all Moniple Pro subscriptions, including both monthly and annual plans. If you are
              not satisfied with your purchase for any reason, contact our support team within
              14 days of your initial purchase or renewal for a full refund. No questions asked.
            </p>
            <p className="text-gray-400 mt-4">
              To request a refund, email{' '}
              <a
                href={`mailto:${supportEmail}`}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {supportEmail}
              </a>{' '}
              from the email address associated with your account. Refunds are processed by
              Paddle, our Merchant of Record, and typically appear on your statement within
              5–10 business days.
            </p>
          </section>

          {/* 2. After the 14-day window */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              After the 14-Day Window
            </h2>
            <p className="text-gray-400">
              After the 14-day window has expired, refunds are not provided.
            </p>
          </section>

          {/* 3. Cancellation */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Cancellation</h2>
            <p className="text-gray-400">
              You may cancel your subscription at any time through your account settings or by
              contacting support. Your access to Moniple Pro features will continue until the end
              of your current billing period. No partial refunds are issued for unused time
              outside the 14-day money-back guarantee window.
            </p>
          </section>

          {/* 4. Subscription renewals */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Subscription Renewals</h2>
            <p className="text-gray-400">
              Subscriptions renew automatically at the end of each billing period (monthly or
              annual) at the then-current price. You will be charged on the renewal date unless
              you cancel before that date. Renewal charges are eligible for the 14-day
              money-back guarantee from the date of the renewal charge.
            </p>
          </section>

          {/* 5. Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
            <p className="text-gray-400">
              For refund requests or questions about this policy:
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
              <p className="text-gray-400 mt-2">
                Refunds processed by:{' '}
                <strong className="text-gray-300">Paddle.com Market Ltd</strong> (Merchant of Record)
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
