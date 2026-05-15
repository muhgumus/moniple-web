import AppDownloadBadges, {
  AppBadge,
} from "@/components/home/AppDownloadBadges";
import Link from "next/link";

const badges: AppBadge[] = [
  {
    platform: "web",
    state: "available",
    label: "Available now",
    href: "https://app.moniple.com",
  },
  {
    platform: "ios",
    state: "available",
    label: "Download on the App Store",
    href: "https://apps.apple.com/tr/app/moniple-k8s-monitoring/id6761530619?l=tr",
  },
  {
    platform: "android",
    state: "available",
    label: "Get it on Google Play",
    href: "https://play.google.com/store/apps/details?id=com.nairotech.moniple",
  },
];

const platformBullets = [
  "Web app at app.moniple.com — no install required",
  "iOS native app — download from the App Store",
  "Android native app — download from Google Play",
  "Built with Flutter — one codebase, native performance on every platform",
  "Light & Dark themes, automatic system theme detection",
];

export default function CrossPlatformSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
            Cross-platform clients
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white">
            Your Kubernetes,{" "}
            <span className="text-primary">on every screen</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            One codebase, three platforms. The same fast, native experience
            follows you from your laptop to your phone.
          </p>
        </div>

        <AppDownloadBadges badges={badges} />

        <ul className="mt-10 max-w-xl mx-auto space-y-3">
          {platformBullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {b}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <Link
            href="https://app.moniple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-600 transition-colors"
          >
            Open Web App
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
          </Link>
        </div>
      </div>
    </section>
  );
}
