export default function PrivacyPolicyPage() {
  const lastUpdated = 'March 11, 2026';
  const contactEmail = 'info@moniple.com';

  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-400">Last updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-gray-300 leading-relaxed">
          {/* Introduction */}
          <section>
            <p>
              Moniple is a Kubernetes monitoring platform developed by Nairotech Yazılım Sistemleri ve
              Pazarlama Limited Şirketi. Moniple is available as a cloud-hosted service
              (&quot;SaaS&quot;) and as an on-premise deployment. This Privacy Policy explains how data
              is handled in each deployment model.
            </p>
          </section>

          {/* Deployment Models */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Deployment Models</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* SaaS */}
              <div className="bg-white/5 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">SaaS (Cloud)</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Your cluster metrics are collected and stored on our servers. We process this data to
                  provide monitoring, alerting, historical analytics, and collaboration features. The
                  sections below describe exactly what data we collect and how we use it.
                </p>
              </div>

              {/* On-Premise */}
              <div className="bg-white/5 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">On-Premise</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  All data stays within your own infrastructure. <strong className="text-gray-300">We do not
                  collect, transmit, or have access to any of your data.</strong> You have full control over
                  storage, retention, and access. No telemetry or usage data is sent to our servers.
                </p>
              </div>
            </div>

            <p className="mt-6 text-gray-500 text-sm">
              The following sections apply to the SaaS version only. On-premise users are fully
              self-contained with zero data leaving their environment.
            </p>
          </section>

          {/* SaaS Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 border-t border-gray-800" />
            <span className="text-xs text-gray-500 uppercase tracking-widest">SaaS Only</span>
            <div className="flex-1 border-t border-gray-800" />
          </div>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>

            <h3 className="text-lg font-semibold text-white mt-6 mb-2">Account Information</h3>
            <ul className="list-disc ml-6 space-y-1 text-gray-400">
              <li>Email address (for registration and login)</li>
              <li>Password (stored securely using industry-standard hashing)</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6 mb-2">Cluster & Metrics Data</h3>
            <p className="text-gray-400 mb-2">
              The Moniple agent installed in your Kubernetes cluster collects and sends the following
              metrics to our servers:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-gray-400">
              <li>Cluster resource utilization (CPU, memory, disk usage percentages)</li>
              <li>Node count and node-level resource metrics</li>
              <li>Pod status and count (running, pending, failed) per namespace</li>
              <li>PVC (Persistent Volume Claim) capacity information</li>
              <li>Active alerts and alert history</li>
              <li>Namespace list and workload metadata</li>
            </ul>
            <p className="text-gray-400 mt-3 text-sm">
              The agent does <strong className="text-gray-300">not</strong> collect application logs,
              container environment variables, secrets, or any application-level data from your workloads.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-2">Usage Data</h3>
            <ul className="list-disc ml-6 space-y-1 text-gray-400">
              <li>App interaction data (pages visited, features used)</li>
              <li>Device type, operating system, and app version</li>
              <li>IP address and approximate location</li>
            </ul>
          </section>

          {/* How We Use */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc ml-6 space-y-1 text-gray-400">
              <li>Display real-time and historical cluster metrics on your dashboard</li>
              <li>Generate alerts when resource thresholds are exceeded</li>
              <li>Provide multi-cluster overview and comparison</li>
              <li>Enable cluster sharing and team collaboration features</li>
              <li>Process team invitations and manage role-based access</li>
              <li>Store historical metrics for trend analysis (up to 30 days)</li>
              <li>Improve the service and fix issues</li>
            </ul>
          </section>

          {/* Data Storage */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Storage & Security</h2>
            <ul className="list-disc ml-6 space-y-1 text-gray-400">
              <li>TLS/SSL encryption for all data in transit (agent-to-server and app-to-server)</li>
              <li>Secure password hashing (bcrypt)</li>
              <li>JWT-based authentication with token expiration</li>
              <li>API key authentication for agent-to-server communication</li>
              <li>Row Level Security (RLS) ensuring users only access their own clusters</li>
              <li>Role-based access control (owner/viewer) for shared clusters</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Sharing</h2>
            <p className="text-gray-400">
              We do <strong className="text-white">not</strong> sell, trade, or rent your personal information
              or cluster data to third parties. Data is shared only in these cases:
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-400">
              <li>
                <strong className="text-gray-300">Cluster Sharing:</strong> When you share a cluster with
                team members or via invitation, they can view the metrics for that cluster based on their
                assigned role.
              </li>
              <li>
                <strong className="text-gray-300">Legal Requirements:</strong> If required by law, regulation,
                or legal process.
              </li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
            <p className="text-gray-400 mb-3">You have the right to:</p>
            <ul className="list-disc ml-6 space-y-1 text-gray-400">
              <li>Access all data associated with your account</li>
              <li>Request correction of inaccurate information</li>
              <li>Delete your account and all associated data</li>
              <li>Revoke cluster sharing and remove team members at any time</li>
              <li>Uninstall the agent from your cluster to stop all data collection immediately</li>
            </ul>
            <p className="text-gray-400 mt-3">
              To exercise any of these rights, contact us at{' '}
              <a href={`mailto:${contactEmail}`} className="text-primary hover:text-primary/80 transition-colors">
                {contactEmail}
              </a>.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Cookies & Local Storage</h2>
            <p className="text-gray-400">
              The Moniple mobile app uses local storage to save your authentication token and preferences
              (theme, selected cluster). The web app uses essential cookies for session management only.
              We do not use third-party tracking cookies or analytics services.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
            <ul className="list-disc ml-6 space-y-1 text-gray-400">
              <li>Account data is retained while your account is active</li>
              <li>Real-time cluster metrics are overwritten with each agent push cycle</li>
              <li>Historical metrics are retained for up to 30 days</li>
              <li>Deleted accounts and all associated data are permanently removed within 30 days</li>
            </ul>
          </section>

          {/* Children */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-gray-400">
              Moniple is a professional infrastructure monitoring tool not intended for use by children
              under 16. We do not knowingly collect personal information from children.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-400">
              We may update this Privacy Policy from time to time. Changes will be posted on this page
              with an updated &quot;Last updated&quot; date. Continued use of the service constitutes
              acceptance of the updated policy.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
            <p className="text-gray-400">
              If you have questions about this Privacy Policy or how your data is handled:
            </p>
            <div className="mt-4 bg-white/5 border border-gray-800 rounded-xl p-6">
              <p className="text-white font-semibold">Nairotech Yazılım Sistemleri ve Pazarlama Limited Şirketi</p>
              <p className="text-gray-400 mt-2">
                Email:{' '}
                <a href={`mailto:${contactEmail}`} className="text-primary hover:text-primary/80 transition-colors">
                  {contactEmail}
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
