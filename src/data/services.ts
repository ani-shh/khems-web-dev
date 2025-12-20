import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "residential-deep",
    title: "Residential Deep Cleaning",
    description: "Complete home deep cleaning service for a spotless living space",
    icon: "Home",
    href: "/services/residential",
    category: "residential",
  },
  {
    id: "sofa-carpet",
    title: "Sofa & Carpet Shampooing",
    description: "Professional upholstery and carpet cleaning with premium equipment",
    icon: "Sofa",
    href: "/services/specialized",
    category: "specialized",
  },
  {
    id: "water-tank",
    title: "Water Tank Cleaning",
    description: "Hygienic water tank cleaning ensuring safe drinking water",
    icon: "Droplets",
    href: "/services/specialized",
    category: "specialized",
  },
  {
    id: "office-corporate",
    title: "Office & Corporate",
    description: "Professional facility management and office cleaning services",
    icon: "Building2",
    href: "/services/commercial",
    category: "commercial",
  },
  {
    id: "marble-polishing",
    title: "Marble Polishing",
    description: "Restore shine to marble and stone surfaces",
    icon: "Sparkles",
    href: "/services/specialized",
    category: "specialized",
  },
  {
    id: "post-construction",
    title: "Post-Construction Cleaning",
    description: "Thorough cleanup after renovation or construction work",
    icon: "HardHat",
    href: "/services/specialized",
    category: "specialized",
  },
];

export const popularServices = services.slice(0, 4);
