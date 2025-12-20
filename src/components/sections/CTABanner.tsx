"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/layout";
import { SITE_CONFIG } from "@/lib/constants";
import { useContactModal } from "@/components/providers";

export function CTABanner() {
  const { openContactModal } = useContactModal();

  return (
    <section className="py-16 md:py-24 bg-[#0D9488]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for a Spotless Space?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Book your professional cleaning service today and experience the
            difference. We serve all areas in Kathmandu Valley.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openContactModal}
              className="inline-flex items-center gap-2 bg-white text-[#0D9488] px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Now
              <ArrowRight size={18} />
            </button>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              <Phone size={18} />
              Call Us
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
