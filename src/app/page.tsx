import HeroSection from '@/components/home/HeroSection';
import InstallSection from '@/components/home/InstallSection';
import DoctorAISection from '@/components/home/DoctorAISection';
import CrossPlatformSection from '@/components/home/CrossPlatformSection';
import RealtimeSection from '@/components/home/RealtimeSection';
import OnPremiseSection from '@/components/home/OnPremiseSection';
import PricingTeaserSection from '@/components/home/PricingTeaserSection';
import OpenSourceStrip from '@/components/home/OpenSourceStrip';
import TrustSection from '@/components/home/TrustSection';
import ClosingCTASection from '@/components/home/ClosingCTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <InstallSection />
      <DoctorAISection />
      <CrossPlatformSection />
      <RealtimeSection />
      <OnPremiseSection />
      <PricingTeaserSection />
      <OpenSourceStrip />
      <TrustSection />
      <ClosingCTASection />
    </>
  );
}
