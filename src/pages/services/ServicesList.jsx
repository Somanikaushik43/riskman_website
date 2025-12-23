import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaChartLine,
  FaFileContract,
  FaLightbulb,
  FaGraduationCap,
  FaSearch,
  FaLeaf,
  FaCog,
  FaBalanceScale,
  FaUserShield,
  FaClipboardCheck,
  FaHandshake,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import allServices from "../../data/services-master-list.json";

/* =======================
   ANIMATIONS
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

/* =======================
   SERVICE ICONS MAP
======================= */
const serviceIcons = {
  "risk-advisory": <FaShieldAlt className="text-3xl" />,
  consulting: <FaLightbulb className="text-3xl" />,
  "outsourcing-training": <FaGraduationCap className="text-3xl" />,
  "esg-advisory": <FaLeaf className="text-3xl" />,
  "financial-advisory": <FaChartLine className="text-3xl" />,
  "forensic-investigation": <FaSearch className="text-3xl" />,
  "soc-services": <FaShieldAlt className="text-3xl" />,
  "iso-certifications": <FaFileContract className="text-3xl" />,
  "pci-dss-compliance": <FaClipboardCheck className="text-3xl" />,
  tprm: <FaHandshake className="text-3xl" />,
  "itgc-itac": <FaCog className="text-3xl" />,
  "bcp-dr": <FaShieldAlt className="text-3xl" />,
  "it-risk-management": <FaChartLine className="text-3xl" />,
  cybersecurity: <FaUserShield className="text-3xl" />,
  "data-privacy": <FaBalanceScale className="text-3xl" />,
};

const gradients = [
  "from-blue-600 to-indigo-600",
  "from-indigo-600 to-purple-600",
  "from-purple-600 to-pink-600",
  "from-green-600 to-emerald-600",
  "from-orange-600 to-red-600",
  "from-red-600 to-rose-600",
  "from-cyan-600 to-blue-600",
  "from-teal-600 to-green-600",
];

/* =======================
   SERVICE CARD COMPONENT
======================= */
const ServiceCard = ({ service, index }) => {
  const icon = serviceIcons[service.id] || <FaShieldAlt className="text-3xl" />;
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      variants={scaleIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/services/${service.id}`}>
        <motion.div
          whileHover={{ scale: 1.05, y: -8 }}
          className="bg-[var(--dark-navy-light)] backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden h-full relative cursor-pointer transition-all duration-500 hover:border-[var(--accent-blue)]/50 hover:shadow-2xl hover:shadow-[var(--accent-blue)]/30"
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br rounded-2xl"
            initial={{ opacity: 0 }}
            whileHover={{
              opacity: 0.15,
              background:
                "linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-purple) 100%)",
              transition: { duration: 0.5 },
            }}
          />

          {/* Glow effect */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-2xl blur-xl"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.4, transition: { duration: 0.4 } }}
          />

          {/* Image Section */}
          {service.headerImage && (
            <div className="relative h-48 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[var(--dark-navy-light)] to-transparent z-10"
                initial={{ opacity: 0.5 }}
                whileHover={{ opacity: 0.7 }}
              />
              <motion.img
                src={service.headerImage}
                alt={service.title}
                className="object-cover w-full h-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          )}

          {/* Content */}
          <div className="relative z-10 p-6 space-y-4">
            {/* Icon */}
            <motion.div
              className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center group-hover:shadow-2xl`}
              whileHover={{
                scale: 1.15,
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 },
              }}
            >
              {icon}
            </motion.div>

            {/* Title */}
            <motion.h3
              className="text-xl font-bold text-white/90 group-hover:text-white"
              whileHover={{ x: 5, transition: { duration: 0.3 } }}
            >
              {service.title}
            </motion.h3>

            {/* Summary */}
            <p className="text-sm text-[var(--text-gray)] leading-relaxed group-hover:text-white/90 line-clamp-3">
              {service.summary}
            </p>

            {/* Learn More */}
            <motion.div
              className="pt-4 transition-colors duration-300 border-t border-white/10 group-hover:border-white/30"
              whileHover={{ borderColor: "rgba(255, 255, 255, 0.5)" }}
            >
              <motion.div
                className="flex items-center gap-2 text-[var(--accent-blue-light)] font-semibold group-hover:text-white"
                whileHover={{
                  x: 5,
                  transition: { duration: 0.3 },
                }}
              >
                Learn More
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  <FaArrowRight size={14} />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

