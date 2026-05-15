const actions = [
  "restart_pod",
  "restart_deployment",
  "scale_deployment",
  "delete_pod",
  "cordon_node",
  "uncordon_node",
  "adjust_resources",
  "rollback_deployment",
  "delete_job",
];

const steps = [
  {
    n: "01",
    title: "AI proposes",
    description:
      "After a diagnostic scan the AI generates concrete remediation actions tied to specific findings.",
  },
  {
    n: "02",
    title: "You review",
    description:
      "Each action shows the target resource, expected outcome, and risk level. Approve or reject individually.",
  },
  {
    n: "03",
    title: "Agent executes",
    description:
      "The in-cluster agent picks up approved actions in its next poll and runs them — the server never touches your cluster.",
  },
  {
    n: "04",
    title: "Audit trail",
    description:
      "Every approval, rejection and execution is logged with timestamp and user. Enterprise plans retain full history.",
  },
];

export default function ApproveRemediateSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
            Pro & Team · Approve & Remediate
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white">
            AI proposes.{" "}
            <span className="text-primary">You decide.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Every remediation action requires explicit approval — automation
            never runs unsupervised in your cluster.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((s, idx) => (
            <div key={s.n} className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 h-full ring-1 ring-gray-200 dark:ring-gray-700">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center text-base font-bold mb-4">
                  {s.n}
                </div>
                <h4 className="text-base font-semibold text-dark dark:text-white mb-2">
                  {s.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {s.description}
                </p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 text-gray-300 dark:text-gray-600 z-10">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Supported actions */}
        <div className="text-center">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
            Supported remediation actions
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {actions.map((a) => (
              <span
                key={a}
                className="inline-flex items-center rounded-lg bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 px-3 py-1.5 text-xs font-mono text-gray-700 dark:text-gray-300"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
