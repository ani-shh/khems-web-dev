import { Metadata } from "next";
import { AboutHero, OurStory, OurTeam, SafetyStandards } from "@/components/about";
import { CTABanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "About Us | Khems Cleaning",
  description:
    "Learn about Khems Cleaning - our story, our dedicated team, and our commitment to safety and quality cleaning services in Kathmandu.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <OurTeam />
      <SafetyStandards />
      <CTABanner />
    </>
  );
}
