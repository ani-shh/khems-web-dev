"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout";

interface ServiceIntroProps {
  intro: string;
  title: string;
}

export function ServiceIntro({ intro, title }: ServiceIntroProps) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Our {title} Service
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {intro}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
