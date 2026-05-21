import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    tagline: "Get started",
    summary: "Up to 5 clusters, 1 invited member (try-sharing), 5 AI scans/day, 1-day history",
  },
  {
    name: "Pro",
    price: "$10",
    period: "/seat/month",
    tagline: "Most popular",
    featured: true,
    summary: "Unlimited clusters, 100 AI scans/day, action approval, 30-day history",
  },
  {
    name: "Team",
    price: "$40",
    period: "/month for 5 seats",
    tagline: "$8 per seat after 5",
    summary: "Everything in Pro, SSO-ready, priority support, dedicated success",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored",
    tagline: "On-prem ready",
    summary: "Unlimited AI scans, on-premise deploy, SOC 2 package, audit logs",
  },
];

export default function PricingTeaserSection() {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white">
            Built for teams of{" "}
            <span className="text-primary">every size</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Start free. Scale per seat as your team grows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 ${
                plan.featured
                  ? "bg-white dark:bg-gray-800 ring-2 ring-primary shadow-xl"
                  : "bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {plan.tagline}
                </div>
              )}
              <h3 className="text-lg font-semibold text-dark dark:text-white">
                {plan.name}
              </h3>
              {!plan.featured && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {plan.tagline}
                </p>
              )}
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-dark dark:text-white">
                  {plan.price}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {plan.period}
                </span>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {plan.summary}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center text-primary hover:text-blue-600 font-semibold"
          >
            See full plan comparison
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
