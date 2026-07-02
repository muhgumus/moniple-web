import Link from "next/link";
import CopyTerminal from "./CopyTerminal";

const flow = [
  {
    n: "01",
    title: "Scan",
    description:
      "The in-cluster agent runs up to eight checks — pods, nodes, resources, PVCs, events, security, deployments and logs.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Findings with severity",
    description:
      "Your chosen LLM returns structured findings — critical, warning, info — each with root cause and affected resources.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Proposed remediations",
    description:
      "For each issue the Doctor proposes a concrete action — restart, scale, cordon, adjust resources, roll back — with a risk level.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "One-tap approve",
    description:
      "Nothing changes until you approve. The agent — never the server — executes the action and reports the result back.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const providers = [
  { name: "OpenAI", subtitle: "GPT models" },
  { name: "Anthropic", subtitle: "Claude" },
  { name: "Google", subtitle: "Gemini" },
  { name: "Zhipu", subtitle: "GLM" },
  { name: "DeepSeek", subtitle: "DeepSeek API" },
  { name: "Custom", subtitle: "OpenAI-compatible" },
];

export default function DoctorAISection() {
  return (
    <section id="doctor" className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
            Moniple Doctor
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white">
            Your <span className="text-primary">AI SRE</span>, from scan to approved fix
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            An AI assistant that looks at your cluster the way a senior SRE
            would — finds problems, explains the cause, and proposes a fix.
            Every action shows its exact <code className="rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[0.85em] text-primary">kubectl</code>{" "}
            equivalent before you approve, so an approval is never a leap of
            faith.
          </p>
        </div>

        {/* Full-width highlight: flow (left) + Action Preview (right) */}
        <div className="rounded-3xl bg-white dark:bg-gray-800/60 ring-1 ring-gray-200 dark:ring-gray-700 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left — the flow */}
            <div className="p-8 sm:p-10 lg:p-12">
              <h3 className="text-xl font-bold text-dark dark:text-white mb-8">
                How a diagnostic runs
              </h3>
              <ol className="space-y-6">
                {flow.map((f) => (
                  <li key={f.n} className="flex gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {f.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-primary">{f.n}</span>
                        <h4 className="text-base font-semibold text-dark dark:text-white">
                          {f.title}
                        </h4>
                      </div>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {f.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Right — Action Preview */}
            <div className="border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 p-8 sm:p-10 lg:p-12">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-2.5 py-1 text-xs font-semibold text-red-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                  critical
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Action Preview
                </span>
              </div>
              <h3 className="text-xl font-bold text-dark dark:text-white">
                See the fix before you approve
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Every proposed remediation is inert until you say yes — and shows
                the finding, its target, the risk, and the equivalent command.
              </p>

              {/* Finding summary */}
              <dl className="mt-6 space-y-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 text-sm">
                <div className="flex gap-3">
                  <dt className="w-24 flex-shrink-0 font-medium text-gray-500 dark:text-gray-400">Finding</dt>
                  <dd className="text-dark dark:text-white">CrashLoopBackOff — <span className="font-mono">api-gateway</span> (ns: prod)</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 flex-shrink-0 font-medium text-gray-500 dark:text-gray-400">Action</dt>
                  <dd className="text-dark dark:text-white font-mono">restart_pod</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 flex-shrink-0 font-medium text-gray-500 dark:text-gray-400">Risk</dt>
                  <dd>
                    <span className="inline-flex items-center rounded bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      low
                    </span>
                  </dd>
                </div>
              </dl>

              {/* Equivalent kubectl — copyable */}
              <p className="mt-5 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Equivalent command
              </p>
              <CopyTerminal
                title="kubectl"
                command="kubectl delete pod api-gateway-7c9f8b -n prod"
              />

              {/* Approve control (illustrative) */}
              <div className="mt-6 flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Approve &amp; run
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  You stay in control — every time.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Honest bullets: BYO-LLM / managed, free quota */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 p-6">
            <h3 className="text-base font-semibold text-dark dark:text-white">
              Bring your own LLM
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Use your own key for OpenAI, Anthropic, Google Gemini, Zhipu GLM,
              DeepSeek, or any OpenAI-compatible endpoint. With your own key,
              cluster context goes only to the provider you pick.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {providers.map((p) => (
                <span
                  key={p.name}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-gray-50 dark:bg-gray-900/60 px-2.5 py-1 text-xs ring-1 ring-gray-200 dark:ring-gray-700"
                  title={p.subtitle}
                >
                  <span className="font-semibold text-dark dark:text-white">{p.name}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 p-6">
            <h3 className="text-base font-semibold text-dark dark:text-white">
              …or managed Moniple AI
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Prefer zero setup? Managed Moniple AI works out of the box — no
              key, no provider account. Switch to your own key any time for full
              control over which model sees your data.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 p-6">
            <h3 className="text-base font-semibold text-dark dark:text-white">
              Free plan includes 5 scans/day
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Run on-demand diagnostics and view recommendations for free.
              Approving and auto-executing actions, tighter schedules, and higher
              quotas come with Pro and above.
            </p>
            <Link
              href="/docs/ai-doctor"
              className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:text-blue-600"
            >
              How the AI Doctor works
              <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
