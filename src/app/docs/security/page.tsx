import type { Metadata } from 'next';
import {
  DocsHeader,
  Section,
  SubSection,
  P,
  Strong,
  Code,
  UList,
  LI,
  Callout,
  Card,
  DocsFooterNav,
} from '@/components/docs/DocsContent';

export const metadata: Metadata = {
  title: 'Security — Moniple Docs',
  description:
    'Moniple security model: agent RBAC scope, per-cluster API keys stored as hashes, LLM keys encrypted at rest with AES-256-GCM, open-source agent, protected namespaces, guarded remediation, retention, and account deletion.',
};

export default function SecurityPage() {
  return (
    <>
      <DocsHeader
        eyebrow="Concepts"
        title="Security"
        intro="Moniple is built for teams who read the manifest before they run it. The agent is open source, the server never connects into your cluster, secrets are never stored in plaintext, and every automated action is guarded."
      />

      <Section title="The agent is open source">
        <P>
          You don&apos;t have to trust a black box. The agent&apos;s entire source
          — the queries it runs, the data it collects, and exactly what it sends —
          is public. Audit precisely what leaves your cluster before you install
          it.
        </P>
        <div>
          <a
            href="https://github.com/nairotech/moniple-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-primary/40"
          >
            View the agent on GitHub
            <span className="text-xs text-emerald-400">nairotech/moniple-agent</span>
          </a>
        </div>
      </Section>

      <Section title="RBAC scope">
        <P>
          The default install grants a broad <Code>ClusterRole</Code>, and we
          want to be upfront about why. With auto-install enabled (the default),
          the agent bootstraps its own metrics stack — which means creating the
          kube-state-metrics ServiceAccount, ClusterRole, and binding. On managed
          clusters (GKE / EKS / AKS), RBAC-escalation protection means a subject
          can only grant permissions it already holds, so the agent must itself
          hold every permission kube-state-metrics needs.
        </P>
        <SubSection title="What the default role allows">
          <UList>
            <LI>
              <Strong>Read-heavy across the cluster:</Strong> get / list / watch
              on nodes, pods, services, endpoints, namespaces, PVCs, PVs,
              deployments, daemonsets, replicasets, statefulsets, jobs, HPAs,
              network policies, ingresses, storage classes, leases, and more —
              this is what monitoring needs.
            </LI>
            <LI>
              <Strong>Create / update for its own stack:</Strong> to install and
              reconcile VictoriaMetrics, vmagent, kube-state-metrics, and
              node-exporter, plus the ConfigMaps and Secrets those components
              require.
            </LI>
            <LI>
              <Strong>RBAC management:</Strong> to provision the ClusterRoles and
              bindings that the monitoring components run as.
            </LI>
            <LI>
              <Strong>Remediation verbs:</Strong> patch / delete on the specific
              resource kinds the AI Doctor can act on (pods, deployments, nodes,
              jobs) — only ever exercised for an action you explicitly approve.
            </LI>
          </UList>
        </SubSection>
        <Callout tone="warning" title="Want least privilege instead?">
          If you pre-install your own Prometheus-compatible stack and set{' '}
          <Code>AUTO_INSTALL_MONITORING=false</Code>, the agent doesn&apos;t need
          any of the create/RBAC/secret grants. A minimal, read-only role variant
          is provided for exactly this case — no Secret access and no RBAC write.
        </Callout>
      </Section>

      <Section title="Authentication & secrets">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card title="Per-cluster API key (hashed)">
            Every cluster gets its own API key that authenticates its metrics
            pushes. The server stores only a SHA-256 <Strong>hash</Strong> of the
            key — the plaintext is shown once at creation and is never
            recoverable from Moniple&apos;s database. Lost it? Regenerate a new
            one from the app.
          </Card>
          <Card title="LLM keys encrypted at rest">
            If you bring your own LLM key, it is encrypted with{' '}
            <Strong>AES-256-GCM</Strong> before being written to the database,
            using a key that lives only in the server&apos;s environment. It is
            decrypted solely to hand to the agent for a diagnostic, and the app
            only ever displays it masked.
          </Card>
          <Card title="TLS everywhere">
            All agent-to-server and app-to-server traffic runs over TLS. The
            agent talks to the server over outbound HTTPS; the realtime channel is
            a secure WebSocket.
          </Card>
          <Card title="Access control on shared clusters">
            Clusters are private to your account until you share them. Sharing is
            role-based (owner / contributor / viewer), so collaborators see only
            what their role permits.
          </Card>
        </div>
      </Section>

      <Section title="Guarded remediation">
        <P>
          The AI Doctor can propose fixes, but the agent enforces hard guardrails
          before it will execute anything — independent of what the model or the
          server asks for:
        </P>
        <UList>
          <LI>
            <Strong>You approve first.</Strong> Proposed actions do nothing until
            a user explicitly approves them in the app. Approval is a paid-tier
            capability; on the Free tier you can read recommendations but not
            execute them.
          </LI>
          <LI>
            <Strong>Protected namespaces.</Strong> The agent refuses to mutate{' '}
            <Code>kube-system</Code>, <Code>kube-public</Code>, and{' '}
            <Code>kube-node-lease</Code> — even if an approved action targets
            them.
          </LI>
          <LI>
            <Strong>Allowlisted action types only.</Strong> Only a fixed set of
            action types can run (restart / scale / delete pod, restart / scale /
            roll back deployment, cordon / uncordon node, adjust resources, delete
            job). Anything else is rejected.
          </LI>
          <LI>
            <Strong>Parameter validation.</Strong> Replica counts and resource
            quantities are validated before any API call; malformed parameters
            are rejected outright.
          </LI>
          <LI>
            <Strong>Safe / off modes.</Strong> Operators can run the agent in{' '}
            <Code>safe</Code> mode (blocks destructive actions like delete /
            scale-down / cordon / rollback) or turn remediation{' '}
            <Code>off</Code> entirely.
          </LI>
          <LI>
            <Strong>SSRF protection.</Strong> When you use a custom LLM endpoint,
            the agent blocks URLs that point at cloud metadata, loopback, or
            private/cluster addresses, so a crafted endpoint can&apos;t exfiltrate
            your key or pivot into the cluster network.
          </LI>
        </UList>
      </Section>

      <Section title="Data retention">
        <UList>
          <LI>
            <Strong>Real-time metrics</Strong> are overwritten with each agent
            push cycle — the latest snapshot replaces the previous one.
          </LI>
          <LI>
            <Strong>Historical metrics</Strong> are retained for up to 30 days for
            trend analysis, then aged out.
          </LI>
          <LI>
            <Strong>Stop collection instantly</Strong> by uninstalling the agent
            (delete the <Code>moniple</Code> namespace). No agent, no new data.
          </LI>
        </UList>
      </Section>

      <Section title="Account & data deletion">
        <P>
          You can delete a single cluster from the app to remove its stored
          metrics, or delete your entire account. On account deletion, all
          associated data — profile, clusters, historical metrics, team
          memberships, and invitations — is permanently removed within 30 days.
          Full details, including how to submit a request and your rights under
          GDPR and KVKK, are in the{' '}
          <a href="/privacy-policy" className="text-primary underline hover:text-primary/80">
            Privacy Policy
          </a>
          .
        </P>
      </Section>

      <DocsFooterNav
        prev={{ title: 'Architecture', href: '/docs/architecture' }}
        next={{ title: 'AI Doctor', href: '/docs/ai-doctor' }}
      />
    </>
  );
}
