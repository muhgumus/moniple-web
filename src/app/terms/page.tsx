export default function TermsOfServicePage() {
  const lastUpdated = 'April 27, 2026';
  const contactEmail = 'info@moniple.com';
  const company = 'Nairotech Yazılım Sistemleri ve Pazarlama Limited Şirketi';

  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Terms of Service
          </h1>
          <p className="mt-4 text-gray-400">Last updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of the
              Moniple service (&quot;Service&quot;), including the Moniple mobile applications,
              web dashboard, agent software, and APIs, all provided by {company}
              (&quot;Moniple&quot;, &quot;we&quot;, &quot;us&quot;).
            </p>
            <p className="mt-4">
              By creating an account, installing the agent, or using the Service in any
              way, you agree to these Terms. If you do not agree, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Service Description</h2>
            <p>
              Moniple is a remote infrastructure monitoring platform for Kubernetes
              clusters. The Moniple agent runs inside your cluster and forwards metric
              snapshots to Moniple&apos;s backend. The Moniple mobile and web applications
              display these metrics, run optional AI-powered diagnostics, and let you
              manage cluster access for your team.
            </p>
            <p className="mt-4">
              Moniple does not access, monitor, or report on the resources of the
              end-user device (iOS, Android, or browser) on which the application runs.
              All displayed metrics refer to the user-supplied remote Kubernetes
              infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Accounts</h2>
            <p>
              An account is required to use the Service because Moniple stores
              monitoring history, AI analysis results, alert preferences, team
              membership, and per-cluster API keys (used to authenticate the agent
              that pushes metrics to your account) — all isolated per user. Moniple
              does NOT store your kubeconfig, cluster credentials, or any
              direct cluster access; the agent stays inside your cluster and only
              the agent has cluster access. You are responsible for keeping your
              account credentials confidential and for all activity under your
              account.
            </p>
            <p className="mt-4">
              You must be at least 18 years old, or the age of legal majority in your
              jurisdiction, to create an account. You agree to provide accurate
              information when registering and to keep it up to date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="mt-3 list-disc list-inside space-y-2">
              <li>Use the Service to monitor infrastructure you do not own or have explicit permission to monitor.</li>
              <li>Attempt to access another user&apos;s account, clusters, or data.</li>
              <li>Reverse engineer, decompile, or otherwise attempt to extract source code from the Service, except where applicable law prohibits this restriction.</li>
              <li>Use the Service to transmit malware, run denial-of-service attacks, or violate any law.</li>
              <li>Resell, sublicense, or commercially exploit the Service without our written consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Subscriptions and Billing</h2>
            <p>
              Moniple offers free and paid subscription tiers. Paid subscriptions
              purchased through the Apple App Store or Google Play Store are billed and
              managed by the respective platform under their terms; subscriptions
              purchased directly via Moniple are billed by us.
            </p>
            <p className="mt-4">
              Subscriptions automatically renew unless cancelled before the end of the
              current billing period. Refunds are handled according to the policy of the
              platform through which you purchased the subscription.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Your Data</h2>
            <p>
              You retain all rights to the data you submit to the Service, including
              cluster names and metadata you create, and the metric snapshots
              forwarded by the agent inside your cluster. (Moniple does not receive
              your kubeconfig or any direct cluster credentials; those remain inside
              your cluster.) By using the Service, you grant Moniple a limited
              license to process this data solely to operate the Service for you.
            </p>
            <p className="mt-4">
              Our handling of personal data is described in our{' '}
              <a href="/privacy/" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Account Deletion</h2>
            <p>
              You may permanently delete your account at any time from the in-app
              Settings screen. Account deletion removes your user record, cluster
              metadata, per-cluster agent API keys, monitoring history, AI
              analysis results, team memberships, and pending invitations.
              Deletion is immediate and cannot be undone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Service Availability</h2>
            <p>
              We aim to provide a reliable Service but do not guarantee uninterrupted
              availability. We may modify, suspend, or discontinue any part of the
              Service at any time, with reasonable notice for material changes that
              affect paying customers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Disclaimer of Warranties</h2>
            <p>
              The Service is provided &quot;as is&quot; and &quot;as available&quot; without
              warranties of any kind, whether express or implied, including warranties of
              merchantability, fitness for a particular purpose, or non-infringement, to
              the maximum extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Moniple shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages, or
              any loss of profits, revenue, data, or use, arising from or related to
              your use of the Service. Our total cumulative liability for any claim
              arising under these Terms shall not exceed the amount you paid Moniple
              for the Service during the twelve (12) months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
            <p>
              We may suspend or terminate your access to the Service if you violate
              these Terms. You may stop using the Service and delete your account at any
              time. Sections that by their nature should survive termination
              (intellectual property, disclaimers, limitation of liability, governing
              law) will survive.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the Republic of Türkiye. Any
              dispute arising out of or relating to these Terms shall be subject to the
              exclusive jurisdiction of the courts of Istanbul, Türkiye, without
              prejudice to mandatory consumer protection rights you may have under the
              law of your country of residence.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. When we do, we will revise
              the &quot;Last updated&quot; date above and, if the change is material, notify
              you in-app or by email. Your continued use of the Service after the
              effective date constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Contact</h2>
            <p>
              For questions about these Terms, contact us at{' '}
              <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">
                {contactEmail}
              </a>
              .
            </p>
            <p className="mt-4 text-sm text-gray-400">
              {company}<br />
              Istanbul, Türkiye
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
