import AppDownloadBadges, { AppBadge } from "./AppDownloadBadges";

const badges: AppBadge[] = [
  {
    platform: "web",
    state: "available",
    label: "Available now",
    href: "https://app.moniple.com",
  },
  {
    platform: "ios",
    state: "coming-soon",
    label: "Coming soon to App Store",
  },
  {
    platform: "android",
    state: "coming-soon",
    label: "Coming soon to Google Play",
  },
  {
    platform: "macos",
    state: "coming-soon",
    label: "Coming soon",
  },
  {
    platform: "windows",
    state: "coming-soon",
    label: "Coming soon",
  },
  {
    platform: "linux",
    state: "coming-soon",
    label: "Coming soon",
  },
];

export default function CrossPlatformSection() {
  return (
    <section
      id="cross-platform"
      className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
            Cross-platform
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white">
            Your Kubernetes,{" "}
            <span className="text-primary">on every screen</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            One codebase. Six platforms. Built with Flutter so the same fast,
            native experience follows you from your laptop to your phone.
          </p>
        </div>

        <AppDownloadBadges badges={badges} />

        <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
          Mobile &amp; desktop apps are in private beta.{" "}
          <a href="/contact" className="text-primary hover:underline">
            Get early access
          </a>
          .
        </div>
      </div>
    </section>
  );
}
