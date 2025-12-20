import { Metadata } from "next";
import { ContactForm } from "@/components/forms";
import { Container } from "@/components/layout/Container";
import { Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Khems Cleaning",
  description:
    "Get in touch with Khems Cleaning for professional cleaning services in Kathmandu. Fill out our contact form and we'll get back to you shortly.",
};

export default function BookPage() {
  return (
    <main className="py-16 md:py-24 bg-gray-50 min-h-screen">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to experience professional cleaning? Fill out the form below
              and our team will contact you to discuss your cleaning needs.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Request a Quote
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#0D9488]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#0D9488]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a
                        href="tel:+977-1-XXXXXXX"
                        className="text-gray-900 font-medium hover:text-[#0D9488]"
                      >
                        +977-1-XXXXXXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#0D9488]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#0D9488]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-gray-900 font-medium">
                        Kathmandu, Nepal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#0D9488]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#0D9488]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Working Hours</p>
                      <p className="text-gray-900 font-medium">
                        Sun - Fri: 7:00 AM - 7:00 PM
                      </p>
                      <p className="text-gray-600 text-sm">
                        Saturday: 8:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0D9488] rounded-2xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Why Choose Us?</h3>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    Professional & trained staff
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    Eco-friendly cleaning products
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    100% satisfaction guarantee
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    Flexible scheduling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    Competitive pricing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
