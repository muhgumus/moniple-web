import Image from "next/image";

export default function AppPreview() {
  return (
    <section className="relative py-20 sm:py-28 bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white">
            One Dashboard,{" "}
            <span className="text-primary">Every Device</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Monitor your Kubernetes clusters from any device. Fully responsive
            web app with native iOS and Android apps coming soon.
          </p>
        </div>

        {/* Screenshots */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Screenshot */}
          <div className="relative w-full">
            <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              {/* Browser chrome bar */}
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
                alt="Moniple Dashboard - Desktop View"
                width={1914}
                height={1606}
                className="w-full h-auto"
                priority
              />
            </div>
            {/* Label */}
            <div className="mt-4 text-center">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Web Application
              </span>
            </div>
          </div>

          {/* Mobile Screenshot */}
          <div className="relative w-48 sm:w-56 mx-auto mt-8 lg:mt-0 lg:w-52 lg:absolute lg:-right-6 lg:-bottom-12 z-10">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/10 bg-gray-900 p-2">
              {/* Phone notch */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-b-2xl z-10"></div>
                <div className="rounded-[1.5rem] overflow-hidden">
                  <Image
                    src="/images/app/dashboard-mobile.png"
                    alt="Moniple Dashboard - Mobile View"
                    width={1000}
                    height={1346}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            {/* Label */}
            <div className="mt-4 text-center">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                Mobile Responsive
              </span>
            </div>
          </div>
        </div>

        {/* Platform badges */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Web badge - available */}
          <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl px-6 py-3 shadow-md ring-1 ring-gray-200 dark:ring-gray-700">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <div>
              <div className="text-sm font-semibold text-dark dark:text-white">
                Web App
              </div>
              <div className="text-xs text-green-500 font-medium">
                Available Now
              </div>
            </div>
          </div>

          {/* iOS badge - coming soon */}
          <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl px-6 py-3 shadow-md ring-1 ring-gray-200 dark:ring-gray-700 opacity-80">
            <svg className="w-8 h-8 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div>
              <div className="text-sm font-semibold text-dark dark:text-white">
                iOS App
              </div>
              <div className="text-xs text-amber-500 font-medium">
                Coming Soon
              </div>
            </div>
          </div>

          {/* Android badge - coming soon */}
          <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl px-6 py-3 shadow-md ring-1 ring-gray-200 dark:ring-gray-700 opacity-80">
            <svg className="w-8 h-8 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.27-.86-.31-.16-.69-.04-.86.27l-1.86 3.22c-1.44-.65-3.02-1.01-4.69-1.01-1.67 0-3.25.36-4.69 1.01L5.23 5.71c-.16-.31-.54-.43-.86-.27-.31.16-.43.55-.27.86L5.94 9.48C2.81 11.11.64 14.11 0 17.68h24.48c-.64-3.57-2.81-6.57-5.94-8.2zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10.48 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
            </svg>
            <div>
              <div className="text-sm font-semibold text-dark dark:text-white">
                Android App
              </div>
              <div className="text-xs text-amber-500 font-medium">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
