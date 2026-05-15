export default function FeaturesHero() {
  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
          Features
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-dark dark:text-white">
          Every feature,{" "}
          <span className="text-primary">explained</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          From real-time metrics to AI-powered remediation — see exactly what
          Moniple does for your team.
        </p>
      </div>
    </section>
  );
}
