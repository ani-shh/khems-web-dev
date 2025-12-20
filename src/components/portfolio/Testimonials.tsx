"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Homeowner, Lazimpat",
    content: "Exceptional service! The team was professional, thorough, and left our home spotless. The attention to detail was impressive. Highly recommend Khems Cleaning for anyone looking for quality cleaning services.",
    rating: 5,
    image: null,
  },
  {
    name: "Sunita Thapa",
    role: "Office Manager, Durbar Marg",
    content: "We've been using Khems Cleaning for our office for over a year now. Consistent quality, reliable team, and excellent communication. They understand our needs perfectly.",
    rating: 5,
    image: null,
  },
  {
    name: "Bikram Rana",
    role: "Restaurant Owner, Thamel",
    content: "The kitchen deep cleaning service was outstanding. They tackled years of grease buildup and made everything shine. Our kitchen has never looked better. Worth every rupee!",
    rating: 5,
    image: null,
  },
  {
    name: "Priya Gurung",
    role: "Property Manager",
    content: "As a property manager, I need reliable cleaning services for move-in/move-out situations. Khems Cleaning has never let me down. Quick, efficient, and always available when I need them.",
    rating: 5,
    image: null,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[#0D9488] font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            customers have to say about our services.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 bg-[#0D9488]/10 rounded-xl flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-[#0D9488]" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
