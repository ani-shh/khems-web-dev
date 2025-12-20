"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { serviceCategories } from "@/data/serviceCategories";
import { ChevronRight, Home, Building2, Sparkles, Truck } from "lucide-react";

const iconMap = {
  Home,
  Building2,
  Sparkles,
  Truck,
};

const categoryDescriptions: Record<string, string> = {
  residential: "Professional cleaning services for your home, from regular maintenance to deep cleaning.",
  commercial: "Keep your business spotless with our comprehensive commercial cleaning solutions.",
  specialized: "Expert care for carpets, water tanks, marble floors, and other specialized cleaning needs.",
  moving: "Thorough cleaning services for move-in, move-out, post-construction, and renovation cleanup.",
};

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = activeCategory
    ? serviceCategories.filter((cat) => cat.id === activeCategory)
    : serviceCategories;

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0D9488] to-[#0F766E] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-sm font-medium rounded-full mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Professional Cleaning
              <br />
              <span className="text-white/90">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              From homes to offices, we offer comprehensive cleaning services
              tailored to your needs. Discover our full range of solutions.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[72px] z-40">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                activeCategory === null
                  ? "bg-[#0D9488] text-white shadow-lg shadow-[#0D9488]/25"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All Services
            </button>
            {serviceCategories.map((category) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap];
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                    activeCategory === category.id
                      ? "bg-[#0D9488] text-white shadow-lg shadow-[#0D9488]/25"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {IconComponent && <IconComponent size={16} />}
                  {category.label}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <AnimatePresence mode="wait">
            {filteredCategories.map((category) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mb-16 last:mb-0"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    {IconComponent && (
                      <div className="w-10 h-10 bg-[#0D9488]/10 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-[#0D9488]" />
                      </div>
                    )}
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {category.label} Cleaning
                      </h2>
                      <p className="text-gray-500 text-sm">
                        {categoryDescriptions[category.id]}
                      </p>
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {category.services.map((service, index) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          href={service.href}
                          className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                        >
                          {/* Image */}
                          <div className="aspect-[4/3] relative overflow-hidden">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 className="text-lg font-bold text-white">
                                {service.title}
                              </h3>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-4">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">
                                View details
                              </span>
                              <ChevronRight
                                size={18}
                                className="text-[#0D9488] group-hover:translate-x-1 transition-transform"
                              />
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </Container>
      </section>
    </>
  );
}
