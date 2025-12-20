"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/layout";
import { ServicePage } from "@/types";

interface RelatedServicesProps {
  services: ServicePage[];
}

export function RelatedServices({ services }: RelatedServicesProps) {
  if (services.length === 0) return null;

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
            Related Services
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            You might also be interested in these services
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white/70 text-sm capitalize">
                      {service.category}
                    </span>
                    <h3 className="text-white text-xl font-bold">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {service.tagline}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#0D9488] font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn More
                    <ChevronRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
