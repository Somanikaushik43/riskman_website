// src/pages/industries/IndustriesTemplate.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaLightbulb,
  FaUsers,
  FaFileAlt,
  FaChevronRight,
  FaHome,
  FaShieldAlt,
  FaChartLine,
  FaBriefcase,
  FaGlobe,
  FaCogs,
  FaUserCheck,
  FaCreditCard,
  FaIndustry,
  FaUserTie,
  FaDesktop,
  FaTruck,
  FaTrophy,
  FaAward,
  FaLeaf,
  
} from "react-icons/fa";

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
   ICON MAP FOR WHY PARTNER
======================= */
const iconMap = {
  Briefcase: FaBriefcase,
  Globe: FaGlobe,
  Settings: FaCogs,
  UserCheck: FaUserCheck,
  Shield: FaShieldAlt,
  Users: FaUsers,
  Scale: FaCheckCircle,

  // Automotive / Ecommerce / Industries
  Industry: FaIndustry,
  Global: FaGlobe,
  Business: FaBriefcase,
  User: FaUserTie,

  // 🔥 E-COMMERCE SPECIFIC
  CreditCard: FaCreditCard,

  //HealthCare specific
  FileText:FaFileAlt,
  Monitor:FaDesktop,

  //Reatil Consumer
  Truck:FaTruck,

  //It consulting
  Trophy:FaTrophy,

  //manufacturing
  Award:FaAward,
  Leaf:FaLeaf,
};

