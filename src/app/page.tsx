import HeroSection from '@/components/home/HeroSection';
import CrossPlatformSection from '@/components/home/CrossPlatformSection';
import DoctorAISection from '@/components/home/DoctorAISection';
import RealtimeSection from '@/components/home/RealtimeSection';
import OnPremiseSection from '@/components/home/OnPremiseSection';
import PricingTeaserSection from '@/components/home/PricingTeaserSection';
import TrustSection from '@/components/home/TrustSection';
import ClosingCTASection from '@/components/home/ClosingCTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CrossPlatformSection />
      <DoctorAISection />
      <RealtimeSection />
      <OnPremiseSection />
      <PricingTeaserSection />
      <TrustSection />
      <ClosingCTASection />
    </>
  );
}
