export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-dark dark:to-gray-900 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now in Public Beta
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-dark dark:text-white">
            Monitor Your{' '}
            <span className="text-primary">Kubernetes</span>
            <br />
            Clusters From Anywhere
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-time metrics, multi-cluster management, and instant alerts — all from your mobile device or web browser. Built for DevOps engineers who need to stay connected.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.moniple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-600 transition-colors"
            >
              Get Started Free
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#app-preview"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 px-8 py-3 text-base font-semibold text-dark dark:text-white shadow-sm ring-1 ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-dark dark:text-white">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Free SaaS</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-dark dark:text-white">Real-time</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Metrics Sync</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-dark dark:text-white">Multi-cluster</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Management</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-dark dark:text-white">Mobile</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">First Design</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
