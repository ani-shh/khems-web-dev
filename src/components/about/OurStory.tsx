"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Target, Eye, Heart } from "lucide-react";

const milestones = [
  {
    year: "2018",
    title: "The Beginning",
    description: "Started with a small team and a big dream to provide quality cleaning services in Kathmandu.",
  },
  {
    year: "2020",
    title: "Expanding Services",
    description: "Added commercial cleaning and specialized services to meet growing customer demands.",
  },
  {
    year: "2022",
    title: "Team Growth",
    description: "Expanded our team to over 50 trained professionals serving the entire Kathmandu Valley.",
  },
  {
    year: "2024",
    title: "Industry Leader",
    description: "Recognized as one of the leading cleaning service providers in Nepal.",
  },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To deliver exceptional cleaning services that exceed expectations while maintaining the highest standards of professionalism and environmental responsibility.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To become Nepal's most trusted cleaning service provider, known for quality, reliability, and customer satisfaction.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Integrity, excellence, respect for our clients and team members, and a commitment to sustainable practices guide everything we do.",
  },
];

export function OurStory() {
  return (
    <section id="story" className="py-16 md:py-24 bg-white">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#0D9488] font-semibold text-sm uppercase tracking-wider">
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Building Trust, One Clean at a Time
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What started as a small cleaning service has grown into Kathmandu&apos;s
            trusted partner for residential and commercial cleaning solutions.
          </p>
        </motion.div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm">Company Image Placeholder</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#0D9488]/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              From Humble Beginnings to Industry Excellence
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Khems Cleaning was founded with a simple yet powerful vision: to transform
                the cleaning industry in Nepal by providing world-class services with a
                personal touch.
              </p>
              <p>
                Our founder recognized the need for professional, reliable cleaning services
                in Kathmandu. What began as a small operation has grown into a comprehensive
                cleaning solutions provider, serving hundreds of satisfied customers across
                the valley.
              </p>
              <p>
                Today, we take pride in our team of trained professionals, eco-friendly
                practices, and our commitment to exceeding customer expectations with every
                service we provide.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-gray-50 rounded-xl p-6"
              >
                <span className="text-4xl font-bold text-[#0D9488]/20">
                  {milestone.year}
                </span>
                <h4 className="text-lg font-semibold text-gray-900 mt-2 mb-2">
                  {milestone.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#0D9488]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-[#0D9488]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
