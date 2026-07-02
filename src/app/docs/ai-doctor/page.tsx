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
  Pre,
  DocsFooterNav,
} from '@/components/docs/DocsContent';

export const metadata: Metadata = {
  title: 'AI Doctor — Moniple Docs',
  description:
    'How the Moniple AI Doctor works: eight diagnostic checks, in-agent LLM analysis, findings with proposed remediations you approve, the equivalent kubectl command shown before approval, scheduling, quotas, and severity levels.',
};

export default function AiDoctorPage() {
  return (
    <>
      <DocsHeader
        eyebrow="Features"
        title="AI Doctor"
        intro="The AI Doctor collects diagnostic signals from your cluster, has an LLM analyze them, and returns prioritized findings with concrete remediations. Nothing changes in your cluster unless you approve it — and every action shows the equivalent kubectl before you do."
      />

      <Section title="How a diagnostic runs">
        <P>
          A scan runs entirely from the agent inside your cluster. The server
          orchestrates configuration and stores the report, but the collection
          and the LLM call happen agent-side.
        </P>
        <OList>
          <OLI n={1}>
            <Strong>Configure.</Strong> Pick your LLM (managed Moniple AI or your
            own key), a schedule, and optional guardrails like minimum severity
            and maximum action risk.
          </OLI>
          <OLI n={2}>
            <Strong>Collect.</Strong> The agent runs up to eight diagnostic
            checks against the Kubernetes API and its metrics stack.
          </OLI>
          <OLI n={3}>
            <Strong>Analyze.</Strong> The collected data is sent to your chosen
            LLM with a strict diagnostics prompt; the model returns structured
            findings and proposed remediation actions.
          </OLI>
          <OLI n={4}>
            <Strong>Review.</Strong> Findings appear in the app with severity,
            root cause, affected resources, and — for each proposed action — the
            equivalent <Code>kubectl</Code> command and a risk level.
          </OLI>
          <OLI n={5}>
            <Strong>Approve &amp; execute.</Strong> You approve an action; the
            agent picks it up, executes it against the cluster (subject to its
            guardrails), and reports the result back.
          </OLI>
        </OList>
      </Section>

      <Section title="The eight checks">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card title="Pods">
            CrashLoopBackOff, ImagePullBackOff / ErrImagePull, OOMKilled, and
            pods stuck Pending &gt; 5 minutes, with restart counts and reasons.
          </Card>
          <Card title="Nodes">
            NotReady nodes, Disk / Memory / PID pressure conditions, and cordoned
            (unschedulable) nodes.
          </Card>
          <Card title="Resources">
            CPU, memory, and disk utilization per node, flagging warning (&gt;80%)
            and critical (&gt;90%) thresholds.
          </Card>
          <Card title="PVCs">
            Pending or Lost claims, plus volumes nearing full (&gt;90% used) where
            usage metrics are available.
          </Card>
          <Card title="Events">
            Recent Kubernetes Warning events (last hour), grouped by reason and
            object kind with sample messages.
          </Card>
          <Card title="Security">
            Privileged containers, running as root, missing resource limits, and
            default ServiceAccount usage (system namespaces excluded).
          </Card>
          <Card title="Deployments">
            Degraded rollouts, unavailable/insufficient replicas, and rollouts
            stuck past their progress deadline.
          </Card>
          <Card title="Logs">
            The last ~50 lines from crash-looping or OOM-killed pods only, to give
            the model context on why a container is failing.
          </Card>
        </div>
        <Callout tone="info" title="Analysis happens in the agent">
          The server never runs the model against your data. The agent builds the
          prompt and calls the LLM directly, so cluster context flows from your
          cluster to the LLM provider you selected — not through Moniple as an
          intermediary that reads it.
        </Callout>
      </Section>

      <Section title="Findings & severity">
        <P>
          Every report has an overall severity and a list of findings, each
          prioritized so you triage the important things first:
        </P>
        <UList>
          <LI>
            <Strong>Critical</Strong> — service down or data-loss risk (e.g. a
            NotReady node, a CrashLoopBackOff, a PVC nearly full).
          </LI>
          <LI>
            <Strong>Warning</Strong> — degraded or at risk (e.g. high resource
            usage, a pod pending too long).
          </LI>
          <LI>
            <Strong>Info</Strong> — best-practice and hygiene findings (e.g.
            missing resource limits).
          </LI>
          <LI>
            <Strong>Healthy</Strong> — no problems found; the report says so
            explicitly rather than inventing issues.
          </LI>
        </UList>
        <P>
          You can set a <Strong>minimum severity</Strong> so scans only report
          what you care about, and a <Strong>maximum action risk</Strong> so the
          model never proposes actions above your comfort level.
        </P>
      </Section>

      <Section title="Approve before anything changes">
        <P>
          This is the core safety property: proposed remediations are inert until
          a human approves them. Before you approve, the app shows what the action
          does, its risk level, and the equivalent command — so an approval is
          never a leap of faith.
        </P>
        <Pre title="example: a proposed remediation, shown before approval">
{`Finding    CrashLoopBackOff — api-gateway (namespace: prod)
Severity   critical
Action     restart_pod
Target     Pod/api-gateway-7c9f8b   (namespace: prod)
Risk       low
Equivalent kubectl delete pod api-gateway-7c9f8b -n prod`}
        </Pre>
        <P>
          Approvable action types include restarting a pod, restarting or scaling
          a deployment, deleting a pod or job, cordoning / uncordoning a node,
          adjusting resource requests/limits, and rolling back a deployment. The
          agent still applies its own guardrails on top of your approval — see{' '}
          <a href="/docs/security" className="text-primary underline hover:text-primary/80">
            Security
          </a>{' '}
          for protected namespaces and safe-mode.
        </P>
      </Section>

      <Section title="Scheduling & quotas">
        <P>
          Run scans on demand any time, or set an automatic schedule. Limits
          depend on your plan.
        </P>
        <SubSection title="Schedule frequency">
          <UList>
            <LI>
              <Strong>Free:</Strong> minimum interval of 6 hours between scheduled
              scans.
            </LI>
            <LI>
              <Strong>Pro / Team:</Strong> minimum interval of 1 hour.
            </LI>
            <LI>
              <Strong>Enterprise:</Strong> custom (fully parametric).
            </LI>
          </UList>
        </SubSection>
        <SubSection title="Daily scan quota">
          <UList>
            <LI>
              <Strong>Free:</Strong> 5 scans per day (applies to managed Moniple
              AI and to your own key alike on Free).
            </LI>
            <LI>
              <Strong>Pro / Team:</Strong> 100 managed Moniple AI scans per day —
              and unlimited scans when you bring your own LLM key (you pay your
              provider directly).
            </LI>
            <LI>
              <Strong>Enterprise:</Strong> unlimited by default.
            </LI>
          </UList>
        </SubSection>
        <Callout tone="note" title="Free vs paid, in one line">
          Free is great for hands-on, on-demand diagnostics and viewing
          recommendations. Approving and auto-executing actions, tighter
          schedules, and higher quotas come with Pro and above.
        </Callout>
      </Section>

      <DocsFooterNav
        prev={{ title: 'Security', href: '/docs/security' }}
        next={{ title: 'Bring your own LLM', href: '/docs/byo-llm' }}
      />
    </>
  );
}
