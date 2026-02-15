import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description:
      "Perfect for individuals and small teams getting started with Kubernetes monitoring.",
    features: [
      "Up to 5 clusters",
      "Real-time metrics sync",
      "Mobile & web access",
      "Multi-cluster dashboard",
      "Pod & PVC monitoring",
      "Community support",
    ],
    cta: {
      text: "Get Started Free",
      href: "https://app.moniple.com",
      primary: true,
    },
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$10",
    period: "/month",
    description: "For power users and teams who need advanced features.",
    features: [
      "Everything in Free",
      "Unlimited clusters",
      "Cluster sharing",
      "Push notification alerts",
      "Priority support",
    ],
    cta: {
      text: "Coming Soon",
      href: "#",
      primary: false,
    },
    highlighted: false,
    comingSoon: true,
  },
  {
    name: "On-Premise",
    price: "Contact Us",
    period: "",
    description:
      "For enterprises requiring full control over their infrastructure and data.",
    features: [
      "Everything in Pro",
      "Self-hosted deployment",
      "Custom integrations",
      "SSO / LDAP support",
      "SLA guarantees",
      "Dedicated account manager",
    ],
    cta: {
      text: "Contact Sales",
      href: "/contact",
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
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Start monitoring your Kubernetes clusters for free. Need more
            features? Upgrade to Pro.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-primary text-white ring-4 ring-primary/20"
                  : "bg-white dark:bg-gray-800 shadow-lg"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-primary text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {plan.comingSoon && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gray-800 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Coming Soon
                  </span>
                </div>
              )}

              <h2
                className={`text-2xl font-bold ${plan.highlighted ? "text-white" : "text-dark dark:text-white"}`}
              >
                {plan.name}
              </h2>
              <p
                className={`mt-2 text-sm ${plan.highlighted ? "text-blue-100" : "text-gray-600 dark:text-gray-300"}`}
              >
                {plan.description}
              </p>

              <div className="mt-6">
                <span
                  className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-dark dark:text-white"}`}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span
                    className={
                      plan.highlighted
                        ? "text-blue-100"
                        : "text-gray-600 dark:text-gray-300"
                    }
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? "text-white" : "text-primary"}`}
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
                    <span
                      className={
                        plan.highlighted
                          ? "text-white"
                          : "text-gray-600 dark:text-gray-300"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                {plan.cta.href.startsWith("http") ? (
                  <a
                    href={plan.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center rounded-lg px-6 py-3 text-base font-semibold transition-colors ${
                      plan.highlighted
                        ? "bg-white text-primary hover:bg-gray-100"
                        : "bg-primary text-white hover:bg-blue-600"
                    }`}
                  >
                    {plan.cta.text}
                  </a>
                ) : plan.comingSoon ? (
                  <button
                    disabled
                    className="block w-full text-center rounded-lg px-6 py-3 text-base font-semibold bg-gray-300 text-gray-500 cursor-not-allowed"
                  >
                    {plan.cta.text}
                  </button>
                ) : (
                  <Link
                    href={plan.cta.href}
                    className={`block w-full text-center rounded-lg px-6 py-3 text-base font-semibold transition-colors ${
                      plan.highlighted
                        ? "bg-white text-primary hover:bg-gray-100"
                        : "bg-primary text-white hover:bg-blue-600"
                    }`}
                  >
                    {plan.cta.text}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-dark dark:text-white text-center mb-8">
            Feature Comparison
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-4 px-6 text-dark dark:text-white font-semibold">
                    Feature
                  </th>
                  <th className="text-center py-4 px-6 text-dark dark:text-white font-semibold">
                    Free
                  </th>
                  <th className="text-center py-4 px-6 text-dark dark:text-white font-semibold">
                    Pro
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-4 px-6 text-gray-600 dark:text-gray-300">
                    Clusters
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600 dark:text-gray-300">
                    Up to 5
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600 dark:text-gray-300">
                    Unlimited
                  </td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-4 px-6 text-gray-600 dark:text-gray-300">
                    Cluster Sharing
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg
                      className="w-5 h-5 mx-auto text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg
                      className="w-5 h-5 mx-auto text-primary"
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
                  </td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-4 px-6 text-gray-600 dark:text-gray-300">
                    Push Notification Alerts
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg
                      className="w-5 h-5 mx-auto text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg
                      className="w-5 h-5 mx-auto text-primary"
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
                  </td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-4 px-6 text-gray-600 dark:text-gray-300">
                    Real-time Metrics
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg
                      className="w-5 h-5 mx-auto text-primary"
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
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg
                      className="w-5 h-5 mx-auto text-primary"
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
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-600 dark:text-gray-300">
                    Mobile & Web Access
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg
                      className="w-5 h-5 mx-auto text-primary"
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
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg
                      className="w-5 h-5 mx-auto text-primary"
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
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-dark dark:text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-dark dark:text-white">
                Is the Free plan really free?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Yes! The Free plan includes up to 5 clusters at no cost,
                forever. No credit card required.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-dark dark:text-white">
                What is Cluster Sharing?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Cluster Sharing allows you to invite team members to view and
                monitor your clusters. They'll have read-only access to metrics
                and alerts.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-dark dark:text-white">
                When will Pro features be available?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Pro features including unlimited clusters, cluster sharing, and
                push notifications are currently in development. Sign up for
                Free now and we'll notify you when they're ready!
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-dark dark:text-white">
                How do I install the monitoring agent?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                After creating your account, you'll get a single kubectl
                command. Run it on your cluster, and the agent will start
                collecting and sending metrics immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
