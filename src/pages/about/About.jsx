import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {

  FaChartLine,
  FaShieldAlt,
  FaUsers,
  FaAward,
  FaChevronDown,
  FaLinkedin,
  FaTimes,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";
import { useLocation } from 'react-router-dom';
// import HeroSection from "../../components/layout/HeroSection";
import BackgroundGrid from "../../components/layout/BackgroundGrid";

/* =======================
   ANIMATIONS
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.3 },
};

/* =======================
   ANIMATED COUNTER COMPONENT
======================= */
function AnimatedCounter({ end, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}


// useEffect(() => {
//   if (location.hash) {
//     const id = location.hash.replace("#", "");
//     const element = document.getElementById(id);

//     if (element) {
//       setTimeout(() => {
//         element.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }, 200); // wait for animations/render
//     }
//   }
// }, [location]);

export default function About() {

  const [openFaq, setOpenFaq] = useState(null);
  const [selectedLeader, setSelectedLeader] = useState(null);

  const toggleFaq = (index) =>
    setOpenFaq(openFaq === index ? null : index);

  /* =======================
     FEATURE CARDS
  ======================= */
  const features = [
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Performance",
      subtitle: "Maximize Outcomes",
      description:
        "Delivering high-impact services with integrity, objectivity and best-in-class execution.",
      type: "gradient",
      animated: false,
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Reliability",
      subtitle: "Trusted Execution",
      description:
        "Customized solutions aligned with client strategy and globally accepted deliverables.",
      type: "light",
      animated: false,
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Cost",
      subtitle: "Optimized Value",
      description:
        "Efficient sourcing and refined processes to enhance productivity and reduce costs.",
      type: "dark",
      animated: false,
    },
    {
      icon: <FaAward className="text-4xl" />,
      title: <><AnimatedCounter end={50} duration={2} suffix="+" /> Experts</>,
      subtitle: "Industry SMEs",
      description:
        "Qualified professionals across risk, compliance, finance, IT and strategy domains.",
      type: "gradient",
      animated: true,
    },
  ];

  /* =======================
     MISSION & VISION
  ======================= */
  const missionVision = {
    mission: {
      title: "Mission",
      content: "Our mission is to achieve sustainable growth and build better future for all.",
      points: [
        "Embracing technology and innovation",
        "Being client and people focussed",
        "Build trust and relationship",
        "Be prompt and deliver efficient and quality execution",
      ],
    },
    vision: {
      title: "Vision",
      content: "Our vision is to become a leading consulting firm in India and globally through rendering sustainable quality services aligned to our mission.",
    },
    pillars: [
      {
        title: "Performance",
        points: [
          "Maximize performance through our services",
          "Ensure our services operate with integrity and objectivity with best-in-class outcomes",
        ],
      },
      {
        title: "Reliability",
        points: [
          "Customized agreements that exactly meet service needs and customer's internal strategy",
          "Faster delivery and globally accepted deliverables",
        ],
      },
      {
        title: "Cost",
        points: [
          "By focusing on refining elements and investigating on alternative resources",
          "Efficiently managing our sourcing, we aim to enhance service productivity and minimize operational costs",
        ],
      },
    ],
  };

  /* =======================
     LEADERSHIP
  ======================= */
  const teamMembers = [
    {
      name: "Sukanta Nag",
      title: "Founder & Managing Partner",
      bio:
        "CA, CS, CMA, CAIIB with 39+ years of experience across credit rating, corporate banking, risk management and financial consulting.",
      image:
        "https://www.riskman.in/wp-content/uploads/2020/09/sukanta-nag.jpg",
      linkedin: "#",
      fullBio: "CA, CS, CMA, CAIIB and M.Com, with over 39 years of experience spanning Credit Rating, Corporate Management, Risk Management, Financial and Management Consulting. His key strengths are in Understanding the holistic approach to the business and client's need for offering 360-degree solutions and build an effective relationship with them.",
    },
    {
      name: "Prasen Pal",
      title: "Partner – Corporate Compliance",
      bio:
        "Ex-Deloitte and Genpact professional with 16+ years in internal audit, ESG, taxation, AI and RPA practices.",
      image:
        "https://www.riskman.in/wp-content/uploads/2020/09/prasen-pal.jpg",
      linkedin: "#",
      fullBio: "A CA, ex-Deloitte ERS and Genpact ERC with 16+ years of experience spanning Internal Audits, ESG, Direct and Indirect taxation including GST, Process automation and RPA, adoption of AI. He is instrumental in managing pre-investment, post-investment, and other advisory and outsourced services.",
    },
    {
      name: "Arpit Garg",
      title: "Partner – Risk & IT Advisory",
      bio:
        "CA, CIA, CRMA, CISA with global experience in ERM, SOC, cybersecurity, fraud analytics and IT risk.",
      image:
        "https://www.riskman.in/wp-content/uploads/2020/09/arpit-garg.jpg",
      linkedin: "#",
      fullBio: "A CA, CIA, CRMA, CISA, ex-EY, Genpact ERC and SNB with 13+ years of experience spanning Risk-based internal audits, he enhances efficiency, control, compliance, and cost savings across diverse sectors.",
    },
  ];

  /* =======================
     SERVICE LEADERS
  ======================= */
  const serviceLeaders = [
    {
      name: "Manish Agarwal",
      title: "Service Leader",
      credentials: "Master's in Information Application, CISA, CISM, AWS Solutions Architect, ITIL v4",
      bio: "Professional with 20+ years of experience across the domain of Information Security. He has played notable roles at IDFC FIRST Bank and Airtel.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      expertise: ["Information Security", "BCP", "IT Security Strategy"],
    },
    {
      name: "Amitabh Jain",
      title: "Service Leader",
      credentials: "Seasoned Chartered Accountant with 30+ years of experience",
      bio: "Expert in Financial Services and Business Enterprises. As COO and CFO in Ed-Tech & Vocational Training sector, he excelled in corporate governance, financial services, and risk governance.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      expertise: ["Corporate Governance", "Financial Services", "PE Capital"],
    },
    {
      name: "Jitendra Khimavat",
      title: "Service Leader",
      credentials: "CA and Certified Internal Auditor (CIA) with 17+ years",
      bio: "Expert in risk-based internal audits, he enhances efficiency, control, compliance, and cost savings across diverse sectors including infrastructure, mining, manufacturing, and finance.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      expertise: ["Internal Audits", "Risk Management", "Compliance"],
    },
    {
      name: "Narayanan Rajendran",
      title: "Service Leader",
      credentials: "CA, CISA with 20+ years at Ex-Ford, Ex-PKF, Ex-Templar Shield",
      bio: "Expert in ERM/SOX/ICOFR, TPRM, Internal Information Security, ISO27001 and forensic assignments. He has worked with Fortune 500 companies on global roles.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      expertise: ["ERM", "Cybersecurity", "Forensic Analysis"],
    },
  ];

  /* =======================
     TESTIMONIALS
  ======================= */
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Zomato",
      role: "CFO",
      text: "RiskMan has been instrumental in helping us navigate complex regulatory landscapes. Their expertise and professionalism are unmatched.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
      name: "Priya Sharma",
      company: "World Bank",
      role: "Risk Manager",
      text: "Working with RiskMan transformed our risk management approach. Their team's depth of knowledge is truly impressive.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "Amit Patel",
      company: "Jindal Steel",
      role: "Head of Compliance",
      text: "The level of detail and customization in RiskMan's solutions exceeded our expectations. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
  ];

  /* =======================
     MARQUEE CLIENTS
  ======================= */
  const clients = [
    { name: "Moder", logo: "https://images.squarespace-cdn.com/content/v1/628d18ddf477d1092801dcb2/ce6bfc6d-46cf-43a4-9f45-dce56bd7b2c0/Moder_Logotype_Soft-Black_RGB.png" },
    { name: "Zomato", logo: "https://www.boardinfinity.com/blog/content/images/2024/09/1712377685818.png" },
    { name: "Jindal Steel & Power", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Jindal_Steel_and_Power_Logo.svg/2560px-Jindal_Steel_and_Power_Logo.svg.png" },
    { name: "Blinkit", logo: "https://devopsstaging.riskman.in/wp-content/uploads/2025/06/Blinkit-logo-1-1.webp" },
    { name: "The World Bank", logo: "https://www.grsproadsafety.org/wp-content/uploads/2023/05/WorldBankLogo.png" },
    { name: "Indorama", logo: "https://devopsstaging.riskman.in/wp-content/uploads/2025/06/Indorama_Ventures_Logo.svg-2.webp" },
    { name: "Electrosteel", logo: "https://companieslogo.com/img/orig/ELECTCAST.NS_BIG-aca1b4fb.png?t=1720244491" },
    { name: "Emami Agrotech", logo: "https://devopsstaging.riskman.in/wp-content/uploads/2025/06/Emami-logo-2.webp" },
    { name: "Ambuja Neotia", logo: "https://phrealtors.in/wp-content/uploads/2023/07/Ambuja-Neotia-logo.png" },
    { name: "Jindal Renewables", logo: "https://sgurrenergy.com/wp-content/uploads/2025/01/jindal-renewables.png" },
    { name: "Innovist", logo: "https://devopsstaging.riskman.in/wp-content/uploads/2025/06/Innovist-logo-1-150x20.webp" },
    { name: "India TV", logo: "https://devopsstaging.riskman.in/wp-content/uploads/2025/06/Indiatv-logo-1.webp" },
    { name: "Nexval", logo: "https://devopsstaging.riskman.in/wp-content/uploads/2025/06/Nexval-logo-150x40.webp" },
    { name: "Khadim", logo: "https://devopsstaging.riskman.in/wp-content/uploads/2025/06/Khadim-logo-3-150x35.webp" },
    { name: "Cars24", logo: "https://via.placeholder.com/150x60/1e293b/f59e0b?text=Cars24" },
    { name: "Kariwala", logo: "https://via.placeholder.com/150x60/1e293b/10b981?text=Kariwala" },
    { name: "India Power", logo: "https://via.placeholder.com/150x60/1e293b/ef4444?text=India+Power" },
    { name: "Pernod Ricard", logo: "https://via.placeholder.com/150x60/1e293b/a855f7?text=Pernod+Ricard" },
    { name: "SKL Automotive", logo: "https://via.placeholder.com/150x60/1e293b/60a5fa?text=SKL+Auto" },
    { name: "Feeding India", logo: "https://via.placeholder.com/150x60/1e293b/10b981?text=Feeding+India" },
    { name: "Schoolnet", logo: "https://via.placeholder.com/150x60/1e293b/f59e0b?text=Schoolnet" },
    { name: "Danieli", logo: "https://via.placeholder.com/150x60/1e293b/60a5fa?text=Danieli" },
    { name: "Care Health Insurance", logo: "https://via.placeholder.com/150x60/1e293b/ef4444?text=Care+Health" },
  ];
  /* =======================
     FAQ
  ======================= */
  const faqs = [
    {
      question: "What does RiskMan stand for?",
      answer:
        "RiskMan is a trusted advisory firm focused on delivering sustainable value through risk, compliance, financial and strategic consulting services.",
    },
    {
      question: "What is RiskMan's mission?",
      answer:
        "To achieve sustainable growth and build a better future by embracing technology, innovation, trust and long-term partnerships.",
    },
    {
      question: "What industries does RiskMan serve?",
      answer:
        "We serve clients across manufacturing, financial services, technology, retail, infrastructure and emerging enterprises.",
    },
    {
      question: "What makes RiskMan different?",
      answer:
        "We are propreneurs — professionals with an entrepreneurial mindset — delivering customized solutions rather than generic consulting.",
    },
  ];

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 200); // wait for animations/render
      }
    }
  }, [location]);



  return (
    <div className="min-h-screen bg-[#05051e] text-white overflow-x-hidden">
      {/* ================= HERO ================= */}

      <BackgroundGrid/>
      <section className="relative isolate pt-24 min-h-[70vh] flex items-center justify-center">
        <div className="bg-glow-blue absolute -top-48 right-[-120px] pointer-events-none hidden lg:block" />
        <div className="bg-glow-purple absolute -bottom-48 left-[-150px] pointer-events-none hidden lg:block" />

        <div className="relative z-10 px-6 py-16 mx-auto text-center max-w-7xl lg:px-8 lg:py-24">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="text-[var(--accent-blue-light)] uppercase tracking-wider mb-4"
            >
              About RiskMan
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-5xl font-bold md:text-7xl"
            >
              Build confidence,
              <br />
              <span className="gradient-text">enable clarity & impact</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-xl text-white"
            >
              Strategic advisory, risk management & sustainable growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT US SECTION ================= */}
      <section className="relative py-16 bg-black isolate lg:py-24">
        <div className="grid items-center gap-12 px-6 mx-auto max-w-7xl lg:px-8 md:grid-cols-2">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              <span className="text-[var(--accent-blue)]">About us</span>
            </h2>
            <div className="w-24 h-1 mb-8"></div>

            <p className="text-lg text-[var(--text-gray)] leading-relaxed mb-6">
              At RiskMan, we focus on creating enduring value for our clients, people, communities
              and other stakeholders through our "Customised Solution" based services.
            </p>

            <p className="text-lg text-[var(--text-gray)] leading-relaxed mb-6">
              RiskMan is a team of experienced professionals with high level of knowledge
              and accomplishments who bring to the table a varied and storied experience set,
              to create outstanding value for its clients and other stakeholders. Rather than being
              classical consultants, we take pride in being propreneurs i.e., professionals, with
              an entrepreneurial mindset.
            </p>

            <p className="text-lg text-[var(--text-gray)] leading-relaxed mb-8">
              We are a passionate team and feel excited in making a meaningful impact through our
              experience, competency and ability to deliver sustainable goal with perseverance.
              We endeavor to engage with people in meaningful ways and believe in building
              long term relationship with all our stakeholders.
            </p>

            <div className="bg-gradient-to-r from-[var(--accent-blue)]/10 to-[var(--accent-purple)]/10 border-l-4 border-[var(--accent-blue)] rounded-lg p-6">
              <p className="text-xl italic font-semibold text-center">
                "RISKMAN IS THE TRUSTED PARTNER IN YOUR SUSTAINABLE GROWTH JOURNEY"
              </p>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-3xl blur-2xl opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=1000&fit=crop"
              alt="About RiskMan"
              className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= TRIBUTE SECTION ================= */}
      <section className="relative py-16 bg-black lg:py-24 isolate">
        <div className="max-w-4xl px-6 mx-auto text-center transition-all duration-300 border border-black shadow-lg lg:px-8 bg-black/10 rounded-3xl hover:border-indigo-300 hover:shadow-2xl">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-purple)]/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-blue)]/5 to-[var(--accent-purple)]/5"></div>
            <div className="relative z-10">
              <FaQuoteLeft className="text-5xl text-[var(--accent-blue-light)] opacity-30 mx-auto mb-6" />
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                A Tribute to <span className="gradient-text">Prabir Sen Gupta</span>
              </h3>
              <p className="text-lg text-[var(--text-gray)] italic leading-relaxed mb-6">
                "Excellence is not a destination; it is a continuous journey that never ends."
              </p>
              <p className="text-sm text-[var(--text-gray)]">
                Late Prabir Sen Gupta - Founding Member & Mentor
              </p>
              <div className="mt-6 h-1 w-32 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] mx-auto rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="relative py-16 bg-black lg:py-24">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`
                  ${f.type === "gradient" ? "card-gradient" : ""}
                  ${f.type === "light" ? "card-light" : ""}
                  ${f.type === "dark" ? "card-dark" : ""}
                  text-center
                `}
              >
                <div className="flex justify-center mb-4">{f.icon}</div>
                <h3 className="mb-2 text-3xl font-bold">{f.title}</h3>
                <p className="mb-3 text-lg font-semibold opacity-90">
                  {f.subtitle}
                </p>
                <p className="text-sm opacity-75">{f.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="relative py-16 bg-black lg:py-24 isolate">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-16 text-4xl font-bold text-center md:text-5xl"
          >
            Mission and
            <br />
            <span className="gradient-text">Vision</span>
          </motion.h2>

          {/* Mission & Vision Grid */}
          <div className="grid gap-8 mb-16 md:grid-cols-2 ">
            {/* Mission */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-purple)]/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center relative overflow-hidden group transition-all duration-500 hover:border-[var(--accent-blue)]/50 hover:shadow-2xl hover:shadow-[var(--accent-blue)]/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-blue)]/0 to-[var(--accent-purple)]/0 group-hover:from-[var(--accent-blue)]/20 group-hover:to-[var(--accent-purple)]/20 transition-all duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative z-10 ">
                <div className="relative mb-6 ">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=300&fit=crop"
                    alt="Mission"
                    className="object-cover w-full h-48 transition-opacity duration-500 rounded-xl opacity-60 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white bg-[var(--dark-navy)]/80 px-6 py-3 rounded-lg group-hover:bg-[var(--dark-navy)]/90 transition-all duration-500">
                      {missionVision.mission.title}
                    </h3>
                  </div>
                </div>
                <p className="mb-4 text-lg">{missionVision.mission.content}</p>
                <div className="space-y-2 text-left">
                  <p className="mb-2 font-semibold">We believe in:</p>
                  {missionVision.mission.points.map((point, i) => (
                    <p key={i} className="pl-4 text-sm opacity-90">
                      • {point}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-purple)]/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center relative overflow-hidden group transition-all duration-500 hover:border-[var(--accent-purple)]/50 hover:shadow-2xl hover:shadow-[var(--accent-purple)]/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-purple)]/0 to-[var(--accent-blue)]/0 group-hover:from-[var(--accent-purple)]/20 group-hover:to-[var(--accent-blue)]/20 transition-all duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-blue)] rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="relative mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop"
                    alt="Vision"
                    className="object-cover w-full h-48 transition-opacity duration-500 rounded-xl opacity-60 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white bg-[var(--dark-navy)]/80 px-6 py-3 rounded-lg group-hover:bg-[var(--dark-navy)]/90 transition-all duration-500">
                      {missionVision.vision.title}
                    </h3>
                  </div>
                </div>
                <p className="text-lg">{missionVision.vision.content}</p>
              </div>
            </motion.div>
          </div>

          {/* Sustainability Circle with Pillars */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center gap-4 mb-8">
              <div className="w-40 h-40 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] flex items-center justify-center">
                <div className="w-36 h-36 rounded-full bg-[var(--dark-navy)] flex items-center justify-center">
                  <div className="text-center">
                    <FaAward className="text-4xl text-[var(--accent-blue-light)] mx-auto mb-2" />
                    <p className="text-lg font-bold">Sustainability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three Pillars */}
          <div className="grid gap-6 md:grid-cols-3">
            {missionVision.pillars.map((pillar, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-zinc-800 backdrop-blur-sm border border-white/5 rounded-2xl p-6 text-center relative overflow-hidden group transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--accent-blue)]/30 cursor-pointer"
              >
                {/* Gradient background that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-blue)]/0 to-[var(--accent-purple)]/0 group-hover:from-[var(--accent-blue)]/90 group-hover:to-[var(--accent-purple)]/90 transition-all duration-500 rounded-2xl"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
                    {i === 0 && <FaChartLine className="text-2xl" />}
                    {i === 1 && <FaShieldAlt className="text-2xl" />}
                    {i === 2 && <FaUsers className="text-2xl" />}
                  </div>
                  <h3 className="mb-4 text-2xl font-bold transition-colors duration-500 group-hover:text-white">{pillar.title}</h3>
                  <div className="space-y-2 text-left">
                    {pillar.points.map((point, j) => (
                      <p key={j} className="text-sm text-[var(--text-gray)] group-hover:text-white/90 transition-colors duration-500">
                        • {point}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section id="co-founders" className="relative bg-black section-padding">
        <div className="bg-glow-purple absolute top-[100px] right-[-200px] " />

        <div className="container mx-auto max-w-7xl ">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-center md:text-5xl "
          >
            Co-founding
            <br />
            <span className="gradient-text">Partners</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-12 text-center text-white"
          >
            Meet the visionary leaders driving RiskMan's mission forward
          </motion.p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
            {teamMembers.map((m, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-zinc-800 backdrop-blur-sm border border-white/5 rounded-2xl p-6 group cursor-pointer transition-all hover:border-[var(--accent-blue)]/50 "
                onClick={() => setSelectedLeader(m)}
              >
                <div className="flex justify-center mb-4 ">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="object-cover transition-transform duration-500 rounded-full w-28 h-28"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-navy)] to-transparent opacity-60" />
                </div>
                <h3 className="mb-2 text-2xl font-bold">{m.name}</h3>
                <p className="text-[var(--accent-blue-light)] font-semibold mb-3">
                  {m.title}
                </p>
                <p className="mb-4 text-sm text-white">{m.bio}</p>
                <div className="flex items-center gap-4">
                  <a
                    href={m.linkedin}
                    className="inline-flex items-center gap-2 text-[var(--accent-blue-light)] hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                  <button className="text-[var(--accent-purple)] hover:text-white transition-colors text-sm">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICE LEADERS ================= */}
      <section id="service-leaders" className="relative py-16 bg-black lg:py-24 isolate">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-center md:text-5xl"
          >
            Our Team
            <br />
            <span className="gradient-text">Service Leaders</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center text-[var(--text-gray)] mb-12 max-w-2xl mx-auto"
          >
            Industry experts leading specialized service domains
          </motion.p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {serviceLeaders.map((leader, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-zinc-800 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group cursor-pointer transition-all hover:border-[var(--accent-blue)]/50"
                onClick={() => setSelectedLeader(leader)}
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className=" w-24 h-24 rounded-full object-cover border-2 border-[var(--accent-blue)] group-hover:border-[var(--accent-blue-light)] group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-navy)] to-transparent opacity-60" />
                </div>
                <h3 className="mb-1 text-xl font-bold">{leader.name}</h3>
                <p className="text-[var(--accent-blue-light)] font-semibold mb-2 text-sm">
                  {leader.title}
                </p>
                <p className="mb-3 text-xs text-white">
                  {leader.credentials}
                </p>
                <button className="text-[var(--accent-purple)] hover:text-white transition-colors text-sm w-full text-left">
                  View Profile →
                </button>
              </motion.div>
            ))}
          </div>

          {/* Team Stats */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-6 mt-12 md:grid-cols-3"
          >
            <div className="p-8 overflow-hidden text-center border bg-zinc-800 bg-relative backdrop-blur-sm border-white/5 rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-blue)]/5 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="mb-2 text-5xl font-bold md:text-6xl gradient-text">
                  <AnimatedCounter end={50} duration={2.5} suffix="+" />
                </h3>
                <p className="text-[var(--text-gray)] text-lg">Team Size</p>
              </div>
            </div>

            <div className="relative p-8 overflow-hidden text-center border bg-zinc-800 backdrop-blur-sm border-white/5 rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-purple)]/5 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="mb-2 text-3xl font-bold md:text-4xl gradient-text">
                  Qualified & Experienced
                </h3>
                <p className="text-[var(--text-gray)] text-lg">Professionals</p>
              </div>
            </div>

            <div className="relative p-8 overflow-hidden text-center border bg-zinc-800 backdrop-blur-sm border-white/5 rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-blue)]/5 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="mb-2 text-3xl font-bold md:text-4xl gradient-text">
                  Industry / Sector
                </h3>
                <p className="text-[var(--text-gray)] text-lg">SMEs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="relative bg-black section-padding isolate ">
        <div className="bg-glow-blue absolute top-[100px] left-[-200px] " />

        <div className="container mx-auto max-w-7xl ">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-center md:text-5xl"
          >
            Client
            <br />
            <span className="gradient-text">Testimonials</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-12 text-center text-white"
          >
            Hear what our clients say about working with RiskMan
          </motion.p>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-purple)]/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative overflow-hidden group transition-all duration-500 hover:border-[var(--accent-blue)]/50 hover:shadow-2xl hover:shadow-[var(--accent-blue)]/20 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-blue)]/0 to-[var(--accent-purple)]/0 group-hover:from-[var(--accent-blue)]/20 group-hover:to-[var(--accent-purple)]/20 transition-all duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <FaQuoteLeft className="text-4xl text-[var(--accent-blue-light)] opacity-20 absolute top-4 left-4 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <FaStar key={j} className="text-lg text-yellow-400 transition-transform duration-300 group-hover:scale-110" style={{ transitionDelay: `${j * 50}ms` }} />
                    ))}
                  </div>
                  <p className="mb-6 italic text-white transition-colors duration-500">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[var(--accent-blue)] group-hover:border-[var(--accent-blue-light)] group-hover:scale-110 transition-all duration-500"
                    />
                    <div>
                      <h4 className="font-bold group-hover:text-[var(--accent-blue-light)] transition-colors duration-500">{testimonial.name}</h4>
                      <p className="text-sm text-[var(--accent-blue-light)]">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-[var(--text-gray)]">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MARQUEE CLIENTS ================= */}
      <section className="relative py-16 overflow-hidden bg-black lg:py-24 isolate">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-12 text-4xl font-bold text-center md:text-5xl"
          >
            Our Marquee
            <br />
            <span className="gradient-text">Clients</span>
          </motion.h2>

          {/* Scrolling Client Logos */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex items-center gap-12"
                animate={{
                  x: [0, -1920],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {[...clients, ...clients].map((client, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center flex-shrink-0 w-48 h-24 px-4 transition-colors bg-zinc-800 rounded-xl hover:bg-white"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--dark-navy-light)] to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--dark-navy-light)] to-transparent pointer-events-none" />
          </div>

          {/* Client Grid */}
          <div className="grid grid-cols-3 gap-6 mt-12 md:grid-cols-6">
            {clients.slice(0, 12).map((client, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex items-center justify-center p-4 transition-colors aspect-square bg-zinc-800 rounded-xl hover:bg-white"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="object-contain max-w-full max-h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="relative py-16 bg-black lg:py-24">
        <div className="max-w-4xl px-6 mx-auto lg:px-8">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-12 text-4xl font-bold text-center md:text-5xl"
          >
            Frequently Asked
            <br />
            <span className="gradient-text">Questions</span>
          </motion.h2>

          {faqs.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="card-dark mb-4 cursor-pointer hover:border-[var(--accent-blue)] transition-colors"
              onClick={() => toggleFaq(i)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{f.question}</h3>
                <FaChevronDown
                  className={`transition-transform ${openFaq === i ? "rotate-180" : ""
                    }`}
                />
              </div>
              {openFaq === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 text-white"
                >
                  {f.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 text-center bg-black lg:py-24">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-6 text-4xl font-bold md:text-5xl"
          >
            Partner With
            <br />
            <span className="gradient-text">RiskMan Today</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-8 text-xl text-white"
          >
            Strengthen governance, manage risk and drive sustainable growth with
            confidence.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="/contact" className="inline-block px-8 py-4 text-lg btn-primary">
              Schedule Consultation
            </a>
            <a href="/about" className="inline-block px-8 py-4 text-lg btn-secondary">
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* ================= LEADER MODAL ================= */}
      <AnimatePresence>
        {selectedLeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black backdrop-blur-md"
            onClick={() => setSelectedLeader(null)}
          >
            <motion.div
              variants={scaleIn}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative w-full max-w-2xl border shadow-2xl bg-zinc-800 border-white/10 rounded-3xl"
              onClick={(e) => e.stopPropagation()}
              style={{
                background:
                  "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute z-10 flex items-center justify-center transition-all rounded-full top-5 right-5 w-9 h-9 bg-white/5 hover:bg-white/10 hover:scale-110"
              >
                <FaTimes className="text-white/70 hover:text-white" />
              </button>

              {/* CONTENT */}
              <div className="grid md:grid-cols-[220px_1fr] gap-6 items-start p-6">

                {/* LEFT – IMAGE */}
                <div className="flex justify-center md:justify-start">
                  <img
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    className="
                w-40 h-40 md:w-48 md:h-48
                object-cover rounded-full
                border-4 border-[var(--accent-blue)]/30
                grayscale hover:grayscale-0
                hover:scale-105
                transition-all duration-500
              "
                  />
                </div>

                {/* RIGHT – TEXT */}
                <div>
                  <h2 className="mb-1 text-2xl font-bold text-white">
                    {selectedLeader.name}
                  </h2>

                  <p className="text-[var(--accent-blue-light)] font-semibold mb-2">
                    {selectedLeader.title}
                  </p>

                  {selectedLeader.credentials && (
                    <p className="mb-3 text-sm text-white">
                      {selectedLeader.credentials}
                    </p>
                  )}

                  <div className="h-px my-4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <p className="mb-4 text-sm leading-relaxed text-white">
                    {selectedLeader.fullBio || selectedLeader.bio}
                  </p>

                  {selectedLeader.expertise && (
                    <div className="mb-4">
                      <h3 className="mb-2 text-sm font-semibold text-white">
                        Areas of Expertise
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedLeader.expertise.map((exp, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full
                                 bg-[var(--accent-blue)]/10
                                 border border-[var(--accent-blue)]/30
                                 text-[var(--accent-blue-light)]"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedLeader.linkedin && (
                    <a
                      href={selectedLeader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold
                           text-[var(--accent-blue-light)] hover:text-white"
                    >
                      <FaLinkedin className="text-xl" />
                      Connect on LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

