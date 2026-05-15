const bullets = [
  {
    title: "Share clusters",
    description:
      "Invite teammates by email with Owner or Viewer roles. Realtime invitation badges notify recipients instantly.",
  },
  {
    title: "Teams",
    description:
      "Group multiple people under a single org, then share clusters with the whole team in one action.",
  },
  {
    title: "Ownership transfer",
    description:
      "Hand off a cluster to a teammate without recreating subscriptions or reconfiguring access.",
  },
  {
    title: "SSO-ready (Team & Enterprise)",
    description:
      "SAML / OIDC standards for enterprise identity providers. Audit-friendly login flow.",
  },
];

export default function TeamCollaborationSection() {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
              Collaboration
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white">
              Team{" "}
              <span className="text-primary">collaboration</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              From a solo dev to an ops team of dozens — Moniple grows with
              your organisation. Share, delegate, and audit without losing
              control.
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

          {/* Visual: mock invitation card */}
          <div className="relative">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 ring-1 ring-gray-200 dark:ring-gray-700 shadow-xl">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-5">
                Cluster members
              </h4>
              <div className="space-y-3">
                {[
                  { name: "you@example.com", role: "Owner", color: "text-primary bg-primary/10" },
                  { name: "alice@example.com", role: "Viewer", color: "text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700" },
                  { name: "bob@example.com", role: "Viewer", color: "text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700" },
                ].map((m) => (
                  <div
                    key={m.name}
                    className="flex items-center justify-between bg-white dark:bg-gray-900 rounded-xl px-4 py-3 ring-1 ring-gray-100 dark:ring-gray-700"
                  >
                    <span className="text-sm text-dark dark:text-white font-medium">
                      {m.name}
                    </span>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${m.color}`}
                    >
                      {m.role}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-2 mt-4 px-2">
                  <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
                  <span className="text-xs text-gray-400">Invite pending</span>
                  <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
                </div>
                <div className="flex items-center justify-between bg-amber-50 dark:bg-amber-900/20 rounded-xl px-4 py-3 ring-1 ring-amber-200/50 dark:ring-amber-700/30">
                  <span className="text-sm text-dark dark:text-white font-medium">
                    carol@example.com
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/40">
                    Pending
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -inset-6 -z-10 bg-primary/5 blur-3xl rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
