import FeaturesHero from "@/components/features/FeaturesHero";
import MultiClusterSection from "@/components/features/MultiClusterSection";
import AIDoctorSection from "@/components/features/AIDoctorSection";
import ApproveRemediateSection from "@/components/features/ApproveRemediateSection";
import TeamCollaborationSection from "@/components/features/TeamCollaborationSection";
import CrossPlatformSection from "@/components/features/CrossPlatformSection";
import PushNotificationsSection from "@/components/features/PushNotificationsSection";
import SecuritySection from "@/components/features/SecuritySection";
import OnPremiseSection from "@/components/features/OnPremiseSection";
import MetricHistorySection from "@/components/features/MetricHistorySection";
import PricingTeaserSection from "@/components/features/PricingTeaserSection";

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <MultiClusterSection />
      <AIDoctorSection />
      <ApproveRemediateSection />
      <TeamCollaborationSection />
      <CrossPlatformSection />
      <PushNotificationsSection />
      <SecuritySection />
      <OnPremiseSection />
      <MetricHistorySection />
      <PricingTeaserSection />
    </>
  );
}
