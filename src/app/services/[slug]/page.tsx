import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ServiceHero,
  ServiceIntro,
  ServiceBenefits,
  ServiceProcess,
  ServicePricing,
  ServiceFAQs,
  RelatedServices,
} from "@/components/services";
import { CTABanner } from "@/components/sections";
import { getServiceBySlug, getAllServiceSlugs, getRelatedServices } from "@/data/servicePages";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all services
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords.join(", "),
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: "website",
      images: [service.heroImage],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service.relatedServices);

  // JSON-LD Structured Data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Khems Cleaning",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kathmandu",
        addressCountry: "NP",
      },
      telephone: "+977 01-4542169",
    },
    areaServed: {
      "@type": "City",
      name: "Kathmandu",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://khemscleaning.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://khemscleaning.com/services/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://khemscleaning.com/services/${service.slug}/`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Page Sections */}
      <ServiceHero
        title={service.title}
        tagline={service.tagline}
        heroImage={service.heroImage}
        category={service.category}
      />

      <ServiceIntro intro={service.intro} title={service.title} />

      <ServiceBenefits benefits={service.benefits} title={service.title} />

      <ServiceProcess process={service.process} />

      {service.pricing && service.pricing.length > 0 && (
        <ServicePricing pricing={service.pricing} />
      )}

      <ServiceFAQs faqs={service.faqs} />

      {relatedServices.length > 0 && (
        <RelatedServices services={relatedServices} />
      )}

      <CTABanner />
    </>
  );
}
