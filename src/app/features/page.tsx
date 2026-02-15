const features = [
  {
    category: 'Monitoring',
    items: [
      {
        title: 'Real-time Metrics',
        description: 'Get instant updates on CPU, Memory, Disk, and Pod usage with WebSocket-based real-time synchronization.',
        icon: '⚡',
      },
      {
        title: 'Multi-cluster Dashboard',
        description: 'Monitor and manage multiple Kubernetes clusters from a single unified dashboard.',
        icon: '🔗',
      },
      {
        title: 'Node Overview',
        description: 'View detailed node information including CPU cores, memory capacity, and disk usage.',
        icon: '🖥️',
      },
      {
        title: 'Namespace Filtering',
        description: 'Filter pods and PVCs by namespace for easier management and quick access.',
        icon: '📁',
      },
    ],
  },
  {
    category: 'Workload Management',
    items: [
      {
        title: 'Pod Tracking',
        description: 'Monitor pod status, phase distribution (Running, Pending, Failed), and resource consumption.',
        icon: '📦',
      },
      {
        title: 'PVC Monitoring',
        description: 'Track persistent volume claim usage and get alerts when storage approaches capacity.',
        icon: '💾',
      },
      {
        title: 'Resource Alerts',
        description: 'Set custom thresholds for CPU, Memory, and Disk to receive instant alerts when resources are critical.',
        icon: '🚨',
      },
      {
        title: 'Health Checks',
        description: 'Automatic cluster health monitoring with active/inactive status indicators.',
        icon: '💚',
      },
    ],
  },
  {
    category: 'Platform',
    items: [
      {
        title: 'Mobile-first Design',
        description: 'Access your dashboards from anywhere with responsive iOS, Android, and web applications.',
        icon: '📱',
      },
      {
        title: 'Easy Installation',
        description: 'Deploy the monitoring agent with a single kubectl command. No complex configuration required.',
        icon: '🚀',
      },
      {
        title: 'Secure by Default',
        description: 'API key authentication and encrypted communications ensure your cluster data stays secure.',
        icon: '🔒',
      },
      {
        title: 'Open Source Agent',
        description: 'Self-host the monitoring agent in your own infrastructure for complete control.',
        icon: '🌐',
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-dark dark:text-white">
            Powerful Features for{' '}
            <span className="text-primary">Kubernetes Monitoring</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to monitor, manage, and optimize your Kubernetes clusters — all in one platform.
          </p>
        </div>

        {/* Feature Categories */}
        {features.map((category) => (
          <div key={category.category} className="mb-16">
            <h2 className="text-2xl font-bold text-dark dark:text-white mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://app.moniple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-600 transition-colors"
          >
            Get Started Free
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
