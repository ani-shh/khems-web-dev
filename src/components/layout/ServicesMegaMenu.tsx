"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Building2, Sparkles, Truck } from "lucide-react";
import { serviceCategories } from "@/data/serviceCategories";
import { useContactModal } from "@/components/providers";

const iconMap = {
  Home,
  Building2,
  Sparkles,
  Truck,
};

export function ServicesMegaMenu({ onClose }: { onClose?: () => void }) {
  const { openContactModal } = useContactModal();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
    >
      <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 min-w-[700px]">
        <div className="grid grid-cols-4 gap-6">
          {serviceCategories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];

            return (
              <div key={category.id} className="space-y-3">
                {/* Category Header */}
                <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                  {IconComponent && (
                    <IconComponent size={18} className="text-[#0D9488]" />
                  )}
                  <span className="font-semibold text-gray-900 text-sm">
                    {category.label}
                  </span>
                </div>

                {/* Services List */}
                <ul className="space-y-1">
                  {category.services.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={service.href}
                        onClick={onClose}
                        className="block py-1.5 text-sm text-gray-600 hover:text-[#0D9488] transition-colors"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Need help choosing? We&apos;ll recommend the right service for you.
          </p>
          <button
            onClick={() => {
              onClose?.();
              openContactModal();
            }}
            className="text-sm font-semibold text-[#0D9488] hover:text-[#0F766E] transition-colors"
          >
            Get a Free Quote →
          </button>
        </div>
      </div>
    </motion.div>
  );
}
