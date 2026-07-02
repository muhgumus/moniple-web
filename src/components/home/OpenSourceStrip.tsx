import GitHubIcon from "@/components/GitHubIcon";

const AGENT_REPO = "https://github.com/nairotech/moniple-agent";

export default function OpenSourceStrip() {
  return (
    <section className="py-14 sm:py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/60 px-6 py-8 sm:flex-row sm:justify-between sm:px-10 sm:py-9">
          <div className="flex items-start gap-4 text-center sm:text-left">
            <div className="hidden sm:flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gray-900 text-white dark:bg-white dark:text-gray-900">
              <GitHubIcon className="h-7 w-7" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-dark dark:text-white">
                Open-source agent
              </h2>
              <p className="mt-1 max-w-xl text-sm text-gray-600 dark:text-gray-300">
                The agent that runs in your cluster is fully open. Audit exactly
                what leaves your cluster — no black box, no surprises.
              </p>
            </div>
          </div>

          <a
            href={AGENT_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
          >
            <GitHubIcon className="h-5 w-5" />
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
