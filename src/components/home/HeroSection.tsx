import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-dark dark:to-gray-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left — copy & CTAs */}
          <div className="lg:col-span-6 text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              AI Doctor · Real-time · Cross-platform
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-dark dark:text-white leading-tight">
              Kubernetes monitoring with{" "}
              <span className="text-primary">AI-powered</span> diagnostics
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Real-time metrics, automated AI diagnostics with approval
              workflow, and on-premise deployment — across web, mobile and
              desktop. Pay only for what you use.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <a
                href="https://app.moniple.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-600 transition-colors"
              >
                Get Started Free
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 px-8 py-3 text-base font-semibold text-dark dark:text-white shadow-sm ring-1 ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                See Pricing
              </Link>
            </div>

            {/* Trust strip */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-gray-500 dark:text-gray-400">
              <span className="inline-flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-emerald-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Self-hosted Supabase
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-emerald-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                GDPR ready
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-emerald-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                SOC2 (Enterprise)
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-emerald-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                No credit card required
              </span>
            </div>
          </div>

          {/* Right — dashboard preview */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-white/10">
              {/* Browser chrome */}
              <div className="bg-gray-800 dark:bg-gray-700 px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-600/50 rounded-md px-3 py-1 text-xs text-gray-300 text-center max-w-xs mx-auto">
                    app.moniple.com
                  </div>
                </div>
              </div>
              <Image
                src="/images/app/dashboard-desktop.png"
                alt="Moniple Dashboard"
                width={1914}
                height={1606}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Floating mobile preview */}
            <div className="hidden sm:block absolute -bottom-10 -right-4 w-[140px] lg:w-[160px]">
              <div className="rounded-[1.5rem] shadow-2xl bg-gray-800 p-[6px] ring-1 ring-gray-600/50">
                <div className="rounded-[1.2rem] overflow-hidden bg-gray-900">
                  <Image
                    src="/images/app/dashboard-mobile.png"
                    alt="Moniple Mobile"
                    width={1290}
                    height={2796}
                    className="w-full h-auto"
                  />
                </div>
              </div>
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