/* =======================
   MAIN COMPONENT
======================= */
export default function ServicesList() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "risk", label: "Risk & Compliance" },
    { id: "technology", label: "Technology" },
    { id: "advisory", label: "Advisory" },
  ];

  return (
    <div className="min-h-screen bg-[var(--dark-navy)] text-white overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative isolate min-h-[60vh] flex items-center justify-center section-padding overflow-hidden">
        <motion.div
          className="bg-glow-blue absolute top-[-200px] right-[-100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="bg-glow-purple absolute bottom-[-150px] left-[-150px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />

        <div className="container relative z-10 max-w-6xl mx-auto">
          <motion.div
            className="text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="text-[var(--accent-blue-light)] text-lg mb-4 tracking-wide uppercase font-semibold"
            >
              RiskMan Services
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-5xl font-bold leading-tight md:text-7xl"
            >
              Comprehensive
              <br />
              <motion.span
                className="gradient-text"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Risk & Compliance Solutions
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-[var(--text-gray)] max-w-3xl mx-auto leading-relaxed"
            >
              Enterprise-grade advisory across risk, audit, cybersecurity, and
              assurance
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="relative section-padding isolate">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Our <span className="gradient-text">Service Offerings</span>
            </h2>
            <p className="text-lg text-[var(--text-gray)] max-w-3xl mx-auto">
              Discover how RiskMan services and solutions help you turn risk
              into resilience and growth
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE RISKMAN ================= */}
      <section className="relative section-padding isolate">
        <div className="bg-glow-purple absolute top-[100px] right-[-200px]" />

        <div className="container mx-auto max-w-7xl">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-16 text-4xl font-bold text-center md:text-5xl"
          >
            Why Choose
            <br />
            <span className="gradient-text">RiskMan</span>
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <FaShieldAlt className="text-3xl" />,
                title: "Tailored Expertise",
                desc: "Custom solutions designed for your unique business challenges",
              },
              {
                icon: <FaLightbulb className="text-3xl" />,
                title: "Innovative Approach",
                desc: "Leveraging cutting-edge methodologies and technologies",
              },
              {
                icon: <FaCheckCircle className="text-3xl" />,
                title: "Proven Results",
                desc: "Track record of delivering measurable outcomes",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className="bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-purple)]/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center group relative overflow-hidden cursor-pointer"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-2xl blur-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3, transition: { duration: 0.4 } }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] flex items-center justify-center mx-auto mb-4"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 },
                    }}
                  >
                    {item.icon}
                  </motion.div>

                  <h3 className="mb-3 text-xl font-bold text-white/90 group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[var(--text-gray)] leading-relaxed group-hover:text-white/90">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section-padding text-center bg-gradient-to-b from-transparent to-[var(--dark-navy-light)] relative isolate">
        <div className="bg-glow-blue absolute top-[50px] left-[-100px]" />

        <div className="container relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold md:text-5xl">
              Partner with RiskMan for
              <br />
              <motion.span
                className="gradient-text"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Measurable Resilience
              </motion.span>
            </h2>

            <p className="text-xl text-[var(--text-gray)] max-w-3xl mx-auto">
              Proven frameworks, pragmatic execution, and a client-first
              approach to safeguard and grow your business
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["Tailored Expertise", "Innovative Approach", "Proven Results"].map(
                (item, i) => (
                  <motion.span
                    key={i}
                    className="px-6 py-3 font-semibold border rounded-full bg-white/10 backdrop-blur-sm border-white/20"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {item}
                  </motion.span>
                )
              )}
            </div>

            <motion.div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg btn-primary"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(99, 179, 237, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Speak to an Expert
                <FaArrowRight />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}