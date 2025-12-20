import { ServicePage } from "@/types";

export const servicePages: ServicePage[] = [
  // ============================================
  // RESIDENTIAL SERVICES
  // ============================================
  {
    slug: "house-cleaning",
    category: "residential",
    title: "House Cleaning",
    tagline: "A spotless home, without lifting a finger",

    metaTitle: "House Cleaning Services in Kathmandu | Professional Home Cleaning",
    metaDescription: "Professional house cleaning services in Kathmandu. Trained cleaners, eco-friendly products, flexible scheduling. 100% satisfaction guaranteed. Book today!",
    keywords: [
      "house cleaning Kathmandu",
      "home cleaning Nepal",
      "maid service Kathmandu",
      "professional house cleaners",
      "residential cleaning service"
    ],

    heroImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&h=1080&fit=crop&q=80",

    intro: "Coming home to a clean house is one of life's simple pleasures. At Khems Cleaning, we understand that your time is precious. Our professional house cleaning service takes care of every corner of your home, so you can focus on what matters most—spending quality time with your family. Whether you need a one-time deep clean or regular maintenance, our trained team delivers spotless results every time.",

    benefits: [
      {
        title: "Trained Professionals",
        description: "Our cleaners undergo rigorous training and background checks. You can trust them in your home.",
        icon: "UserCheck"
      },
      {
        title: "Eco-Friendly Products",
        description: "We use environmentally safe cleaning products that are tough on dirt but gentle on your family and pets.",
        icon: "Leaf"
      },
      {
        title: "Flexible Scheduling",
        description: "Book at your convenience—mornings, evenings, or weekends. We work around your schedule.",
        icon: "Calendar"
      },
      {
        title: "Satisfaction Guaranteed",
        description: "Not happy with our service? We'll come back and re-clean for free. That's our promise.",
        icon: "ShieldCheck"
      },
      {
        title: "All Equipment Provided",
        description: "We bring all the cleaning supplies and equipment. You don't need to worry about a thing.",
        icon: "Sparkles"
      },
      {
        title: "Insured Service",
        description: "Fully insured for your peace of mind. Any accidental damage is covered by us.",
        icon: "Shield"
      }
    ],

    process: [
      {
        step: 1,
        title: "Book Online or Call",
        description: "Choose your preferred date and time through our website or give us a call. It takes less than 2 minutes."
      },
      {
        step: 2,
        title: "We Confirm & Prepare",
        description: "Our team confirms your booking and prepares the right equipment and supplies for your home."
      },
      {
        step: 3,
        title: "Professional Cleaning",
        description: "Our trained cleaners arrive on time and clean your home thoroughly, following our quality checklist."
      },
      {
        step: 4,
        title: "Final Walkthrough",
        description: "We do a final inspection to ensure everything meets our high standards before we leave."
      }
    ],

    pricing: [
      {
        name: "Basic Clean",
        price: "Rs. 2,500",
        unit: "starting from",
        features: [
          "Dusting all surfaces",
          "Vacuuming & mopping floors",
          "Kitchen surface cleaning",
          "Bathroom cleaning",
          "Trash removal"
        ],
        popular: false
      },
      {
        name: "Standard Clean",
        price: "Rs. 4,000",
        unit: "starting from",
        features: [
          "Everything in Basic Clean",
          "Inside cabinet wiping",
          "Appliance exterior cleaning",
          "Window sill cleaning",
          "Detailed bathroom scrubbing",
          "Bed making"
        ],
        popular: true
      },
      {
        name: "Deep Clean",
        price: "Rs. 6,500",
        unit: "starting from",
        features: [
          "Everything in Standard Clean",
          "Inside oven cleaning",
          "Inside refrigerator cleaning",
          "Baseboard cleaning",
          "Light fixture dusting",
          "Wall spot cleaning",
          "Detailed kitchen degreasing"
        ],
        popular: false
      }
    ],

    faqs: [
      {
        question: "How long does a house cleaning session take?",
        answer: "A standard house cleaning typically takes 2-4 hours depending on the size of your home and the level of cleaning required. A 2-bedroom apartment usually takes about 2-3 hours, while a larger 4-bedroom house may take 4-5 hours."
      },
      {
        question: "Do I need to be home during the cleaning?",
        answer: "No, you don't need to be home. Many of our clients provide us with a key or access code. All our cleaners are background-checked and fully insured for your peace of mind."
      },
      {
        question: "What cleaning products do you use?",
        answer: "We use professional-grade, eco-friendly cleaning products that are safe for children and pets. If you have specific product preferences or allergies, please let us know and we'll accommodate your needs."
      },
      {
        question: "How often should I schedule house cleaning?",
        answer: "It depends on your lifestyle. We recommend weekly cleaning for busy families, bi-weekly for couples or small households, and monthly deep cleaning for those who maintain their homes regularly."
      },
      {
        question: "What's included in a standard house cleaning?",
        answer: "Our standard cleaning includes dusting, vacuuming, mopping, kitchen cleaning (counters, sink, appliance exteriors), bathroom cleaning (toilet, shower, sink), and general tidying. We can customize based on your needs."
      },
      {
        question: "Do you bring your own equipment and supplies?",
        answer: "Yes, we bring all necessary cleaning equipment and supplies. However, if you prefer us to use your own products or equipment, we're happy to do so—just let us know when booking."
      },
      {
        question: "What if I'm not satisfied with the cleaning?",
        answer: "Your satisfaction is our priority. If you're not happy with any aspect of our service, contact us within 24 hours and we'll send a team to re-clean the areas of concern at no extra charge."
      },
      {
        question: "How do I pay for the service?",
        answer: "We accept cash, bank transfer, and digital payments (eSewa, Khalti). Payment is collected after the service is completed to your satisfaction."
      }
    ],

    relatedServices: ["deep-cleaning", "kitchen-cleaning", "bathroom-cleaning"]
  },

  {
    slug: "deep-cleaning",
    category: "residential",
    title: "Deep Cleaning",
    tagline: "A thorough clean that reaches every corner",

    metaTitle: "Deep Cleaning Services in Kathmandu | Intensive Home Cleaning",
    metaDescription: "Professional deep cleaning services in Kathmandu. We clean every corner, including behind appliances, inside cabinets, and hard-to-reach areas. Book now!",
    keywords: [
      "deep cleaning Kathmandu",
      "intensive cleaning Nepal",
      "spring cleaning service",
      "thorough house cleaning",
      "detailed home cleaning"
    ],

    heroImage: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1920&h=1080&fit=crop&q=80",

    intro: "Sometimes your home needs more than a regular clean—it needs a deep, thorough refresh. Our deep cleaning service goes beyond surface cleaning to tackle built-up grime, hidden dust, and neglected areas. Perfect for seasonal cleaning, moving in/out, or when your home needs extra attention. We clean behind appliances, inside cabinets, and every corner that regular cleaning misses.",

    benefits: [
      {
        title: "Every Corner Covered",
        description: "We clean areas often missed—behind furniture, under appliances, inside cabinets, and more.",
        icon: "Search"
      },
      {
        title: "Eliminates Built-up Grime",
        description: "Our intensive cleaning removes months of accumulated dirt, grease, and dust.",
        icon: "Sparkles"
      },
      {
        title: "Healthier Living Space",
        description: "Deep cleaning removes allergens, bacteria, and mold that regular cleaning leaves behind.",
        icon: "Heart"
      },
      {
        title: "Extends Surface Life",
        description: "Regular deep cleaning helps preserve your floors, countertops, and fixtures longer.",
        icon: "Clock"
      },
      {
        title: "Professional Equipment",
        description: "We use industrial-grade equipment for steam cleaning, degreasing, and sanitizing.",
        icon: "Wrench"
      },
      {
        title: "Customizable Service",
        description: "Focus on specific areas or get a whole-home deep clean—it's your choice.",
        icon: "Settings"
      }
    ],

    process: [
      {
        step: 1,
        title: "Home Assessment",
        description: "We assess your home's condition and discuss priority areas that need extra attention."
      },
      {
        step: 2,
        title: "Preparation",
        description: "We move furniture, clear surfaces, and prepare the space for intensive cleaning."
      },
      {
        step: 3,
        title: "Deep Cleaning",
        description: "Our team systematically cleans every area, including hard-to-reach spots and hidden surfaces."
      },
      {
        step: 4,
        title: "Quality Check",
        description: "A thorough walkthrough ensures every area meets our deep cleaning standards."
      }
    ],

    pricing: [
      {
        name: "1-2 Bedroom",
        price: "Rs. 8,000",
        unit: "starting from",
        features: [
          "Complete deep cleaning",
          "Kitchen degreasing",
          "Bathroom descaling",
          "All furniture moved & cleaned behind",
          "Inside cabinets & drawers",
          "Window cleaning (interior)"
        ],
        popular: false
      },
      {
        name: "3-4 Bedroom",
        price: "Rs. 12,000",
        unit: "starting from",
        features: [
          "Everything in 1-2 Bedroom",
          "Additional rooms included",
          "Balcony cleaning",
          "Light fixture cleaning",
          "Wall washing",
          "Ceiling fan cleaning"
        ],
        popular: true
      },
      {
        name: "5+ Bedroom / Villa",
        price: "Rs. 18,000",
        unit: "starting from",
        features: [
          "Everything in 3-4 Bedroom",
          "Multiple floors",
          "Garage cleaning",
          "Outdoor area cleaning",
          "Extended team for faster completion",
          "Priority scheduling"
        ],
        popular: false
      }
    ],

    faqs: [
      {
        question: "What's the difference between regular cleaning and deep cleaning?",
        answer: "Regular cleaning maintains cleanliness with surface-level tasks like dusting and mopping. Deep cleaning is more intensive—we clean inside appliances, behind furniture, scrub grout, remove built-up grime, and tackle areas that regular cleaning skips."
      },
      {
        question: "How often should I get a deep cleaning?",
        answer: "We recommend deep cleaning every 3-6 months, depending on your household. Homes with pets, children, or allergy sufferers may benefit from more frequent deep cleaning."
      },
      {
        question: "How long does deep cleaning take?",
        answer: "Deep cleaning typically takes 4-8 hours depending on your home's size and condition. A 2-bedroom apartment takes about 4-5 hours, while a large house may take a full day."
      },
      {
        question: "Do I need to prepare anything before the deep clean?",
        answer: "We recommend decluttering surfaces and removing personal items you don't want moved. Our team will handle moving furniture, but clearing small items helps us work more efficiently."
      },
      {
        question: "Is deep cleaning safe for my furniture and surfaces?",
        answer: "Absolutely. We use appropriate cleaning methods and products for each surface type. Our team is trained to handle delicate materials, wood, marble, and other sensitive surfaces."
      },
      {
        question: "Can I request specific areas to focus on?",
        answer: "Yes! Many clients have priority areas like the kitchen or bathrooms. Let us know your concerns and we'll allocate extra time and attention to those areas."
      }
    ],

    relatedServices: ["house-cleaning", "move-in-cleaning", "post-construction-cleaning"]
  },

  // ============================================
  // SPECIALIZED SERVICES
  // ============================================
  {
    slug: "sofa-cleaning",
    category: "specialized",
    title: "Sofa Cleaning",
    tagline: "Revive your sofas to like-new condition",

    metaTitle: "Sofa Cleaning Services in Kathmandu | Professional Upholstery Cleaning",
    metaDescription: "Professional sofa and upholstery cleaning in Kathmandu. Remove stains, odors, and allergens. Safe for all fabric types. Same-day service available!",
    keywords: [
      "sofa cleaning Kathmandu",
      "upholstery cleaning Nepal",
      "couch cleaning service",
      "furniture cleaning Kathmandu",
      "sofa shampooing"
    ],

    heroImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&h=1080&fit=crop&q=80",

    intro: "Your sofa is where life happens—movie nights, family gatherings, lazy Sundays. Over time, it collects dust, stains, and odors that regular vacuuming can't remove. Our professional sofa cleaning service uses advanced extraction technology to deep clean your upholstery, removing embedded dirt, allergens, and stubborn stains. We restore your sofas to their original freshness, extending their life and keeping your living space healthy.",

    benefits: [
      {
        title: "Stain Removal Experts",
        description: "From coffee spills to pet accidents, we tackle tough stains with specialized treatments.",
        icon: "Droplets"
      },
      {
        title: "Odor Elimination",
        description: "We don't just mask odors—we eliminate them at the source for a truly fresh sofa.",
        icon: "Wind"
      },
      {
        title: "Allergen Removal",
        description: "Our deep cleaning removes dust mites, pet dander, and allergens trapped in fabric.",
        icon: "Shield"
      },
      {
        title: "Safe for All Fabrics",
        description: "We use fabric-appropriate methods for cotton, linen, leather, velvet, and synthetic materials.",
        icon: "CheckCircle"
      },
      {
        title: "Quick Drying",
        description: "Our low-moisture technique means your sofa is ready to use in just 2-4 hours.",
        icon: "Clock"
      },
      {
        title: "On-Site Service",
        description: "We come to your home with all equipment—no need to move heavy furniture.",
        icon: "Home"
      }
    ],

    process: [
      {
        step: 1,
        title: "Fabric Inspection",
        description: "We identify your sofa's fabric type and test cleaning solutions in a hidden area."
      },
      {
        step: 2,
        title: "Pre-Treatment",
        description: "Stains and high-traffic areas receive special pre-treatment for better results."
      },
      {
        step: 3,
        title: "Deep Extraction",
        description: "Using professional equipment, we extract dirt, allergens, and cleaning solution."
      },
      {
        step: 4,
        title: "Grooming & Drying",
        description: "We groom the fabric for a uniform look and speed up drying with air movers."
      }
    ],

    pricing: [
      {
        name: "2-Seater Sofa",
        price: "Rs. 1,500",
        unit: "per piece",
        features: [
          "Deep vacuum cleaning",
          "Stain pre-treatment",
          "Hot water extraction",
          "Deodorizing",
          "Quick dry service"
        ],
        popular: false
      },
      {
        name: "3-Seater Sofa",
        price: "Rs. 2,000",
        unit: "per piece",
        features: [
          "Everything in 2-Seater",
          "Cushion cleaning (both sides)",
          "Fabric protection option",
          "Pet hair removal"
        ],
        popular: true
      },
      {
        name: "L-Shaped / Sectional",
        price: "Rs. 3,500",
        unit: "per piece",
        features: [
          "Everything in 3-Seater",
          "Full sectional coverage",
          "Corner cleaning",
          "Extended treatment time",
          "Multiple cushion cleaning"
        ],
        popular: false
      }
    ],

    faqs: [
      {
        question: "How long does sofa cleaning take?",
        answer: "A typical 3-seater sofa takes about 30-45 minutes to clean. The total time depends on the number of pieces, fabric condition, and stain severity. Most living room sets are done within 1-2 hours."
      },
      {
        question: "How long until my sofa is dry?",
        answer: "With our low-moisture technique, most sofas dry within 2-4 hours. We can use air movers to speed up drying. Leather sofas are ready almost immediately."
      },
      {
        question: "Can you remove all stains?",
        answer: "We successfully remove most stains including food, drinks, and pet accidents. However, some old or set-in stains (like permanent ink or bleach damage) may not fully come out. We'll assess and set realistic expectations."
      },
      {
        question: "Is the cleaning safe for my family and pets?",
        answer: "Yes! We use eco-friendly, non-toxic cleaning solutions that are safe for children and pets. Once dry, there's no residue left behind."
      },
      {
        question: "Do you clean leather sofas?",
        answer: "Absolutely. We have specialized leather cleaning and conditioning treatments that clean, moisturize, and protect your leather furniture."
      },
      {
        question: "Should I vacuum before you arrive?",
        answer: "No need—we start every job with thorough vacuuming using professional equipment that removes more dirt than household vacuums."
      }
    ],

    relatedServices: ["carpet-cleaning", "house-cleaning", "deep-cleaning"]
  },

  {
    slug: "kitchen-cleaning",
    category: "residential",
    title: "Kitchen Cleaning",
    tagline: "A sparkling kitchen where hygiene meets comfort",

    metaTitle: "Kitchen Cleaning Services in Kathmandu | Professional Kitchen Deep Clean",
    metaDescription: "Professional kitchen cleaning services in Kathmandu. We degrease, sanitize, and restore your kitchen to pristine condition. Book your kitchen cleaning today!",
    keywords: [
      "kitchen cleaning Kathmandu",
      "kitchen deep cleaning Nepal",
      "kitchen degreasing service",
      "professional kitchen cleaners",
      "kitchen sanitization"
    ],

    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop&q=80",

    intro: "The kitchen is the heart of your home—where meals are prepared and memories are made. But it's also where grease, grime, and bacteria accumulate fastest. Our professional kitchen cleaning service goes beyond surface wiping to deep clean every corner, from greasy range hoods to sticky cabinet fronts. We use food-safe, eco-friendly products that leave your kitchen not just clean, but hygienically safe for your family.",

    benefits: [
      {
        title: "Complete Degreasing",
        description: "We remove built-up grease from range hoods, stovetops, backsplashes, and cabinets.",
        icon: "Flame"
      },
      {
        title: "Appliance Deep Clean",
        description: "Inside and out cleaning of ovens, microwaves, refrigerators, and dishwashers.",
        icon: "Microwave"
      },
      {
        title: "Food-Safe Products",
        description: "All our cleaning products are non-toxic and safe for food preparation areas.",
        icon: "ShieldCheck"
      },
      {
        title: "Sanitization",
        description: "We sanitize countertops, sinks, and high-touch areas to eliminate bacteria.",
        icon: "Sparkles"
      },
      {
        title: "Cabinet Cleaning",
        description: "Inside and outside cabinet cleaning, including drawer organizers and shelves.",
        icon: "Archive"
      },
      {
        title: "Floor & Tile Care",
        description: "Deep cleaning of kitchen floors and tile grout to remove stains and buildup.",
        icon: "Grid3X3"
      }
    ],

    process: [
      {
        step: 1,
        title: "Assessment",
        description: "We evaluate your kitchen's condition and identify areas needing special attention."
      },
      {
        step: 2,
        title: "Degreasing",
        description: "Apply professional degreasing solutions to range hoods, stovetops, and cabinets."
      },
      {
        step: 3,
        title: "Deep Cleaning",
        description: "Thoroughly clean all surfaces, appliances, and fixtures using appropriate methods."
      },
      {
        step: 4,
        title: "Sanitize & Polish",
        description: "Sanitize food prep areas and polish surfaces for a sparkling finish."
      }
    ],

    pricing: [
      {
        name: "Basic Kitchen",
        price: "Rs. 2,000",
        unit: "starting from",
        features: [
          "Surface cleaning all areas",
          "Stovetop degreasing",
          "Sink & faucet cleaning",
          "Countertop sanitization",
          "Floor mopping"
        ],
        popular: false
      },
      {
        name: "Standard Kitchen",
        price: "Rs. 3,500",
        unit: "starting from",
        features: [
          "Everything in Basic",
          "Range hood degreasing",
          "Cabinet exterior cleaning",
          "Appliance exterior cleaning",
          "Backsplash cleaning",
          "Trash bin sanitization"
        ],
        popular: true
      },
      {
        name: "Deep Kitchen Clean",
        price: "Rs. 5,500",
        unit: "starting from",
        features: [
          "Everything in Standard",
          "Inside oven cleaning",
          "Inside refrigerator cleaning",
          "Inside cabinet cleaning",
          "Grout cleaning",
          "Wall degreasing",
          "Light fixture cleaning"
        ],
        popular: false
      }
    ],

    faqs: [
      {
        question: "How long does kitchen cleaning take?",
        answer: "A standard kitchen cleaning takes 1.5-2 hours. A deep kitchen clean with appliance interiors can take 3-4 hours depending on the kitchen size and condition."
      },
      {
        question: "Do you clean inside the oven and refrigerator?",
        answer: "Yes, our Standard and Deep cleaning packages include inside appliance cleaning. We recommend emptying your refrigerator before our arrival for the most thorough clean."
      },
      {
        question: "Are your cleaning products safe for food areas?",
        answer: "Absolutely. We use only food-safe, non-toxic cleaning products. All surfaces are thoroughly rinsed and safe for food preparation immediately after cleaning."
      },
      {
        question: "Can you remove burnt-on grease from my stovetop?",
        answer: "Yes, we specialize in removing stubborn, burnt-on grease. Our professional degreasers and techniques can handle even the toughest buildup."
      },
      {
        question: "Do you clean kitchen exhaust fans?",
        answer: "Yes, range hood and exhaust fan cleaning is included in our Standard and Deep cleaning packages. We remove grease buildup from filters, fans, and housing."
      },
      {
        question: "How often should I get professional kitchen cleaning?",
        answer: "We recommend professional deep cleaning every 2-3 months for regular home kitchens. Homes with heavy cooking may benefit from monthly service."
      }
    ],

    relatedServices: ["house-cleaning", "deep-cleaning", "bathroom-cleaning"]
  },

  {
    slug: "bathroom-cleaning",
    category: "residential",
    title: "Bathroom Cleaning",
    tagline: "Transform your bathroom into a fresh, hygienic sanctuary",

    metaTitle: "Bathroom Cleaning Services in Kathmandu | Professional Bathroom Sanitization",
    metaDescription: "Expert bathroom cleaning services in Kathmandu. Deep sanitization, descaling, and mold removal. Sparkling clean bathrooms guaranteed. Book now!",
    keywords: [
      "bathroom cleaning Kathmandu",
      "bathroom sanitization Nepal",
      "toilet cleaning service",
      "bathroom deep cleaning",
      "bathroom descaling"
    ],

    heroImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&h=1080&fit=crop&q=80",

    intro: "Your bathroom should be a clean, refreshing space—not a source of stress. Hard water stains, soap scum, mold, and bacteria can make bathroom cleaning a challenging chore. Our professional bathroom cleaning service tackles these tough problems with specialized products and techniques. We deep clean, descale, and sanitize every surface, leaving your bathroom sparkling clean and hygienically safe.",

    benefits: [
      {
        title: "Deep Sanitization",
        description: "Hospital-grade disinfectants eliminate bacteria, viruses, and germs from all surfaces.",
        icon: "Shield"
      },
      {
        title: "Hard Water Removal",
        description: "We remove stubborn hard water stains and mineral deposits from fixtures and tiles.",
        icon: "Droplets"
      },
      {
        title: "Mold & Mildew Treatment",
        description: "Specialized treatment to remove and prevent mold and mildew growth.",
        icon: "Bug"
      },
      {
        title: "Grout Restoration",
        description: "Deep cleaning of tile grout to remove discoloration and restore original color.",
        icon: "Grid3X3"
      },
      {
        title: "Fixture Polishing",
        description: "Chrome fixtures, mirrors, and glass are polished to a streak-free shine.",
        icon: "Sparkles"
      },
      {
        title: "Odor Elimination",
        description: "We don't mask odors—we eliminate them at the source for lasting freshness.",
        icon: "Wind"
      }
    ],

    process: [
      {
        step: 1,
        title: "Pre-Treatment",
        description: "Apply specialized cleaners to toilet, tiles, and fixtures to break down buildup."
      },
      {
        step: 2,
        title: "Scrub & Descale",
        description: "Thoroughly scrub all surfaces and remove hard water deposits and soap scum."
      },
      {
        step: 3,
        title: "Sanitize",
        description: "Apply hospital-grade disinfectant to all surfaces, especially high-touch areas."
      },
      {
        step: 4,
        title: "Polish & Finish",
        description: "Polish fixtures and mirrors, and ensure everything is spotless and streak-free."
      }
    ],

    pricing: [
      {
        name: "Single Bathroom",
        price: "Rs. 1,200",
        unit: "per bathroom",
        features: [
          "Toilet deep cleaning",
          "Sink & vanity cleaning",
          "Mirror polishing",
          "Floor mopping",
          "Basic descaling"
        ],
        popular: false
      },
      {
        name: "Standard Clean",
        price: "Rs. 1,800",
        unit: "per bathroom",
        features: [
          "Everything in Single",
          "Shower/tub scrubbing",
          "Tile & grout cleaning",
          "Fixture polishing",
          "Exhaust fan cleaning",
          "Cabinet exterior cleaning"
        ],
        popular: true
      },
      {
        name: "Deep Bathroom Clean",
        price: "Rs. 2,500",
        unit: "per bathroom",
        features: [
          "Everything in Standard",
          "Heavy descaling treatment",
          "Mold & mildew treatment",
          "Grout whitening",
          "Inside cabinet cleaning",
          "Wall washing",
          "Ceiling cleaning"
        ],
        popular: false
      }
    ],

    faqs: [
      {
        question: "How long does bathroom cleaning take?",
        answer: "A standard bathroom takes 45 minutes to 1 hour. Deep cleaning with descaling and mold treatment can take 1.5-2 hours per bathroom."
      },
      {
        question: "Can you remove hard water stains from glass shower doors?",
        answer: "Yes, we use specialized descaling products that effectively remove hard water deposits from glass, leaving it crystal clear."
      },
      {
        question: "Do you clean bathroom exhaust fans?",
        answer: "Yes, exhaust fan cleaning is included in our Standard and Deep cleaning packages. Clean exhaust fans help prevent mold growth."
      },
      {
        question: "Can you remove black mold from bathroom tiles?",
        answer: "Yes, we have specialized mold treatment products that remove visible mold and help prevent regrowth. For severe mold issues, we may recommend additional treatments."
      },
      {
        question: "Are your products safe for septic systems?",
        answer: "Yes, all our cleaning products are septic-safe. We avoid harsh chemicals that could harm your plumbing or septic system."
      },
      {
        question: "How often should bathrooms be professionally cleaned?",
        answer: "We recommend professional deep cleaning every 1-2 months. High-traffic family bathrooms benefit from more frequent service."
      }
    ],

    relatedServices: ["house-cleaning", "kitchen-cleaning", "deep-cleaning"]
  },

  // ============================================
  // COMMERCIAL SERVICES
  // ============================================
  {
    slug: "office-cleaning",
    category: "commercial",
    title: "Office Cleaning",
    tagline: "A clean workspace for a productive team",

    metaTitle: "Office Cleaning Services in Kathmandu | Commercial Office Cleaning",
    metaDescription: "Professional office cleaning services in Kathmandu. Daily, weekly, or monthly cleaning for offices of all sizes. Create a healthy, productive workspace. Get a quote!",
    keywords: [
      "office cleaning Kathmandu",
      "commercial cleaning Nepal",
      "corporate cleaning service",
      "workplace cleaning",
      "office sanitization"
    ],

    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=80",

    intro: "A clean office isn't just about appearances—it directly impacts employee health, productivity, and your company's image. Our professional office cleaning service ensures your workspace is spotless, sanitized, and welcoming. From daily maintenance to periodic deep cleaning, we customize our service to fit your schedule and requirements. Let your team focus on what they do best while we handle the cleaning.",

    benefits: [
      {
        title: "Healthier Workplace",
        description: "Regular sanitization reduces sick days and keeps your team healthy and productive.",
        icon: "Heart"
      },
      {
        title: "Professional Image",
        description: "Impress clients and visitors with a consistently clean, well-maintained office.",
        icon: "Building2"
      },
      {
        title: "Flexible Scheduling",
        description: "We work around your business hours—early morning, evening, or weekend cleaning.",
        icon: "Clock"
      },
      {
        title: "Customized Plans",
        description: "Services tailored to your office size, layout, and specific requirements.",
        icon: "Settings"
      },
      {
        title: "Trained Staff",
        description: "Background-checked, uniformed professionals trained in commercial cleaning.",
        icon: "UserCheck"
      },
      {
        title: "Eco-Friendly Options",
        description: "Green cleaning products available for environmentally conscious businesses.",
        icon: "Leaf"
      }
    ],

    process: [
      {
        step: 1,
        title: "Site Assessment",
        description: "We visit your office to understand your space, requirements, and cleaning priorities."
      },
      {
        step: 2,
        title: "Custom Plan",
        description: "We create a tailored cleaning plan with frequency, scope, and scheduling that works for you."
      },
      {
        step: 3,
        title: "Regular Service",
        description: "Our trained team delivers consistent, thorough cleaning according to your schedule."
      },
      {
        step: 4,
        title: "Quality Checks",
        description: "Regular inspections and feedback loops ensure our service meets your standards."
      }
    ],

    pricing: [
      {
        name: "Small Office",
        price: "Rs. 3,000",
        unit: "per visit",
        features: [
          "Up to 1,000 sq ft",
          "Desk & surface cleaning",
          "Floor vacuuming & mopping",
          "Trash removal",
          "Restroom cleaning",
          "Kitchen/pantry tidying"
        ],
        popular: false
      },
      {
        name: "Medium Office",
        price: "Rs. 5,500",
        unit: "per visit",
        features: [
          "1,000 - 3,000 sq ft",
          "Everything in Small Office",
          "Meeting room cleaning",
          "Window interior cleaning",
          "Reception area detailing",
          "Sanitization of high-touch areas"
        ],
        popular: true
      },
      {
        name: "Large Office",
        price: "Rs. 9,000",
        unit: "per visit",
        features: [
          "3,000+ sq ft",
          "Everything in Medium Office",
          "Multiple floor coverage",
          "Dedicated team assignment",
          "Monthly deep cleaning included",
          "Priority scheduling"
        ],
        popular: false
      }
    ],

    faqs: [
      {
        question: "What times can you clean our office?",
        answer: "We offer flexible scheduling including early morning (before 8 AM), evening (after 6 PM), and weekend cleaning. We work around your business hours to minimize disruption."
      },
      {
        question: "Do you provide daily cleaning services?",
        answer: "Yes, we offer daily, weekly, bi-weekly, and monthly cleaning plans. Many offices choose daily or every-other-day service for high-traffic areas."
      },
      {
        question: "Are your cleaners background-checked?",
        answer: "Absolutely. All our commercial cleaning staff undergo thorough background verification. They're also trained in confidentiality and professional conduct."
      },
      {
        question: "Can you clean during business hours?",
        answer: "Yes, we can perform daytime cleaning for areas like restrooms and common areas while being minimally disruptive to your team."
      },
      {
        question: "Do you bring your own supplies and equipment?",
        answer: "Yes, we bring all necessary cleaning supplies and equipment. We can also use client-provided products if preferred."
      },
      {
        question: "What if we need extra cleaning for a special event?",
        answer: "We offer one-time deep cleaning and event preparation services. Just give us 24-48 hours notice and we'll accommodate your needs."
      }
    ],

    relatedServices: ["retail-cleaning", "facility-management", "deep-cleaning"]
  },

  {
    slug: "retail-cleaning",
    category: "commercial",
    title: "Retail & Shop Cleaning",
    tagline: "Spotless stores that attract more customers",

    metaTitle: "Retail Cleaning Services in Kathmandu | Shop & Store Cleaning",
    metaDescription: "Professional retail and shop cleaning in Kathmandu. Keep your store spotless and inviting for customers. Daily and weekly cleaning available. Contact us!",
    keywords: [
      "retail cleaning Kathmandu",
      "shop cleaning Nepal",
      "store cleaning service",
      "showroom cleaning",
      "commercial retail cleaning"
    ],

    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop&q=80",

    intro: "First impressions matter in retail. A clean, well-maintained store invites customers in and encourages them to stay longer. Our retail cleaning service keeps your shop looking its best—from sparkling floors and streak-free glass to dust-free displays and sanitized fitting rooms. We understand the retail environment and work around your hours to ensure your store is always customer-ready.",

    benefits: [
      {
        title: "Enhanced Customer Experience",
        description: "A clean store creates a positive shopping experience that drives sales.",
        icon: "ShoppingBag"
      },
      {
        title: "Display Area Care",
        description: "We carefully clean around merchandise displays without disturbing arrangements.",
        icon: "Layout"
      },
      {
        title: "Floor Excellence",
        description: "High-traffic floors stay clean and safe with regular professional care.",
        icon: "Footprints"
      },
      {
        title: "Glass & Mirror Cleaning",
        description: "Streak-free windows and mirrors showcase your products beautifully.",
        icon: "Square"
      },
      {
        title: "Fitting Room Sanitization",
        description: "Clean, sanitized fitting rooms for customer comfort and confidence.",
        icon: "ShieldCheck"
      },
      {
        title: "Flexible Hours",
        description: "We clean before opening, after closing, or during slow periods.",
        icon: "Clock"
      }
    ],

    process: [
      {
        step: 1,
        title: "Store Walkthrough",
        description: "We assess your retail space, identify high-traffic areas, and note special requirements."
      },
      {
        step: 2,
        title: "Customized Schedule",
        description: "Create a cleaning schedule that works with your store hours and foot traffic patterns."
      },
      {
        step: 3,
        title: "Daily/Regular Service",
        description: "Consistent cleaning that keeps your store immaculate for customers."
      },
      {
        step: 4,
        title: "Periodic Deep Cleans",
        description: "Scheduled deep cleaning for floors, windows, and hard-to-reach areas."
      }
    ],

    pricing: [
      {
        name: "Small Shop",
        price: "Rs. 2,000",
        unit: "per visit",
        features: [
          "Up to 500 sq ft",
          "Floor cleaning",
          "Display dusting",
          "Counter sanitization",
          "Entrance glass cleaning",
          "Trash removal"
        ],
        popular: false
      },
      {
        name: "Medium Store",
        price: "Rs. 4,000",
        unit: "per visit",
        features: [
          "500 - 2,000 sq ft",
          "Everything in Small Shop",
          "All glass & mirrors",
          "Fitting room cleaning",
          "Storage area tidying",
          "Restroom cleaning"
        ],
        popular: true
      },
      {
        name: "Large Retail",
        price: "Rs. 7,500",
        unit: "per visit",
        features: [
          "2,000+ sq ft",
          "Everything in Medium Store",
          "Multiple zones coverage",
          "Floor machine cleaning",
          "Monthly deep clean included",
          "Dedicated cleaning team"
        ],
        popular: false
      }
    ],

    faqs: [
      {
        question: "Can you clean while the store is open?",
        answer: "Yes, we can perform maintenance cleaning during business hours, focusing on restrooms, back areas, and quick touch-ups. Deep cleaning is best done outside business hours."
      },
      {
        question: "How do you handle cleaning around merchandise?",
        answer: "Our team is trained to carefully clean around displays without moving or disturbing merchandise. We take extra care with delicate items and high-value products."
      },
      {
        question: "Do you clean fitting rooms?",
        answer: "Yes, fitting room cleaning and sanitization is included in our Standard and Large retail packages. We clean mirrors, benches, floors, and sanitize high-touch surfaces."
      },
      {
        question: "Can you do emergency cleaning for spills?",
        answer: "Yes, we offer on-call services for retail clients. Spills, accidents, or unexpected messes can be addressed quickly to maintain your store's appearance."
      },
      {
        question: "How often should retail spaces be cleaned?",
        answer: "High-traffic retail stores benefit from daily cleaning. Smaller shops may do well with 2-3 times per week. We'll recommend based on your foot traffic."
      },
      {
        question: "Do you provide window cleaning for storefronts?",
        answer: "Yes, storefront glass cleaning is included in all packages. For large glass facades, we can arrange specialized window cleaning services."
      }
    ],

    relatedServices: ["office-cleaning", "facility-management", "deep-cleaning"]
  },

  {
    slug: "facility-management",
    category: "commercial",
    title: "Facility Management",
    tagline: "Complete facility care under one roof",

    metaTitle: "Facility Management Services in Kathmandu | Building Maintenance",
    metaDescription: "Comprehensive facility management services in Kathmandu. Cleaning, maintenance, and building care for commercial properties. One provider, complete solutions.",
    keywords: [
      "facility management Kathmandu",
      "building maintenance Nepal",
      "property management services",
      "commercial facility services",
      "integrated facility management"
    ],

    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&q=80",

    intro: "Managing a commercial facility involves countless details—from daily cleaning to periodic maintenance, waste management to common area care. Our facility management service provides comprehensive solutions under one roof. We become an extension of your team, handling all cleaning and basic maintenance needs so you can focus on your core business. Ideal for apartment complexes, commercial buildings, hotels, and large properties.",

    benefits: [
      {
        title: "Single Point of Contact",
        description: "One provider for all your facility needs—simplified management and communication.",
        icon: "Users"
      },
      {
        title: "Dedicated Team",
        description: "Assigned staff who know your facility inside and out for consistent service.",
        icon: "UserCheck"
      },
      {
        title: "Comprehensive Coverage",
        description: "Cleaning, maintenance, waste management, and common area care included.",
        icon: "Building"
      },
      {
        title: "24/7 Support",
        description: "Round-the-clock support for emergencies and urgent requirements.",
        icon: "Clock"
      },
      {
        title: "Cost Efficiency",
        description: "Bundled services often cost less than managing multiple vendors.",
        icon: "TrendingDown"
      },
      {
        title: "Regular Reporting",
        description: "Monthly reports on service delivery, issues addressed, and recommendations.",
        icon: "FileText"
      }
    ],

    process: [
      {
        step: 1,
        title: "Facility Audit",
        description: "Comprehensive assessment of your property, current needs, and improvement opportunities."
      },
      {
        step: 2,
        title: "Service Design",
        description: "We design a complete facility management plan tailored to your property and budget."
      },
      {
        step: 3,
        title: "Team Deployment",
        description: "Dedicated staff are assigned, trained on your facility, and begin service delivery."
      },
      {
        step: 4,
        title: "Ongoing Management",
        description: "Continuous service with regular reviews, reporting, and improvements."
      }
    ],

    pricing: [
      {
        name: "Basic Facility",
        price: "Rs. 25,000",
        unit: "per month",
        features: [
          "Daily common area cleaning",
          "Waste management",
          "Restroom maintenance",
          "Basic landscaping care",
          "Monthly reporting"
        ],
        popular: false
      },
      {
        name: "Standard Facility",
        price: "Rs. 45,000",
        unit: "per month",
        features: [
          "Everything in Basic",
          "Dedicated on-site staff",
          "Parking area cleaning",
          "Lobby & reception care",
          "Minor repairs & maintenance",
          "Weekly deep cleaning rotation"
        ],
        popular: true
      },
      {
        name: "Premium Facility",
        price: "Rs. 75,000",
        unit: "per month",
        features: [
          "Everything in Standard",
          "24/7 on-call support",
          "Multiple staff members",
          "Full landscaping service",
          "Vendor management",
          "Emergency response",
          "Quarterly facility audit"
        ],
        popular: false
      }
    ],

    faqs: [
      {
        question: "What size properties do you manage?",
        answer: "We work with properties of all sizes—from small apartment buildings to large commercial complexes. Our service is scalable to your needs."
      },
      {
        question: "Can you provide on-site staff?",
        answer: "Yes, our Standard and Premium packages include dedicated on-site staff. The number of staff depends on your facility size and requirements."
      },
      {
        question: "What's included in facility management vs just cleaning?",
        answer: "Facility management goes beyond cleaning to include common area maintenance, waste management, minor repairs, vendor coordination, and overall property care."
      },
      {
        question: "How do you handle emergencies?",
        answer: "Premium clients have 24/7 support. We also maintain relationships with specialized contractors for urgent repairs beyond our scope."
      },
      {
        question: "Do you handle security or concierge services?",
        answer: "Our core focus is cleaning and maintenance. We can recommend trusted partners for security and concierge services if needed."
      },
      {
        question: "How are your staff supervised?",
        answer: "We have supervisors who conduct regular site visits, quality checks, and handle any issues. You'll have a dedicated account manager for communication."
      }
    ],

    relatedServices: ["office-cleaning", "industrial-cleaning", "deep-cleaning"]
  },

  {
    slug: "industrial-cleaning",
    category: "commercial",
    title: "Industrial Cleaning",
    tagline: "Heavy-duty cleaning for demanding environments",

    metaTitle: "Industrial Cleaning Services in Kathmandu | Factory & Warehouse Cleaning",
    metaDescription: "Professional industrial cleaning in Kathmandu. Factory floors, warehouses, and manufacturing facilities. Safety-compliant, heavy-duty cleaning solutions.",
    keywords: [
      "industrial cleaning Kathmandu",
      "factory cleaning Nepal",
      "warehouse cleaning service",
      "manufacturing facility cleaning",
      "heavy-duty cleaning"
    ],

    heroImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=1920&h=1080&fit=crop&q=80",

    intro: "Industrial facilities face unique cleaning challenges—heavy machinery, oil and grease, dust accumulation, and strict safety requirements. Our industrial cleaning service is equipped to handle these demanding environments. We use specialized equipment and trained personnel to clean factories, warehouses, and manufacturing facilities while adhering to safety protocols. A clean industrial space improves safety, efficiency, and employee morale.",

    benefits: [
      {
        title: "Safety Compliant",
        description: "We follow industrial safety protocols and use appropriate PPE for all cleaning tasks.",
        icon: "HardHat"
      },
      {
        title: "Heavy-Duty Equipment",
        description: "Industrial scrubbers, pressure washers, and specialized tools for tough jobs.",
        icon: "Wrench"
      },
      {
        title: "Oil & Grease Removal",
        description: "Specialized degreasers and techniques for machinery and floor cleaning.",
        icon: "Droplets"
      },
      {
        title: "Dust Control",
        description: "Industrial vacuums and dust suppression for cleaner air and surfaces.",
        icon: "Wind"
      },
      {
        title: "Minimal Disruption",
        description: "We work around production schedules to minimize impact on operations.",
        icon: "Clock"
      },
      {
        title: "Waste Management",
        description: "Proper disposal of industrial waste and cleaning byproducts.",
        icon: "Trash2"
      }
    ],

    process: [
      {
        step: 1,
        title: "Safety Assessment",
        description: "We assess your facility for hazards, safety requirements, and cleaning challenges."
      },
      {
        step: 2,
        title: "Custom Protocol",
        description: "Develop a cleaning protocol that addresses your specific industrial environment."
      },
      {
        step: 3,
        title: "Scheduled Cleaning",
        description: "Execute cleaning during planned downtime or around production schedules."
      },
      {
        step: 4,
        title: "Documentation",
        description: "Provide cleaning logs and documentation for compliance and record-keeping."
      }
    ],

    pricing: [
      {
        name: "Small Facility",
        price: "Rs. 15,000",
        unit: "per service",
        features: [
          "Up to 5,000 sq ft",
          "Floor scrubbing",
          "General degreasing",
          "Restroom cleaning",
          "Office area cleaning",
          "Waste removal"
        ],
        popular: false
      },
      {
        name: "Medium Facility",
        price: "Rs. 30,000",
        unit: "per service",
        features: [
          "5,000 - 15,000 sq ft",
          "Everything in Small",
          "Machine exterior cleaning",
          "High-pressure washing",
          "Loading dock cleaning",
          "Detailed degreasing"
        ],
        popular: true
      },
      {
        name: "Large Facility",
        price: "Rs. 50,000",
        unit: "per service",
        features: [
          "15,000+ sq ft",
          "Everything in Medium",
          "Full facility coverage",
          "Extended team",
          "Specialized equipment",
          "Compliance documentation",
          "Regular maintenance plan"
        ],
        popular: false
      }
    ],

    faqs: [
      {
        question: "Can you clean during production hours?",
        answer: "For safety reasons, major cleaning is best done during downtime. However, we can perform certain maintenance cleaning during production with proper safety measures."
      },
      {
        question: "Do you handle hazardous materials?",
        answer: "We can clean areas with common industrial substances like oils and greases. For hazardous materials requiring special disposal, we'll coordinate with licensed waste handlers."
      },
      {
        question: "How do you ensure worker safety?",
        answer: "Our industrial cleaning team is trained in safety protocols, uses appropriate PPE, and follows your facility's safety requirements. We're insured for industrial work."
      },
      {
        question: "Can you clean overhead structures and high areas?",
        answer: "Yes, we have equipment and trained personnel for high-reach cleaning including rafters, overhead pipes, and elevated platforms."
      },
      {
        question: "Do you provide regular maintenance cleaning?",
        answer: "Yes, many industrial clients prefer regular maintenance schedules—weekly, bi-weekly, or monthly—to maintain cleanliness and prevent buildup."
      },
      {
        question: "What industries do you serve?",
        answer: "We serve manufacturing, warehousing, food processing, automotive, pharmaceutical, and general industrial facilities. Each industry has specific needs we can accommodate."
      }
    ],

    relatedServices: ["facility-management", "office-cleaning", "post-construction-cleaning"]
  },

  // ============================================
  // MORE SPECIALIZED SERVICES
  // ============================================
  {
    slug: "carpet-cleaning",
    category: "specialized",
    title: "Carpet Cleaning",
    tagline: "Restore your carpets to like-new condition",

    metaTitle: "Carpet Cleaning Services in Kathmandu | Professional Carpet Shampooing",
    metaDescription: "Professional carpet cleaning in Kathmandu. Deep extraction, stain removal, and odor elimination. Extend carpet life and improve indoor air quality. Book today!",
    keywords: [
      "carpet cleaning Kathmandu",
      "carpet shampooing Nepal",
      "rug cleaning service",
      "carpet stain removal",
      "professional carpet cleaners"
    ],

    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&q=80",

    intro: "Carpets add warmth and comfort to any space, but they also trap dirt, allergens, and odors that regular vacuuming can't remove. Our professional carpet cleaning service uses hot water extraction and specialized treatments to deep clean your carpets, removing embedded dirt, stubborn stains, and allergens. We restore your carpets' appearance and freshness while extending their lifespan.",

    benefits: [
      {
        title: "Deep Extraction",
        description: "Hot water extraction removes dirt from deep within carpet fibers, not just the surface.",
        icon: "Droplets"
      },
      {
        title: "Stain Treatment",
        description: "Specialized treatments for coffee, wine, pet stains, and other stubborn marks.",
        icon: "Sparkles"
      },
      {
        title: "Allergen Removal",
        description: "Remove dust mites, pet dander, and allergens trapped in carpet fibers.",
        icon: "Shield"
      },
      {
        title: "Odor Elimination",
        description: "Enzymatic treatments eliminate odors at the source, not just mask them.",
        icon: "Wind"
      },
      {
        title: "Extended Carpet Life",
        description: "Regular professional cleaning extends your carpet's life by years.",
        icon: "Clock"
      },
      {
        title: "Quick Drying",
        description: "Advanced equipment means faster drying—most carpets ready in 4-6 hours.",
        icon: "Sun"
      }
    ],

    process: [
      {
        step: 1,
        title: "Inspection",
        description: "We assess carpet type, condition, and identify stains needing special treatment."
      },
      {
        step: 2,
        title: "Pre-Treatment",
        description: "Apply pre-spray solution to break down soil and treat specific stains."
      },
      {
        step: 3,
        title: "Hot Water Extraction",
        description: "Professional extraction removes dirt, cleaning solution, and 95% of moisture."
      },
      {
        step: 4,
        title: "Grooming & Drying",
        description: "We groom carpet fibers for uniform appearance and speed drying with air movers."
      }
    ],

    pricing: [
      {
        name: "Per Room",
        price: "Rs. 1,500",
        unit: "per room",
        features: [
          "Up to 150 sq ft",
          "Vacuuming",
          "Pre-treatment",
          "Hot water extraction",
          "Basic stain treatment"
        ],
        popular: false
      },
      {
        name: "3-Room Package",
        price: "Rs. 4,000",
        unit: "package",
        features: [
          "3 rooms (up to 450 sq ft)",
          "Everything in Per Room",
          "Hallway included",
          "Advanced stain treatment",
          "Deodorizing"
        ],
        popular: true
      },
      {
        name: "Whole House",
        price: "Rs. 7,500",
        unit: "starting from",
        features: [
          "Full house coverage",
          "Everything in 3-Room",
          "Stairs included",
          "Scotchgard protection option",
          "Pet odor treatment",
          "Priority scheduling"
        ],
        popular: false
      }
    ],

    faqs: [
      {
        question: "How long does carpet cleaning take?",
        answer: "A typical 3-bedroom home takes 2-3 hours. The exact time depends on carpet size, condition, and level of soiling."
      },
      {
        question: "How long until my carpet is dry?",
        answer: "Most carpets dry within 4-6 hours with good ventilation. We use powerful extraction equipment to remove maximum moisture. Using fans or AC speeds drying."
      },
      {
        question: "Can you remove pet stains and odors?",
        answer: "Yes, we have enzymatic treatments specifically designed for pet urine, feces, and vomit. These break down the organic matter and eliminate odors at the source."
      },
      {
        question: "Do I need to move furniture?",
        answer: "We can work around heavy furniture. For best results, removing small items and light furniture from carpeted areas is helpful but not required."
      },
      {
        question: "How often should carpets be professionally cleaned?",
        answer: "We recommend professional cleaning every 12-18 months for most homes. Homes with pets, children, or allergies benefit from every 6-12 months."
      },
      {
        question: "Will cleaning damage my carpet?",
        answer: "No, professional cleaning actually extends carpet life. We assess carpet type and use appropriate methods. Our equipment and solutions are safe for all common carpet types."
      }
    ],

    relatedServices: ["sofa-cleaning", "deep-cleaning", "house-cleaning"]
  },

  {
    slug: "water-tank-cleaning",
    category: "specialized",
    title: "Water Tank Cleaning",
    tagline: "Clean water starts with a clean tank",

    metaTitle: "Water Tank Cleaning Services in Kathmandu | Tank Sanitization",
    metaDescription: "Professional water tank cleaning in Kathmandu. Remove sediment, algae, and bacteria. Ensure safe drinking water for your family. Book your tank cleaning today!",
    keywords: [
      "water tank cleaning Kathmandu",
      "tank sanitization Nepal",
      "overhead tank cleaning",
      "underground tank cleaning",
      "water tank disinfection"
    ],

    heroImage: "https://images.unsplash.com/photo-1562016600-ece13e8ba570?w=1920&h=1080&fit=crop&q=80",

    intro: "Your water tank is essential for daily life, but over time it accumulates sediment, algae, bacteria, and other contaminants that can affect your family's health. Our water tank cleaning service thoroughly cleans and sanitizes your tank, removing all deposits and disinfecting to ensure your water is safe and clean. Regular tank cleaning is essential for maintaining water quality and preventing waterborne diseases.",

    benefits: [
      {
        title: "Complete Sediment Removal",
        description: "We remove all sediment, sludge, and debris that accumulates at the tank bottom.",
        icon: "Trash2"
      },
      {
        title: "Algae Elimination",
        description: "Thorough scrubbing removes algae growth from walls and corners.",
        icon: "Leaf"
      },
      {
        title: "Bacterial Disinfection",
        description: "Food-grade disinfectants eliminate harmful bacteria and pathogens.",
        icon: "Shield"
      },
      {
        title: "Safe for Drinking Water",
        description: "All cleaning agents are food-safe and thoroughly rinsed before refilling.",
        icon: "Droplets"
      },
      {
        title: "All Tank Types",
        description: "We clean overhead, underground, plastic, concrete, and steel tanks.",
        icon: "Container"
      },
      {
        title: "Inspection Report",
        description: "We report on tank condition and recommend repairs if needed.",
        icon: "FileText"
      }
    ],

    process: [
      {
        step: 1,
        title: "Tank Draining",
        description: "We coordinate with you to drain the tank at a convenient time."
      },
      {
        step: 2,
        title: "Sediment Removal",
        description: "All sediment, sludge, and debris is removed from the tank bottom."
      },
      {
        step: 3,
        title: "Scrubbing & Cleaning",
        description: "Walls, floor, and corners are thoroughly scrubbed to remove buildup."
      },
      {
        step: 4,
        title: "Disinfection",
        description: "Food-grade disinfectant is applied, then thoroughly rinsed before refilling."
      }
    ],

    pricing: [
      {
        name: "Small Tank",
        price: "Rs. 1,500",
        unit: "up to 1,000L",
        features: [
          "Complete draining",
          "Sediment removal",
          "Wall scrubbing",
          "Disinfection",
          "Final rinse"
        ],
        popular: false
      },
      {
        name: "Medium Tank",
        price: "Rs. 2,500",
        unit: "1,000 - 5,000L",
        features: [
          "Everything in Small",
          "Inlet/outlet cleaning",
          "Overflow pipe cleaning",
          "Condition report"
        ],
        popular: true
      },
      {
        name: "Large Tank",
        price: "Rs. 4,000",
        unit: "5,000L+",
        features: [
          "Everything in Medium",
          "Underground tank access",
          "Extended cleaning time",
          "Multiple rinse cycles",
          "Detailed inspection report"
        ],
        popular: false
      }
    ],

    faqs: [
      {
        question: "How often should water tanks be cleaned?",
        answer: "We recommend cleaning water tanks every 6 months. In areas with poor water quality or high sediment, quarterly cleaning may be beneficial."
      },
      {
        question: "How long does the cleaning take?",
        answer: "A typical household tank takes 1-2 hours. Larger tanks or those with heavy buildup may take longer. The tank should remain empty for 2-3 hours total."
      },
      {
        question: "Is the disinfectant safe for drinking water?",
        answer: "Yes, we use only food-grade, drinking water-safe disinfectants. The tank is thoroughly rinsed before refilling, leaving no harmful residue."
      },
      {
        question: "Do you clean underground tanks?",
        answer: "Yes, we clean both overhead and underground tanks. Underground tanks require confined space safety procedures, which we're equipped to handle."
      },
      {
        question: "Should I empty the tank before you arrive?",
        answer: "Ideally, use as much water as possible before our arrival. We can help drain remaining water, but starting with a nearly empty tank speeds up the process."
      },
      {
        question: "Can you repair cracks or leaks you find?",
        answer: "We identify and report any damage during cleaning. For repairs, we can recommend trusted waterproofing and tank repair specialists."
      }
    ],

    relatedServices: ["deep-cleaning", "house-cleaning", "facility-management"]
  },

  {
    slug: "marble-polishing",
    category: "specialized",
    title: "Marble Polishing",
    tagline: "Restore the natural beauty of your marble surfaces",

    metaTitle: "Marble Polishing Services in Kathmandu | Stone Floor Restoration",
    metaDescription: "Professional marble polishing in Kathmandu. Restore shine, remove scratches, and protect your marble floors and countertops. Expert stone care specialists.",
    keywords: [
      "marble polishing Kathmandu",
      "stone floor restoration Nepal",
      "marble cleaning service",
      "granite polishing",
      "floor polishing Kathmandu"
    ],

    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&q=80",

    intro: "Marble and natural stone surfaces are elegant investments that deserve expert care. Over time, they lose their shine due to foot traffic, etching, scratches, and improper cleaning. Our marble polishing service restores the natural beauty of your marble, granite, and other stone surfaces. We use professional diamond polishing equipment and techniques to bring back the mirror-like shine and protect your investment for years to come.",

    benefits: [
      {
        title: "Mirror-Like Shine",
        description: "Diamond polishing restores the glossy, reflective finish marble is known for.",
        icon: "Sparkles"
      },
      {
        title: "Scratch Removal",
        description: "Professional grinding removes surface scratches and imperfections.",
        icon: "Eraser"
      },
      {
        title: "Stain Removal",
        description: "Specialized poultices draw out stains from porous stone surfaces.",
        icon: "Droplets"
      },
      {
        title: "Sealing Protection",
        description: "Professional sealing protects against future stains and etching.",
        icon: "Shield"
      },
      {
        title: "All Stone Types",
        description: "We work with marble, granite, travertine, limestone, and other natural stones.",
        icon: "Layers"
      },
      {
        title: "Floors & Countertops",
        description: "Service available for floors, countertops, vanities, and other surfaces.",
        icon: "Square"
      }
    ],

    process: [
      {
        step: 1,
        title: "Assessment",
        description: "We evaluate stone type, condition, and determine the appropriate restoration level."
      },
      {
        step: 2,
        title: "Deep Cleaning",
        description: "Remove surface dirt, grime, and previous sealers that may interfere with polishing."
      },
      {
        step: 3,
        title: "Diamond Polishing",
        description: "Progressive diamond polishing from coarse to fine grits achieves desired shine."
      },
      {
        step: 4,
        title: "Sealing",
        description: "Apply professional-grade sealer to protect the stone and enhance appearance."
      }
    ],

    pricing: [
      {
        name: "Basic Polish",
        price: "Rs. 80",
        unit: "per sq ft",
        features: [
          "Light cleaning",
          "Single-stage polishing",
          "Minor dullness restoration",
          "Suitable for well-maintained floors",
          "Minimum 200 sq ft"
        ],
        popular: false
      },
      {
        name: "Standard Restoration",
        price: "Rs. 120",
        unit: "per sq ft",
        features: [
          "Deep cleaning",
          "Multi-stage diamond polishing",
          "Light scratch removal",
          "Professional sealing",
          "Minimum 200 sq ft"
        ],
        popular: true
      },
      {
        name: "Full Restoration",
        price: "Rs. 180",
        unit: "per sq ft",
        features: [
          "Everything in Standard",
          "Heavy scratch/etch removal",
          "Stain treatment",
          "Grinding if needed",
          "Premium sealer",
          "Minimum 200 sq ft"
        ],
        popular: false
      }
    ],

    faqs: [
      {
        question: "How long does marble polishing take?",
        answer: "A typical room (200-300 sq ft) takes 4-6 hours. Larger areas or floors requiring heavy restoration may take 1-2 days. We'll provide a time estimate after assessment."
      },
      {
        question: "How often should marble be polished?",
        answer: "With proper care, professional polishing is needed every 2-5 years. High-traffic areas may need more frequent attention. Regular cleaning and sealing extend time between polishing."
      },
      {
        question: "Can you remove etch marks from marble?",
        answer: "Yes, etch marks (dull spots from acidic substances) can usually be removed through polishing. Severe etching may require light grinding before polishing."
      },
      {
        question: "Do you polish granite and other stones?",
        answer: "Yes, we service marble, granite, travertine, limestone, slate, and other natural stones. Each stone type requires specific techniques and products."
      },
      {
        question: "Will polishing remove all stains?",
        answer: "Surface stains usually come out with cleaning and polishing. Deep stains may require poultice treatment. Some old or severe stains may be permanent but can often be minimized."
      },
      {
        question: "Should I seal marble after polishing?",
        answer: "Yes, we always recommend sealing after polishing. Sealer protects against stains and makes maintenance easier. We use high-quality impregnating sealers that don't alter appearance."
      }
    ],

    relatedServices: ["deep-cleaning", "house-cleaning", "post-construction-cleaning"]
  },

  // ============================================
  // MOVE IN/OUT SERVICES
  // ============================================
  {
    slug: "move-in-cleaning",
    category: "moving",
    title: "Move-In Cleaning",
    tagline: "Start fresh in your new home",

    metaTitle: "Move-In Cleaning Services in Kathmandu | New Home Deep Clean",
    metaDescription: "Professional move-in cleaning in Kathmandu. Deep clean your new home before moving in. Every corner sanitized and ready for your family. Book now!",
    keywords: [
      "move in cleaning Kathmandu",
      "new home cleaning Nepal",
      "pre-move cleaning service",
      "new house cleaning",
      "move in deep clean"
    ],

    heroImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop&q=80",

    intro: "Moving into a new home is exciting, but the previous occupants' cleaning standards may not match yours. Our move-in cleaning service ensures your new home is thoroughly cleaned and sanitized before you unpack a single box. We deep clean every room, sanitize bathrooms and kitchens, and make sure you're moving into a fresh, healthy space. Start your new chapter in a spotless home.",

    benefits: [
      {
        title: "Complete Deep Clean",
        description: "Every room, closet, and cabinet is thoroughly cleaned before you move in.",
        icon: "Home"
      },
      {
        title: "Kitchen Sanitization",
        description: "Cabinets, appliances, and surfaces cleaned and sanitized for food safety.",
        icon: "UtensilsCrossed"
      },
      {
        title: "Bathroom Disinfection",
        description: "Toilets, showers, and sinks thoroughly disinfected for hygiene.",
        icon: "ShowerHead"
      },
      {
        title: "Inside Cabinets",
        description: "All closets, cabinets, and storage spaces cleaned inside and out.",
        icon: "Archive"
      },
      {
        title: "Window Cleaning",
        description: "Interior windows cleaned for a bright, welcoming atmosphere.",
        icon: "Square"
      },
      {
        title: "Flexible Timing",
        description: "We work with your move schedule to clean before your furniture arrives.",
        icon: "Calendar"
      }
    ],

    process: [
      {
        step: 1,
        title: "Schedule",
        description: "Coordinate cleaning date after previous occupants leave but before you move in."
      },
      {
        step: 2,
        title: "Top-to-Bottom Clean",
        description: "Systematic cleaning starting from ceilings and working down to floors."
      },
      {
        step: 3,
        title: "Detail Work",
        description: "Inside cabinets, appliances, light switches, and often-missed areas."
      },
      {
        step: 4,
        title: "Final Inspection",
        description: "Walkthrough to ensure everything meets our standards before you move in."
      }
    ],

    pricing: [
      {
        name: "1-2 Bedroom",
        price: "Rs. 6,000",
        unit: "starting from",
        features: [
          "All rooms deep cleaned",
          "Kitchen deep clean",
          "Bathroom sanitization",
          "Inside all cabinets",
          "Floor cleaning",
          "Basic window cleaning"
        ],
        popular: false
      },
      {
        name: "3-4 Bedroom",
        price: "Rs. 9,000",
        unit: "starting from",
        features: [
          "Everything in 1-2 Bedroom",
          "Additional rooms included",
          "Balcony cleaning",
          "Light fixture cleaning",
          "Baseboard cleaning",
          "All windows interior"
        ],
        popular: true
      },
      {
        name: "5+ Bedroom / House",
        price: "Rs. 14,000",
        unit: "starting from",
        features: [
          "Everything in 3-4 Bedroom",
          "Multiple floors",
          "Garage cleaning",
          "Outdoor entrance areas",
          "Extended team",
          "Priority scheduling"
        ],
        popular: false
      }
    ],

    faqs: [
      {
        question: "When should I schedule move-in cleaning?",
        answer: "Ideally, schedule cleaning after the previous occupants have left and before your furniture arrives. We need the space empty for the most thorough clean."
      },
      {
        question: "Do you clean inside appliances?",
        answer: "Yes, we clean inside ovens, refrigerators, and dishwashers. Please ensure appliances are empty before we arrive."
      },
      {
        question: "What if the home is very dirty?",
        answer: "For homes that need extra attention (heavy dirt, post-construction, etc.), we may recommend our deep cleaning or post-construction cleaning service at adjusted pricing."
      },
      {
        question: "Can you clean before the previous tenant moves out?",
        answer: "We need the space empty to clean effectively. Coordinate with your landlord or the previous occupants to ensure the home is vacant before our visit."
      },
      {
        question: "Do you clean carpets as part of move-in cleaning?",
        answer: "Basic carpet vacuuming is included. For deep carpet cleaning with extraction, we can add that service for an additional charge."
      },
      {
        question: "How long does move-in cleaning take?",
        answer: "A 2-bedroom apartment typically takes 4-5 hours. Larger homes or those needing extra attention may take 6-8 hours."
      }
    ],

    relatedServices: ["move-out-cleaning", "deep-cleaning", "house-cleaning"]
  },

  {
    slug: "move-out-cleaning",
    category: "moving",
    title: "Move-Out Cleaning",
    tagline: "Leave your old place spotless",

    metaTitle: "Move-Out Cleaning Services in Kathmandu | End of Tenancy Cleaning",
    metaDescription: "Professional move-out cleaning in Kathmandu. Get your full deposit back with our thorough end-of-tenancy cleaning. Landlord-approved results guaranteed!",
    keywords: [
      "move out cleaning Kathmandu",
      "end of tenancy cleaning Nepal",
      "bond cleaning service",
      "rental cleaning",
      "deposit back cleaning"
    ],

    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&q=80",

    intro: "Moving out is stressful enough without worrying about cleaning. Our move-out cleaning service ensures you leave your rental property in pristine condition, maximizing your chances of getting your full security deposit back. We clean to landlord and property management standards, tackling everything from wall marks to oven grease. Focus on your move while we handle the cleaning.",

    benefits: [
      {
        title: "Deposit Protection",
        description: "Thorough cleaning helps ensure you get your full security deposit back.",
        icon: "Wallet"
      },
      {
        title: "Landlord Standards",
        description: "We know what landlords and property managers look for in final inspections.",
        icon: "ClipboardCheck"
      },
      {
        title: "Wall Spot Cleaning",
        description: "We remove scuff marks, fingerprints, and light stains from walls.",
        icon: "Paintbrush"
      },
      {
        title: "Appliance Deep Clean",
        description: "Ovens, refrigerators, and dishwashers cleaned inside and out.",
        icon: "Microwave"
      },
      {
        title: "Carpet Attention",
        description: "Thorough vacuuming and spot treatment for carpet stains.",
        icon: "Square"
      },
      {
        title: "Checklist Provided",
        description: "Detailed cleaning checklist you can share with your landlord.",
        icon: "FileText"
      }
    ],

    process: [
      {
        step: 1,
        title: "Property Assessment",
        description: "We assess the property and note any areas needing special attention."
      },
      {
        step: 2,
        title: "Systematic Cleaning",
        description: "Room-by-room deep cleaning following our comprehensive checklist."
      },
      {
        step: 3,
        title: "Detail Focus",
        description: "Extra attention to areas landlords commonly inspect—kitchens, bathrooms, appliances."
      },
      {
        step: 4,
        title: "Final Check",
        description: "We do a final walkthrough and provide a cleaning completion checklist."
      }
    ],

    pricing: [
      {
        name: "1-2 Bedroom",
        price: "Rs. 6,500",
        unit: "starting from",
        features: [
          "All rooms deep cleaned",
          "Kitchen appliance cleaning",
          "Bathroom deep clean",
          "Inside all cabinets",
          "Wall spot cleaning",
          "Window tracks cleaning"
        ],
        popular: false
      },
      {
        name: "3-4 Bedroom",
        price: "Rs. 10,000",
        unit: "starting from",
        features: [
          "Everything in 1-2 Bedroom",
          "Additional rooms included",
          "Balcony cleaning",
          "Light fixture cleaning",
          "Detailed baseboard cleaning",
          "Carpet spot treatment"
        ],
        popular: true
      },
      {
        name: "5+ Bedroom / House",
        price: "Rs. 15,000",
        unit: "starting from",
        features: [
          "Everything in 3-4 Bedroom",
          "Multiple floors",
          "Garage cleaning",
          "Outdoor areas",
          "Extended team",
          "Re-clean guarantee"
        ],
        popular: false
      }
    ],

    faqs: [
      {
        question: "When should I schedule move-out cleaning?",
        answer: "Schedule cleaning after all your belongings are removed but before your final inspection. Ideally 1-2 days before handing over keys."
      },
      {
        question: "Do you guarantee I'll get my deposit back?",
        answer: "While we can't guarantee deposits (landlords may have other concerns), our thorough cleaning addresses all cleanliness issues. We offer a re-clean guarantee if the landlord finds cleaning issues."
      },
      {
        question: "What if my landlord finds something after cleaning?",
        answer: "If your landlord identifies a cleaning issue within 48 hours of our service, we'll return to address it at no extra cost."
      },
      {
        question: "Do you remove wall holes or paint?",
        answer: "We clean walls and remove marks, but we don't do repairs or painting. We can recommend handyman services for that."
      },
      {
        question: "Can you clean if my things are still there?",
        answer: "We can do limited cleaning around belongings, but for a thorough move-out clean, the property should be empty."
      },
      {
        question: "Do you provide a cleaning checklist for landlords?",
        answer: "Yes, we provide a detailed checklist of all cleaning tasks completed that you can share with your landlord or property manager."
      }
    ],

    relatedServices: ["move-in-cleaning", "deep-cleaning", "house-cleaning"]
  },

  {
    slug: "post-construction-cleaning",
    category: "moving",
    title: "Post Construction Cleaning",
    tagline: "From construction site to move-in ready",

    metaTitle: "Post Construction Cleaning in Kathmandu | Builder Clean Services",
    metaDescription: "Professional post-construction cleaning in Kathmandu. Remove dust, debris, and construction residue. Transform your new build into a livable space. Contact us!",
    keywords: [
      "post construction cleaning Kathmandu",
      "builder clean Nepal",
      "new construction cleaning",
      "construction dust removal",
      "after renovation cleaning"
    ],

    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&q=80",

    intro: "Construction and renovation projects leave behind layers of dust, debris, and residue that regular cleaning can't handle. Our post-construction cleaning service is specifically designed to tackle the unique challenges of newly built or renovated spaces. We remove construction dust from every surface, clean paint splatters, eliminate adhesive residue, and prepare your space for occupancy. Transform your construction site into a pristine, livable space.",

    benefits: [
      {
        title: "Construction Dust Removal",
        description: "Specialized equipment removes fine construction dust from all surfaces and air.",
        icon: "Wind"
      },
      {
        title: "Debris Disposal",
        description: "We remove and dispose of construction debris, packaging, and leftover materials.",
        icon: "Trash2"
      },
      {
        title: "Surface Cleaning",
        description: "Remove paint splatters, adhesive residue, and protective films from surfaces.",
        icon: "Sparkles"
      },
      {
        title: "Window Cleaning",
        description: "Remove stickers, paint, and dust from windows inside and out.",
        icon: "Square"
      },
      {
        title: "Fixture Cleaning",
        description: "Clean and polish all new fixtures, fittings, and hardware.",
        icon: "Lightbulb"
      },
      {
        title: "Multiple Phases",
        description: "We offer rough clean, detail clean, and final clean phases as needed.",
        icon: "Layers"
      }
    ],

    process: [
      {
        step: 1,
        title: "Site Assessment",
        description: "We assess the construction stage and scope of cleaning required."
      },
      {
        step: 2,
        title: "Rough Clean",
        description: "Remove bulk debris, sweep/vacuum all surfaces, and initial dust removal."
      },
      {
        step: 3,
        title: "Detail Clean",
        description: "Detailed cleaning of all surfaces, fixtures, windows, and built-in elements."
      },
      {
        step: 4,
        title: "Final Clean",
        description: "Touch-up cleaning and final inspection to ensure move-in readiness."
      }
    ],

    pricing: [
      {
        name: "Basic Post-Construction",
        price: "Rs. 15",
        unit: "per sq ft",
        features: [
          "Debris removal",
          "Surface dusting",
          "Floor cleaning",
          "Basic window cleaning",
          "Bathroom & kitchen clean",
          "Minimum 500 sq ft"
        ],
        popular: false
      },
      {
        name: "Standard Post-Construction",
        price: "Rs. 22",
        unit: "per sq ft",
        features: [
          "Everything in Basic",
          "Detailed dusting (vents, fixtures)",
          "Window track cleaning",
          "Cabinet interior cleaning",
          "Paint splatter removal",
          "Minimum 500 sq ft"
        ],
        popular: true
      },
      {
        name: "Complete Post-Construction",
        price: "Rs. 30",
        unit: "per sq ft",
        features: [
          "Everything in Standard",
          "Multiple cleaning phases",
          "Adhesive/sticker removal",
          "Exterior window cleaning",
          "Pressure washing (if needed)",
          "Final inspection & touch-up"
        ],
        popular: false
      }
    ],

    faqs: [
      {
        question: "When should post-construction cleaning be done?",
        answer: "Ideally after all construction work is complete but before furniture and fixtures are installed. We can also clean after partial completion for phased moves."
      },
      {
        question: "What's the difference between rough clean and final clean?",
        answer: "Rough clean removes bulk debris and does initial dusting after major construction. Final clean is detailed cleaning of all surfaces once construction is fully complete."
      },
      {
        question: "Do you remove construction debris?",
        answer: "We remove small debris and packaging materials. Large debris removal (drywall chunks, lumber, etc.) should be handled by your contractor."
      },
      {
        question: "Can you remove paint from windows and floors?",
        answer: "Yes, we use specialized scrapers and solvents to remove paint splatters without damaging surfaces. Let us know about any delicate surfaces beforehand."
      },
      {
        question: "How long does post-construction cleaning take?",
        answer: "It varies significantly based on space size and construction type. A 1,000 sq ft apartment might take 1-2 days. We'll provide a time estimate after assessment."
      },
      {
        question: "Do you clean exterior areas after construction?",
        answer: "Yes, our Complete package includes exterior cleaning like balconies, entrances, and pressure washing if needed."
      }
    ],

    relatedServices: ["renovation-cleanup", "deep-cleaning", "move-in-cleaning"]
  },

  {
    slug: "renovation-cleanup",
    category: "moving",
    title: "Renovation Cleanup",
    tagline: "Restore order after your renovation project",

    metaTitle: "Renovation Cleanup Services in Kathmandu | After Remodel Cleaning",
    metaDescription: "Professional renovation cleanup in Kathmandu. Remove dust, debris, and restore your home after remodeling. Get your renovated space ready to enjoy!",
    keywords: [
      "renovation cleanup Kathmandu",
      "after remodel cleaning Nepal",
      "home renovation cleaning",
      "remodeling cleanup service",
      "renovation dust cleaning"
    ],

    heroImage: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1920&h=1080&fit=crop&q=80",

    intro: "Home renovations improve your living space but leave behind a mess that infiltrates every corner of your home. Fine dust settles on surfaces far from the construction zone, and debris seems to multiply. Our renovation cleanup service specializes in restoring your home after remodeling projects—from kitchen renovations to bathroom remodels to room additions. We thoroughly clean both the renovated area and the rest of your home affected by construction dust.",

    benefits: [
      {
        title: "Whole-Home Approach",
        description: "We clean not just the renovated area but also spaces affected by spreading dust.",
        icon: "Home"
      },
      {
        title: "Fine Dust Removal",
        description: "HEPA filtration captures fine construction dust that regular vacuums miss.",
        icon: "Wind"
      },
      {
        title: "Surface Restoration",
        description: "Detailed cleaning restores surfaces dulled by construction dust.",
        icon: "Sparkles"
      },
      {
        title: "Air Quality",
        description: "Thorough cleaning improves indoor air quality after construction.",
        icon: "CloudSun"
      },
      {
        title: "Furniture Cleaning",
        description: "We clean dust from furniture, upholstery, and belongings in affected areas.",
        icon: "Sofa"
      },
      {
        title: "Flexible Scope",
        description: "Service scaled to your renovation size—from one room to whole house.",
        icon: "Maximize2"
      }
    ],

    process: [
      {
        step: 1,
        title: "Assessment",
        description: "We evaluate the renovation scope and identify all affected areas of your home."
      },
      {
        step: 2,
        title: "Debris Removal",
        description: "Clear debris, packaging, and leftover materials from the renovation area."
      },
      {
        step: 3,
        title: "Deep Dust Removal",
        description: "Systematic dusting of all surfaces using HEPA equipment and microfiber tools."
      },
      {
        step: 4,
        title: "Detail Cleaning",
        description: "Detailed cleaning of renovated area plus affected rooms, furniture, and fixtures."
      }
    ],

    pricing: [
      {
        name: "Single Room Renovation",
        price: "Rs. 5,000",
        unit: "starting from",
        features: [
          "Renovated room deep clean",
          "Adjacent area dust removal",
          "Surface and fixture cleaning",
          "Floor cleaning",
          "Basic furniture dusting"
        ],
        popular: false
      },
      {
        name: "Multi-Room / Kitchen-Bath",
        price: "Rs. 10,000",
        unit: "starting from",
        features: [
          "All renovated areas",
          "Whole-home dust removal",
          "Inside cabinet cleaning",
          "Appliance cleaning",
          "Window cleaning",
          "Detailed furniture dusting"
        ],
        popular: true
      },
      {
        name: "Major Renovation",
        price: "Rs. 18,000",
        unit: "starting from",
        features: [
          "Everything in Multi-Room",
          "Multiple floors/areas",
          "HVAC vent cleaning",
          "Complete furniture cleaning",
          "Multiple visits if needed",
          "Air quality focus"
        ],
        popular: false
      }
    ],

    faqs: [
      {
        question: "How is renovation cleanup different from post-construction cleaning?",
        answer: "Renovation cleanup focuses on occupied homes where construction dust has spread to living areas with furniture and belongings. Post-construction is typically for new, empty spaces."
      },
      {
        question: "Should I cover furniture during renovation?",
        answer: "Yes! Covering furniture with plastic sheets significantly reduces cleaning needed afterward. We can still clean furniture, but prevention helps."
      },
      {
        question: "Can you clean while I'm still living in the house?",
        answer: "Absolutely. Most renovation cleanups are done in occupied homes. We work room by room and can leave certain areas accessible."
      },
      {
        question: "Do you clean HVAC vents and ducts?",
        answer: "We clean vent covers and accessible ductwork openings. For full duct cleaning, we recommend specialized HVAC cleaning services."
      },
      {
        question: "How soon after renovation should cleaning be done?",
        answer: "Ideally as soon as the renovation work is complete. The sooner we clean, the less dust settles permanently on surfaces."
      },
      {
        question: "Will one cleaning be enough?",
        answer: "For most renovations, one thorough cleaning is sufficient. Major renovations may benefit from a follow-up cleaning after a few days as additional dust settles."
      }
    ],

    relatedServices: ["post-construction-cleaning", "deep-cleaning", "house-cleaning"]
  }
];

// Helper function to get a service by slug
export function getServiceBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((service) => service.slug === slug);
}

// Helper function to get all service slugs (for static generation)
export function getAllServiceSlugs(): string[] {
  return servicePages.map((service) => service.slug);
}

// Helper function to get related services
export function getRelatedServices(slugs: string[]): ServicePage[] {
  return servicePages.filter((service) => slugs.includes(service.slug));
}
