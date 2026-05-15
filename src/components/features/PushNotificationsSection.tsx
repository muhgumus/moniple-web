const bullets = [
  {
    title: "Threshold alerts",
    description:
      "Get notified the moment a metric crosses your defined boundary — CPU above 80 %, disk above 90 %, pod restart count, and more.",
  },
  {
    title: "AI diagnostic events",
    description:
      "Instant push when a scan finds Critical or Warning issues — no need to check the dashboard manually.",
  },
  {
    title: "Quiet hours & per-cluster routing",
    description:
      "Fine-grained control over what wakes you and what doesn't. Silence non-critical alerts outside business hours.",
  },
  {
    title: "All platforms covered",
    description:
      "Native push on iOS and Android, in-app notifications on Web. One preference panel, all devices.",
  },
];

export default function PushNotificationsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Push Notifications
              </span>
              <span className="rounded-full bg-amber-500/20 text-amber-400 px-2 py-0.5 text-xs font-semibold">
                Coming soon
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white">
              Know before{" "}
              <span className="text-primary">your users do</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              When something goes wrong in your cluster, you shouldn&apos;t have
              to be watching a dashboard to find out. Push notifications bring
              the signal to you — wherever you are.
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

          {/* Availability card */}
          <div className="relative">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 ring-1 ring-gray-200 dark:ring-gray-700 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-500/15 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-dark dark:text-white">
                    In development
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Pro+ · Private beta rolling access
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-xl ring-1 ring-gray-100 dark:ring-gray-700">
                  <span className="text-sm text-dark dark:text-white font-medium">
                    iOS & Android push
                  </span>
                  <span className="text-xs font-semibold text-amber-500 bg-amber-50 dark:bg-amber-900/30 px-2 py-0.5 rounded-full">
                    In dev
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-xl ring-1 ring-gray-100 dark:ring-gray-700">
                  <span className="text-sm text-dark dark:text-white font-medium">
                    In-app (Web)
                  </span>
                  <span className="text-xs font-semibold text-amber-500 bg-amber-50 dark:bg-amber-900/30 px-2 py-0.5 rounded-full">
                    In dev
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-xl ring-1 ring-gray-100 dark:ring-gray-700">
                  <span className="text-sm text-dark dark:text-white font-medium">
                    Threshold rules engine
                  </span>
                  <span className="text-xs font-semibold text-amber-500 bg-amber-50 dark:bg-amber-900/30 px-2 py-0.5 rounded-full">
                    In dev
                  </span>
                </div>
              </div>

              <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Pro+ subscribers get rolling access during the private beta. ETA Q2 2026.
              </p>
            </div>
            <div className="absolute -inset-6 -z-10 bg-amber-500/5 blur-3xl rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
