"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ui";
import { services, popularServices } from "@/data/services";
import type { HeroState } from "@/types";

interface ServiceGridProps {
  state?: HeroState;
}

function getServicesForState(state: HeroState) {
  switch (state) {
    case "sofa":
      return services.filter(
        (s) => s.id === "sofa-carpet" || s.category === "specialized"
      ).slice(0, 4);
    case "commercial":
      return services.filter(
        (s) => s.category === "commercial" || s.id === "office-corporate"
      ).concat(services.filter((s) => s.category !== "commercial")).slice(0, 4);
    case "residential":
      return services.filter(
        (s) => s.category === "residential" || s.id === "residential-deep"
      ).concat(services.filter((s) => s.category !== "residential")).slice(0, 4);
    case "tank":
      return services.filter(
        (s) => s.id === "water-tank" || s.category === "specialized"
      ).slice(0, 4);
    case "carpet":
      return services.filter(
        (s) => s.id === "sofa-carpet" || s.category === "specialized"
      ).slice(0, 4);
    default:
      return popularServices;
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export function ServiceGrid({ state = "default" }: ServiceGridProps) {
  const displayServices = getServicesForState(state);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
    >
      {displayServices.map((service) => (
        <motion.div key={service.id} variants={itemVariants}>
          <ServiceCard service={service} />
        </motion.div>
      ))}
    </motion.div>
  );
}
