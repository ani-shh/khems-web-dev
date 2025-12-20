"use client";

import { motion } from "framer-motion";
import { Users, Award, Clock, Shield } from "lucide-react";
import { Container } from "@/components/layout";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    value: "10+",
    label: "Years Experience",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support Available",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Satisfaction Guaranteed",
  },
];

export function TrustSignals() {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-gray-100">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#0D9488]/10 flex items-center justify-center">
                <stat.icon size={24} className="text-[#0D9488]" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
