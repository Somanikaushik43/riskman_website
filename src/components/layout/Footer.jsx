import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  ChevronUp,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [open, setOpen] = useState({
    services: false,
    industries: false,
    company: false,
  });
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Show scroll to top button when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
    alert("Thank you for subscribing!");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const gradientText =
    "bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent";

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/riskman", label: "LinkedIn" },
    { icon: Facebook, href: "https://facebook.com/riskman", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/riskman", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/riskman", label: "Instagram" },
  ];

  return (
    <footer className="relative pt-20 pb-10 bg-black text-slate-700">
      
      {/* TOP GRADIENT BORDER */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 via-cyan-500 to-blue-600"></div> */}
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bg-indigo-100 rounded-full top-20 right-10 w-96 h-96 blur-3xl opacity-20"></div>
        <div className="absolute rounded-full bottom-20 left-10 w-96 h-96 bg-cyan-100 blur-3xl opacity-20"></div>
      </div>

      <div className="relative w-full max-w-[1280px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">

          {/* LOGO + DESCRIPTION */}
          <motion.div 
            className="text-center lg:col-span-2 lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="inline-block">
              <img
                src="./rm.png"
                alt="RiskMan"
                className="h-12 mx-auto transition-transform hover:scale-105 lg:mx-0"
              />
            </Link>

            <p className="max-w-sm mx-auto mt-5 leading-relaxed text-white lg:mx-0">
              RiskMan Consulting provides expert advisory in audit,
              risk, compliance, cybersecurity, and digital transformation —
              helping businesses grow with confidence.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a 
                href="mailto:info@riskman.in" 
                className="flex items-center justify-center gap-2 text-sm text-white transition-colors hover:text-indigo-600 lg:justify-start"
              >
                <Mail size={16} />
                <span>info@riskman.in</span>
              </a>
              <a 
                href="tel:+911234567890" 
                className="flex items-center justify-center gap-2 text-sm text-white transition-colors hover:text-indigo-600 lg:justify-start"
              >
                <Phone size={16} />
                <span>+91 123 456 7890</span>
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center gap-3 mt-6 lg:justify-start">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative p-[2px] rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 transition-all hover:shadow-lg hover:shadow-indigo-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="p-3 transition-colors bg-white rounded-full group-hover:bg-indigo-50">
                    <social.icon
                      size={20}
                      className="text-indigo-600 transition-colors duration-300 group-hover:text-cyan-500"
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT GRID — 3 COLUMNS */}
          <div className="grid self-center grid-cols-1 gap-10 md:grid-cols-3 lg:col-span-3">

            {/* SERVICES */}
            <motion.div 
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <button
                className="flex items-center justify-between w-full mb-5 text-lg font-bold md:justify-start group"
                onClick={() => toggle("services")}
              >
                <span className={gradientText}>Services</span>
                <motion.span 
                  className="ml-auto md:hidden"
                  animate={{ rotate: open.services ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </motion.span>
              </button>

              <AnimatePresence>
                {(open.services || !isMobile) && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2.5 text-sm overflow-hidden md:block"
                  >
                    {[
                      ["Risk Advisory", "/services/risk-advisory"],
                      ["Consulting", "/services/consulting"],
                      ["ESG Advisory", "/services/esg-advisory"],
                      ["Financial Advisory", "/services/financial-advisory"],
                      ["Forensic & Investigation", "/services/forensic-investigation"],
                      ["Cyber Security", "/services/cybersecurity"],
                      ["IT Risk Management", "/services/it-risk-management"],
                    ].map(([name, link], i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link
                          className="flex items-center gap-2 text-white transition-colors duration-200 group/link hover:text-indigo-600"
                          to={link}
                        >
                          <ArrowRight size={12} className="transition-all -translate-x-2 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0" />
                          <span>{name}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>

            {/* INDUSTRIES */}
            <motion.div 
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button
                className="flex items-center justify-between w-full mb-5 text-lg font-bold md:justify-start group"
                onClick={() => toggle("industries")}
              >
                <span className={gradientText}>Industries</span>
                <motion.span 
                  className="ml-auto md:hidden"
                  animate={{ rotate: open.industries ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </motion.span>
              </button>

              <AnimatePresence>
                {(open.industries || !isMobile) && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2.5 text-sm overflow-hidden md:block"
                  >
                    {[
                      ["Automobiles", "/industries/automobiles"],
                      ["Banking & Insurance", "/industries/banking-insurance"],
                      ["Retail & Consumer", "/industries/retail-consumer"],
                      ["Healthcare", "/industries/healthcare"],
                      ["Hospitality", "/industries/hospitality"],
                      ["Media & Communication", "/industries/media-communication"],
                      ["Education & EdTech", "/industries/education-edtech"],
                    ].map(([name, link], i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link
                          className="flex items-center gap-2 text-white transition-colors duration-200 group/link hover:text-indigo-600"
                          to={link}
                        >
                          <ArrowRight size={12} className="transition-all -translate-x-2 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0" />
                          <span>{name}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>

            {/* COMPANY */}
            <motion.div 
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button
                className="flex items-center justify-between w-full mb-5 text-lg font-bold md:justify-start group"
                onClick={() => toggle("company")}
              >
                <span className={gradientText}>Company</span>
                <motion.span 
                  className="ml-auto md:hidden"
                  animate={{ rotate: open.company ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </motion.span>
              </button>

              <AnimatePresence>
                {(open.company || !isMobile) && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2.5 text-sm overflow-hidden md:block"
                  >
                    {[
                      ["About Us", "/about"],
                      ["Leadership Team", "/about/leadership"],
                      ["Careers", "/careers"],
                      ["Blogs", "/blog"],
                      ["Privacy Policy", "/privacy-policy"],
                      ["Terms of Use", "/terms"],
                      ["Contact", "/contact"],
                    ].map(([name, link], i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link
                          className="flex items-center gap-2 text-white transition-colors duration-200 group/link hover:text-indigo-600"
                          to={link}
                        >
                          <ArrowRight size={12} className="transition-all -translate-x-2 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0" />
                          <span>{name}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* NEWSLETTER */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className={`mb-2 text-2xl font-bold ${gradientText}`}>
            Stay Updated
          </h4>
          <p className="mb-6 text-white">
            Subscribe to our newsletter for the latest insights and updates
          </p>

          <form 
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col items-center max-w-lg gap-3 mx-auto sm:flex-row"
          >
            <div className="relative flex-1 w-full">
              <Mail className="absolute -translate-y-1/2 left-4 top-1/2 text-slate-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full py-4 pl-12 pr-4 transition-colors bg-white border-2 rounded-full shadow-sm text-slate-800 border-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <motion.button
              type="submit"
              className="flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 rounded-full shadow-lg group bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:shadow-xl hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Subscribe</span>
              <Send size={18} className="transition-transform group-hover:translate-x-1" />
            </motion.button>
          </form>
        </motion.div>

        {/* DIVIDER */}
        <motion.div 
          className="w-full h-px mt-16 mb-8 bg-gradient-to-r from-transparent via-slate-300 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />

        {/* COPYRIGHT & LINKS */}
        <motion.div 
          className="flex flex-col items-center justify-between gap-4 pb-4 md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm text-center text-white">
            © {new Date().getFullYear()} RiskMan Consulting. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy-policy" className="text-white transition-colors hover:text-indigo-600">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white transition-colors hover:text-indigo-600">
              Terms of Use
            </Link>
            <Link to="/contact" className="text-white transition-colors hover:text-indigo-600">
              Contact
            </Link>
          </div>
        </motion.div>
      </div>

      {/* SCROLL TO TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed z-50 p-4 text-white transition-all duration-300 rounded-full shadow-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:shadow-indigo-500/50 bottom-6 right-6 md:bottom-8 md:right-8"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
