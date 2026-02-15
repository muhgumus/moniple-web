const steps = [
  {
    step: '01',
    title: 'Create Your Account',
    description: 'Sign up for free at app.moniple.com. No credit card required.',
  },
  {
    step: '02',
    title: 'Add Your Cluster',
    description: 'Run a single kubectl command to deploy the Moniple agent to your cluster.',
  },
  {
    step: '03',
    title: 'Start Monitoring',
    description: 'Access real-time metrics from your mobile device or web browser.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white">
            Get started in minutes
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Setting up Moniple is simple. Connect your first cluster in under 5 minutes.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center relative z-10">
                  <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-dark dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 text-gray-300 dark:text-gray-600 z-20 -translate-y-1/2 translate-x-full">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
