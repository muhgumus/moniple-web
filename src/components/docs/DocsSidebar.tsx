'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const docsNav: { title: string; href: string; description: string }[] = [
  {
    title: 'Overview & Quickstart',
    href: '/docs',
    description: 'What Moniple is and how to get metrics in 60 seconds',
  },
  {
    title: 'Installation',
    href: '/docs/installation',
    description: 'The one-line install and what it deploys',
  },
  {
    title: 'Architecture',
    href: '/docs/architecture',
    description: 'Push-only model and what data leaves your cluster',
  },
  {
    title: 'Security',
    href: '/docs/security',
    description: 'RBAC scope, API keys, encryption, open source',
  },
  {
    title: 'AI Doctor',
    href: '/docs/ai-doctor',
    description: 'Diagnostics, approval workflow, scheduling',
  },
  {
    title: 'Bring Your Own LLM',
    href: '/docs/byo-llm',
    description: 'Moniple AI vs your own OpenAI, Anthropic, Gemini keys',
  },
  {
    title: 'FAQ',
    href: '/docs/faq',
    description: 'Honest answers for skeptical engineers',
  },
];

function isActive(pathname: string, href: string): boolean {
  if (href === '/docs') {
    return pathname === '/docs' || pathname === '/docs/';
  }
  return pathname === href || pathname === `${href}/` || pathname.startsWith(`${href}/`);
}

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="space-y-1" aria-label="Documentation">
      <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
        Documentation
      </p>
      {docsNav.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={active ? 'page' : undefined}
            className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
              active
                ? 'bg-primary/15 text-primary font-semibold border-l-2 border-primary'
                : 'text-gray-400 hover:text-white hover:bg-white/5 border-l-2 border-transparent'
            }`}
          >
            {item.title}
          </Link>
        );
      })}

      <div className="mt-6 border-t border-gray-800 pt-4">
        <a
          href="https://github.com/nairotech/moniple-agent"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
        >
          Agent source
          <span className="text-xs text-emerald-400">GitHub</span>
        </a>
        <a
          href="https://app.moniple.com/?demo=1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
        >
          Live demo
          <span className="text-xs text-primary">Try it</span>
        </a>
      </div>
    </nav>
  );
}

export default function DocsSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile: collapsible menu button */}
      <div className="lg:hidden mb-6">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between rounded-lg border border-gray-800 bg-white/5 px-4 py-3 text-sm font-medium text-white"
          aria-expanded={open}
        >
          Browse docs
          <svg
            className={`h-5 w-5 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <div className="mt-3 rounded-lg border border-gray-800 bg-dark/60 p-2">
            <NavList onNavigate={() => setOpen(false)} />
          </div>
        )}
      </div>

      {/* Desktop: sticky sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-24">
          <NavList />
        </div>
      </aside>
    </>
  );
}
