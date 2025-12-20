"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Container } from "@/components/layout";
import { ServicePricingTier } from "@/types";
import { cn } from "@/lib/cn";
import { useContactModal } from "@/components/providers";

interface ServicePricingProps {
  pricing: ServicePricingTier[];
}

export function ServicePricing({ pricing }: ServicePricingProps) {
  const { openContactModal } = useContactModal();

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            No hidden fees. Choose the package that fits your needs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {pricing.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative bg-white rounded-2xl p-6 md:p-8 shadow-sm",
                tier.popular && "ring-2 ring-[#0D9488] shadow-lg"
              )}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-[#0D9488] text-white text-sm font-semibold px-4 py-1 rounded-full">
                    <Star size={14} className="fill-current" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl md:text-4xl font-bold text-gray-900">
                  {tier.price}
                </span>
                <span className="text-gray-500 ml-2">{tier.unit}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={18} className="text-[#0D9488] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={openContactModal}
                className={cn(
                  "block w-full text-center py-3 rounded-full font-semibold transition-colors",
                  tier.popular
                    ? "bg-[#0D9488] text-white hover:bg-[#0F766E]"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                )}
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          * Prices may vary based on property size and condition. Contact us for a custom quote.
        </motion.p>
      </Container>
    </section>
  );
}
