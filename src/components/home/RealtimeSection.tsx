const points = [
  {
    title: "Sub-second latency",
    description:
      "Agent push to dashboard in under 100ms via Supabase Realtime WebSocket.",
  },
  {
    title: "No 30-second polling",
    description:
      "When something breaks, you see it immediately — not on the next refresh interval.",
  },
  {
    title: "Live notifications",
    description:
      "Cluster invites, team activity and AI diagnostic reports appear instantly across all your devices.",
  },
];

export default function RealtimeSection() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
              Realtime
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white">
              Real-time, not{" "}
              <span className="text-primary">30-second polling</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Metric updates push via WebSocket. Pod fails? You see it in under
              a second. Built on Supabase Realtime so the same speed reaches
              your phone, your laptop and every browser tab you have open.
            </p>

            <div className="mt-8 space-y-5">
              {points.map((p) => (
                <div key={p.title} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-dark dark:text-white">
                      {p.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latency callout */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 ring-1 ring-gray-200 dark:ring-gray-700 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Live agent connection
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    p95 push-to-dashboard latency
                  </div>
                  <div className="text-4xl font-bold text-primary">&lt; 100ms</div>
                </div>
                <div className="h-px bg-gray-200 dark:bg-gray-700"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                      Best load test
                    </div>
                    <div className="text-xl font-semibold text-dark dark:text-white">
                      508 RPS
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                      Error rate
                    </div>
                    <div className="text-xl font-semibold text-dark dark:text-white">
                      0%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-6 -z-10 bg-primary/10 blur-3xl rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
