// src/components/layout/MegaMenu.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Globe2,
  Building2,
  Factory,
  ShoppingBag,
  Users,
  BookOpen,
  Mail,
  ArrowRight,
} from "lucide-react";

const gradientBg = "bg-gradient-to-r from-indigo-500 via-sky-500 to-blue-500";

const containerVariants = {
  initial: { opacity: 0, y: 8, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.15 } },
};

const cardVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const getIcon = (title, parentLabel) => {
  const t = title.toLowerCase();
  const p = parentLabel.toLowerCase();

  if (p.includes("services")) {
    if (t.includes("governance")) return Shield;
    if (t.includes("consulting")) return Globe2;
    return Shield;
  }

  if (p.includes("industries")) {
    if (t.includes("core")) return Building2;
    if (t.includes("commerce")) return ShoppingBag;
    if (t.includes("manufacturing")) return Factory;
    return Users;
  }

  return Users;
};

export default function MegaMenu({
  sections = [],
  parentLabel = "",
  onNavigate,
  align = "center",
  ctaLink,
  onMouseEnter,
  onMouseLeave,
}) {
  const alignmentClass =
    align === "left"
      ? "left-0"
      : align === "right"
      ? "right-0"
      : "left-1/2 -translate-x-1/2";

  const ctaHref =
    ctaLink ||
    (parentLabel.toLowerCase().includes("service") ? "/contact" : "/about");

  return (
    <motion.div
      key="mega"
      // className={`absolute ${alignmentClass} mt-4 w-[860px] max-w-[95vw] z-50`}

      className={`absolute ${alignmentClass} mt-4 max-w-[95vw] z-50`}
              style={{
                width:
                  sections.length === 1
                    ? "360px"
                    : sections.length === 2
                    ? "560px"
                    : "860px",
              }}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* <div className="p-6 bg-[#0B1220] shadow-2xl -translate-x-72 rounded-2xl border border-white/10"> */}
      <div
          className="p-6 rounded-2xl -translate-x-72 bg-white/5 backdrop-blur-2xl border order-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">


      <div className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
          {sections.map((section) => {
            const Icon = getIcon(section.title, parentLabel);
            return (
              <motion.div
                key={section.title}
                // className="overflow-hidden transition-all duration-300 bg-gray-800 group rounded-2xl backdrop-blur-xl"

                className="
  overflow-hidden rounded-2xl bg-white/6 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40  hover:shadow-[0_12px_40px_rgba(99,102,241,0.25)]"
                variants={cardVariants}
              >
                <div className="flex gap-3 p-4">
                   <div
                    // className={`h-10 w-10 rounded-xl ${gradientBg} flex items-center justify-center shadow-md shadow-indigo-100`}
                    className="flex items-center justify-center w-10 h-10 shadow-lg rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-blue-500 shadow-indigo-500/30"
                  > 
                  

                  
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-white/90">
                      {section.title}
                    </h4>
                    {section.subtitle && (
                      <p className="text-[11px] text-white/60">
                        {section.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* <div className="border-t bg-white/70 group-hover:bg-white border-slate-100"> */}
                {/* <div className="bg-gray-800 backdrop-blur-md"> */}
                {/* <div className="bg-[#0F172A] border-t border-white/5"> */}
                <div className="border-t bg-white/5 backdrop-blur-md border-white/10">



                  <ul className="p-3 space-y-2 overflow-y-auto max-h-60">
                    {section.items.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.path}
                          onClick={onNavigate}
                          // className="flex items-center justify-between gap-2 px-3 py-2 text-xs transition rounded-lg text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
                          // className="flex items-center justify-between gap-2 px-3 py-2 text-xs transition rounded-lg text-slate-300 hover:bg-indigo-500/10 hover:text-indigo-300"
                          className="flex items-center justify-between gap-2 px-3 py-2 text-xs transition rounded-lg  text-white/80 hover:bg-white/10 hover:text-indigo-300"

                        >
                          <span className="truncate">{link.label}</span>
                          <ArrowRight size={14} className="shrink-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 pt-4 mt-5 text-xs md:flex-row md:items-center md:justify-between">
          {/* <div className="flex items-center gap-2 text-slate-500">
            <BookOpen size={16} />
            <span>
              Discover how we support{" "}
              <strong className="text-slate-700">growth with control</strong>.
            </span>
          </div> */}

          <Link
            to={ctaHref}
            onClick={onNavigate}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-white text-[12px] ${gradientBg} shadow-md hover:shadow-lg`}
          >
            <Mail size={13} />
            Talk to Team
          </Link>
        </div>
      </div>
    </motion.div>
  );
}