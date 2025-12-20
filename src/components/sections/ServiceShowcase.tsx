"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Building2, Sparkles, Truck, ChevronRight, type LucideIcon } from "lucide-react";
import { Container } from "@/components/layout";
import { VideoServiceCard } from "@/components/ui";
import { cn } from "@/lib/cn";
import { serviceCategories, type ServiceCategory } from "@/data/serviceCategories";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Building2,
  Sparkles,
  Truck,
};

// Logo-inspired colors for each category
const categoryColors: Record<string, { bg: string; text: string; hover: string }> = {
  residential: { bg: "bg-orange-50", text: "text-orange-600", hover: "hover:bg-orange-50" },
  commercial: { bg: "bg-blue-50", text: "text-blue-600", hover: "hover:bg-blue-50" },
  specialized: { bg: "bg-green-50", text: "text-green-600", hover: "hover:bg-green-50" },
  moving: { bg: "bg-amber-50", text: "text-amber-600", hover: "hover:bg-amber-50" },
};

interface CategoryTabProps {
  category: ServiceCategory;
  isActive: boolean;
  onClick: () => void;
}

function CategoryTab({ category, isActive, onClick }: CategoryTabProps) {
  const Icon = iconMap[category.icon] || Sparkles;
  const colors = categoryColors[category.id] || categoryColors.residential;

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex flex-col items-center gap-2 px-6 py-4 rounded-2xl transition-all duration-300 min-w-[100px]",
        colors.hover,
        isActive
          ? `${colors.bg} ${colors.text} shadow-sm`
          : "text-gray-500"
      )}
    >
      <Icon size={24} strokeWidth={isActive ? 2 : 1.5} />
      <span className={cn(
        "text-sm whitespace-nowrap",
        isActive ? "font-semibold" : "font-medium"
      )}>
        {category.label}
      </span>
    </button>
  );
}

export function ServiceShowcase() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);
  const currentCategory = serviceCategories.find((c) => c.id === activeCategory) || serviceCategories[0];

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Cleaning services in{" "}
            <span className="bg-gradient-to-r from-[#0D9488] via-[#0F766E] to-[#6BBF47] bg-clip-text text-transparent">Kathmandu</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Professional solutions for every space
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex justify-center">
            <div className="inline-flex gap-2 p-2 bg-gray-50 rounded-2xl overflow-x-auto max-w-full">
              {serviceCategories.map((category) => (
                <CategoryTab
                  key={category.id}
                  category={category}
                  isActive={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Service Cards Grid with Videos */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
          >
            {currentCategory.services.map((service, index) => (
              <VideoServiceCard
                key={service.id}
                title={service.title}
                href={service.href}
                videoSrc={service.video}
                posterImage={service.image}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#0D9488] font-semibold hover:gap-3 transition-all"
          >
            View all services
            <ChevronRight size={20} />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
