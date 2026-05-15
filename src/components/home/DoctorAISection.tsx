const doctorFeatures = [
  {
    title: "Bring your own LLM",
    description:
      "OpenAI, Anthropic, Google Gemini, Zhipu GLM or any OpenAI-compatible endpoint. Use your own API key — we never touch your prompts or analysis content.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  },
  {
    title: "Automated scans",
    description:
      "Schedule diagnostic runs as often as every hour on Pro. Eight check categories: pods, nodes, resources, PVCs, events, security, deployments and logs.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Findings with severity",
    description:
      "Each scan produces actionable findings — critical, warning, info — with affected resources, root cause analysis and recommended fixes.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
  {
    title: "Approve & remediate",
    description:
      "Pro+ users can approve AI-suggested actions: restart pods, scale deployments, cordon nodes, adjust resources, rollback releases — all from the dashboard.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
  },
];

const providers = [
  { name: "OpenAI", subtitle: "GPT-4o · o1 · o3-mini" },
  { name: "Anthropic", subtitle: "Claude Sonnet 4.6" },
  { name: "Google", subtitle: "Gemini 2.0 Pro" },
  { name: "Zhipu", subtitle: "GLM-4.7" },
  { name: "Custom", subtitle: "OpenAI-compatible" },
];

const steps = [
  {
    n: "01",
    title: "Agent collects",
    description: "Lightweight agent gathers metrics and events from your cluster.",
  },
  {
    n: "02",
    title: "Doctor analyzes",
    description: "Moniple Doctor sends the diagnostic context to your chosen LLM.",
  },
  {
    n: "03",
    title: "You review",
    description: "Findings appear in the dashboard with severity, root cause and fixes.",
  },
  {
    n: "04",
    title: "Agent executes",
    description: "Approved remediations are executed by the agent — never the server.",
  },
];

export default function DoctorAISection() {
  return (
    <section id="doctor" className="py-20 sm:py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
            Moniple Doctor
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white">
            Meet your{" "}
            <span className="text-primary">AI cluster reviewer</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            An AI assistant that looks at your cluster the way a senior SRE
            would — finds problems, explains the cause, proposes a fix and
            executes it once you approve.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {doctorFeatures.map((f) => (
            <div
              key={f.title}
              className="relative p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700/70 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* Provider strip */}
        <div className="mt-16">
          <p className="text-center text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Supported LLM providers
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {providers.map((p) => (
              <div
                key={p.name}
                className="inline-flex flex-col items-center bg-gray-50 dark:bg-gray-800 rounded-xl px-5 py-3 ring-1 ring-gray-200 dark:ring-gray-700"
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

        {/* How it works */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-dark dark:text-white mb-10">
            How it works
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div key={s.n} className="relative">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 h-full">
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
        </div>
      </div>
    </section>
  );
}
