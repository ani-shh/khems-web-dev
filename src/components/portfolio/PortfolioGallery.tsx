"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { MapPin, Calendar, Eye } from "lucide-react";
import Image from "next/image";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "commercial", label: "Commercial" },
  { id: "healthcare", label: "Healthcare" },
  { id: "hospitality", label: "Hospitality" },
];

const projects = [
  {
    id: 1,
    title: "HAMS Hospital",
    category: "healthcare",
    location: "Kathmandu",
    date: "2024",
    description: "Complete facility cleaning and sanitization for HAMS Hospital, ensuring highest hygiene standards for patient care areas.",
    services: ["Hospital Cleaning", "Sanitization", "Floor Care"],
    image: "/images/portfolio/HAMS Hospital.jpg",
  },
  {
    id: 2,
    title: "Nepal Police Hospital",
    category: "healthcare",
    location: "Kathmandu",
    date: "2024",
    description: "Professional cleaning services for Nepal Police Hospital including all departments and common areas.",
    services: ["Hospital Cleaning", "Deep Cleaning", "Sanitization"],
    image: "/images/portfolio/Nepal Police Hospital.jpeg",
  },
  {
    id: 3,
    title: "Nepal Orthopedic Hospital",
    category: "healthcare",
    location: "Kathmandu",
    date: "2024",
    description: "Specialized cleaning for orthopedic facility with focus on sterile environments and patient areas.",
    services: ["Medical Facility Cleaning", "Sanitization"],
    image: "/images/portfolio/Nepal Orthopedic Hospital.jpg",
  },
  {
    id: 4,
    title: "ALFA Diagnostic Centre",
    category: "healthcare",
    location: "Kathmandu",
    date: "2024",
    description: "Thorough cleaning of diagnostic center including lab areas and waiting rooms.",
    services: ["Lab Cleaning", "Sanitization", "Floor Care"],
    image: "/images/portfolio/ALFA DIAGNOSTIC CENTRE.avif",
  },
  {
    id: 5,
    title: "Himalayan Java Hattisar",
    category: "hospitality",
    location: "Hattisar, Kathmandu",
    date: "2024",
    description: "Complete cafe cleaning including kitchen, seating areas, and exterior spaces.",
    services: ["Cafe Cleaning", "Kitchen Deep Clean", "Floor Care"],
    image: "/images/portfolio/Himalayan Java Hattisar.jpeg",
  },
  {
    id: 6,
    title: "Himalayan Java Tripureshwor",
    category: "hospitality",
    location: "Tripureshwor, Kathmandu",
    date: "2024",
    description: "Professional cleaning services for popular coffee house location.",
    services: ["Restaurant Cleaning", "Kitchen Cleaning", "Sanitization"],
    image: "/images/portfolio/Himalayan Java Tripureshwor.jpg",
  },
  {
    id: 7,
    title: "Himalayan Java Jhamsikhel",
    category: "hospitality",
    location: "Jhamsikhel, Lalitpur",
    date: "2024",
    description: "Deep cleaning and maintenance for cafe premises.",
    services: ["Cafe Cleaning", "Deep Cleaning", "Window Cleaning"],
    image: "/images/portfolio/Java Jhamsikhel.jpeg",
  },
  {
    id: 8,
    title: "Himalayan Java Swoyambhu",
    category: "hospitality",
    location: "Swoyambhu, Kathmandu",
    date: "2024",
    description: "Complete cleaning solution for heritage area cafe location.",
    services: ["Cafe Cleaning", "Floor Care", "Sanitization"],
    image: "/images/portfolio/HImalayan Java Swoyambhu.jpeg",
  },
  {
    id: 9,
    title: "Himalayan Java Mandala Street",
    category: "hospitality",
    location: "Thamel, Kathmandu",
    date: "2024",
    description: "Professional cleaning for tourist hub cafe location.",
    services: ["Restaurant Cleaning", "Kitchen Cleaning", "Floor Care"],
    image: "/images/portfolio/Himalayan Java Mandala Street.jpg",
  },
  {
    id: 10,
    title: "Bikers Cafe Java Naxal",
    category: "hospitality",
    location: "Naxal, Kathmandu",
    date: "2024",
    description: "Specialized cleaning for themed cafe including unique decor maintenance.",
    services: ["Cafe Cleaning", "Deep Cleaning", "Specialty Cleaning"],
    image: "/images/portfolio/Bikers Cafe Java Naxal.jpeg",
  },
  {
    id: 11,
    title: "Coffee Ministry",
    category: "hospitality",
    location: "Kathmandu",
    date: "2024",
    description: "Complete cafe cleaning and kitchen sanitization services.",
    services: ["Cafe Cleaning", "Kitchen Deep Clean", "Sanitization"],
    image: "/images/portfolio/Coffeee Ministry.jpeg",
  },
  {
    id: 12,
    title: "Himalayan Everest Insurance",
    category: "commercial",
    location: "Kathmandu",
    date: "2024",
    description: "Corporate office cleaning for insurance company headquarters.",
    services: ["Office Cleaning", "Carpet Cleaning", "Window Cleaning"],
    image: "/images/portfolio/Himalayan Everest Insurance.jpg",
  },
  {
    id: 13,
    title: "Durbar Mall",
    category: "commercial",
    location: "Durbar Marg, Kathmandu",
    date: "2024",
    description: "Large-scale commercial cleaning for shopping mall complex.",
    services: ["Mall Cleaning", "Floor Care", "Common Area Maintenance"],
    image: "/images/portfolio/Durbar Mall hj.jpeg",
  },
  {
    id: 14,
    title: "One Durbar",
    category: "commercial",
    location: "Durbar Marg, Kathmandu",
    date: "2024",
    description: "Premium commercial space cleaning and maintenance.",
    services: ["Commercial Cleaning", "Floor Polishing", "Window Cleaning"],
    image: "/images/portfolio/One durbar.jpeg",
  },
  {
    id: 15,
    title: "Audit Partnership",
    category: "commercial",
    location: "Kathmandu",
    date: "2024",
    description: "Professional office cleaning for accounting firm.",
    services: ["Office Cleaning", "Deep Cleaning", "Sanitization"],
    image: "/images/portfolio/Audit Partnership.jpeg",
  },
  {
    id: 16,
    title: "Alpha Beta",
    category: "commercial",
    location: "Kathmandu",
    date: "2024",
    description: "Commercial space cleaning and maintenance services.",
    services: ["Office Cleaning", "Floor Care", "Window Cleaning"],
    image: "/images/portfolio/Alpha Beta.jpg",
  },
  {
    id: 17,
    title: "Grande Hospital",
    category: "healthcare",
    location: "Kathmandu",
    date: "2024",
    description: "Comprehensive hospital cleaning with focus on infection control.",
    services: ["Hospital Cleaning", "Sanitization", "Specialized Cleaning"],
    image: "/images/portfolio/Grande.png",
  },
  {
    id: 18,
    title: "Skin Arts Clinic",
    category: "healthcare",
    location: "Kathmandu",
    date: "2024",
    description: "Specialized cleaning for dermatology clinic ensuring sterile environment.",
    services: ["Clinic Cleaning", "Sanitization", "Deep Cleaning"],
    image: "/images/portfolio/Skin Arts.jpeg",
  },
  {
    id: 19,
    title: "RIA Building",
    category: "commercial",
    location: "Kathmandu",
    date: "2024",
    description: "Complete building cleaning including offices and common areas.",
    services: ["Building Cleaning", "Floor Care", "Window Cleaning"],
    image: "/images/portfolio/RIA Building.jpg",
  },
  {
    id: 20,
    title: "Ambition Guru",
    category: "commercial",
    location: "Kathmandu",
    date: "2024",
    description: "Educational institute cleaning and maintenance.",
    services: ["Office Cleaning", "Classroom Cleaning", "Sanitization"],
    image: "/images/portfolio/Ambition Guru.jpeg",
  },
  {
    id: 21,
    title: "Kangaroo Education Foundation",
    category: "commercial",
    location: "Kathmandu",
    date: "2024",
    description: "Professional cleaning for educational consultancy.",
    services: ["Office Cleaning", "Deep Cleaning", "Floor Care"],
    image: "/images/portfolio/Kangaroo Education Foundation.png",
  },
  {
    id: 22,
    title: "Nagarik News",
    category: "commercial",
    location: "Kathmandu",
    date: "2024",
    description: "Media house office cleaning and maintenance.",
    services: ["Office Cleaning", "Floor Care", "Sanitization"],
    image: "/images/portfolio/Nagarik.jpg",
  },
  {
    id: 23,
    title: "TEN X Club",
    category: "hospitality",
    location: "Kathmandu",
    date: "2024",
    description: "Nightclub and entertainment venue deep cleaning.",
    services: ["Venue Cleaning", "Floor Care", "Deep Cleaning"],
    image: "/images/portfolio/TEN X CLUB.JPG",
  },
  {
    id: 24,
    title: "XO Lounge",
    category: "hospitality",
    location: "Kathmandu",
    date: "2024",
    description: "Premium lounge cleaning and maintenance services.",
    services: ["Lounge Cleaning", "Upholstery Cleaning", "Floor Care"],
    image: "/images/portfolio/XO .jpeg",
  },
];

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                activeCategory === cat.id
                  ? "bg-[#0D9488] text-white shadow-lg shadow-[#0D9488]/25"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Eye className="w-6 h-6 text-gray-900" />
                    </div>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0D9488] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {project.date}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.services.slice(0, 2).map((service) => (
                      <span
                        key={service}
                        className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded"
                      >
                        {service}
                      </span>
                    ))}
                    {project.services.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">
                        +{project.services.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 z-[100]"
                onClick={() => setSelectedProject(null)}
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-4 md:inset-10 lg:inset-20 bg-white rounded-2xl z-[101] overflow-hidden flex flex-col md:flex-row"
              >
                {/* Image Side */}
                <div className="md:w-1/2 bg-gray-200 relative">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Side */}
                <div className="md:w-1/2 p-6 md:p-10 overflow-y-auto">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <span className="inline-block px-3 py-1 bg-[#0D9488]/10 text-[#0D9488] text-sm font-medium rounded-full capitalize mb-4">
                    {selectedProject.category}
                  </span>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {selectedProject.title}
                  </h2>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                      <MapPin size={16} />
                      {selectedProject.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {selectedProject.date}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Services Provided</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.services.map((service) => (
                        <span
                          key={service}
                          className="px-3 py-1.5 bg-gray-100 text-sm text-gray-700 rounded-lg"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-4">
                      Interested in similar services for your space?
                    </p>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="bg-[#0D9488] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0F766E] transition-colors"
                    >
                      Get a Free Quote
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
