const points = [
  {
    title: "No polling, no auto-refresh",
    description:
      "Your dashboard updates the moment new data lands — no manual refresh, no countdown timer.",
  },
  {
    title: "WebSocket fanout",
    description:
      "Every connected device sees the change at the same time. Open a tab on your laptop and the app on your phone — both stay in sync.",
  },
  {
    title: "Built on Supabase Realtime",
    description:
      "Proven, scalable WebSocket infrastructure. Self-hostable for Enterprise customers who need full data sovereignty.",
  },
];

const flowSteps = [
  {
    label: "Your cluster",
    sublabel: "Prometheus / VictoriaMetrics",
  },
  {
    label: "Moniple Agent",
    sublabel: "pulls metrics every cycle",
  },
  {
    label: "Moniple Server",
    sublabel: "receives + fans out via WebSocket",
  },
  {
    label: "Your dashboard",
    sublabel: "updates instantly (every device)",
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
              Near-realtime updates,{" "}
              <span className="text-primary">no manual refresh</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Your agent collects metrics from your cluster on a continuous
              schedule and pushes snapshots to Moniple. The moment they arrive,
              our WebSocket layer delivers them to your dashboard — every browser
              tab, every phone, every desktop app stays in sync without polling.
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

          {/* How updates flow diagram */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 ring-1 ring-gray-200 dark:ring-gray-700 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  How updates flow
                </span>
              </div>

              <div className="space-y-3">
                {flowSteps.map((step, idx) => (
                  <div key={step.label}>
                    <div className="flex items-start gap-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 px-4 py-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center text-xs font-bold text-primary mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-dark dark:text-white">
                          {step.label}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          {step.sublabel}
                        </div>
                      </div>
                    </div>
                    {idx < flowSteps.length - 1 && (
                      <div className="flex justify-center py-1 text-gray-300 dark:text-gray-600">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
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
