import Link from "next/link";

const components = [
  "Supabase (PostgreSQL + Realtime + Auth)",
  "Redis",
  "Moniple Server",
  "Moniple Agent",
  "VictoriaMetrics (optional)",
];

const bullets = [
  {
    title: "Helm chart + Kustomize manifests",
    description:
      "Production-ready deployment manifests are included in the Enterprise package. ArgoCD and Flux compatible.",
  },
  {
    title: "Custom data residency",
    description:
      "Choose your region or your own data centre per cluster. Metric data never leaves the boundary you define.",
  },
  {
    title: "Air-gapped operation",
    description:
      "No outbound calls required after installation. Bring your own LLM endpoint or run a local inference server.",
  },
  {
    title: "Dedicated support engineer",
    description:
      "A Nairotech engineer joins your setup and rollout — not a ticket queue.",
  },
];

export default function OnPremiseSection() {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-gray-50 to-gray-50 dark:from-primary/10 dark:via-gray-800 dark:to-gray-800 p-8 sm:p-12 lg:p-16 ring-1 ring-gray-200 dark:ring-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
                Enterprise · On-premise
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white">
                Air-gapped?{" "}
                <span className="text-primary">No problem.</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                A fully self-hosted Moniple stack for regulated industries,
                air-gapped environments and organisations with strict data
                residency requirements.
              </p>

              <div className="mt-6">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                  Self-hostable components
                </p>
                <div className="flex flex-wrap gap-2">
                  {components.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center rounded-lg bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-700 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-600 transition-colors"
                >
                  Contact us for Enterprise
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-lg bg-white dark:bg-gray-700 px-6 py-3 text-base font-semibold text-dark dark:text-white shadow-sm ring-1 ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                >
                  See Enterprise plan
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bullets.map((b) => (
                <div
                  key={b.title}
                  className="bg-white dark:bg-gray-900 rounded-xl p-5 ring-1 ring-gray-200 dark:ring-gray-700"
                >
                  <div className="flex items-center gap-2 mb-2">
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
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="text-sm font-semibold text-dark dark:text-white">
                      {b.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
