export default function CTA() {
  return (
    <section className="py-20 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to monitor your clusters?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Join thousands of DevOps engineers who trust Moniple to keep their clusters healthy.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.moniple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-primary shadow-sm hover:bg-gray-100 transition-colors"
            >
              Get Started Free
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-primary/20 px-8 py-3 text-base font-semibold text-white ring-1 ring-white/30 hover:bg-primary/30 transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
