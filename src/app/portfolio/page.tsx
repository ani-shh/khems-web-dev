import { Metadata } from "next";
import { PortfolioHero, PortfolioGallery, PortfolioStats, Testimonials } from "@/components/portfolio";
import { CTABanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Our Work | Khems Cleaning Portfolio",
  description:
    "Browse our portfolio of completed cleaning projects in Kathmandu. See before and after transformations for residential, commercial, and specialized cleaning services.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioStats />
      <PortfolioGallery />
      <Testimonials />
      <CTABanner />
    </>
  );
}
