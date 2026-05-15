const providers = [
  {
    name: "OpenAI",
    subtitle: "GPT-4o · o1 · o3-mini",
  },
  {
    name: "Anthropic",
    subtitle: "Claude Sonnet 4.6 · Opus 4.6",
  },
  {
    name: "Google",
    subtitle: "Gemini 2.0 Flash · Pro",
  },
  {
    name: "Zhipu",
    subtitle: "GLM-4.7 · GLM-4.7 Flash",
  },
  {
    name: "Custom",
    subtitle: "Any OpenAI-compatible endpoint",
  },
];

const checks = [
  "Pods",
  "Nodes",
  "Resources",
  "PVCs",
  "Events",
  "Security",
  "Deployments",
  "Logs",
];

const schedulingRows = [
  { plan: "Free", interval: "6 h minimum", scans: "5 scans / day" },
  { plan: "Pro", interval: "1 h minimum", scans: "100 scans / day" },
  { plan: "Team", interval: "1 h minimum", scans: "100 scans / day" },
  { plan: "Enterprise", interval: "Custom", scans: "Unlimited" },
];

export default function AIDoctorSection() {
  return (
    <section
      id="ai-doctor"
      className="py-16 sm:py-20 bg-white dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
            Moniple Doctor
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white">
            AI Doctor —{" "}
            <span className="text-primary">automated diagnostics</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            An AI assistant that looks at your cluster the way a senior SRE
            would — finds problems, explains the cause, proposes a fix and
            executes it once you approve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: BYOLLM + checks */}
          <div className="space-y-8">
            {/* Bring your own LLM */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                Bring your own LLM
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-5">
                Your API key, your control, your cost. We never store or log
                prompt content.
              </p>
              <div className="flex flex-wrap gap-2">
                {providers.map((p) => (
                  <div
                    key={p.name}
                    className="inline-flex flex-col bg-white dark:bg-gray-900 rounded-xl px-4 py-2.5 ring-1 ring-gray-200 dark:ring-gray-700"
                  >
                    <span className="text-sm font-semibold text-dark dark:text-white">
                      {p.name}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {p.subtitle}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 8 check categories */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                8 diagnostic check categories
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-5">
                Each scan covers all the areas a thorough SRE review would touch.
              </p>
              <div className="flex flex-wrap gap-2">
                {checks.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: scheduling + severity */}
          <div className="space-y-8">
            {/* Scheduled or on-demand */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-4">
                Scheduled or on-demand
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        Plan
                      </th>
                      <th className="text-left py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        Min interval
                      </th>
                      <th className="text-left py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        Daily quota
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedulingRows.map((r) => (
                      <tr
                        key={r.plan}
                        className="border-b border-gray-100 dark:border-gray-700/50 last:border-0"
                      >
                        <td className="py-2.5 font-medium text-dark dark:text-white">
                          {r.plan}
                        </td>
                        <td className="py-2.5 text-gray-600 dark:text-gray-300">
                          {r.interval}
                        </td>
                        <td className="py-2.5 text-gray-600 dark:text-gray-300">
                          {r.scans}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Severity-tagged findings */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                Severity-tagged findings
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-5">
                Each finding is tied to a specific resource with root cause
                analysis and a recommended fix.
              </p>
              <div className="space-y-2">
                {[
                  {
                    level: "Critical",
                    color: "bg-red-500/10 text-red-500 ring-red-500/20",
                    example: "Pod crashlooping — OOMKilled 3 times in 1h",
                  },
                  {
                    level: "Warning",
                    color: "bg-amber-500/10 text-amber-500 ring-amber-500/20",
                    example: "Deployment has no resource limits set",
                  },
                  {
                    level: "Info",
                    color: "bg-sky-500/10 text-sky-500 ring-sky-500/20",
                    example: "Namespace default has no NetworkPolicy",
                  },
                ].map((f) => (
                  <div
                    key={f.level}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-gray-900 ring-1 ring-gray-100 dark:ring-gray-700"
                  >
                    <span
                      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold ring-1 flex-shrink-0 ${f.color}`}
                    >
                      {f.level}
                    </span>
                    <span className="text-xs text-gray-600 dark:text-gray-300">
                      {f.example}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
