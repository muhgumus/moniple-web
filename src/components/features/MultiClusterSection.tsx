const bullets = [
  "Real-time CPU, memory, disk, pods, PVCs, namespaces and node metrics",
  "Multi-cluster from a single pane of glass",
  "Cluster grouping by team or environment",
  "Active / inactive status indicators for each cluster",
  "Filter by namespace, full-text search across resources",
];

export default function MultiClusterSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
              Monitoring
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white">
              Multi-cluster{" "}
              <span className="text-primary">monitoring</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              One dashboard for every cluster your team runs — dev, staging,
              production, and beyond. No tab-switching, no context juggling.
            </p>
            <ul className="mt-8 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "⚙️", label: "CPU", value: "23 %", color: "text-emerald-500" },
              { icon: "🧠", label: "Memory", value: "61 %", color: "text-amber-500" },
              { icon: "💾", label: "Disk", value: "47 %", color: "text-sky-500" },
              { icon: "📦", label: "Pods", value: "142 / 150", color: "text-primary" },
              { icon: "🖥️", label: "Nodes", value: "6 active", color: "text-emerald-500" },
              { icon: "🔔", label: "Alerts", value: "2 critical", color: "text-red-500" },
            ].map((card) => (
              <div
                key={card.label}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-gray-200 dark:ring-gray-700 shadow-sm"
              >
                <div className="text-lg mb-1">{card.icon}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {card.label}
                </div>
                <div className={`text-lg font-bold mt-0.5 ${card.color}`}>
                  {card.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
