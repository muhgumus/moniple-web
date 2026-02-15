import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Moniple - Kubernetes Monitoring Platform',
  description: 'Monitor your Kubernetes clusters from anywhere. Real-time metrics, multi-cluster management, mobile-first design.',
  keywords: 'Kubernetes, monitoring, dashboard, mobile, DevOps, SRE, cloud-native',
  openGraph: {
    title: 'Moniple - Kubernetes Monitoring Platform',
    description: 'Monitor your Kubernetes clusters from anywhere.',
    type: 'website',
    url: 'https://moniple.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
