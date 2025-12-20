"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/layout";
import { cn } from "@/lib/cn";

interface Project {
  id: string;
  title: string;
  image: string;
  href: string;
}

interface ProjectCategory {
  id: string;
  label: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  featuredImage: string;
  projects: Project[];
}

const projectCategories: ProjectCategory[] = [
  {
    id: "home-maintenance",
    label: "Home Maintenance",
    description: "These annoying chores used to eat up your entire weekend. Not anymore.",
    ctaText: "See all home maintenance projects.",
    ctaLink: "/services/home-maintenance",
    featuredImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
    projects: [
      { id: "house-cleaning", title: "House Cleaning", image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=300&fit=crop", href: "/services/house-cleaning" },
      { id: "interior-painting", title: "Interior Painting", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop", href: "/services/interior-painting" },
      { id: "handyman", title: "Handyman", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop", href: "/services/handyman" },
    ],
  },
  {
    id: "home-remodeling",
    label: "Home Remodeling",
    description: "Transform your space with professional remodeling services.",
    ctaText: "See all home remodeling projects.",
    ctaLink: "/services/home-remodeling",
    featuredImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
    projects: [
      { id: "kitchen-remodel", title: "Kitchen Remodel", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop", href: "/services/kitchen-remodel" },
      { id: "bathroom-remodel", title: "Bathroom Remodel", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop", href: "/services/bathroom-remodel" },
      { id: "flooring", title: "Flooring", image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=300&fit=crop", href: "/services/flooring" },
    ],
  },
  {
    id: "outdoor-upkeep",
    label: "Outdoor Upkeep",
    description: "Keep your outdoor spaces pristine and welcoming.",
    ctaText: "See all outdoor upkeep projects.",
    ctaLink: "/services/outdoor-upkeep",
    featuredImage: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=600&fit=crop",
    projects: [
      { id: "lawn-care", title: "Lawn Care", image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=400&h=300&fit=crop", href: "/services/lawn-care" },
      { id: "landscaping", title: "Landscaping", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop", href: "/services/landscaping" },
      { id: "pressure-washing", title: "Pressure Washing", image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&h=300&fit=crop", href: "/services/pressure-washing" },
    ],
  },
  {
    id: "essential-home-services",
    label: "Essential Home Services",
    description: "Essential services to keep your home running smoothly.",
    ctaText: "See all essential home services.",
    ctaLink: "/services/essential-home-services",
    featuredImage: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop",
    projects: [
      { id: "plumbing", title: "Plumbing", image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop", href: "/services/plumbing" },
      { id: "electrical", title: "Electrical", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop", href: "/services/electrical" },
      { id: "hvac", title: "HVAC", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop", href: "/services/hvac" },
    ],
  },
];

// Fade in from bottom animation variants
const fadeInBottomVariants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

interface CategoryTabProps {
  category: ProjectCategory;
  isActive: boolean;
  onClick: () => void;
}

function CategoryTab({ category, isActive, onClick }: CategoryTabProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative px-1 py-2 text-base font-medium transition-all duration-300 whitespace-nowrap",
        isActive
          ? "text-gray-900"
          : "text-gray-500 hover:text-gray-700"
      )}
    >
      {category.label}
      {isActive && (
        <motion.div
          layoutId="activeProjectTab"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </button>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeInBottomVariants}
      custom={index}
    >
      <Link
        href={project.href}
        className="group block relative overflow-hidden rounded-2xl aspect-[4/3]"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h4 className="text-white font-semibold text-base md:text-lg">{project.title}</h4>
        </div>
      </Link>
    </motion.div>
  );
}

export function ExploreProjects() {
  const [activeCategory, setActiveCategory] = useState(projectCategories[0].id);
  const currentCategory = projectCategories.find((c) => c.id === activeCategory) || projectCategories[0];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-1/4 w-1/3 h-2/3 bg-gradient-to-l from-sky-100/80 to-transparent rounded-l-[100px] pointer-events-none" />

      <Container className="relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInBottomVariants}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Explore more projects.
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInBottomVariants}
          className="mb-8 md:mb-10"
        >
          <div className="flex justify-center">
            <div className="inline-flex gap-6 md:gap-8 overflow-x-auto max-w-full pb-2">
              {projectCategories.map((category) => (
                <CategoryTab
                  key={category.id}
                  category={category}
                  isActive={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainerVariants}
            className="flex flex-col gap-4"
          >
            {/* Featured Image with Text Overlay - Full Width on Top */}
            <motion.div
              variants={fadeInBottomVariants}
              className="relative w-full"
            >
              <Link
                href={currentCategory.ctaLink}
                className="group block relative overflow-hidden rounded-2xl aspect-[16/7] md:aspect-[16/6]"
              >
                <Image
                  src={currentCategory.featuredImage}
                  alt={currentCategory.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                {/* Text content */}
                <div className="absolute inset-0 p-6 md:p-8 lg:p-10 flex flex-col justify-center max-w-lg">
                  <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold leading-snug mb-3">
                    {currentCategory.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white/90 text-sm font-medium group-hover:gap-3 transition-all">
                    {currentCategory.ctaText}
                    <ChevronRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Project Cards - 3 Cards in a Row Below */}
            <motion.div
              variants={staggerContainerVariants}
              className="grid grid-cols-3 gap-4"
            >
              {currentCategory.projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
