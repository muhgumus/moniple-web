export default function PrivacyPolicyPage() {
  const lastUpdated = 'May 19, 2026';
  const contactEmail = 'info@moniple.com';
  const dpoEmail = 'privacy@moniple.com';

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

          {/* Account Deletion */}
          <section id="account-deletion">
            <h2 className="text-2xl font-bold text-white mb-4">10. Account Deletion</h2>
            <p className="text-gray-400">
              You may request the deletion of your Moniple account and all associated data at any time.
              Upon deletion, the following data will be permanently removed within 30 days:
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-400">
              <li>Your account information (email, profile data)</li>
              <li>All clusters registered under your account</li>
              <li>Historical metrics and monitoring data</li>
              <li>Team memberships and shared access permissions</li>
              <li>Invitation history</li>
            </ul>
            <p className="text-gray-400 mt-4">
              To request account deletion, please send an email to{' '}
              <a href="mailto:info@nairotech.com" className="text-primary hover:text-primary/80 transition-colors">
                info@nairotech.com
              </a>{' '}
              from the email address associated with your account. Include &quot;Account Deletion Request&quot;
              in the subject line. We will process your request and confirm deletion within 30 days.
            </p>
          </section>

          {/* Payment Data */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Payment Data</h2>
            <p className="text-gray-400">
              When you subscribe to a paid plan, your card information is collected and processed
              <strong className="text-gray-300"> directly by our PCI-DSS certified payment provider</strong>{' '}
              (PayTR Ödeme ve Elektronik Para Hizmetleri A.Ş., a Turkish licensed payment institution).
              Card numbers, CVV codes, and 3D Secure verification data{' '}
              <strong className="text-white">never touch our servers</strong>; we only receive a
              transaction reference, the masked card BIN, the cardholder name and email, the billing
              amount, and the transaction status.
            </p>
            <p className="text-gray-400 mt-3">
              Refunds and chargebacks are handled by PayTR on our instruction and credited back to the
              same card used for the original transaction. For details on how PayTR processes your card
              data, see{' '}
              <a
                href="https://www.paytr.com/kvkk-aydinlatma-metni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                PayTR&apos;s KVKK disclosure
              </a>.
            </p>
          </section>

          {/* Sub-processors */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Sub-processors</h2>
            <p className="text-gray-400 mb-4">
              We use a small set of third-party processors to operate the SaaS deployment. Each is
              listed below with the data category they receive and their primary processing location.
              On-premise customers do not use any of these processors.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-800 rounded-lg">
                <thead className="bg-white/5 text-gray-300">
                  <tr>
                    <th className="text-left p-3 border-b border-gray-800">Processor</th>
                    <th className="text-left p-3 border-b border-gray-800">Purpose</th>
                    <th className="text-left p-3 border-b border-gray-800">Data category</th>
                    <th className="text-left p-3 border-b border-gray-800">Location</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-3 border-b border-gray-800">PayTR</td>
                    <td className="p-3 border-b border-gray-800">Card payment processing</td>
                    <td className="p-3 border-b border-gray-800">Card info, billing email</td>
                    <td className="p-3 border-b border-gray-800">Türkiye</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-gray-800">Supabase (self-hosted)</td>
                    <td className="p-3 border-b border-gray-800">Authentication &amp; database</td>
                    <td className="p-3 border-b border-gray-800">Account &amp; cluster data</td>
                    <td className="p-3 border-b border-gray-800">Hetzner Frankfurt, DE</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-gray-800">Cloudflare</td>
                    <td className="p-3 border-b border-gray-800">CDN, DNS, WAF</td>
                    <td className="p-3 border-b border-gray-800">IP, request metadata</td>
                    <td className="p-3 border-b border-gray-800">Global edge</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-gray-800">Apple App Store</td>
                    <td className="p-3 border-b border-gray-800">iOS app distribution</td>
                    <td className="p-3 border-b border-gray-800">Install &amp; crash telemetry</td>
                    <td className="p-3 border-b border-gray-800">Apple Inc., US/EU</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-gray-800">Google Play Store</td>
                    <td className="p-3 border-b border-gray-800">Android app distribution</td>
                    <td className="p-3 border-b border-gray-800">Install &amp; crash telemetry</td>
                    <td className="p-3 border-b border-gray-800">Google LLC, US/EU</td>
                  </tr>
                  <tr>
                    <td className="p-3">SMTP relay</td>
                    <td className="p-3">Transactional email (verification, invitations)</td>
                    <td className="p-3">Email, subject, body</td>
                    <td className="p-3">Self-hosted, Frankfurt DE</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs mt-3">
              The Moniple Doctor AI Diagnostics feature can optionally call third-party LLM endpoints
              (OpenAI, Anthropic, Google, Zhipu, or a customer-hosted endpoint) using the customer&apos;s
              own API key. The LLM provider is selected by the customer; Nairotech does not own the
              relationship with the LLM provider, does not store the responses, and processes only the
              cluster metadata you explicitly include in the diagnostic prompt.
            </p>
          </section>

          {/* International Data Transfers */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. International Data Transfers</h2>
            <p className="text-gray-400">
              Moniple is operated from <strong className="text-gray-300">Türkiye</strong>; primary data
              storage is in <strong className="text-gray-300">Frankfurt, Germany</strong> (EU). If you
              are located outside these regions, your data will be transferred to and processed in these
              jurisdictions. We rely on the following legal mechanisms for cross-border transfers:
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-400">
              <li>
                <strong className="text-gray-300">EU/UK → Türkiye:</strong> Standard Contractual
                Clauses (SCCs) where applicable, together with supplementary technical measures
                (TLS-in-transit, at-rest encryption).
              </li>
              <li>
                <strong className="text-gray-300">Türkiye → EU:</strong> Performed pursuant to Article
                9(2) of the Turkish Personal Data Protection Law (KVKK) — the data subject&apos;s
                explicit consent and the necessity of the data transfer for the performance of the
                service contract.
              </li>
            </ul>
          </section>

          {/* KVKK Disclosure */}
          <section id="kvkk">
            <h2 className="text-2xl font-bold text-white mb-4">
              14. KVKK Disclosure (Türkiye)
            </h2>
            <p className="text-gray-400">
              For users in Türkiye, this section is provided pursuant to the{' '}
              <strong className="text-gray-300">
                Kişisel Verilerin Korunması Kanunu (KVKK, Law No. 6698)
              </strong>{' '}
              and serves as our &quot;Aydınlatma Metni&quot; (clarification text).
            </p>
            <h3 className="text-lg font-semibold text-white mt-6 mb-2">Veri Sorumlusu (Data Controller)</h3>
            <p className="text-gray-400">
              Nairotech Yazılım Sistemleri ve Pazarlama Limited Şirketi (&quot;Nairotech&quot;), with its
              registered office at Yeniköy Merkez Mah. Vatan Cad. Teknopark No: 83 / Y7, 41275 Başiskele
              / Kocaeli, is the data controller (&quot;Veri Sorumlusu&quot;) of the personal data described
              in this Privacy Policy.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-2">
              İşleme Amaçları (Purposes of Processing)
            </h3>
            <ul className="list-disc ml-6 space-y-1 text-gray-400">
              <li>Account creation and authentication (KVKK Art. 5/2-c, contractual necessity)</li>
              <li>Service delivery, monitoring, and alerting (Art. 5/2-c, contractual necessity)</li>
              <li>Payment and invoicing (Art. 5/2-ç, legal obligation under Turkish tax law)</li>
              <li>Customer support and bug fixing (Art. 5/2-f, legitimate interest)</li>
              <li>Security, fraud prevention, and audit logging (Art. 5/2-f, legitimate interest)</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6 mb-2">
              İlgili Kişi Hakları (Data Subject Rights — KVKK Art. 11)
            </h3>
            <p className="text-gray-400 mb-2">As a data subject in Türkiye, you have the right to:</p>
            <ul className="list-disc ml-6 space-y-1 text-gray-400">
              <li>Learn whether your personal data is being processed</li>
              <li>Request information regarding the processing</li>
              <li>Learn the purpose of processing and whether it is being used as intended</li>
              <li>Know the third parties (domestic or abroad) to whom data is transferred</li>
              <li>Request correction of incomplete or inaccurate data</li>
              <li>
                Request erasure or destruction of personal data under conditions specified in Art. 7 of
                KVKK
              </li>
              <li>
                Request notification of corrections, erasure, or destruction to third parties to whom
                data has been transferred
              </li>
              <li>
                Object to results disadvantageous to you arising from analysis exclusively by automated
                systems
              </li>
              <li>
                Demand compensation for damages arising from unlawful processing of your personal data
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6 mb-2">Başvuru Yöntemi (How to Submit a Request)</h3>
            <p className="text-gray-400">
              Per the Turkish Data Protection Authority&apos;s Application Procedures and Principles
              Communiqué, you may submit a written request to our registered address or send a signed
              email from your registered account address to{' '}
              <a
                href={`mailto:${dpoEmail}`}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {dpoEmail}
              </a>
              . We will respond within thirty (30) days, free of charge unless the request requires
              additional cost.
            </p>
          </section>

          {/* GDPR Disclosure */}
          <section id="gdpr">
            <h2 className="text-2xl font-bold text-white mb-4">
              15. GDPR Disclosure (European Economic Area / United Kingdom)
            </h2>
            <p className="text-gray-400">
              For users in the EEA, the United Kingdom, or Switzerland, the General Data Protection
              Regulation (Regulation (EU) 2016/679) and the UK Data Protection Act 2018 apply to the
              processing of personal data described in this Privacy Policy.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-2">Lawful Bases for Processing</h3>
            <ul className="list-disc ml-6 space-y-1 text-gray-400">
              <li>
                <strong className="text-gray-300">Performance of a contract</strong> (Art. 6(1)(b)):
                account creation, service delivery, billing, support
              </li>
              <li>
                <strong className="text-gray-300">Legitimate interests</strong> (Art. 6(1)(f)): platform
                security, abuse prevention, audit logging, internal analytics
              </li>
              <li>
                <strong className="text-gray-300">Legal obligation</strong> (Art. 6(1)(c)): tax and
                accounting record-keeping
              </li>
              <li>
                <strong className="text-gray-300">Consent</strong> (Art. 6(1)(a)): cross-border data
                transfers to Türkiye where applicable
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6 mb-2">Your Rights Under GDPR</h3>
            <ul className="list-disc ml-6 space-y-1 text-gray-400">
              <li>Right of access to your personal data (Art. 15)</li>
              <li>Right to rectification of inaccurate data (Art. 16)</li>
              <li>Right to erasure / &quot;right to be forgotten&quot; (Art. 17)</li>
              <li>Right to restriction of processing (Art. 18)</li>
              <li>Right to data portability — machine-readable export (Art. 20)</li>
              <li>Right to object to processing based on legitimate interests (Art. 21)</li>
              <li>Right to withdraw consent at any time (Art. 7(3))</li>
              <li>
                Right to lodge a complaint with your local supervisory authority — for example, the
                Irish Data Protection Commission, the UK ICO, or any EEA national authority of your
                choice
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6 mb-2">
              Data Protection Contact &amp; Retention
            </h3>
            <p className="text-gray-400">
              For any GDPR request — access, deletion, portability, objection — write to{' '}
              <a
                href={`mailto:${dpoEmail}`}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {dpoEmail}
              </a>{' '}
              from the email address associated with your account. We respond within one (1) month
              under Art. 12(3).
            </p>
            <p className="text-gray-400 mt-3">
              Account and billing records required for tax purposes are retained for the period
              mandated by Turkish law (currently ten (10) years for invoicing records under VUK).
              Operational metrics outside of this scope follow the retention windows described in
              Section 7 of this Policy.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">16. Contact Us</h2>
            <p className="text-gray-400">
              For general inquiries about this Privacy Policy or how your data is handled:
            </p>
            <div className="mt-4 bg-white/5 border border-gray-800 rounded-xl p-6">
              <p className="text-white font-semibold">Nairotech Yazılım Sistemleri ve Pazarlama Limited Şirketi</p>
              <p className="text-gray-400 mt-2">
                Yeniköy Merkez Mah. Vatan Cad. Teknopark No: 83 / Y7
              </p>
              <p className="text-gray-400">41275 Başiskele / Kocaeli, Türkiye</p>
              <p className="text-gray-400 mt-3">
                General contact:{' '}
                <a href={`mailto:${contactEmail}`} className="text-primary hover:text-primary/80 transition-colors">
                  {contactEmail}
                </a>
              </p>
              <p className="text-gray-400 mt-1">
                Data protection / privacy requests:{' '}
                <a href={`mailto:${dpoEmail}`} className="text-primary hover:text-primary/80 transition-colors">
                  {dpoEmail}
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
