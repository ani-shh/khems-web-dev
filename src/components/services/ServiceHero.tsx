"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { Container } from "@/components/layout";
import { useContactModal } from "@/components/providers";

interface ServiceHeroProps {
  title: string;
  tagline: string;
  heroImage: string;
  category: string;
}

export function ServiceHero({ title, tagline, heroImage, category }: ServiceHeroProps) {
  const { openContactModal } = useContactModal();
  // Format category for display
  const categoryLabel = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <Container className="relative z-10 py-20 md:py-28">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <ol className="flex items-center gap-2 text-sm text-white/70">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight size={14} />
            <li>
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
            </li>
            <ChevronRight size={14} />
            <li>
              <span className="text-white/50">{categoryLabel}</span>
            </li>
            <ChevronRight size={14} />
            <li>
              <span className="text-white">{title}</span>
            </li>
          </ol>
        </motion.nav>

        {/* Title & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            {tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={openContactModal}
              className="inline-flex items-center justify-center gap-2 bg-[#0D9488] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0F766E] transition-colors"
            >
              Book Now
              <ChevronRight size={20} />
            </button>
            <a
              href="tel:+9779801227494"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/30"
            >
              <Phone size={20} />
              Call Us
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
