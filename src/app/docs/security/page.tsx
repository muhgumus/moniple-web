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
          The default install is <Strong>least privilege</Strong>, and we want
          to be precise about what that means. The agent holds no cluster-wide
          access to <Code>Secrets</Code>, and it cannot create or modify any{' '}
          <Code>ClusterRole</Code> or <Code>ClusterRoleBinding</Code> — not even
          its own. The monitoring stack it depends on (kube-state-metrics,
          vmagent) ships its RBAC directly in the install manifest, created with{' '}
          <Strong>your own credentials</Strong> at <Code>kubectl apply</Code>{' '}
          time. That is also what satisfies managed-cluster (GKE / EKS / AKS)
          RBAC-escalation protection now — the install grants those permissions
          itself, instead of requiring the agent to hold everything it would
          otherwise need to grant to something else.
        </P>
        <SubSection title="What the default role allows">
          <UList>
            <LI>
              <Strong>Read-heavy, but a fixed list:</Strong> get / list / watch
              on namespaces, nodes, pods (plus pod logs and events),
              deployments, daemonsets, replicasets, statefulsets, jobs,
              cronjobs, PVCs, and storage classes — exactly what monitoring
              and the AI Doctor&apos;s diagnostics use, nothing broader.
            </LI>
            <LI>
              <Strong>Install its own stack — namespace-scoped only:</Strong> a{' '}
              <Code>Role</Code>, not a <Code>ClusterRole</Code>, lets it create
              and update Deployments, DaemonSets, ServiceAccounts, ConfigMaps,
              and Services to bootstrap VictoriaMetrics, vmagent,
              kube-state-metrics, and node-exporter. Its only Secret access
              (get / create) is scoped to that same single namespace — never
              cluster-wide.
            </LI>
            <LI>
              <Strong>Five remediation verbs, cluster-wide:</Strong> delete on{' '}
              <Code>pods</Code>, patch on <Code>nodes</Code>, patch on{' '}
              <Code>persistentvolumeclaims</Code>, patch on{' '}
              <Code>deployments</Code>, and delete on <Code>jobs</Code> — the
              full list, each exercised only for an action you explicitly
              approve in the app.
            </LI>
            <LI>
              <Strong>Read-only RBAC introspection:</Strong> it can ask the API
              server whether it itself holds a permission (
              <Code>SelfSubjectAccessReview</Code>) and can read — never
              write — existing <Code>ClusterRole</Code> /{' '}
              <Code>ClusterRoleBinding</Code> objects, so it can tell whether
              the monitoring stack&apos;s RBAC is present instead of guessing
              through 403s.
            </LI>
          </UList>
        </SubSection>
        <Callout tone="note" title="It can't widen its own permissions">
          Earlier agent builds re-applied their own <Code>ClusterRole</Code> on
          every start, so an image update could silently grant the agent new
          permissions in your cluster without you ever agreeing to it. That
          self-heal is gone. If a ClusterRole the monitoring stack depends on is
          missing, the agent logs exactly which one and tells you to re-apply
          the install YAML — it never grants itself anything you didn&apos;t
          explicitly apply.
        </Callout>
        <Callout tone="warning" title="Installed before August 13, 2026?">
          This narrowing applies to new installs. A cluster you connected
          earlier keeps running under its previous, broader role until you
          re-run your install command — the same one-line{' '}
          <Code>kubectl apply</Code> shown in the app both narrows the role and
          updates the agent, in one step.
        </Callout>
        <Callout tone="info" title="Want it narrower still?">
          The default role already avoids cluster-wide Secrets and RBAC write.
          If you pre-install your own Prometheus-compatible stack and set{' '}
          <Code>AUTO_INSTALL_MONITORING=false</Code>, a strictly read-only
          variant is available: every rule either reads cluster state (
          <Code>get</Code> / <Code>list</Code> / <Code>watch</Code>) or checks
          the agent&apos;s own permissions — no install Role and none of the
          five remediation verbs. Approved Doctor actions then fail with a
          permission error instead of changing anything.
        </Callout>
        <SubSection title="kube-state-metrics, scoped down too">
          <P>
            The kube-state-metrics instance the agent installs no longer runs
            with its stock, broad role either. Its <Code>ClusterRole</Code> is
            scoped from 15 API groups down to the 5 object kinds Moniple
            actually queries — namespaces, nodes, pods, persistentvolumeclaims,
            and replicasets, <Code>list</Code> / <Code>watch</Code> only. It
            never collects <Code>kube_secret_*</Code> or any metric outside
            that set.
          </P>
        </SubSection>
      </Section>

      <Section title="Authentication & secrets">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card title="Per-cluster API key (hashed + never in plaintext env)">
            Every cluster gets its own API key that authenticates its metrics
            pushes. The server stores only a SHA-256 <Strong>hash</Strong> of the
            key — the plaintext is shown once at creation and is never
            recoverable from Moniple&apos;s database. In your cluster it is
            delivered as a Kubernetes <Strong>Secret</Strong>, not a plaintext
            Deployment env value, so a commonly granted read-only{' '}
            <Code>get pod -o yaml</Code> can&apos;t expose it. Lost it?
            Regenerate a new one from the app.
          </Card>
          <Card title="LLM keys encrypted at rest">
            If you bring your own LLM key, it is encrypted with{' '}
            <Strong>AES-256-GCM</Strong> before being written to the database,
            using a key that lives only in the server&apos;s environment. It is
            decrypted solely to hand to the agent for a diagnostic, and the app
            only ever displays it masked.
          </Card>
          <Card title="GitOps token never reaches your cluster">
            If you connect the AI Doctor&apos;s GitOps remediation, your
            repository token is encrypted at rest and decrypted only inside the
            Moniple server process, to make the commit. The agent applies the
            live Kubernetes patch and reports the result; the server makes the
            matching Git commit — your token is never sent to the agent and
            never stored in your cluster.
          </Card>
          <Card title="Version-pinned agent image">
            The install manifest pins the agent to a specific released version
            — not <Code>:latest</Code> — with{' '}
            <Code>imagePullPolicy: IfNotPresent</Code>, so a compromised
            registry tag can&apos;t silently roll out to your cluster on the
            next pod restart. It only updates when you tap Update in the app or
            re-run the install command.
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
