const retentionRows = [
  { plan: "Free", retention: "1 day" },
  { plan: "Pro", retention: "30 days" },
  { plan: "Team", retention: "30 days" },
  { plan: "Enterprise", retention: "90 days default — customisable" },
];

const bullets = [
  {
    title: "Multi-metric charts",
    description:
      "CPU, Memory, Disk and Pod count overlaid on one timeline. Toggle metrics on/off to focus on what matters.",
  },
  {
    title: "Per-pod & per-node breakdowns",
    description:
      "Drill into a specific workload's CPU or memory history. Correlate spikes with events.",
  },
  {
    title: "Auto-resolution",
    description:
      "Server downsamples points based on the selected time range: 1 min for 6h, 5 min for 24h, 1h for 7d, 6h for 30d — so charts stay fast.",
  },
];

export default function MetricHistorySection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
              Metric History & Analytics
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white">
              Look back,{" "}
              <span className="text-primary">understand patterns</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Historical metric charts help you spot trends, plan capacity and
              understand what was happening when an incident occurred.
            </p>
            <div className="mt-8 space-y-5">
              {bullets.map((b) => (
                <div key={b.title} className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
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
                  <div>
                    <span className="text-sm font-semibold text-dark dark:text-white">
                      {b.title}
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">
                      {b.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Retention table */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 ring-1 ring-gray-200 dark:ring-gray-700 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-5">
              History retention by plan
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Plan
                    </th>
                    <th className="text-left py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Retention
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {retentionRows.map((r) => (
                    <tr
                      key={r.plan}
                      className="border-b border-gray-100 dark:border-gray-700/50 last:border-0"
                    >
                      <td className="py-2.5 font-medium text-dark dark:text-white">
                        {r.plan}
                      </td>
                      <td className="py-2.5 text-gray-600 dark:text-gray-300">
                        {r.retention}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mini chart visualisation */}
            <div className="mt-6">
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                CPU usage — last 24 h
              </div>
              <div className="flex items-end gap-1 h-16">
                {[30, 42, 38, 55, 61, 48, 52, 45, 70, 68, 55, 60, 72, 65, 58, 50, 62, 74, 68, 60, 55, 48, 52, 44].map(
                  (v, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary/30 rounded-sm transition-all hover:bg-primary/60"
                      style={{ height: `${v}%` }}
                    />
                  )
                )}
              </div>
              <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500 mt-1">
                <span>24h ago</span>
                <span>now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
