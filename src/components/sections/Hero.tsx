"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/layout";
import { HeroSearchBar } from "@/components/ui";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress within the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Transform values based on scroll
  // Width: from 800px (50%) to 100%
  const width = useTransform(scrollYProgress, [0, 0.5], ["60%", "100%"]);
  // Max-width: from 800px to 100vw
  const maxWidth = useTransform(scrollYProgress, [0, 0.5], ["800px", "100vw"]);
  // Border radius: from arch to flat
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["300px 300px 0 0", "0px 0px 0 0"]
  );

  const handleSearch = (query: string, location: string) => {
    // For now, just log - later this can navigate to search results or booking
    console.log("Search:", query, "Location:", location);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-orange-50/30 via-white to-white pt-12 md:pt-20 pb-8 md:pb-12 overflow-hidden"
    >
      <Container>
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-10"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Professional cleaning,
            <br />
            made easy.
          </h1>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 md:mb-16"
        >
          <HeroSearchBar onSearch={handleSearch} />
        </motion.div>
      </Container>

      {/* Hero Image with Scroll-Expanding Arch */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative flex justify-center"
      >
        {/* Expanding Image Container */}
        <motion.div
          className="relative mx-auto overflow-hidden"
          style={{
            width,
            maxWidth,
            aspectRatio: "16/10",
            borderRadius,
          }}
        >
          <Image
            src="/images/hero-home.jpg"
            alt="Clean modern living space"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
