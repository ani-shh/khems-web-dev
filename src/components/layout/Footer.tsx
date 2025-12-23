"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Container } from "./Container";
import { SITE_CONFIG } from "@/lib/constants";
import { useContactModal } from "@/components/providers";

const footerLinks = {
  services: [
    { label: "Residential Cleaning", href: "/services/house-cleaning" },
    { label: "Commercial Cleaning", href: "/services/office-cleaning" },
    { label: "Sofa & Carpet", href: "/services/sofa-cleaning" },
    { label: "Water Tank Cleaning", href: "/services/water-tank-cleaning" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { openContactModal } = useContactModal();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand & Contact */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#0D9488] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <span className="font-bold text-xl text-white">
                  {SITE_CONFIG.name}
                </span>
              </Link>
              <p className="text-gray-400 text-sm mb-6">
                Professional cleaning services in Kathmandu. Residential,
                commercial, and specialized cleaning solutions.
              </p>
              <div className="space-y-3">
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/[\s-]/g, '')}`}
                  className="flex items-center gap-3 text-sm hover:text-white transition-colors"
                >
                  <Phone size={16} className="text-[#0D9488]" />
                  {SITE_CONFIG.phone}
                </a>
                <a
                  href={`tel:${SITE_CONFIG.mobile.replace(/[\s-]/g, '')}`}
                  className="flex items-center gap-3 text-sm hover:text-white transition-colors"
                >
                  <Phone size={16} className="text-[#0D9488]" />
                  {SITE_CONFIG.mobile}
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-sm hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-[#0D9488]" />
                  {SITE_CONFIG.email}
                </a>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin size={16} className="text-[#0D9488] mt-0.5" />
                  {SITE_CONFIG.address}
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA & Social */}
            <div>
              <h3 className="font-semibold text-white mb-4">Get in Touch</h3>
              <p className="text-sm text-gray-400 mb-4">
                Ready for a spotless space? Book your cleaning service today.
              </p>
              <button
                onClick={openContactModal}
                className="inline-block bg-[#0D9488] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#0F766E] transition-colors mb-6"
              >
                Book Now
              </button>
              <div className="flex gap-4">
                {SITE_CONFIG.social.facebook && (
                  <a
                    href={SITE_CONFIG.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0D9488] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                )}
                {SITE_CONFIG.social.instagram && (
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0D9488] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <p>
              Professional Cleaning Services in Kathmandu, Nepal
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
