import Link from "next/link";
import SignupLink from "@/components/SignupLink";
import DemoLink from "@/components/DemoLink";

export default function ClosingCTASection() {
  return (
    <section className="relative py-20 sm:py-24 bg-primary overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Start free in 60 seconds
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            No credit card required. Bring your own LLM key. Self-host whenever
            you want.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <SignupLink
              href="https://app.moniple.com/register"
              source="closing_cta"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-primary shadow-sm hover:bg-gray-100 transition-colors"
            >
              Get Started Free
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </SignupLink>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-primary/20 px-8 py-3 text-base font-semibold text-white ring-1 ring-white/30 hover:bg-primary/30 transition-colors backdrop-blur-sm"
            >
              Contact for Enterprise
            </Link>
          </div>
          <p className="mt-6 text-sm text-blue-100">
            Not ready to sign up?{" "}
            <DemoLink
              source="closing_cta"
              className="font-semibold text-white underline underline-offset-4 hover:text-blue-50"
            >
              Explore the live demo — no account needed
            </DemoLink>
          </p>
        </div>
      </div>
    </section>
  );
}
