import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnalyticsListener from '@/components/AnalyticsListener';
import CookieConsent from '@/components/CookieConsent';
import LaunchBanner from '@/components/LaunchBanner';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Moniple — Kubernetes Monitoring with AI-Powered Diagnostics',
  description:
    'Real-time Kubernetes monitoring with AI-powered diagnostics, on-premise deployment, and cross-platform apps. Bring your own LLM key. Free forever for small teams.',
  keywords:
    'Kubernetes monitoring, AI diagnostics, on-premise, self-hosted, multi-cluster, SRE, DevOps, OpenAI, Anthropic, Claude, Gemini, Zhipu, real-time',
  openGraph: {
    title: 'Moniple — Kubernetes Monitoring with AI-Powered Diagnostics',
    description:
      'Real-time metrics, AI diagnostics with approval workflow, and on-premise deployment — across web, mobile and desktop.',
    type: 'website',
    url: 'https://moniple.com',
    siteName: 'Moniple',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moniple — Kubernetes Monitoring with AI-Powered Diagnostics',
    description:
      'Real-time metrics, AI diagnostics with approval workflow, and on-premise deployment.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="pt-16">
          <LaunchBanner />
          {children}
        </main>
        <Footer />
        <AnalyticsListener />
        <CookieConsent />
      </body>
    </html>
  );
}
