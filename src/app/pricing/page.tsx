import Link from 'next/link';

const plans = [
  {
    name: 'SaaS (Cloud)',
    price: 'Free',
    description: 'Perfect for individuals and small teams getting started with Kubernetes monitoring.',
    features: [
      'Unlimited clusters',
      'Real-time metrics sync',
      'Mobile & web access',
      'Multi-cluster dashboard',
      'Pod & PVC monitoring',
      'Resource alerts',
      'Community support',
    ],
    cta: {
      text: 'Get Started Free',
      href: 'https://app.moniple.com',
      primary: true,
    },
    highlighted: true,
  },
  {
    name: 'On-Premise',
    price: 'Contact Us',
    description: 'For enterprises requiring full control over their infrastructure and data.',
    features: [
      'Everything in SaaS',
      'Self-hosted deployment',
      'Custom integrations',
      'SSO / LDAP support',
      'Priority support',
      'SLA guarantees',
      'Dedicated account manager',
    ],
    cta: {
      text: 'Contact Sales',
      href: '/contact',
      primary: false,
    },
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-dark dark:text-white">
            Simple, Transparent{' '}
            <span className="text-primary">Pricing</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Start monitoring your Kubernetes clusters for free. Need more control? Let's talk about on-premise deployment.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-primary text-white ring-4 ring-primary/20'
                  : 'bg-white dark:bg-gray-800 shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-primary text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h2 className={`text-2xl font-bold ${plan.highlighted ? 'text-white' : 'text-dark dark:text-white'}`}>
                {plan.name}
              </h2>
              <p className={`mt-2 text-sm ${plan.highlighted ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'}`}>
                {plan.description}
              </p>

              <div className="mt-6">
                <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-dark dark:text-white'}`}>
                  {plan.price}
                </span>
                {plan.price !== 'Contact Us' && (
                  <span className={plan.highlighted ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'}>
                    {' '}/ forever
                  </span>
                )}
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? 'text-white' : 'text-primary'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlighted ? 'text-white' : 'text-gray-600 dark:text-gray-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                {plan.cta.href.startsWith('http') ? (
                  <a
                    href={plan.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center rounded-lg px-6 py-3 text-base font-semibold transition-colors ${
                      plan.highlighted
                        ? 'bg-white text-primary hover:bg-gray-100'
                        : 'bg-primary text-white hover:bg-blue-600'
                    }`}
                  >
                    {plan.cta.text}
                  </a>
                ) : (
                  <Link
                    href={plan.cta.href}
                    className={`block w-full text-center rounded-lg px-6 py-3 text-base font-semibold transition-colors ${
                      plan.highlighted
                        ? 'bg-white text-primary hover:bg-gray-100'
                        : 'bg-primary text-white hover:bg-blue-600'
                    }`}
                  >
                    {plan.cta.text}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-dark dark:text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-dark dark:text-white">
                Is the SaaS version really free?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Yes! Our cloud-hosted version is completely free with no hidden costs or usage limits. You can monitor as many clusters as you need.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-dark dark:text-white">
                What's the difference between SaaS and On-Premise?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                SaaS is hosted on our infrastructure and is free to use. On-Premise allows you to host Moniple entirely within your own infrastructure, giving you full control over data and compliance.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-dark dark:text-white">
                How do I install the monitoring agent?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                After creating your account, you'll get a single kubectl command. Run it on your cluster, and the agent will start collecting and sending metrics immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
