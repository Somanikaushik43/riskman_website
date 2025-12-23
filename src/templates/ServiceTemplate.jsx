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
} from "react-icons/fa";

/* =======================
   ANIMATIONS
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
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
   BREADCRUMB COMPONENT
======================= */
// const Breadcrumbs = ({ items }) => (
//   <motion.nav
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     className="flex items-center gap-2 text-sm text-[var(--text-gray)] mb-8"
//   >
//     {items.map((item, index) => (
//       <div key={index} className="flex items-center gap-2">
//         {index > 0 && <FaChevronRight size={12} className="text-white/30" />}
//         {item.href ? (
//           <Link
//             to={item.href}
//             className="hover:text-[var(--accent-blue-light)] transition-colors"
//           >
//             {item.label}
//           </Link>
//         ) : (
//           <span className="text-white/60">{item.label}</span>
//         )}
//       </div>
//     ))}
//   </motion.nav>
// );

/* =======================
   MAIN COMPONENT
======================= */
export default function ServiceTemplate() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadJSON() {
      try {
        setLoading(true);
        const data = await import(`../data/services/${id}.json`);
        setService(data.default);
        setLoading(false);
      } catch (e) {
        console.error("JSON not found for service:", id);
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
          <h1 className="text-3xl font-bold text-white">Service Not Found</h1>
          <p className="text-[var(--text-gray)]">
            The service you're looking for doesn't exist.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 btn-primary"
          >
            <FaHome /> Back to Services
          </Link>
        </motion.div>
      </div>
    );
  }

  if (!service) return null;

  return (
    <div className="min-h-screen overflow-x-hidden text-white bg-black">
      {/* ================= HERO ================= */}
      <section className="relative isolate min-h-[60vh] flex items-center justify-center section-padding overflow-hidden">
        {/* Background Image with Overlay */}
        {(service.hero?.image || service.hero?.headerImage || service.headerImage) && (
          <div className="absolute inset-0">
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img
                src={service.hero?.image || service.hero?.headerImage || service.headerImage}
                alt={service.title}
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
              {service.hero?.tagline || "Enterprise Services"}
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
                {service.title}
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-[var(--text-gray)] max-w-3xl mx-auto leading-relaxed"
            >
              {service.hero?.subheading || service.summary}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="relative section-padding isolate">
        <div className="container max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          {/* <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title, href: null },
            ]}
          /> */}

          {/* ================= OFFERINGS ================= */}
          {service.offerings && (
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
                  Our <span className="gradient-text">Offerings & Solutions</span>
                </h2>
              </div>

              <p className="text-lg text-[var(--text-gray)] mb-8 leading-relaxed">
                {service.offerings.intro}
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {service.offerings.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="bg-zinc-800 backdrop-blur-sm border border-white/5 rounded-2xl p-6 group cursor-pointer relative overflow-hidden hover:border-[var(--accent-blue)]/50 hover:shadow-xl hover:shadow-[var(--accent-blue)]/20 transition-all duration-300"
                  >
                    {/* Glow effect */}
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
                          <FaCheckCircle className="text-[var(--accent-blue-light)] mt-1 flex-shrink-0" />
                        </motion.div>
                        <h3 className="text-lg font-bold text-white/90 group-hover:text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[var(--text-gray)] group-hover:text-white/90 leading-relaxed ml-6">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= CLIENT SUCCESS ================= */}
          {service.clientSuccess && service.clientSuccess.length > 0 && (
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
                  Client <span className="gradient-text">Success Stories</span>
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {service.clientSuccess.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="bg-zinc-800 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group cursor-pointer relative overflow-hidden hover:border-[var(--accent-blue)]/50 hover:shadow-xl transition-all duration-300"
                  >
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-2xl blur-xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.2, transition: { duration: 0.4 } }}
                    />

                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-[var(--accent-blue-light)] mb-3 group-hover:text-white">
                        {item.title}
                      </h3>
                      <p className="leading-relaxed text-white group-hover:text-white/90">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= RESOURCES ================= */}
          {service.resources && service.resources.length > 0 && (
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
                  <FaFileAlt className="text-4xl text-[var(--accent-blue-light)]" />
                </motion.div>
                <h2 className="text-3xl font-bold md:text-4xl">
                  <span className="gradient-text">Resources</span>
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {service.resources.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-zinc-800 backdrop-blur-sm border border-white/5 rounded-2xl p-6 group cursor-pointer relative overflow-hidden hover:border-[var(--accent-blue)]/50 hover:shadow-xl transition-all duration-300"
                  >
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-2xl blur-xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.3, transition: { duration: 0.4 } }}
                    />

                    <div className="relative z-10 text-center">
                      <h3 className="mb-3 text-lg font-bold text-white/90 group-hover:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--text-gray)] group-hover:text-white/90 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= WHY RISKMAN ================= */}
          {service.whyRiskMan && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-[var(--accent-blue)]/20 to-[var(--accent-purple)]/20 backdrop-blur-sm border border-white/10 rounded-3xl p-10 relative overflow-hidden"
              >
                <motion.div
                  className="absolute -inset-1 bg-zinc-800 rounded-3xl blur-2xl"
                  initial={{ opacity: 0.2 }}
                  whileHover={{ opacity: 0.4, transition: { duration: 0.4 } }}
                />

                <div className="relative z-10">
                  <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                    Why <span className="gradient-text">RiskMan?</span>
                  </h2>
                  <p className="text-lg leading-relaxed text-white">
                    {service.whyRiskMan}
                  </p>
                </div>
              </motion.div>
            </motion.section>
          )}

          {/* ================= RELATED OFFERINGS ================= */}
          {service.relatedOfferings && service.relatedOfferings.length > 0 && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="mb-8 text-3xl font-bold md:text-4xl">
                Related <span className="gradient-text">Offerings</span>
              </h2>

              <div className="grid gap-6 md:grid-cols-3">
                {service.relatedOfferings.map((item, idx) => (
                  <Link key={idx} to={`/services/${item.id}`}>
                    <motion.div
                      variants={scaleIn}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative h-full p-6 overflow-hidden transition-all duration-300 border cursor-pointer bg-zinc-800 backdrop-blur-sm border-white/5 rounded-2xl group hover:shadow-xl"
                    >
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-2xl blur-xl"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.3, transition: { duration: 0.4 } }}
                      />

                      <div className="relative z-10">
                        <h3 className="mb-2 text-lg font-bold text-white group-hover:text-indigo-600">
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
                          Learn More <FaArrowRight size={12} />
                        </motion.div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= FAQ ================= */}
          {service.faqs && service.faqs.length > 0 && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="mb-8 text-3xl font-bold md:text-4xl">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>

              <div className="space-y-4">
                {service.faqs.map((item, idx) => (
                  <motion.details
                    key={idx}
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-zinc-800 backdrop-blur-sm border border-white/5 rounded-2xl p-6 group cursor-pointer hover:border-[var(--accent-blue)]/50 transition-all duration-300"
                  >
                    <summary className="flex items-start gap-3 text-lg font-semibold list-none cursor-pointer text-white/90 group-hover:text-indigo-600">
                      <FaCheckCircle className="flex-shrink-0 mt-1 text-indigo-600" />
                      <span>{item.q}</span>
                    </summary>
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 ml-8 leading-relaxed text-white"
                    >
                      {item.a}
                    </motion.p>
                  </motion.details>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= CTA ================= */}
          {service.cta && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative p-10 overflow-hidden text-center bg-black shadow-2xl rounded-3xl md:p-12"
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
                    {service.cta.heading}
                  </h2>
                  <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-white/90">
                    {service.cta.text}
                  </p>
                  <motion.a
                    href={service.cta.link || "/contact"}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-indigo-600 text-[var(--dark-navy)] font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 40px rgba(255, 255, 255, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {service.cta.button || "Get Started"}
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