/* =======================
   MAIN COMPONENT
======================= */
export default function IndustriesTemplate() {
  const { id } = useParams();
  const [industry, setIndustry] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadJSON() {
      try {
        setLoading(true);
        // Try multiple import paths
        let data;
        try {
          data = await import(`../../data/industries/${id}.json`);
        } catch {
          try {
            data = await import(`/src/data/industries/${id}.json`);
          } catch {
            data = await import(`@/data/industries/${id}.json`);
          }
        }
        setIndustry(data.default);
        setLoading(false);
      } catch (e) {
        console.error("JSON not found for industry:", id, e);
        setError(true);
        setLoading(false);
      }
    }
    loadJSON();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--dark-navy)] flex items-center justify-center">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-16 h-16 border-4 border-[var(--accent-blue)] border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[var(--dark-navy)] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-6 text-center"
        >
          <div className="text-6xl">⚠️</div>
          <h1 className="text-3xl font-bold text-white">Industry Not Found</h1>
          <p className="text-[var(--text-gray)]">
            The industry you're looking for doesn't exist.
          </p>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 px-6 py-3 btn-primary"
          >
            <FaHome /> Back to Industries
          </Link>
        </motion.div>
      </div>
    );
  }

  if (!industry) return null;

  return (
    <div className="min-h-screen bg-[var(--dark-navy)] text-white overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative isolate min-h-[60vh] flex items-center justify-center section-padding overflow-hidden">
        {/* Background Image with Overlay */}
        {industry.headerImage && (
          <div className="absolute inset-0">
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img
                src={industry.headerImage}
                alt={industry.title}
                className="object-cover w-full h-full"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--dark-navy)]/80 via-[var(--dark-navy)]/70 to-[var(--dark-navy)]" />
          </div>
        )}

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
              {industry.heroTagline || "Industry Expertise"}
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-5xl font-bold leading-tight md:text-7xl"
            >
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
                {industry.title}
              </motion.span>
            </motion.h1>

            {/* Stats Display */}
            {industry.stats && (
              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-center gap-3 mb-6"
              >
                <div className="px-6 py-3 border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
                  <span className="text-3xl font-bold text-[var(--accent-blue-light)]">
                    {industry.stats.value}
                  </span>
                  <span className="ml-2 text-sm text-[var(--text-gray)]">
                    {industry.stats.label}
                  </span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="relative section-padding isolate">
        <div className="container max-w-6xl mx-auto">
          {/* ================= INTRODUCTION ================= */}
          {industry.introduction && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaLightbulb className="text-4xl text-[var(--accent-blue-light)]" />
                </motion.div>
                <h2 className="text-3xl font-bold md:text-4xl">
                  {industry.introduction.title || (
                    <>
                      Industry <span className="gradient-text">Overview</span>
                    </>
                  )}
                </h2>
              </div>

              <p className="text-lg text-[var(--text-gray)] leading-relaxed mb-8">
                {industry.introduction.content || industry.introduction}
              </p>

              {/* Sub Image if available */}
              {industry.introduction.subImage && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-8 overflow-hidden rounded-2xl"
                >
                  <img
                    src={industry.introduction.subImage}
                    alt={industry.introduction.title}
                    className="object-cover w-full h-auto"
                  />
                </motion.div>
              )}
            </motion.section>
          )}

          {/* ================= KEY CHALLENGES ================= */}
          {industry.keyChallenges && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaShieldAlt className="text-4xl text-[var(--accent-blue-light)]" />
                </motion.div>
                <h2 className="text-3xl font-bold md:text-4xl">
                  {industry.keyChallenges.title || (
                    <>
                      Key <span className="gradient-text">Challenges</span>
                    </>
                  )}
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {(industry.keyChallenges.list || industry.keyChallenges).map((item, idx) => {
                  const IconComponent = item.icon ? iconMap[item.icon] : FaCheckCircle;
                  return (
                    <motion.div
                      key={idx}
                      variants={scaleIn}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="bg-[var(--dark-navy-light)] backdrop-blur-sm border border-white/5 rounded-2xl p-6 group cursor-pointer relative overflow-hidden hover:border-[var(--accent-blue)]/50 hover:shadow-xl hover:shadow-[var(--accent-blue)]/20 transition-all duration-300"
                    >
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-2xl blur-xl"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.3, transition: { duration: 0.4 } }}
                      />

                      <div className="relative z-10">
                        <div className="flex items-start gap-3 mb-3">
                          <motion.div
                            whileHover={{ scale: 1.3, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <IconComponent className="text-[var(--accent-blue-light)] mt-1 flex-shrink-0" />
                          </motion.div>
                          {item.title && (
                            <h3 className="text-lg font-bold text-white/90 group-hover:text-white">
                              {item.title}
                            </h3>
                          )}
                        </div>
                        <p className="text-[var(--text-gray)] group-hover:text-white/90 leading-relaxed ml-6">
                          {item.text || item.desc || item}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          )}

          {/* ================= SOLUTIONS ================= */}
          {industry.solutions && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaChartLine className="text-4xl text-[var(--accent-blue-light)]" />
                </motion.div>
                <h2 className="text-3xl font-bold md:text-4xl">
                  {industry.solutions.title || (
                    <>
                      Our <span className="gradient-text">Solutions</span>
                    </>
                  )}
                </h2>
              </div>

              <div className="space-y-6">
                {(industry.solutions.list || industry.solutions).map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    {item.link ? (
                      <Link
                        to={item.link}
                        className="block p-6 rounded-2xl bg-[var(--dark-navy-light)] border border-white/5 hover:border-[var(--accent-blue)]/50 hover:shadow-xl hover:shadow-[var(--accent-blue)]/20 transition-all duration-300 group"
                      >
                        <div className="flex items-start gap-4">
                          {item.number && (
                            <span className="flex-shrink-0 text-3xl font-bold gradient-text">
                              {item.number}
                            </span>
                          )}
                          <div className="flex-1">
                            <h3 className="mb-2 text-xl font-semibold text-white/90 group-hover:text-white">
                              {item.title}
                            </h3>
                            <p className="text-[var(--text-gray)] group-hover:text-white/90 leading-relaxed">
                              {item.summary || item.desc}
                            </p>
                          </div>
                          <motion.div
                            className="text-[var(--accent-blue-light)] group-hover:text-white"
                            whileHover={{ x: 5 }}
                          >
                            <FaArrowRight />
                          </motion.div>
                        </div>
                      </Link>
                    ) : (
                      <div className="p-6 rounded-2xl bg-[var(--dark-navy-light)] border border-white/5 hover:border-[var(--accent-blue)]/50 transition-all duration-300">
                        <div className="flex gap-4">
                          {item.number && (
                            <span className="text-3xl font-bold gradient-text">
                              {item.number}
                            </span>
                          )}
                          <div>
                            <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                            <p className="text-[var(--text-gray)] leading-relaxed">
                              {item.summary || item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= WHY PARTNER ================= */}
          {industry.whyPartner && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaUsers className="text-4xl text-[var(--accent-blue-light)]" />
                </motion.div>
                <h2 className="text-3xl font-bold md:text-4xl">
                  {industry.whyPartner.title || (
                    <>
                      Why <span className="gradient-text">Partner with RiskMan</span>
                    </>
                  )}
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {industry.whyPartner.usps.map((item, idx) => {
                  const IconComponent = item.icon ? iconMap[item.icon] : FaBriefcase;
                  return (
                    <motion.div
                      key={idx}
                      variants={scaleIn}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-purple)]/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group cursor-pointer relative overflow-hidden hover:border-[var(--accent-blue)]/50 hover:shadow-xl transition-all duration-300"
                    >
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-2xl blur-xl"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.2, transition: { duration: 0.4 } }}
                      />

                      <div className="relative z-10 text-center">
                        <motion.div
                          className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] flex items-center justify-center mx-auto mb-4"
                          whileHover={{
                            scale: 1.2,
                            rotate: 360,
                            transition: { duration: 0.5 },
                          }}
                        >
                          <IconComponent className="text-2xl text-white" />
                        </motion.div>

                        <h3 className="mb-3 text-lg font-bold text-white/90 group-hover:text-white">
                          {item.title}
                        </h3>

                        <p className="text-sm text-[var(--text-gray)] leading-relaxed group-hover:text-white/90">
                          {item.summary}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          )}

          {/* ================= CLIENT LOGOS ================= */}
          {industry.clientLogos && industry.clientLogos.length > 0 && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">
                Trusted by <span className="gradient-text">Industry Leaders</span>
              </h2>

              <div className="flex flex-wrap items-center justify-center gap-8">
                {industry.clientLogos.map((logo, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[var(--accent-blue)]/50 transition-all duration-300"
                  >
                    <span className="text-lg font-semibold text-white/80">{logo}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= FAQ ================= */}
          {industry.faq && industry.faq.questions && industry.faq.questions.length > 0 && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="mb-8 text-3xl font-bold md:text-4xl">
                {industry.faq.title || (
                  <>
                    Frequently Asked <span className="gradient-text">Questions</span>
                  </>
                )}
              </h2>

              <div className="space-y-4">
                {industry.faq.questions.map((item, idx) => (
                  <motion.details
                    key={idx}
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-[var(--dark-navy-light)] backdrop-blur-sm border border-white/5 rounded-2xl p-6 group cursor-pointer hover:border-[var(--accent-blue)]/50 transition-all duration-300"
                  >
                    <summary className="flex items-start gap-3 text-lg font-semibold list-none cursor-pointer text-white/90 group-hover:text-white">
                      <FaCheckCircle className="text-[var(--accent-blue-light)] mt-1 flex-shrink-0" />
                      <span>{item.q}</span>
                    </summary>
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 ml-8 text-[var(--text-gray)] leading-relaxed"
                    >
                      {item.a}
                    </motion.p>
                  </motion.details>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= RELATED INDUSTRIES ================= */}
          {industry.relatedIndustries && industry.relatedIndustries.length > 0 && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="mb-8 text-3xl font-bold md:text-4xl">
                Related <span className="gradient-text">Industries</span>
              </h2>

              <div className="grid gap-6 md:grid-cols-3">
                {industry.relatedIndustries.map((item, idx) => (
                  <Link key={idx} to={`/industries/${item.id}`}>
                    <motion.div
                      variants={scaleIn}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-[var(--dark-navy-light)] backdrop-blur-sm border border-white/5 rounded-2xl p-6 group cursor-pointer relative overflow-hidden hover:border-[var(--accent-blue)]/50 hover:shadow-xl transition-all duration-300 h-full"
                    >
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-2xl blur-xl"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.3, transition: { duration: 0.4 } }}
                      />

                      <div className="relative z-10">
                        <h3 className="text-lg font-bold text-[var(--accent-blue-light)] group-hover:text-white mb-2">
                          {item.label}
                        </h3>
                        {item.desc && (
                          <p className="text-sm text-[var(--text-gray)] group-hover:text-white/90 leading-relaxed">
                            {item.desc}
                          </p>
                        )}
                        <motion.div
                          className="flex items-center gap-2 text-sm font-semibold text-[var(--accent-blue-light)] group-hover:text-white mt-4"
                          whileHover={{ x: 5 }}
                        >
                          Explore Industry <FaArrowRight size={12} />
                        </motion.div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= CTA ================= */}
          {industry.cta && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-3xl p-10 md:p-12 text-center relative overflow-hidden shadow-2xl"
              >
                {/* Animated background particles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-white/30"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${10 + i * 20}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}

                <div className="relative z-10">
                  <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                    {industry.cta.heading}
                  </h2>
                  <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-white/90">
                    {industry.cta.text}
                  </p>
                  <motion.a
                    href={industry.cta.link || "/contact"}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[var(--dark-navy)] font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 40px rgba(255, 255, 255, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {industry.cta.button || "Get Started"}
                    <FaArrowRight />
                  </motion.a>
                </div>
              </motion.div>
            </motion.section>
          )}
        </div>
      </section>
    </div>
  );
}