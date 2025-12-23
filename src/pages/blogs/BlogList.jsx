import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCalendar,
  FaClock,
  FaChevronRight,
} from "react-icons/fa";
import blogs from "../../data/blogs.json";

/* =======================
   ANIMATIONS (SAME STYLE)
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};


const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const heroStagger = {
  animate: {
    transition: { staggerChildren: 0.15 }
  }
};

const fadeInUpSoft = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};




export default function BlogList() {
  return (
    <div className="min-h-screen bg-[var(--dark-navy)] text-white overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden text-center isolate section-padding">
        {/* <div className="bg-glow-blue absolute top-[-200px] right-[-120px]" /> */}

         <motion.div
    className="bg-glow-blue absolute top-[-200px] right-[-120px]"
    animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  />
        {/* <div className="bg-glow-purple absolute bottom-[-180px] left-[-120px]" /> */}

        <motion.div
    className="bg-glow-purple absolute bottom-[-180px] left-[-120px]"
    animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.5, 0.25] }}
    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
  />

        <motion.div
          initial="initial"
          animate="animate"
          variants={heroStagger}
          className="relative z-10 max-w-4xl mx-auto"
        >
          {/* <p className="text-[var(--accent-blue-light)] uppercase tracking-widest font-semibold mb-4">
            Insights
          </p> */}

          <motion.p
          variants={fadeInUpSoft}
          className="text-[var(--accent-blue-light)] uppercase tracking-widest font-semibold mb-4"
         >
         Insights
         </motion.p>
          {/* <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl"> */}

          <motion.h1
      variants={fadeInUpSoft}
      className="mb-6 text-5xl font-bold leading-tight md:text-6xl"
    >
      Knowledge{" "}
      <motion.span
        className="gradient-text"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      >
        Hub
      </motion.span>
    </motion.h1>
            {/* Knowledge <span className="gradient-text">Hub</span> */}
          {/* </h1> */}
          {/* <p className="text-lg text-[var(--text-gray)] max-w-2xl mx-auto">
            Expert perspectives on risk management, compliance, cybersecurity,
            and digital transformation.
          </p> */}
          <motion.p
      variants={fadeInUpSoft}
      className="text-lg text-[var(--text-gray)] max-w-2xl mx-auto"
    >
      Expert perspectives on risk management, compliance, cybersecurity,
      and digital transformation.
    </motion.p>
        </motion.div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="relative section-padding isolate">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true,margin:"-80px" }}
          >
            {blogs.map((blog, i) => (
              <motion.article
                key={blog.id}
                variants={scaleIn}
                transition={{ delay: i * 0.12 }}
                className="group bg-[var(--dark-navy-light)] rounded-3xl border border-white/5 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[var(--accent-blue)]/30 transition-all duration-500"
              >
                <Link to={`/blog/${blog.slug}`} className="block h-full">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={blog.featuredImage}
                      alt={blog.title}
                      className="object-cover w-full h-full"
                      whileHover={{ scale: 1.12 }}
                      transition={{ duration: 0.6 }}
                    />

                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] text-xs font-bold">
                      {blog.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col h-full p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--accent-blue-light)] transition">
                      {blog.title}
                    </h3>

                    <p className="text-[var(--text-gray)] mb-5 line-clamp-3">
                      {blog.shortDescription}
                    </p>

                    <div className="flex items-center justify-between text-xs text-[var(--text-gray)] mb-5">
                      <div className="flex items-center gap-2">
                        <FaCalendar size={12} />
                        {blog.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock size={12} />
                        {blog.readTime}
                      </div>
                    </div>

                    <div className="mt-auto flex items-center font-bold text-[var(--accent-blue-light)] group-hover:text-white transition">
                      Read More
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 6, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <FaChevronRight size={14} />
                      </motion.span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
