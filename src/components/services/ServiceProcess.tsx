"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout";
import { ServiceProcessStep } from "@/types";

interface ServiceProcessProps {
  process: ServiceProcessStep[];
}

export function ServiceProcess({ process }: ServiceProcessProps) {
  return (
    <section className="py-16 md:py-20 bg-white">
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
            How It Works
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Our simple 4-step process to a cleaner space
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />

            {/* Steps */}
            <div className="space-y-8 md:space-y-12">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex gap-4 md:gap-6"
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0D9488] text-white flex items-center justify-center font-bold text-xl md:text-2xl relative z-10">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1 md:pt-3">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
