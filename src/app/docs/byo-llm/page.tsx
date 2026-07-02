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
  title: 'Bring Your Own LLM — Moniple Docs',
  description:
    'Use the zero-config managed Moniple AI, or bring your own key for OpenAI, Anthropic, Google Gemini, Zhipu GLM, DeepSeek, or any OpenAI-compatible endpoint. Keys are encrypted at rest; with your own key, cluster data goes only to your provider.',
};

export default function ByoLlmPage() {
  return (
    <>
      <DocsHeader
        eyebrow="Features"
        title="Bring your own LLM"
        intro="The AI Doctor works out of the box with managed Moniple AI — no key, no setup. Or bring your own provider key for full control over which model sees your cluster data and where it runs."
      />

      <Section title="Two ways to power the Doctor">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card title="Moniple AI (managed)">
            Zero configuration. Available on every plan, including Free. Moniple
            hosts the model and manages the key server-side, so you can run a
            diagnostic the moment your cluster is active — nothing to sign up for
            elsewhere. Usage is metered by your plan&apos;s daily scan quota.
          </Card>
          <Card title="Bring your own key (BYO)">
            Point the Doctor at your own LLM account. You control the model, the
            provider relationship, and the billing. On paid plans, BYO scans are
            unlimited — you pay your provider directly, so Moniple imposes no
            upper bound.
          </Card>
        </div>
      </Section>

      <Section title="Supported providers">
        <P>
          Choose any of the following when you bring your own key:
        </P>
        <UList>
          <LI>
            <Strong>OpenAI</Strong> — GPT models via the OpenAI API.
          </LI>
          <LI>
            <Strong>Anthropic</Strong> — Claude models via the Anthropic API.
          </LI>
          <LI>
            <Strong>Google Gemini</Strong> — Gemini models via the Generative
            Language API.
          </LI>
          <LI>
            <Strong>Zhipu GLM</Strong> — GLM models via Zhipu / Z.ai.
          </LI>
          <LI>
            <Strong>DeepSeek</Strong> — DeepSeek models via the DeepSeek API.
          </LI>
          <LI>
            <Strong>Custom (OpenAI-compatible)</Strong> — any endpoint that
            speaks the OpenAI chat-completions API, including self-hosted models
            (vLLM, Ollama-compatible gateways, LiteLLM, and similar). Provide the
            base URL and your key.
          </LI>
        </UList>
        <Callout tone="note" title="Custom endpoint safety">
          For custom endpoints the agent validates the base URL and blocks
          cloud-metadata, loopback, and private/cluster addresses by default, so a
          misconfigured or malicious URL can&apos;t be used to exfiltrate your key
          or reach into the cluster network. Operators can opt in to private
          endpoints explicitly when they genuinely self-host inside the cluster.
        </Callout>
      </Section>

      <Section title="Your keys are protected">
        <UList>
          <LI>
            <Strong>Encrypted at rest.</Strong> A key you provide is encrypted
            with <Code>AES-256-GCM</Code> before it&apos;s stored, using a secret
            held only in the server&apos;s environment.
          </LI>
          <LI>
            <Strong>Masked in the UI.</Strong> The app never re-displays your key
            in full; it shows a masked value and leaves the stored key untouched
            if you don&apos;t change it.
          </LI>
          <LI>
            <Strong>Used only for diagnostics.</Strong> The key is decrypted
            solely to be handed to your cluster&apos;s agent for a scan — it is
            not used anywhere else.
          </LI>
        </UList>
      </Section>

      <Section title="The data-privacy angle">
        <P>
          Where your cluster context goes during a scan depends on which option
          you pick — and this is the main reason to bring your own key.
        </P>
        <SubSection title="With your own key">
          <P>
            The agent calls <Strong>your</Strong> provider directly with{' '}
            <Strong>your</Strong> key. The diagnostic context (events, status
            summaries, and log excerpts from failing pods) goes only to the
            provider you chose, under your account and your provider&apos;s data
            terms. Moniple does not sit in the middle reading it, and does not
            store the model&apos;s responses beyond the report you see in the app.
          </P>
        </SubSection>
        <SubSection title="With managed Moniple AI">
          <P>
            The agent uses Moniple&apos;s managed model. This is the
            fastest-to-value option and is throttled by your plan&apos;s scan
            quota to keep it free-to-start. If your policy requires that cluster
            context reach only a provider you control, use BYO instead.
          </P>
        </SubSection>
        <Callout tone="info" title="Fully self-contained option">
          Combine a custom self-hosted endpoint with an on-prem Moniple
          deployment (Enterprise) and the entire AI Doctor loop — collection,
          analysis, and remediation — stays inside your own infrastructure, with
          no third-party LLM involved.
        </Callout>
      </Section>

      <DocsFooterNav
        prev={{ title: 'AI Doctor', href: '/docs/ai-doctor' }}
        next={{ title: 'FAQ', href: '/docs/faq' }}
      />
    </>
  );
}
