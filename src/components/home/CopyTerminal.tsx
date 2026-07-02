"use client";

import { useState } from "react";

/**
 * Terminal-styled command block with a copy button. Visual language matches the
 * docs `Terminal` (traffic-light chrome, #16171f body, emerald monospace) so
 * the landing page and docs feel like one product. Client component because it
 * needs `navigator.clipboard` + local "Copied" state.
 *
 * `command` is the raw text copied to the clipboard (kept newline-accurate).
 * `display` is optional pre-formatted JSX for on-screen rendering (e.g. with
 * line continuations); when omitted, `command` is shown verbatim.
 */
export default function CopyTerminal({
  title = "bash",
  command,
  display,
}: {
  title?: string;
  command: string;
  display?: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be unavailable (insecure context / permissions) — no-op.
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#16171f] shadow-lg">
      <div className="flex items-center gap-2 border-b border-gray-800 bg-white/5 px-4 py-2">
        <span className="h-3 w-3 rounded-full bg-red-500/70" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-green-500/70" aria-hidden />
        <span className="ml-2 text-xs font-medium text-gray-500">{title}</span>
        <button
          type="button"
          onClick={onCopy}
          className="ml-auto inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Copy command to clipboard"
        >
          {copied ? (
            <>
              <svg
                className="h-3.5 w-3.5 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m11.25 6.375h-2.625"
                />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-4 text-[13px] leading-relaxed">
        <code className="font-mono text-emerald-300 whitespace-pre-wrap break-words">
          {display ?? command}
        </code>
      </pre>
    </div>
  );
}
