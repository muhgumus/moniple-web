import type { Metadata } from 'next';
import {
  DocsHeader,
  Section,
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
  title: 'Overview & Quickstart — Moniple Docs',
  description:
    'What Moniple is and how to go from sign-up to live Kubernetes metrics in about 60 seconds with a single kubectl command.',
};

export default function DocsOverviewPage() {
  return (
    <>
      <DocsHeader
        eyebrow="Getting started"
        title="Overview & Quickstart"
        intro="Moniple is Kubernetes monitoring with an AI diagnostics layer. Install a lightweight agent with one command, watch real-time metrics on web and mobile, and let the AI Doctor find problems and propose fixes you approve."
      />

      <Section title="What Moniple is">
        <P>
          Moniple has two parts working together. A small open-source{' '}
          <Strong>agent</Strong> runs inside your Kubernetes cluster and pushes
          aggregated metrics outbound to Moniple Cloud over HTTPS. The{' '}
          <Strong>apps</Strong> (web, iOS, Android) render those metrics in real
          time and give you multi-cluster overviews, alerts, history, and
          collaboration.
        </P>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card title="Real-time monitoring">
            Node CPU / memory / disk / pod capacity, pod status (running,
            pending, failed) with per-pod CPU and memory, PVC usage, namespaces,
            and active alerts — pushed live and streamed to the app over a
            WebSocket.
          </Card>
          <Card title="AI Doctor">
            On demand or on a schedule, the agent collects eight classes of
            diagnostic signals, has an LLM analyze them, and returns findings
            with proposed remediations. Destructive actions only run after{' '}
            <Strong>you</Strong> approve them in the app.
          </Card>
          <Card title="Cross-platform">
            One account across a responsive web app and native iOS and Android
            apps. Metrics, alerts, and AI reports stay in sync everywhere.
          </Card>
          <Card title="Bring your own LLM">
            Use the zero-config managed Moniple AI, or plug in your own OpenAI,
            Anthropic, Google Gemini, Zhipu GLM, DeepSeek, or any
            OpenAI-compatible endpoint. Your key is encrypted at rest.
          </Card>
        </div>
      </Section>

      <Section id="quickstart" title="Quickstart (3 steps)">
        <P>
          The whole point is speed: from a fresh account to your first metrics
          in about a minute.
        </P>
        <OList>
          <OLI n={1}>
            <Strong>Sign up.</Strong> Create a free account at{' '}
            <a
              href="https://app.moniple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary/80"
            >
              app.moniple.com
            </a>
            . No credit card required — the Free tier lets you monitor up to 5
            clusters forever.
          </OLI>
          <OLI n={2}>
            <Strong>Add a cluster.</Strong> Give it a name. Moniple generates a
            unique API key for that cluster and shows you the install command.
            The key is displayed once — copy it.
          </OLI>
          <OLI n={3}>
            <Strong>Run the one-line install.</Strong> Paste the command into a
            terminal with <Code>kubectl</Code> pointed at your cluster. It
            creates the <Code>moniple</Code> namespace and deploys the agent
            wired to your key and server URL.
          </OLI>
        </OList>

        <Terminal title="install the agent">
          {`kubectl apply -f "https://server.moniple.com/install/agent.yaml?key=<YOUR_API_KEY>"`}
        </Terminal>

        <Callout tone="info" title="This is the exact command shown in the app">
          The app fills in your real API key for you. The server renders the
          manifest with your key and server URL already substituted, so one
          command works on macOS, Linux and Windows alike — no manual editing
          of YAML.
        </Callout>
      </Section>

      <Section title="60 seconds to metrics">
        <P>
          After you apply the manifest, the agent pod starts, connects to Moniple
          Cloud, and bootstraps its own lightweight metrics stack. The app walks
          through three states so you always know where you are:
        </P>
        <UList>
          <LI>
            <Strong>Not installed</Strong> — no agent has ever reported. The app
            shows the install guide.
          </LI>
          <LI>
            <Strong>Waiting</Strong> — the agent has connected but is still
            scraping its first full snapshot. The app shows a &quot;connected,
            waiting for first metrics&quot; screen.
          </LI>
          <LI>
            <Strong>Active</Strong> — the first real snapshot arrived. The
            dashboard populates and updates live from then on.
          </LI>
        </UList>
        <P>
          On most clusters the jump to Active happens within a minute. If it
          takes longer, the waiting screen expands into inline troubleshooting.
        </P>
      </Section>

      <Section title="Prefer to look before you install?">
        <P>
          Explore the full dashboard with realistic sample data — no sign-up, no
          agent, nothing installed in a real cluster.
        </P>
        <div>
          <a
            href="https://app.moniple.com/?demo=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
          >
            Open the live demo
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </Section>

      <DocsFooterNav
        next={{ title: 'Installation', href: '/docs/installation' }}
      />
    </>
  );
}
