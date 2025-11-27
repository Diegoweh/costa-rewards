import { HeroSection } from "@/components/HeroSection";
import { LoyaltyLevels } from "@/components/layout/LoyaltyLevel";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { RewardsHero } from "@/components/RewardsHero";
import { SignupCta } from "@/components/SignupCta";
import Image from "next/image";

export default function Home() {
  return (
    
      <>
      <HeroSection />
      <RewardsHero />
      <LoyaltyLevels />
      <SignupCta />
      <SiteFooter />
      </>
    
  );
}
