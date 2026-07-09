export default function TermsOfServicePage() {
  const lastUpdated = 'May 14, 2026';
  const supportEmail = 'support@moniple.com';

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
        <div className="space-y-12 text-gray-300 leading-relaxed">

          {/* 1. Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-gray-400">
              Welcome to Moniple. These Terms of Service (&quot;Terms&quot;) govern your access to and use of
              the Moniple platform, mobile applications, web applications, and related services
              (collectively, the &quot;Service&quot;) operated by{' '}
              <strong className="text-gray-300">
                Nairotech Yazılım Sistemleri ve Pazarlama Limited Şirketi
              </strong>{' '}
              (&quot;Nairotech&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a company registered in Turkey.
              By accessing or using the Service, you agree to be bound by these Terms.
            </p>
          </section>

          {/* 2. Eligibility & Accounts */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Eligibility &amp; Accounts</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-400">
              <li>You must be at least 18 years of age to use the Service.</li>
              <li>You must provide accurate and complete registration information.</li>
              <li>You are responsible for safeguarding your password and all activity under your account.</li>
              <li>One account per individual; team accounts are permitted under a single organization.</li>
              <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
            </ul>
          </section>

          {/* 3. The Service */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. The Service</h2>
            <p className="text-gray-400">
              Moniple provides a SaaS platform for monitoring Kubernetes clusters, including real-time
              metrics collection, alerts, AI-powered diagnostics, and team collaboration features. The
              Service is provided through a cross-platform client (web, iOS, Android, macOS, Windows,
              Linux) and a lightweight agent installed in the customer&apos;s Kubernetes cluster.
            </p>
          </section>

          {/* 4. Subscription Plans & Billing */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Subscription Plans &amp; Billing</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-400">
              <li>
                We offer Free and Pro subscription tiers. Plan details are available at{' '}
                <a href="/pricing" className="text-primary hover:text-primary/80 transition-colors">
                  moniple.com/pricing
                </a>
                .
              </li>
              <li>
                Pro and Team subscriptions are billed monthly or annually in advance through our
                payment provider. Invoices, applicable taxes (KDV / VAT), and refunds are handled
                by Nairotech.
              </li>
              <li>
                All fees are non-refundable for consumed billing periods, except as described in our
                Refund Policy.
              </li>
              <li>
                We may change subscription prices with at least 30 days&apos; written notice; price
                changes apply to renewals only.
              </li>
            </ul>
          </section>

          {/* 5. Cancellation & Refunds */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Cancellation &amp; Refunds</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-400">
              <li>
                You may cancel your subscription at any time through your account settings or by
                contacting support.
              </li>
              <li>
                Cancellation takes effect at the end of the current billing period; you retain
                access until then.
              </li>
              <li>
                Refund eligibility is governed by our{' '}
                <a href="/refund-policy" className="text-primary hover:text-primary/80 transition-colors">
                  Refund Policy
                </a>
                {' '}at moniple.com/refund-policy.
              </li>
            </ul>
          </section>

          {/* 6. Acceptable Use */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Acceptable Use</h2>
            <p className="text-gray-400">You agree not to:</p>
            <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-400">
              <li>Use the Service for any unlawful purpose or in violation of any applicable laws.</li>
              <li>
                Reverse engineer, decompile, or attempt to extract the source code of the Service.
              </li>
              <li>Use the Service to monitor systems you are not authorized to access.</li>
              <li>
                Resell, sublicense, or commercially exploit the Service without our written
                permission.
              </li>
              <li>
                Upload malicious code, attempt to disrupt the Service, or interfere with other users.
              </li>
              <li>
                Scrape, harvest, or collect data from the Service through automated means.
              </li>
            </ul>
          </section>

          {/* 7. Customer Data & Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Customer Data &amp; Privacy</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-400">
              <li>You retain all rights to your data.</li>
              <li>
                We process your data in accordance with our{' '}
                <a
                  href="/privacy-policy"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Privacy Policy
                </a>
                {' '}at moniple.com/privacy-policy.
              </li>
              <li>
                The agent installed in your Kubernetes cluster collects metrics and metadata as
                described in our documentation; you are responsible for ensuring you have the right
                to install and operate the agent in your environment.
              </li>
            </ul>
          </section>

          {/* 8. Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Intellectual Property</h2>
            <p className="text-gray-400">
              The Service, including all software, designs, text, graphics, logos, and trademarks,
              is owned by Nairotech and protected by applicable intellectual property laws. We grant
              you a limited, non-exclusive, non-transferable license to use the Service in accordance
              with these Terms. No other rights are granted.
            </p>
          </section>

          {/* 9. Third-Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Third-Party Services</h2>
            <p className="text-gray-400">
              The Service integrates with third-party platforms (Kubernetes, Prometheus, Supabase,
              our payment provider, etc.). Your use of those services is governed by their respective
              terms. We are not responsible for the availability, accuracy, or performance of
              third-party services.
            </p>
          </section>

          {/* 10. Disclaimer of Warranties */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Disclaimer of Warranties</h2>
            <p className="text-gray-400 uppercase text-sm leading-relaxed">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY
              KIND, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We do not warrant that the
              Service will be uninterrupted, error-free, or completely secure.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              <strong className="text-gray-300">AI-generated features.</strong> Parts of the
              Service (including the AI Doctor) use large language models to analyze cluster data
              and to generate diagnostics, findings, and proposed remediation actions.
              AI-generated output is probabilistic by nature and may be inaccurate, incomplete, or
              unsuitable for your environment. It is provided for informational purposes only and
              does not constitute professional advice. No proposed action is executed without your
              explicit approval; by approving an action you confirm that you have reviewed it and
              you accept sole responsibility for its execution and its effects on your
              infrastructure, whether the underlying recommendation was correct or not. Where you
              connect your own LLM provider, its output and terms are additionally governed by
              that provider (Section 9).
            </p>
          </section>

          {/* 11. Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Limitation of Liability</h2>
            <p className="text-gray-400 uppercase text-sm leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, NAIROTECH SHALL NOT BE LIABLE FOR ANY
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF
              PROFITS, REVENUE, DATA, OR USE, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE
              SERVICE. OUR TOTAL LIABILITY FOR ANY CLAIM SHALL NOT EXCEED THE AMOUNT YOU PAID US IN
              THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          {/* 12. Indemnification */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Indemnification</h2>
            <p className="text-gray-400">
              You agree to indemnify, defend, and hold harmless Nairotech and its affiliates,
              officers, employees, and partners from any claims, damages, losses, liabilities,
              costs, or expenses arising out of your use of the Service or violation of these Terms.
            </p>
          </section>

          {/* 13. Termination */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Termination</h2>
            <p className="text-gray-400">
              We may suspend or terminate your access to the Service at any time, with or without
              cause, with or without notice. Upon termination, your right to use the Service will
              immediately cease. You may export your data prior to termination by contacting support.
            </p>
          </section>

          {/* 14. Changes to These Terms */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Changes to These Terms</h2>
            <p className="text-gray-400">
              We may update these Terms from time to time. Material changes will be communicated via
              email or through the Service at least 30 days before they take effect. Continued use of
              the Service after changes take effect constitutes acceptance.
            </p>
          </section>

          {/* 15. Governing Law & Disputes */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">15. Governing Law &amp; Disputes</h2>
            <p className="text-gray-400">
              These Terms are governed by the laws of the{' '}
              <strong className="text-gray-300">Republic of Türkiye</strong>, without regard to
              conflict of law principles. Any disputes shall be resolved exclusively in the courts
              of <strong className="text-gray-300">Kocaeli, Türkiye</strong>.
            </p>
          </section>

          {/* 16. Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">16. Contact</h2>
            <p className="text-gray-400">
              For questions about these Terms, contact us at{' '}
              <a
                href={`mailto:${supportEmail}`}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {supportEmail}
              </a>{' '}
              or:
            </p>
            <div className="mt-4 bg-white/5 border border-gray-800 rounded-xl p-6">
              <p className="text-white font-semibold">
                Nairotech Yazılım Sistemleri ve Pazarlama Limited Şirketi
              </p>
              <p className="text-gray-400 mt-2">
                Yeniköy Merkez Mah. Vatan Cad. Teknopark No: 83 / Y7
              </p>
              <p className="text-gray-400">41275 Başiskele / Kocaeli, Türkiye</p>
              <p className="text-gray-400 mt-2">
                Email:{' '}
                <a
                  href={`mailto:${supportEmail}`}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  {supportEmail}
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
