'use client';

import { useCallback, useEffect, useState } from 'react';

type State = 'checking' | 'operational' | 'down';

type Check = 'health' | 'reach';

const COMPONENTS: { name: string; desc: string; url: string; check: Check }[] = [
  // 'health' = real CORS fetch (endpoint allows our origin) → checks HTTP 200.
  // 'reach'  = no-cors reachability (opaque) → any response counts as up.
  { name: 'Marketing site', desc: 'moniple.com', url: 'https://moniple.com/', check: 'health' },
  { name: 'Web app', desc: 'app.moniple.com', url: 'https://app.moniple.com/', check: 'reach' },
  { name: 'API', desc: 'server.moniple.com', url: 'https://server.moniple.com/health', check: 'health' },
  { name: 'Realtime & Auth', desc: 'supabase.moniple.com', url: 'https://supabase.moniple.com/', check: 'reach' },
];

async function probe(url: string, check: Check): Promise<State> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 8000);
  try {
    if (check === 'health') {
      // Real (CORS) request — the endpoint sends Access-Control-Allow-Origin for
      // moniple.com (or is same-origin), so we can read the real HTTP status.
      const res = await fetch(url, { cache: 'no-store', signal: ctrl.signal });
      return res.ok ? 'operational' : 'down';
    }
    // Reachability only — opaque response resolves for any HTTP reply; rejects
    // only on network/DNS/TLS failure or timeout.
    await fetch(url, { mode: 'no-cors', cache: 'no-store', signal: ctrl.signal });
    return 'operational';
  } catch {
    return 'down';
  } finally {
    clearTimeout(timer);
  }
}

export default function StatusPage() {
  const [statuses, setStatuses] = useState<Record<string, State>>(
    Object.fromEntries(COMPONENTS.map((c) => [c.name, 'checking'])),
  );
  const [lastChecked, setLastChecked] = useState<string>('');
  const [running, setRunning] = useState(false);

  const runChecks = useCallback(async () => {
    setRunning(true);
    const entries = await Promise.all(
      COMPONENTS.map(async (c) => [c.name, await probe(c.url, c.check)] as const),
    );
    setStatuses(Object.fromEntries(entries));
    setLastChecked(new Date().toLocaleTimeString());
    setRunning(false);
  }, []);

  useEffect(() => {
    runChecks();
    const id = setInterval(runChecks, 60000);
    return () => clearInterval(id);
  }, [runChecks]);

  const values = Object.values(statuses);
  const anyDown = values.includes('down');
  const anyChecking = values.includes('checking');

  const banner = anyChecking
    ? { text: 'Checking system status…', color: 'bg-gray-500/15 text-gray-300 border-gray-500/30', dot: 'bg-gray-400' }
    : anyDown
      ? { text: 'Some systems are experiencing issues', color: 'bg-amber-500/15 text-amber-300 border-amber-500/30', dot: 'bg-amber-400' }
      : { text: 'All systems operational', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30', dot: 'bg-emerald-400' };

  const pill = (s: State) => {
    if (s === 'operational') return { label: 'Operational', dot: 'bg-emerald-400', text: 'text-emerald-300' };
    if (s === 'down') return { label: 'Unreachable', dot: 'bg-red-400', text: 'text-red-300' };
    return { label: 'Checking…', dot: 'bg-gray-400 animate-pulse', text: 'text-gray-400' };
  };

  return (
    <main className="bg-dark text-white min-h-[70vh]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold">Moniple Status</h1>
        <p className="mt-2 text-gray-400 text-sm">
          Live reachability of Moniple services. Auto-refreshes every 60 seconds.
        </p>

        <div className={`mt-8 flex items-center gap-3 rounded-xl border px-5 py-4 ${banner.color}`}>
          <span className={`h-3 w-3 rounded-full ${banner.dot}`} />
          <span className="font-semibold">{banner.text}</span>
        </div>

        <div className="mt-8 divide-y divide-gray-800 rounded-xl border border-gray-800 overflow-hidden">
          {COMPONENTS.map((c) => {
            const p = pill(statuses[c.name]);
            return (
              <div key={c.name} className="flex items-center justify-between px-5 py-4 bg-[#2A2D3E]/40">
                <div>
                  <div className="font-medium">{c.name}</div>
                  <div className="text-xs text-gray-500">{c.desc}</div>
                </div>
                <div className={`flex items-center gap-2 text-sm ${p.text}`}>
                  <span className={`h-2.5 w-2.5 rounded-full ${p.dot}`} />
                  {p.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
          <span>{lastChecked ? `Last checked: ${lastChecked}` : 'Checking…'}</span>
          <button
            onClick={runChecks}
            disabled={running}
            className="rounded-full border border-gray-700 px-4 py-1.5 text-gray-300 hover:text-white hover:border-gray-500 transition-colors disabled:opacity-50"
          >
            {running ? 'Refreshing…' : 'Refresh'}
          </button>
        </div>

        <p className="mt-8 text-xs text-gray-600">
          This page performs lightweight reachability checks from your browser. For incident
          details or to report an outage, contact{' '}
          <a href="mailto:support@moniple.com" className="text-primary hover:underline">
            support@moniple.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}
