"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { MapPin, Calendar, Eye } from "lucide-react";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "specialized", label: "Specialized" },
];

const projects = [
  {
    id: 1,
    title: "Luxury Apartment Deep Clean",
    category: "residential",
    location: "Lazimpat, Kathmandu",
    date: "December 2024",
    description: "Complete deep cleaning of a 3-bedroom luxury apartment including kitchen, bathrooms, and living areas.",
    services: ["Deep Cleaning", "Kitchen Cleaning", "Bathroom Sanitization"],
    image: null,
  },
  {
    id: 2,
    title: "Corporate Office Transformation",
    category: "commercial",
    location: "Durbar Marg, Kathmandu",
    date: "November 2024",
    description: "Full office cleaning for a 5000 sq ft corporate space with 50+ workstations.",
    services: ["Office Cleaning", "Carpet Cleaning", "Window Cleaning"],
    image: null,
  },
  {
    id: 3,
    title: "Restaurant Kitchen Deep Clean",
    category: "commercial",
    location: "Thamel, Kathmandu",
    date: "November 2024",
    description: "Industrial kitchen deep cleaning with degreasing and sanitization for a popular restaurant.",
    services: ["Kitchen Deep Clean", "Degreasing", "Sanitization"],
    image: null,
  },
  {
    id: 4,
    title: "Villa Post-Construction Cleanup",
    category: "residential",
    location: "Budhanilkantha",
    date: "October 2024",
    description: "Complete post-construction cleaning of a newly built 4-bedroom villa.",
    services: ["Post-Construction", "Window Cleaning", "Floor Polishing"],
    image: null,
  },
  {
    id: 5,
    title: "Hotel Lobby Marble Restoration",
    category: "specialized",
    location: "Naxal, Kathmandu",
    date: "October 2024",
    description: "Marble floor polishing and restoration for a 5-star hotel lobby.",
    services: ["Marble Polishing", "Floor Restoration"],
    image: null,
  },
  {
    id: 6,
    title: "Residential Water Tank Cleaning",
    category: "specialized",
    location: "Baluwatar, Kathmandu",
    date: "September 2024",
    description: "Complete cleaning and sanitization of a 5000L underground water tank.",
    services: ["Water Tank Cleaning", "Sanitization"],
    image: null,
  },
  {
    id: 7,
    title: "Boutique Store Opening Prep",
    category: "commercial",
    location: "Jhamsikhel, Lalitpur",
    date: "September 2024",
    description: "Pre-opening deep clean for a new fashion boutique including display areas and fitting rooms.",
    services: ["Retail Cleaning", "Window Cleaning", "Floor Care"],
    image: null,
  },
  {
    id: 8,
    title: "Family Home Move-Out Clean",
    category: "residential",
    location: "Maharajgunj, Kathmandu",
    date: "August 2024",
    description: "Thorough move-out cleaning to ensure full deposit return for tenants.",
    services: ["Move-Out Cleaning", "Deep Cleaning", "Kitchen & Bath"],
    image: null,
  },
  {
    id: 9,
    title: "Sofa & Carpet Restoration",
    category: "specialized",
    location: "Sanepa, Lalitpur",
    date: "August 2024",
    description: "Professional cleaning and stain removal for a living room set including 2 sofas and carpet.",
    services: ["Sofa Cleaning", "Carpet Cleaning", "Stain Removal"],
    image: null,
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
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-xs">Before/After Photo</p>
                    </div>
                  </div>
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
                <div className="md:w-1/2 bg-gray-200 flex items-center justify-center p-8">
                  <div className="text-center text-gray-400">
                    <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p>Before/After Gallery Placeholder</p>
                  </div>
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
