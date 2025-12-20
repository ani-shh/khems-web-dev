"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Home, Building2, Sparkles, Award } from "lucide-react";

const stats = [
  {
    icon: Home,
    value: "500+",
    label: "Residential Projects",
    description: "Homes transformed",
  },
  {
    icon: Building2,
    value: "200+",
    label: "Commercial Projects",
    description: "Offices & businesses",
  },
  {
    icon: Sparkles,
    value: "1000+",
    label: "Specialized Services",
    description: "Sofa, carpet & more",
  },
  {
    icon: Award,
    value: "98%",
    label: "Satisfaction Rate",
    description: "Happy customers",
  },
];

export function PortfolioStats() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 bg-[#0D9488]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-[#0D9488]" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
