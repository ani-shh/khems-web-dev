export interface ServiceItem {
  id: string;
  title: string;
  image: string;
  video?: string;
  href: string;
}

export interface ServiceCategory {
  id: string;
  label: string;
  icon: string;
  services: ServiceItem[];
}

// Local videos - add more videos to public/videos/ folder
// Videos from Pexels by cottonbro studio
const PLACEHOLDER_VIDEOS = {
  cleaning1: "/videos/cleaning-1.mp4",
  cleaning2: "/videos/cleaning-1.mp4",
  cleaning3: "/videos/cleaning-1.mp4",
  cleaning4: "/videos/cleaning-1.mp4",
  office: "/videos/cleaning-1.mp4",
  kitchen: "/videos/cleaning-1.mp4",
  sofa: "/videos/cleaning-1.mp4",
  carpet: "/videos/cleaning-1.mp4",
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "residential",
    label: "Residential",
    icon: "Home",
    services: [
      {
        id: "house-cleaning",
        title: "House Cleaning",
        image: "/images/services/house-cleaning.jpg",
        video: PLACEHOLDER_VIDEOS.cleaning1,
        href: "/services/house-cleaning",
      },
      {
        id: "deep-cleaning",
        title: "Deep Cleaning",
        image: "/images/services/deep-cleaning.jpg",
        video: PLACEHOLDER_VIDEOS.cleaning2,
        href: "/services/deep-cleaning",
      },
      {
        id: "sofa-cleaning",
        title: "Sofa Cleaning",
        image: "/images/services/sofa-cleaning.jpg",
        video: PLACEHOLDER_VIDEOS.sofa,
        href: "/services/sofa-cleaning",
      },
      {
        id: "kitchen-cleaning",
        title: "Kitchen Cleaning",
        image: "/images/services/kitchen-cleaning.jpg",
        video: PLACEHOLDER_VIDEOS.kitchen,
        href: "/services/kitchen-cleaning",
      },
      {
        id: "bathroom-cleaning",
        title: "Bathroom Cleaning",
        image: "/images/services/bathroom-cleaning.jpg",
        video: PLACEHOLDER_VIDEOS.cleaning3,
        href: "/services/bathroom-cleaning",
      },
    ],
  },
  {
    id: "commercial",
    label: "Commercial",
    icon: "Building2",
    services: [
      {
        id: "office-cleaning",
        title: "Office Cleaning",
        image: "/images/services/office-cleaning.jpg",
        video: PLACEHOLDER_VIDEOS.office,
        href: "/services/office-cleaning",
      },
      {
        id: "retail-cleaning",
        title: "Retail Cleaning",
        image: "/images/services/retail-cleaning.jpg",
        video: PLACEHOLDER_VIDEOS.cleaning4,
        href: "/services/retail-cleaning",
      },
      {
        id: "facility-management",
        title: "Facility Management",
        image: "/images/services/facility-management.jpg",
        video: PLACEHOLDER_VIDEOS.cleaning1,
        href: "/services/facility-management",
      },
      {
        id: "industrial-cleaning",
        title: "Industrial Cleaning",
        image: "/images/services/industrial-cleaning.jpg",
        video: PLACEHOLDER_VIDEOS.cleaning2,
        href: "/services/industrial-cleaning",
      },
    ],
  },
  {
    id: "specialized",
    label: "Specialized",
    icon: "Sparkles",
    services: [
      {
        id: "carpet-cleaning",
        title: "Carpet Cleaning",
        image: "/images/services/carpet-cleaning.jpg",
        video: PLACEHOLDER_VIDEOS.carpet,
        href: "/services/carpet-cleaning",
      },
      {
        id: "water-tank-cleaning",
        title: "Water Tank Cleaning",
        image: "/images/services/water-tank.jpg",
        video: PLACEHOLDER_VIDEOS.cleaning3,
        href: "/services/water-tank-cleaning",
      },
      {
        id: "marble-polishing",
        title: "Marble Polishing",
        image: "/images/services/marble-polishing.jpg",
        video: PLACEHOLDER_VIDEOS.cleaning4,
        href: "/services/marble-polishing",
      },
    ],
  },
  {
    id: "moving",
    label: "Move In/Out",
    icon: "Truck",
    services: [
      {
        id: "move-in-cleaning",
        title: "Move-In Cleaning",
        image: "/images/services/move-in-cleaning.jpg",
        video: PLACEHOLDER_VIDEOS.cleaning1,
        href: "/services/move-in-cleaning",
      },
      {
        id: "move-out-cleaning",
        title: "Move-Out Cleaning",
        image: "/images/services/move-out-cleaning.jpg",
        video: PLACEHOLDER_VIDEOS.cleaning2,
        href: "/services/move-out-cleaning",
      },
      {
        id: "post-construction-cleaning",
        title: "Post Construction",
        image: "/images/services/post-construction.jpg",
        video: PLACEHOLDER_VIDEOS.cleaning3,
        href: "/services/post-construction-cleaning",
      },
      {
        id: "renovation-cleanup",
        title: "Renovation Cleanup",
        image: "/images/services/renovation-cleanup.jpg",
        video: PLACEHOLDER_VIDEOS.cleaning4,
        href: "/services/renovation-cleanup",
      },
    ],
  },
];
