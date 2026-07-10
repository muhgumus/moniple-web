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
  OList,
  OLI,
  Callout,
  Card,
  Terminal,
  DocsFooterNav,
} from '@/components/docs/DocsContent';

export const metadata: Metadata = {
  title: 'Installation — Moniple Docs',
  description:
    'Install the Moniple agent with a single kubectl command. What gets deployed into the moniple namespace, the install lifecycle, updating, and uninstalling. Works on GKE, EKS, AKS, and on-prem.',
};

export default function InstallationPage() {
  return (
    <>
      <DocsHeader
        eyebrow="Getting started"
        title="Installation"
        intro="One command installs the agent and its metrics stack into a dedicated namespace. No Helm, no pre-existing Prometheus required, and no inbound access to your cluster."
      />

      <Section title="Prerequisites">
        <UList>
          <LI>
            <Code>kubectl</Code> installed and pointed at the cluster you want to
            monitor (check with <Code>kubectl config current-context</Code>).
          </LI>
          <LI>
            Permission to create a namespace, a <Code>ClusterRole</Code> /{' '}
            <Code>ClusterRoleBinding</Code>, and workloads — in practice,{' '}
            <Strong>cluster-admin</Strong> for the install. See{' '}
            <a href="/docs/security" className="text-primary underline hover:text-primary/80">
              Security
            </a>{' '}
            for why the agent needs this scope and how to run a narrower variant.
          </LI>
          <LI>
            Outbound HTTPS from the cluster to <Code>server.moniple.com</Code>.
            That is the only network path the agent needs — nothing listens for
            inbound connections.
          </LI>
        </UList>
      </Section>

      <Section title="The one-line install">
        <P>
          Add a cluster in the app to get your API key, then run the command it
          shows you. It is a single <Code>kubectl apply</Code> — the server
          renders the manifest with your key, and it works the same in bash,
          PowerShell and cmd.
        </P>
        <Terminal title="install the agent">
          {`kubectl apply -f "https://server.moniple.com/install/agent.yaml?key=<YOUR_API_KEY>"`}
        </Terminal>
        <P>
          The <Code>key</Code> parameter injects your cluster&apos;s API key
          and the server URL into the manifest before it is served. The API key
          authenticates every metrics push; keep it secret.
        </P>
        <Callout tone="note" title="Want to review the manifest first?">
          Fetch it without applying:{' '}
          <Code>curl -s https://server.moniple.com/install/agent.yaml</Code>. It
          is a single YAML document — Namespace, ServiceAccount, ClusterRole,
          ClusterRoleBinding, Deployment, and Service. Without the{' '}
          <Code>key</Code> parameter you get the raw template with placeholders.
        </Callout>
      </Section>

      <Section title="What gets installed">
        <P>
          Everything lands in a dedicated <Code>moniple</Code> namespace. The
          manifest itself deploys the agent; on first boot the agent
          auto-installs a small, self-contained metrics stack so you do not need
          an existing Prometheus.
        </P>

        <SubSection title="From the apply command">
          <UList>
            <LI>
              <Strong>Namespace</Strong> <Code>moniple</Code> — everything
              Moniple creates lives here.
            </LI>
            <LI>
              <Strong>moniple-agent</Strong> Deployment (1 replica) — collects
              metrics, pushes them to the server, and runs the AI Doctor engine.
              Requests 100m CPU / 128Mi memory, limits 500m / 512Mi.
            </LI>
            <LI>
              <Strong>ServiceAccount + ClusterRole + ClusterRoleBinding</Strong>{' '}
              — the identity and permissions the agent runs as.
            </LI>
            <LI>
              <Strong>ClusterIP Service</Strong> on port 3000 — the
              agent&apos;s local <Code>/health</Code> and metrics endpoints
              (in-cluster only; not exposed externally).
            </LI>
          </UList>
        </SubSection>

        <SubSection title="Auto-installed by the agent on first boot">
          <P>
            With <Code>AUTO_INSTALL_MONITORING=true</Code> (the default), the
            agent provisions its own metrics pipeline into the same{' '}
            <Code>moniple</Code> namespace:
          </P>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card title="VictoriaMetrics (single)">
              A lightweight, Prometheus-compatible time-series database
              (vmsingle) that stores scraped metrics inside your cluster.
            </Card>
            <Card title="vmagent">
              The scraper. Discovers and scrapes the kubelet, cAdvisor,
              kube-state-metrics, and node-exporter.
            </Card>
            <Card title="kube-state-metrics">
              Exposes Kubernetes object state (pods, deployments, PVCs,
              namespaces, and more) as metrics.
            </Card>
            <Card title="node-exporter (DaemonSet)">
              Per-node system metrics (CPU, memory, disk, filesystem). If a
              node-exporter already exists on your nodes it is detected and
              reused instead of installing a second one.
            </Card>
          </div>
          <Callout tone="info" title="Already run Prometheus?">
            Set <Code>AUTO_INSTALL_MONITORING=false</Code> and point{' '}
            <Code>PROMETHEUS_API_URL</Code> at your existing
            Prometheus-compatible endpoint. The agent will query yours instead of
            installing its own stack — and it can then run with a much narrower,
            read-only RBAC role.
          </Callout>
        </SubSection>
      </Section>

      <Section title="Install lifecycle: Not installed → Waiting → Active">
        <P>
          The app reflects exactly where the install is, so a fresh cluster never
          looks broken while its metrics stack warms up.
        </P>
        <OList>
          <OLI n={1}>
            <Strong>Not installed.</Strong> No agent has ever contacted the
            server for this cluster. The app shows the install guide with your
            command.
          </OLI>
          <OLI n={2}>
            <Strong>Waiting.</Strong> The agent pod started and sent its first
            heartbeat, but kube-state-metrics and node-exporter are still coming
            up and haven&apos;t produced a full snapshot yet. The app shows a
            &quot;connected — waiting for first metrics&quot; screen and polls
            for the transition.
          </OLI>
          <OLI n={3}>
            <Strong>Active.</Strong> The first snapshot with real pod data
            arrived. The dashboard populates and updates live via the realtime
            WebSocket from then on.
          </OLI>
        </OList>
        <P>
          This is generally a matter of seconds to a minute. If it stalls past a
          few minutes, the waiting screen surfaces inline troubleshooting steps.
        </P>
      </Section>

      <Section title="Updating the agent">
        <P>
          When a newer agent build is available, the app shows an{' '}
          <Strong>update banner</Strong> on the cluster (in the Doctor area). One
          tap rolls the agent Deployment to the latest published image — no
          re-running the install command, no editing YAML.
        </P>
        <Callout tone="note" title="Prefer manual control?">
          You can also update the agent yourself with a standard{' '}
          <Code>kubectl set image</Code> /{' '}
          <Code>kubectl rollout restart deployment/moniple-agent -n moniple</Code>
          {' '}against the published <Code>nairotech/moniple-agent</Code> image.
        </Callout>
      </Section>

      <Section title="Uninstalling">
        <P>
          Removal is complete and immediate: deleting the namespace stops all
          collection and tears down the agent and its metrics stack. Then remove
          the cluster-scoped RBAC, which lives outside the namespace.
        </P>
        <Terminal title="remove everything">
          {`kubectl delete namespace moniple
kubectl delete clusterrole moniple-agent
kubectl delete clusterrolebinding moniple-agent`}
        </Terminal>
        <P>
          The moment the agent stops, no further data leaves your cluster. To
          also delete the historical metrics already stored in Moniple Cloud,
          delete the cluster in the app (or your whole account) — see{' '}
          <a href="/docs/security" className="text-primary underline hover:text-primary/80">
            Security
          </a>
          .
        </P>
      </Section>

      <Section title="Where it runs">
        <P>
          The agent is a standard Kubernetes Deployment with no host or
          cloud-provider assumptions, so it runs anywhere you have a conformant
          cluster:
        </P>
        <UList>
          <LI>
            <Strong>Managed:</Strong> GKE, EKS, AKS, and other managed
            distributions. The install-time RBAC is deliberately shaped to
            satisfy managed-cluster RBAC-escalation protection.
          </LI>
          <LI>
            <Strong>On-prem / self-managed:</Strong> kubeadm, k3s, RKE, OpenShift,
            and similar — as long as the cluster can make outbound HTTPS calls.
          </LI>
          <LI>
            <Strong>Multi-architecture:</Strong> the agent image is published for
            both <Code>amd64</Code> and <Code>arm64</Code>.
          </LI>
        </UList>
      </Section>

      <DocsFooterNav
        prev={{ title: 'Overview & Quickstart', href: '/docs' }}
        next={{ title: 'Architecture', href: '/docs/architecture' }}
      />
    </>
  );
}
