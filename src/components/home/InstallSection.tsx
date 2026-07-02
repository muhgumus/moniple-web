import Link from "next/link";
import CopyTerminal from "./CopyTerminal";

// Kept verbatim in sync with /docs/installation (the one-line install).
const INSTALL_COMMAND = `curl -s https://server.moniple.com/install/agent.yaml \\
  | sed "s|MONIPLE_SERVER_URL_PLACEHOLDER|https://server.moniple.com|g" \\
  | sed "s|MONIPLE_API_KEY_PLACEHOLDER|<YOUR_API_KEY>|g" \\
  | kubectl apply -f -`;

const steps = [
  {
    n: "01",
    title: "Sign up",
    description: "Create a free account — no credit card, nothing to configure.",
  },
  {
    n: "02",
    title: "Add a cluster",
    description: "Name your cluster in the app and get its scoped API key.",
  },
  {
    n: "03",
    title: "Paste the command",
    description:
      "Run the one-liner against your cluster. Metrics start flowing in seconds.",
  },
];

export default function InstallSection() {
  return (
    <section
      id="install"
      className="py-20 sm:py-24 bg-white dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
            Quick install
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white">
            From zero to metrics in{" "}
            <span className="text-primary">60 seconds</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            No Helm, no pre-existing Prometheus. One <code className="rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[0.85em] text-primary">kubectl</code>{" "}
            command deploys the agent and its self-contained metrics stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Terminal */}
          <div>
            <CopyTerminal title="install the agent" command={INSTALL_COMMAND} />
            <div className="mt-4 flex items-start gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                The agent pushes metrics out over HTTPS —{" "}
                <span className="font-semibold text-dark dark:text-white">
                  nothing connects into your cluster
                </span>
                . It is a plain <code className="rounded bg-primary/10 px-1 py-0.5 font-mono text-[0.8em] text-primary">curl | sed | kubectl apply</code>{" "}
                pipeline you can inspect before you run it.
              </p>
            </div>
          </div>

          {/* Steps */}
          <div>
            <ol className="space-y-6">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-base font-bold text-white">
                    {s.n}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark dark:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      {s.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8">
              <Link
                href="/docs/installation"
                className="inline-flex items-center font-semibold text-primary hover:text-blue-600"
              >
                Read the full installation guide
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
