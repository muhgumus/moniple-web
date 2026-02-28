import Hero from '@/components/home/Hero';
import AppPreview from '@/components/home/AppPreview';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <AppPreview />
      <Features />
      <HowItWorks />
      <CTA />
    </>
  );
}
