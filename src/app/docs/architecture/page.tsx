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
  Pre,
  DocsFooterNav,
} from '@/components/docs/DocsContent';

export const metadata: Metadata = {
  title: 'Architecture & Data Flow — Moniple Docs',
  description:
    'How Moniple works: a push-only agent makes outbound HTTPS calls, the server never connects into your cluster, no kubeconfig is uploaded, and apps receive live updates over a WebSocket.',
};

export default function ArchitecturePage() {
  return (
    <>
      <DocsHeader
        eyebrow="Concepts"
        title="Architecture & data flow"
        intro="Moniple is push-only. The agent inside your cluster initiates every connection outbound; the server never reaches back in. There is no kubeconfig upload and no inbound firewall change."
      />

      <Section title="The push-only model">
        <P>
          The trust boundary matters, so it is worth being precise. The Moniple
          server has <Strong>zero</Strong> network access to your cluster. It
          cannot list your pods, exec into anything, or call your API server.
          Every byte of data originates from the agent and travels one way:
          outbound, over TLS, authenticated with your cluster&apos;s API key.
        </P>
        <UList>
          <LI>
            <Strong>Outbound HTTPS only.</Strong> The agent connects to{' '}
            <Code>server.moniple.com</Code>. You open no ports and expose no
            ingress for Moniple.
          </LI>
          <LI>
            <Strong>No kubeconfig, ever.</Strong> You never hand Moniple
            credentials to your cluster. The agent uses its in-cluster
            ServiceAccount locally and only sends you the resulting metrics.
          </LI>
          <LI>
            <Strong>Per-cluster API key.</Strong> Each cluster authenticates with
            its own key. The server stores only a hash of it, so the key
            can&apos;t be recovered from Moniple&apos;s database.
          </LI>
        </UList>
      </Section>

      <Section title="Data flow at a glance">
        <Pre title="agent → server → apps (all agent-initiated)">
{`  YOUR KUBERNETES CLUSTER                          MONIPLE CLOUD
 ┌───────────────────────────┐                  ┌────────────────────┐
 │  vmagent → VictoriaMetrics │                  │                    │
 │  kube-state-metrics        │   outbound       │   moniple-server   │
 │  node-exporter (DaemonSet) │   HTTPS + API    │   (stores metrics, │
 │            │               │   key            │    hashes API key) │
 │            ▼               │  ───────────────▶│         │          │
 │      moniple-agent  ───────┼──── push ───────┼────────▶│          │
 │  (scrape · analyze · push) │                  │         ▼          │
 └───────────────────────────┘                  │      Postgres      │
        ▲  no inbound path                       │      + Redis       │
        │  server never connects in              └──────────┬─────────┘
        └──────────────  ✗  ───────────────                 │ WebSocket
                                                            ▼  (live)
                                              ┌──────────────────────────┐
                                              │  Web · iOS · Android app  │
                                              └──────────────────────────┘`}
        </Pre>
        <P>
          The agent scrapes its in-cluster metrics stack, optionally runs an AI
          diagnostic, and <Strong>pushes</Strong> the results to the server. Your
          apps subscribe to the server over a WebSocket and update the instant a
          new snapshot lands — no polling, no refresh.
        </P>
      </Section>

      <Section title="What data leaves your cluster">
        <P>
          Only aggregated operational metrics — not application data. Concretely,
          the agent sends:
        </P>
        <UList>
          <LI>
            <Strong>Cluster overview:</Strong> average CPU, memory, disk, and pod
            capacity utilization (percentages), node count, and running/total pod
            counts.
          </LI>
          <LI>
            <Strong>Per-node metrics:</Strong> CPU, memory, disk, and pod
            capacity usage per node, plus totals.
          </LI>
          <LI>
            <Strong>Pods:</Strong> name, namespace, phase (running / pending /
            failed), owner (Deployment / StatefulSet / etc.), and per-pod CPU and
            memory usage.
          </LI>
          <LI>
            <Strong>PVCs:</Strong> name, namespace, capacity, and usage
            percentage where the storage driver exposes it.
          </LI>
          <LI>
            <Strong>Namespaces:</Strong> the list of active namespaces.
          </LI>
          <LI>
            <Strong>Alerts:</Strong> active alert name, severity, state, and
            summary.
          </LI>
        </UList>
        <Callout tone="success" title="What never leaves">
          The metrics agent does <Strong>not</Strong> read your application logs,
          container environment variables, Secrets, ConfigMap contents, or any
          workload payload. It ships numbers and object metadata, not your data.
        </Callout>

        <SubSection title="The AI Doctor exception">
          <P>
            When you run an AI diagnostic, the agent collects richer context so
            the model can reason about problems — for example Kubernetes{' '}
            <Code>Warning</Code> events, pod/deployment status summaries, and a
            small excerpt of logs (last ~50 lines) from crash-looping or
            OOM-killed pods. That context is sent to the{' '}
            <Strong>LLM provider you choose</Strong> — either the managed Moniple
            AI or your own provider if you bring a key. See{' '}
            <a href="/docs/ai-doctor" className="text-primary underline hover:text-primary/80">
              AI Doctor
            </a>{' '}
            and{' '}
            <a href="/docs/byo-llm" className="text-primary underline hover:text-primary/80">
              Bring your own LLM
            </a>{' '}
            for exactly what is collected and where it goes.
          </P>
        </SubSection>
      </Section>

      <Section title="Realtime updates">
        <P>
          Moniple runs its own realtime layer. When the agent pushes a new
          snapshot, the server fans that event out to every connected app over a
          WebSocket (<Code>wss://server.moniple.com/realtime</Code>). Only the
          metric type that actually changed is refreshed, so the dashboard feels
          instantaneous without hammering the API. The same channel delivers live
          AI Doctor reports and invitation notifications.
        </P>
      </Section>

      <Section title="Where data lives">
        <P>
          For the hosted service (Moniple Cloud), account and metrics data are
          stored on Moniple-operated infrastructure in the EU, encrypted in
          transit. Historical metrics are retained for up to 30 days; real-time
          snapshots are overwritten each push cycle. Sensitive material —
          per-cluster API keys and any LLM keys you provide — is never stored in
          plaintext. See{' '}
          <a href="/docs/security" className="text-primary underline hover:text-primary/80">
            Security
          </a>{' '}
          for retention and encryption details, and the{' '}
          <a href="/privacy-policy" className="text-primary underline hover:text-primary/80">
            Privacy Policy
          </a>{' '}
          for data-residency and sub-processor specifics.
        </P>
        <Callout tone="info" title="Air-gapped or strict-residency needs?">
          Moniple can be deployed entirely inside your own infrastructure on the
          Enterprise plan, including the AI Doctor via a self-hosted
          OpenAI-compatible endpoint — in which case no data leaves your
          environment at all.
        </Callout>
      </Section>

      <DocsFooterNav
        prev={{ title: 'Installation', href: '/docs/installation' }}
        next={{ title: 'Security', href: '/docs/security' }}
      />
    </>
  );
}
