"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Sofa,
  Droplets,
  Building2,
  Sparkles,
  HardHat,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";
import type { Service } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Sofa,
  Droplets,
  Building2,
  Sparkles,
  HardHat,
};

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Sparkles;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link
        href={service.href}
        className={cn(
          "block bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100",
          className
        )}
      >
        <div className="w-12 h-12 rounded-xl bg-[#0D9488]/10 flex items-center justify-center mb-4">
          <IconComponent size={24} className="text-[#0D9488]" />
        </div>
        <h3 className="font-semibold text-lg text-gray-900 mb-2">
          {service.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {service.description}
        </p>
      </Link>
    </motion.div>
  );
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={cn(
          "bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200",
          className
        )}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-6 shadow-sm border border-gray-100",
        className
      )}
    >
      {children}
    </div>
  );
}
