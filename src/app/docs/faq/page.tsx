import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import {
  DocsHeader,
  Strong,
  Code,
  DocsFooterNav,
} from '@/components/docs/DocsContent';

export const metadata: Metadata = {
  title: 'FAQ — Moniple Docs',
  description:
    'Honest answers about Moniple: existing Prometheus, resource footprint, multiple clusters, team roles, mobile apps, what happens when a subscription lapses, deleting data, and whether the agent is open source.',
};

function Faq({ q, children }: { q: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-gray-800 bg-white/5 p-6">
      <h2 className="text-lg font-semibold text-white">{q}</h2>
      <div className="mt-2 leading-relaxed text-gray-400">{children}</div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <DocsHeader
        eyebrow="Reference"
        title="Frequently asked questions"
        intro="Straight answers for engineers deciding whether to run this in their cluster."
      />

      <div className="space-y-4">
        <Faq q="Does it work with my existing Prometheus?">
          Yes. By default the agent installs its own lightweight,
          Prometheus-compatible stack (VictoriaMetrics + vmagent +
          kube-state-metrics + node-exporter) so you need nothing pre-existing.
          If you already run Prometheus or VictoriaMetrics, set{' '}
          <Code>AUTO_INSTALL_MONITORING=false</Code> and point{' '}
          <Code>PROMETHEUS_API_URL</Code> at your endpoint — the agent will query
          yours and skip installing its own. An existing node-exporter on your
          nodes is detected and reused rather than duplicated.
        </Faq>

        <Faq q="What's the resource footprint?">
          The agent Deployment requests <Strong>100m CPU / 128Mi memory</Strong>{' '}
          and is capped at 1000m / 512Mi. On top of that, the auto-installed stack
          adds a single-node VictoriaMetrics, a vmagent, kube-state-metrics, and a
          node-exporter DaemonSet (one lightweight pod per node). If you bring
          your own Prometheus, you skip that stack entirely and only run the
          agent.
        </Faq>

        <Faq q="Can I monitor multiple clusters?">
          Yes. Each cluster gets its own API key and its own agent install, and
          the app gives you a multi-cluster overview to switch between them. The
          Free tier covers up to <Strong>5 clusters</Strong>; paid plans are
          unlimited.
        </Faq>

        <Faq q="How does team sharing and roles work?">
          You can share a cluster with teammates directly or through a team.
          Access is role-based — <Strong>owner</Strong>,{' '}
          <Strong>contributor</Strong>, and <Strong>viewer</Strong> — so people
          see only what their role allows, and owner-only actions (like deleting a
          cluster, regenerating its key, or transferring ownership) stay
          restricted. Paid plans are billed per seat; the Free tier includes one
          invited member so you can try sharing.
        </Faq>

        <Faq q="Are there mobile apps?">
          Yes — native <Strong>iOS</Strong> and <Strong>Android</Strong> apps in
          addition to the web app, all backed by the same account. Metrics,
          alerts, and AI reports stream to every device in real time, including
          push notifications for critical alerts and AI Doctor results on paid
          plans.
        </Faq>

        <Faq q="Is the agent open source?">
          Yes. The agent is public at{' '}
          <a
            href="https://github.com/nairotech/moniple-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-primary/80"
          >
            github.com/nairotech/moniple-agent
          </a>
          . You can read exactly what it collects and what it sends before
          installing it, and audit every remediation guardrail in the source.
        </Faq>

        <Faq q="What data does the agent send — could it read my app's data?">
          For monitoring it sends aggregated metrics and object metadata only:
          node CPU/memory/disk/pod usage, pod status with per-pod CPU/memory, PVC
          usage, namespaces, and alerts. It does <Strong>not</Strong> read
          application logs, environment variables, Secrets, or ConfigMap
          contents. The one exception is an AI Doctor scan, which additionally
          collects Kubernetes events and a short log excerpt from failing pods —
          and that context goes to the LLM provider you choose. See{' '}
          <a href="/docs/architecture" className="text-primary underline hover:text-primary/80">
            Architecture
          </a>
          .
        </Faq>

        <Faq q="Does the server ever connect into my cluster?">
          No. The model is push-only: the agent makes <Strong>outbound</Strong>{' '}
          HTTPS calls to the server and the server never initiates a connection
          back. You upload no kubeconfig and open no inbound ports. The agent
          authenticates with a per-cluster API key that the server stores only as
          a hash.
        </Faq>

        <Faq q="Do I need to give it cluster-admin?">
          To run the install, in practice yes — creating ClusterRoles and
          ClusterRoleBindings is a privileged operation on most clusters, and
          the one-line install creates three pairs (for the agent,
          kube-state-metrics, and vmagent) using your own credentials. The
          agent itself doesn&apos;t keep anything like that scope afterward:
          its role is least-privilege — no cluster-wide Secret access, no RBAC
          write, not even on itself. If you pre-install monitoring yourself and
          disable auto-install, an even narrower, strictly read-only role is
          available. Details in{' '}
          <a href="/docs/security" className="text-primary underline hover:text-primary/80">
            Security
          </a>
          .
        </Faq>

        <Faq q="Will the AI change things in my cluster on its own?">
          No. The AI Doctor only <Strong>proposes</Strong> remediations. Nothing
          runs until you approve it in the app, and even then the agent enforces
          guardrails: protected system namespaces are off-limits, only an
          allowlisted set of action types can run, parameters are validated, and
          operators can run in safe mode or disable remediation entirely.
          Approval itself is a paid-tier feature — Free users can view
          recommendations but not execute them.
        </Faq>

        <Faq q="What happens when my subscription lapses?">
          Your account drops back to Free-tier limits — you keep monitoring (up
          to 5 clusters), real-time metrics, and on-demand diagnostics. Paid-only
          capabilities pause: action approval is disabled, scan quotas and
          schedule frequency return to Free limits, and metric history reverts to
          the Free window. Nothing is deleted just because a subscription ended.
        </Faq>

        <Faq q="How do I delete my data?">
          Uninstall the agent (<Code>kubectl delete namespace moniple</Code>) to
          stop all collection immediately. To remove data already stored in
          Moniple Cloud, delete the cluster in the app, or delete your entire
          account — in which case all associated data is permanently removed
          within 30 days. See the{' '}
          <a href="/privacy-policy" className="text-primary underline hover:text-primary/80">
            Privacy Policy
          </a>{' '}
          for the full process and your GDPR/KVKK rights.
        </Faq>

        <Faq q="Can I run Moniple entirely on-premise?">
          Yes, on the Enterprise plan. Moniple can be deployed inside your own
          infrastructure with no outbound dependencies, including the AI Doctor
          via a self-hosted OpenAI-compatible endpoint — so no data leaves your
          environment.{' '}
          <a
            href="mailto:enterprise@moniple.com?subject=Moniple%20Enterprise%20Inquiry"
            className="text-primary underline hover:text-primary/80"
          >
            Talk to us
          </a>{' '}
          about requirements.
        </Faq>
      </div>

      <DocsFooterNav
        prev={{ title: 'Bring your own LLM', href: '/docs/byo-llm' }}
      />
    </>
  );
}
