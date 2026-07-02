import type { ReactNode } from 'react';

/**
 * Presentational building blocks for the docs pages. The marketing site does
 * not ship @tailwindcss/typography, so these give every docs page a consistent
 * "prose" look (spacing, heading scale, list styling) using plain Tailwind that
 * matches the rest of the site (bg-white/5, border-gray-800, primary accents).
 */

export function DocsHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
}) {
  return (
    <header className="mb-10 border-b border-gray-800 pb-8">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl sm:text-4xl font-bold text-white">{title}</h1>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-gray-300">{intro}</p>
      )}
    </header>
  );
}

export function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mt-12 scroll-mt-24 first:mt-0">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

export function SubSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-3 space-y-4">{children}</div>
    </div>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-gray-300 leading-relaxed">{children}</p>;
}

export function Lead({ children }: { children: ReactNode }) {
  return <p className="text-gray-400 leading-relaxed text-sm">{children}</p>;
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-white">{children}</strong>;
}

export function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-primary">
      {children}
    </code>
  );
}

export function UList({ children }: { children: ReactNode }) {
  return (
    <ul className="ml-1 space-y-2 text-gray-300">{children}</ul>
  );
}

export function LI({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 leading-relaxed">
      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" aria-hidden />
      <span>{children}</span>
    </li>
  );
}

export function OList({ children }: { children: ReactNode }) {
  return (
    <ol className="ml-1 space-y-3 text-gray-300">{children}</ol>
  );
}

export function OLI({ n, children }: { n: number; children: ReactNode }) {
  return (
    <li className="flex gap-3 leading-relaxed">
      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
        {n}
      </span>
      <span className="pt-0.5">{children}</span>
    </li>
  );
}

type CalloutTone = 'info' | 'warning' | 'success' | 'note';

const calloutStyles: Record<CalloutTone, { wrap: string; label: string; text: string }> = {
  info: {
    wrap: 'border-primary/30 bg-primary/10',
    label: 'text-primary',
    text: 'text-gray-300',
  },
  warning: {
    wrap: 'border-yellow-500/30 bg-yellow-500/10',
    label: 'text-yellow-400',
    text: 'text-gray-300',
  },
  success: {
    wrap: 'border-green-500/30 bg-green-500/10',
    label: 'text-green-400',
    text: 'text-gray-300',
  },
  note: {
    wrap: 'border-gray-700 bg-white/5',
    label: 'text-gray-300',
    text: 'text-gray-400',
  },
};

export function Callout({
  tone = 'info',
  title,
  children,
}: {
  tone?: CalloutTone;
  title?: string;
  children: ReactNode;
}) {
  const s = calloutStyles[tone];
  return (
    <div className={`rounded-xl border p-4 ${s.wrap}`}>
      {title && <p className={`mb-1 text-sm font-semibold ${s.label}`}>{title}</p>}
      <div className={`text-sm leading-relaxed ${s.text}`}>{children}</div>
    </div>
  );
}

export function Card({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-gray-800 bg-white/5 p-5">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-gray-400">{children}</div>
    </div>
  );
}

/**
 * Terminal-styled command block. `command` renders as a shell command (with a
 * copy-friendly monospace body and traffic-light chrome). Long commands wrap
 * instead of overflowing.
 */
export function Terminal({
  title = 'bash',
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#16171f] shadow-sm">
      <div className="flex items-center gap-2 border-b border-gray-800 bg-white/5 px-4 py-2">
        <span className="h-3 w-3 rounded-full bg-red-500/70" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-green-500/70" aria-hidden />
        <span className="ml-2 text-xs font-medium text-gray-500">{title}</span>
      </div>
      <pre className="overflow-x-auto px-4 py-4 text-[13px] leading-relaxed">
        <code className="font-mono text-emerald-300 whitespace-pre-wrap break-words">
          {children}
        </code>
      </pre>
    </div>
  );
}

/** Plain code/output block (no shell chrome), for YAML/JSON/output samples. */
export function Pre({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#16171f]">
      {title && (
        <div className="border-b border-gray-800 bg-white/5 px-4 py-2 text-xs font-medium text-gray-500">
          {title}
        </div>
      )}
      <pre className="overflow-x-auto px-4 py-4 text-[13px] leading-relaxed">
        <code className="font-mono text-gray-300 whitespace-pre">{children}</code>
      </pre>
    </div>
  );
}

export function DocsFooterNav({
  prev,
  next,
}: {
  prev?: { title: string; href: string };
  next?: { title: string; href: string };
}) {
  return (
    <div className="mt-16 grid grid-cols-1 gap-4 border-t border-gray-800 pt-8 sm:grid-cols-2">
      {prev ? (
        <a
          href={prev.href}
          className="group rounded-xl border border-gray-800 bg-white/5 p-4 transition-colors hover:border-primary/40"
        >
          <span className="text-xs text-gray-500">Previous</span>
          <span className="mt-1 block text-sm font-semibold text-white group-hover:text-primary">
            {prev.title}
          </span>
        </a>
      ) : (
        <span />
      )}
      {next ? (
        <a
          href={next.href}
          className="group rounded-xl border border-gray-800 bg-white/5 p-4 text-right transition-colors hover:border-primary/40"
        >
          <span className="text-xs text-gray-500">Next</span>
          <span className="mt-1 block text-sm font-semibold text-white group-hover:text-primary">
            {next.title}
          </span>
        </a>
      ) : (
        <span />
      )}
    </div>
  );
}
