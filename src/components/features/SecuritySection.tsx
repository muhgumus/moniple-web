const bullets = [
  {
    title: "Agent-only push",
    description:
      "Your server never connects back to your cluster. The agent runs inside your infrastructure and pushes outbound — your cluster firewall stays closed.",
  },
  {
    title: "Per-cluster API keys",
    description:
      "Each cluster gets its own independently rotateable and revokeable API key. Compromise one key, the rest stay safe.",
  },
  {
    title: "Self-hosted Supabase in EU region",
    description:
      "Metric data and user accounts are stored in our EU-hosted Supabase instance. Enterprise customers can choose their own region or run fully on-premises.",
  },
  {
    title: "GDPR-ready by design",
    description:
      "Data minimisation, purpose limitation and deletion rights are built into the architecture — not bolted on as an afterthought.",
  },
  {
    title: "SOC 2 compliance package (Enterprise)",
    description:
      "Dedicated controls documentation, audit log exports and evidence packages for your compliance programme.",
  },
  {
    title: "Audit logs (Enterprise)",
    description:
      "Every billable action, every approval, every configuration change is timestamped and attributed to a user.",
  },
];

export default function SecuritySection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
            Security & Data sovereignty
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white">
            Secure by{" "}
            <span className="text-primary">architecture</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            No inbound connections to your cluster. No unnecessary data
            retention. Full control over where your data lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bullets.map((b) => (
            <div
              key={b.title}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 ring-1 ring-gray-200 dark:ring-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
                <h3 className="text-sm font-semibold text-dark dark:text-white">
                  {b.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
