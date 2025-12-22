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
      className={`absolute ${alignmentClass} mt-4 w-[860px] max-w-[95vw] z-50`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="p-6 bg-white border shadow-2xl rounded-2xl border-slate-200/70 backdrop-blur-sm">
        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((section) => {
            const Icon = getIcon(section.title, parentLabel);
            return (
              <motion.div
                key={section.title}
                className="overflow-hidden transition border group rounded-2xl border-slate-100 hover:border-indigo-200 hover:shadow-xl bg-slate-50/40 hover:bg-white"
                variants={cardVariants}
              >
                <div className="flex gap-3 p-4">
                  <div
                    className={`h-10 w-10 rounded-xl ${gradientBg} flex items-center justify-center shadow-md shadow-indigo-100`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-slate-900">
                      {section.title}
                    </h4>
                    {section.subtitle && (
                      <p className="text-[11px] text-slate-500">
                        {section.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                <div className="border-t bg-white/70 group-hover:bg-white border-slate-100">
                  <ul className="p-3 space-y-2 overflow-y-auto max-h-60">
                    {section.items.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.path}
                          onClick={onNavigate}
                          className="flex items-center justify-between gap-2 px-3 py-2 text-xs rounded-lg text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition"
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

        <div className="flex flex-col gap-3 pt-4 mt-5 text-xs border-t md:flex-row md:items-center md:justify-between border-slate-100">
          <div className="flex items-center gap-2 text-slate-500">
            <BookOpen size={16} />
            <span>
              Discover how we support{" "}
              <strong className="text-slate-700">growth with control</strong>.
            </span>
          </div>

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