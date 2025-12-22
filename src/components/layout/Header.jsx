// src/components/layout/Header.jsx
import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import menus from "../../data/menus.json";
import MegaMenu from "./MegaMenu";
import { Menu, X, ChevronDown, ArrowRight, Phone } from "lucide-react";


const { mainNav, servicesMegaMenu, industriesMegaMenu, insightsMegaMenu } = menus;

const gradientBg = "bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600";
const activeLinkClasses = "text-indigo-600 font-semibold relative";

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2 },
  },
};

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpenMenu, setDesktopOpenMenu] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdownOpen({});
    setDesktopOpenMenu(null);
  }, [location.pathname]);

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const handleMenuEnter = (label) => {
    if (window.innerWidth >= 768) {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      setDesktopOpenMenu(label);
    }
  };

  const handleMenuLeave = () => {
    if (window.innerWidth >= 768) {
      closeTimeoutRef.current = setTimeout(() => {
        setDesktopOpenMenu(null);
      }, 150);
    }
  };

  const closeMenuImmediately = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setDesktopOpenMenu(null);
  };

  const toggleMobileDrop = (label) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const getMegaData = (key) => {
    if (key === "services") return servicesMegaMenu;
    if (key === "industries") return industriesMegaMenu;
    if (key === "insights") return insightsMegaMenu;
    return [];
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-black"
          : "bg-[#05051e]"
      }`}
    >
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="flex items-center justify-between py-3 lg:py-4">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2 transition-transform hover:scale-105"
            onClick={() => {
              setMobileOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src="./rm.png"
              alt="RiskMan Logo"
              className="object-contain w-auto h-10 md:h-12"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="items-center hidden gap-8 md:flex lg:gap-10">
            {mainNav.map((item) => {
              // SIMPLE LINKS
              if (item.type === "link") {
                return (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className={({ isActive }) =>
                      `relative text-sm font-medium text-white hover:text-indigo-600 transition-colors duration-200 ${
                        isActive ? activeLinkClasses : ""
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {isActive && (
                          <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"
                            layoutId="activeTab"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                );
              }

              // DROPDOWN MENUS
              if (item.type === "dropdown") {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleMenuEnter(item.label)}
                    onMouseLeave={handleMenuLeave}
                  >
                    <button 
                      className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 text-slate-700 hover:text-indigo-600"
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          desktopOpenMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {desktopOpenMenu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute right-0 w-56 py-2 mt-3 overflow-hidden bg-white border shadow-xl border-slate-200 rounded-xl"
                          onMouseEnter={() => handleMenuEnter(item.label)}
                          onMouseLeave={handleMenuLeave}
                        >
                          {item.items.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.path}
                              onClick={closeMenuImmediately}
                              className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // MEGA MENUS
              if (item.type === "mega") {
                const megaSections = getMegaData(item.key);

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleMenuEnter(item.label)}
                    onMouseLeave={handleMenuLeave}
                  >
                    <button 
                      className="flex items-center gap-1 text-sm font-medium text-white transition-colors duration-200 hover:text-indigo-600"
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          desktopOpenMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {desktopOpenMenu === item.label && (
                        <MegaMenu
                          sections={megaSections}
                          parentLabel={item.label}
                          onNavigate={closeMenuImmediately}
                          align="center"
                          ctaLink={item.key === "services" ? "/contact" : "/about"}
                          onMouseEnter={() => handleMenuEnter(item.label)}
                          onMouseLeave={handleMenuLeave}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return null;
            })}
          </nav>

          {/* DESKTOP CTA BUTTON */}
          <div className="items-center hidden gap-3 md:flex">
            <Link
              to="/contact"
              className={`group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white ${gradientBg} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <Phone size={16} className="transition-transform group-hover:scale-110" />
              <span>Speak to Expert</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="relative p-2.5 rounded-lg md:hidden text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={toggleMobile}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={mobileOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden bg-white border-t shadow-xl md:hidden border-slate-200"
          >
            <div className="px-4 sm:px-6 py-4 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
              {mainNav.map((item, idx) => {
                // SIMPLE LINK
                if (item.type === "link") {
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <NavLink
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `block py-3 px-3 text-base font-medium rounded-lg transition-colors ${
                            isActive
                              ? "bg-indigo-50 text-indigo-600"
                              : "text-slate-800 hover:bg-slate-50"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </motion.div>
                  );
                }

                // DROPDOWNS & MEGAS
                if (item.type === "dropdown" || item.type === "mega") {
                  const isOpen = mobileDropdownOpen[item.label];
                  const megaData =
                    item.type === "mega" ? getMegaData(item.key) : null;

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <button
                        className="flex items-center justify-between w-full px-3 py-3 text-base font-medium transition-colors rounded-lg text-slate-800 hover:bg-slate-50"
                        onClick={() => toggleMobileDrop(item.label)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-2 pl-4 mt-1 space-y-1">
                              {item.type === "dropdown" &&
                                item.items.map((sub) => (
                                  <Link
                                    key={sub.label}
                                    to={sub.path}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-3 py-2 text-sm transition-colors rounded-lg text-slate-600 hover:text-indigo-600 hover:bg-indigo-50"
                                  >
                                    {sub.label}
                                  </Link>
                                ))}

                              {item.type === "mega" &&
                                megaData.map((section) => (
                                  <div key={section.title} className="mt-3">
                                    <div className="px-3 mb-2 text-xs font-semibold uppercase text-slate-500">
                                      {section.title}
                                    </div>
                                    {section.items.map((link) => (
                                      <Link
                                        key={link.label}
                                        to={link.path}
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center gap-2 px-3 py-2 text-sm transition-colors rounded-lg text-slate-600 hover:text-indigo-600 hover:bg-indigo-50"
                                      >
                                        <ArrowRight size={14} className="text-indigo-400" />
                                        {link.label}
                                      </Link>
                                    ))}
                                  </div>
                                ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return null;
              })}

              {/* MOBILE CTA */}
              <motion.div
                className="pt-4 mt-6 border-t border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={`group flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white ${gradientBg} shadow-lg`}
                >
                  <Phone size={18} />
                  <span>Speak to Expert</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}