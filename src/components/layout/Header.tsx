"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import { ServicesMegaMenu } from "./ServicesMegaMenu";
import { cn } from "@/lib/cn";
import { NAV_LINKS, SITE_CONFIG, NavLink } from "@/lib/constants";
import { serviceCategories } from "@/data/serviceCategories";
import { useContactModal } from "@/components/providers";

function NavDropdown({ link }: { link: NavLink }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={link.href}
        className="flex items-center gap-1 text-gray-900 hover:text-gray-600 font-semibold transition-colors px-4 py-2"
      >
        {link.label}
        <ChevronDown
          size={16}
          className={cn("transition-transform duration-200", isOpen && "rotate-180")}
        />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 pt-2 z-50"
          >
            <div className="w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
              {link.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  <span className="block text-gray-900 font-medium text-sm">{child.label}</span>
                  {child.description && (
                    <span className="block text-gray-500 text-xs mt-0.5">{child.description}</span>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ServicesNavItem() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center gap-1 text-gray-900 hover:text-gray-600 font-semibold transition-colors px-4 py-2"
      >
        Services
        <ChevronDown
          size={16}
          className={cn("transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {isOpen && <ServicesMegaMenu onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const { openContactModal } = useContactModal();

  const toggleMobileDropdown = (label: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo.png?v=2"
              alt={SITE_CONFIG.name}
              width={180}
              height={60}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Center/Right */}
          <div className="hidden lg:flex items-center">
            {NAV_LINKS.map((link) =>
              link.label === "Services" ? (
                <ServicesNavItem key={link.label} />
              ) : link.hasDropdown ? (
                <NavDropdown key={link.label} link={link} />
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-900 hover:text-gray-600 font-semibold transition-colors px-4 py-2"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right Section - Phone + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Phone Number */}
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/[\s-]/g, '')}`}
              className="flex items-center gap-2 text-[#0D9488] font-semibold hover:text-[#0F766E] transition-colors"
            >
              <Phone size={18} />
              <span>{SITE_CONFIG.phone}</span>
            </a>

            {/* Contact CTA Button */}
            <button
              onClick={openContactModal}
              className="bg-[#0D9488] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#0F766E] transition-colors"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-900 hover:text-gray-600"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <Container>
              <div className="py-4 space-y-1">
                {NAV_LINKS.map((link) =>
                  link.label === "Services" ? (
                    // Services with mega menu style for mobile
                    <div key={link.label}>
                      <button
                        onClick={() => toggleMobileDropdown(link.label)}
                        className="flex items-center justify-between w-full py-3 px-4 text-gray-900 font-semibold rounded-lg hover:bg-gray-50"
                      >
                        {link.label}
                        <ChevronDown
                          size={18}
                          className={cn(
                            "transition-transform duration-200",
                            mobileOpenDropdown === link.label && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileOpenDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.15 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-2 py-2 space-y-4">
                              {serviceCategories.map((category) => (
                                <div key={category.id}>
                                  <span className="block px-4 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    {category.label}
                                  </span>
                                  <div className="mt-1 space-y-0.5">
                                    {category.services.map((service) => (
                                      <Link
                                        key={service.id}
                                        href={service.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block py-2 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors text-sm"
                                      >
                                        {service.title}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : link.hasDropdown ? (
                    <div key={link.label}>
                      <button
                        onClick={() => toggleMobileDropdown(link.label)}
                        className="flex items-center justify-between w-full py-3 px-4 text-gray-900 font-semibold rounded-lg hover:bg-gray-50"
                      >
                        {link.label}
                        <ChevronDown
                          size={18}
                          className={cn(
                            "transition-transform duration-200",
                            mobileOpenDropdown === link.label && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileOpenDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.15 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 py-2 space-y-1">
                              {link.children?.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block py-2.5 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 px-4 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                )}

                {/* Mobile Phone + CTA */}
                <div className="pt-4 mt-4 border-t border-gray-100 space-y-3">
                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/[\s-]/g, '')}`}
                    className="flex items-center gap-2 py-3 px-4 text-[#0D9488] font-semibold"
                  >
                    <Phone size={18} />
                    {SITE_CONFIG.phone}
                  </a>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      openContactModal();
                    }}
                    className="block w-full py-3 px-4 bg-[#0D9488] text-white text-center font-semibold rounded-full hover:bg-[#0F766E] transition-colors"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
