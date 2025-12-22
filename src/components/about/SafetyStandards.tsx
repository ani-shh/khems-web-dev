"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import {
  Shield,
  Leaf,
  Award,
  CheckCircle,
  AlertTriangle,
  Sparkles,
  Users,
  FileCheck,
} from "lucide-react";

const safetyFeatures = [
  {
    icon: Shield,
    title: "ISO Certified",
    description: "We follow ISO-certified quality standards ensuring consistent, reliable service.",
  },
  {
    icon: FileCheck,
    title: "Background Checked",
    description: "Every team member undergoes thorough background verification before joining.",
  },
  {
    icon: Users,
    title: "Trained Professionals",
    description: "Our staff receives comprehensive training in safety protocols and techniques.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "We use environmentally safe cleaning products that are gentle yet effective.",
  },
];

const certifications = [
  {
    title: "Quality Assurance",
    description: "ISO-equivalent quality management practices",
  },
  {
    title: "Safety Compliance",
    description: "Adherence to occupational health and safety standards",
  },
  {
    title: "Environmental Responsibility",
    description: "Commitment to sustainable cleaning practices",
  },
];

const protocols = [
  "Use of personal protective equipment (PPE) by all staff",
  "Regular sanitization of all cleaning equipment",
  "Safe handling and storage of cleaning chemicals",
  "Proper ventilation during and after cleaning",
  "Clear labeling and documentation of all products used",
  "Emergency response procedures in place",
  "Regular safety audits and inspections",
  "Continuous training and skill updates",
];

export function SafetyStandards() {
  return (
    <section id="safety" className="py-16 md:py-24 bg-white">
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
            Safety Standards
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Your Safety is Our Priority
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We maintain the highest safety standards to protect our clients,
            their properties, and our team members.
          </p>
        </motion.div>

        {/* Safety Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {safetyFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-[#0D9488]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-[#0D9488]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Safety Protocols */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#0D9488] rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Our Safety Protocols
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              We follow strict safety protocols to ensure every cleaning job is
              completed safely and professionally.
            </p>
            <ul className="space-y-3">
              {protocols.map((protocol, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{protocol}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications & Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Image Placeholder */}
            <div className="aspect-video bg-gray-200 rounded-2xl mb-8 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-sm">Safety Training Image Placeholder</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-[#0D9488]" />
                <h4 className="text-lg font-bold text-gray-900">
                  Our Commitments
                </h4>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={cert.title}
                    className="flex items-start gap-3 pb-4 border-b border-gray-200 last:border-0 last:pb-0"
                  >
                    <Sparkles className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-gray-900">
                        {cert.title}
                      </h5>
                      <p className="text-gray-600 text-sm">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-gradient-to-r from-[#0D9488] to-[#0F766E] rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            100% Satisfaction Guarantee
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            We stand behind the quality of our work. If you&apos;re not completely
            satisfied with our service, we&apos;ll make it right - guaranteed.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Free Re-cleaning</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>No Questions Asked</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
