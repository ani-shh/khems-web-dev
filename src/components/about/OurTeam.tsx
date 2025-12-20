"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Khem Bahadur",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in facility management, Khem founded Khems Cleaning with a vision to revolutionize cleaning services in Nepal.",
    image: null, // Placeholder
  },
  {
    name: "Sita Sharma",
    role: "Operations Manager",
    bio: "Sita ensures seamless operations and maintains the highest quality standards across all our cleaning services.",
    image: null,
  },
  {
    name: "Ram Thapa",
    role: "Training Supervisor",
    bio: "Ram leads our training programs, ensuring every team member is equipped with the latest cleaning techniques and safety protocols.",
    image: null,
  },
  {
    name: "Anita Gurung",
    role: "Customer Relations",
    bio: "Anita is dedicated to ensuring customer satisfaction and building lasting relationships with our valued clients.",
    image: null,
  },
];

const stats = [
  { value: "50+", label: "Team Members" },
  { value: "1000+", label: "Happy Clients" },
  { value: "5000+", label: "Projects Completed" },
  { value: "6+", label: "Years Experience" },
];

export function OurTeam() {
  return (
    <section id="team" className="py-16 md:py-24 bg-gray-50">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#0D9488] font-semibold text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Meet the People Behind Our Success
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dedicated team of professionals is committed to delivering
            exceptional cleaning services with a personal touch.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-6 text-center shadow-sm"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#0D9488] mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image Placeholder */}
              <div className="aspect-square bg-gray-200 relative">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-xs">Photo Placeholder</p>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-[#0D9488] text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0D9488] hover:text-white transition-colors">
                    <Linkedin size={16} />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0D9488] hover:text-white transition-colors">
                    <Mail size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Culture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-white rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join Our Growing Team
              </h3>
              <p className="text-gray-600 mb-6">
                We&apos;re always looking for dedicated individuals who share our passion
                for excellence. At Khems Cleaning, you&apos;ll find a supportive work
                environment, competitive compensation, and opportunities for growth.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#0D9488] rounded-full" />
                  Comprehensive training programs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#0D9488] rounded-full" />
                  Competitive salary and benefits
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#0D9488] rounded-full" />
                  Career advancement opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#0D9488] rounded-full" />
                  Supportive team environment
                </li>
              </ul>
            </div>
            {/* Image Placeholder */}
            <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-sm">Team Photo Placeholder</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
