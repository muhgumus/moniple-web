import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import DocsSidebar from '@/components/docs/DocsSidebar';

export const metadata: Metadata = {
  title: 'Docs — Moniple',
  description:
    'Moniple documentation: install the agent in one line, understand the push-only architecture, security and RBAC scope, the AI Doctor approval workflow, and bring-your-own LLM.',
};

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-12">
          <DocsSidebar />
          <div className="min-w-0 max-w-3xl">{children}</div>
        </div>
      </div>
    </div>
  );
}
