"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Search, MapPin, Star, Clock, Users, CheckCircle, BadgeCheck, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout";
import { cn } from "@/lib/cn";

interface Feature {
  id: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: "book-fast",
    title: "Book in minutes.",
    description: "Share details about your cleaning needs in your own words, so we can find your perfect match.",
  },
  {
    id: "trusted-cleaners",
    title: "Only verified, trusted cleaners.",
    description: "We only show you cleaners we're confident can do the job right.",
  },
  {
    id: "guaranteed",
    title: "100% satisfaction guaranteed.",
    description: "If the job isn't done as agreed, we'll make it right. That's our promise.",
  },
];

// Fade in animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

const contentVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.3 }
  }
};

// Phone Mockup Component
function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[280px] md:w-[320px] mx-auto">
      {/* Phone frame */}
      <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-200 overflow-hidden">
        {/* Status bar */}
        <div className="flex items-center justify-between px-6 py-2 bg-white">
          <span className="text-sm font-medium text-gray-900">9:41</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
              <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            </div>
            <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3C7.5 3 3.75 5.25 1.5 8.25L12 21l10.5-12.75C20.25 5.25 16.5 3 12 3z"/>
            </svg>
            <div className="w-6 h-3 bg-gray-900 rounded-sm relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-0.5 w-0.5 h-1.5 bg-gray-900 rounded-r-sm"></div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="px-4 pb-6">
          {children}
        </div>
        {/* Home indicator */}
        <div className="flex justify-center pb-2">
          <div className="w-32 h-1 bg-gray-900 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

// Feature 1: Booking UI
function BookingUI() {
  return (
    <PhoneMockup>
      <div className="space-y-4">
        {/* Search input */}
        <div className="border border-gray-200 rounded-lg p-3">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <ChevronRight size={16} className="rotate-180" />
            <span>Try "I need a house cleaner"</span>
          </div>
        </div>

        {/* Location */}
        <div className="border border-gray-200 rounded-lg p-3">
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <MapPin size={16} className="text-gray-400" />
            <span>Kathmandu, Nepal</span>
          </div>
        </div>

        {/* Popular services */}
        <div className="pt-2">
          <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
            <Search size={14} />
            <span className="font-medium">Popular services</span>
          </div>
          <div className="space-y-3">
            {["House cleaning", "Deep cleaning", "Sofa cleaning", "Office cleaning", "Move-out cleaning"].map((service) => (
              <div key={service} className="flex items-center gap-2 text-gray-700 text-sm">
                <Search size={14} className="text-gray-300" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PhoneMockup>
  );
}

// Feature 2: Cleaner Profile UI
function CleanerProfileUI() {
  return (
    <PhoneMockup>
      <div className="space-y-4">
        {/* Back button */}
        <div className="text-gray-400">
          <ChevronRight size={20} className="rotate-180" />
        </div>

        {/* Profile header */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-2">
            KC
          </div>
          <h4 className="font-semibold text-gray-900">Khems Cleaning Team</h4>
          <div className="flex items-center justify-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded-full">
            <BadgeCheck size={12} /> Top Pro
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
            <Clock size={12} /> 10+ yrs
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">
            <MapPin size={12} /> Local
          </span>
        </div>

        {/* Project details */}
        <div className="border border-gray-200 rounded-lg p-3">
          <p className="text-xs font-medium text-gray-500 mb-1">Your project</p>
          <p className="text-sm text-gray-700">House cleaning • 3 bedroom • 2 bathroom • Standard cleaning</p>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium text-sm">
          Request a quote
        </button>

        {/* Response time */}
        <p className="text-center text-xs text-gray-500">
          Responds in about 30 min
        </p>

        {/* Overview */}
        <div className="pt-2">
          <p className="text-xs font-medium text-gray-900 mb-2">Overview</p>
          <div className="space-y-2 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle size={14} className="text-gray-400" />
              <span>Hired 500+ times</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={14} className="text-gray-400" />
              <span>15 employees</span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck size={14} className="text-gray-400" />
              <span>Background checked</span>
            </div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  );
}

// Feature 3: Shield / Guarantee
function GuaranteeUI() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-8">
      {/* Shield icon */}
      <div className="mb-6">
        <Shield className="w-32 h-32 md:w-40 md:h-40 text-sky-400 fill-sky-400" strokeWidth={1} />
      </div>
      {/* Text */}
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-teal-500 text-center leading-tight">
        When something goes<br />wrong, we're here to help.
      </h3>
    </div>
  );
}

export function WhyCustomersLove() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  const renderRightContent = () => {
    switch (activeFeature) {
      case "book-fast":
        return <BookingUI />;
      case "trusted-cleaners":
        return <CleanerProfileUI />;
      case "guaranteed":
        return <GuaranteeUI />;
      default:
        return <BookingUI />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <Container>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why customers love Khems Cleaning.
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            Every day, hundreds of customers in Kathmandu rely on us to care for their homes—and we've got your back if things don't go as planned.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Features */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInVariants}
            className="space-y-6"
          >
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={cn(
                  "w-full text-left p-6 rounded-2xl transition-all duration-300",
                  activeFeature === feature.id
                    ? "border-2 border-gray-200 bg-white shadow-sm"
                    : "border-2 border-transparent hover:bg-gray-50"
                )}
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-base">
                  {feature.description}
                </p>
              </button>
            ))}
          </motion.div>

          {/* Right - Dynamic Content with Blue Background */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInVariants}
            className="relative"
          >
            {/* Diagonal blue background */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-sky-100 to-sky-50 rounded-3xl"
              style={{
                clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)"
              }}
            />

            {/* Content */}
            <div className="relative z-10 py-8 md:py-12 px-4 md:px-8 min-h-[500px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {renderRightContent()}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
