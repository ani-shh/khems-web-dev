"use client";

import { motion } from "framer-motion";
import {
  UserCheck, Leaf, Calendar, ShieldCheck, Sparkles, Shield,
  Search, Heart, Clock, Wrench, Settings, Droplets, Wind,
  CheckCircle, Home, type LucideIcon
} from "lucide-react";
import { Container } from "@/components/layout";
import { ServiceBenefit } from "@/types";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  UserCheck,
  Leaf,
  Calendar,
  ShieldCheck,
  Sparkles,
  Shield,
  Search,
  Heart,
  Clock,
  Wrench,
  Settings,
  Droplets,
  Wind,
  CheckCircle,
  Home,
};

interface ServiceBenefitsProps {
  benefits: ServiceBenefit[];
  title: string;
}

export function ServiceBenefits({ benefits, title }: ServiceBenefitsProps) {
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
            Why Choose Our {title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Here's what sets our service apart from the rest
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon] || Sparkles;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-[#0D9488]/10 flex items-center justify-center mb-5">
                  <Icon size={28} className="text-[#0D9488]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
