import React, { useState } from "react";
import { 
  FileText, 
  Shield, 
  Lock, 
  Link2, 
  AlertCircle, 
  Users,
  Globe2,
  CheckCircle,
  ArrowRight
} from "lucide-react";

/* =======================
   ANIMATIONS
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

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function Terms() {
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    {
      id: "intro",
      icon: FileText,
      title: "Welcome",
      color: "from-blue-600 to-indigo-600",
      body: (
        <>
          <p>
            These Terms of Use govern your access to and use of RiskMan Consulting
            LLP's website (the "Website"). By using the Website, you accept these
            Terms in full. If you disagree with any part, please discontinue use.
          </p>
          <p className="mt-4">
            The terminology "Client", "You", and "Your" refers to you, the person
            accessing this Website. "The Company", "Ourselves", "We", "Our", and
            "Us" refers to RiskMan Consulting LLP.
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      icon: CheckCircle,
      title: "Cookies",
      color: "from-indigo-600 to-purple-600",
      body: (
        <p>
          We use cookies to enhance your experience. By accessing RiskMan, you
          consent to the use of cookies in accordance with our Privacy Policy. You
          may disable cookies in your browser; some features may be affected.
        </p>
      ),
    },
    {
      id: "license",
      icon: Shield,
      title: "License",
      color: "from-purple-600 to-pink-600",
      body: (
        <>
          <p>
            Unless otherwise stated, RiskMan Consulting LLP and/or its licensors
            own the intellectual property rights for all material on RiskMan. You
            must not:
          </p>
          <ul className="mt-4 space-y-2 list-none">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[var(--accent-blue-light)] mt-1 flex-shrink-0" size={16} />
              <span>Republish material from RiskMan</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[var(--accent-blue-light)] mt-1 flex-shrink-0" size={16} />
              <span>Sell, rent, or sub-license material</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[var(--accent-blue-light)] mt-1 flex-shrink-0" size={16} />
              <span>Reproduce or copy material for commercial purposes</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[var(--accent-blue-light)] mt-1 flex-shrink-0" size={16} />
              <span>Redistribute content without permission</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "iframes",
      icon: Globe2,
      title: "iFrames",
      color: "from-green-600 to-emerald-600",
      body: (
        <p>
          Without prior approval and written permission, you may not create frames
          around our webpages that alter the visual presentation or appearance of
          our Website.
        </p>
      ),
    },
    {
      id: "content-liability",
      icon: AlertCircle,
      title: "Content Liability",
      color: "from-orange-600 to-red-600",
      body: (
        <p>
          We are not responsible for content that appears on your website. You
          agree to indemnify and defend us against all claims arising from your
          website.
        </p>
      ),
    },
    {
      id: "links",
      icon: Link2,
      title: "Hyperlinking to our Content",
      color: "from-red-600 to-rose-600",
      body: (
        <>
          <p className="mb-3">The following organizations may link to our Website without prior written approval:</p>
          <ul className="mb-4 space-y-2 list-none">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[var(--accent-blue-light)] mt-1 flex-shrink-0" size={16} />
              <span>Government agencies</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[var(--accent-blue-light)] mt-1 flex-shrink-0" size={16} />
              <span>Search engines</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[var(--accent-blue-light)] mt-1 flex-shrink-0" size={16} />
              <span>News organizations</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[var(--accent-blue-light)] mt-1 flex-shrink-0" size={16} />
              <span>Online directory distributors</span>
            </li>
          </ul>
          <p>
            Approved organizations may hyperlink using our corporate name, URL, or
            other appropriate description.
          </p>
        </>
      ),
    },
    {
      id: "privacy",
      icon: Lock,
      title: "Your Privacy",
      color: "from-blue-600 to-indigo-600",
      body: (
        <p>
          Please read our{" "}
          <a href="/privacy-policy" className="text-[var(--accent-blue-light)] underline hover:text-white transition-colors">
            Privacy Policy
          </a>
          .
        </p>
      ),
    },
    {
      id: "disclaimer",
      icon: Shield,
      title: "Disclaimer",
      color: "from-indigo-600 to-purple-600",
      body: (
        <>
          <p>
            To the maximum extent permitted by applicable law, we exclude all
            representations and warranties relating to our website.
          </p>
          <ul className="mt-4 mb-4 space-y-2 list-none">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[var(--accent-blue-light)] mt-1 flex-shrink-0" size={16} />
              <span>No liability for personal injury or death</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[var(--accent-blue-light)] mt-1 flex-shrink-0" size={16} />
              <span>No liability for fraud</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[var(--accent-blue-light)] mt-1 flex-shrink-0" size={16} />
              <span>No liability beyond what law permits</span>
            </li>
          </ul>
          <p>
            As long as the Website is provided free of charge, we will not be
            liable for any loss or damage.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--dark-navy)] text-white overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative isolate min-h-[70vh] flex items-center justify-center section-padding overflow-hidden">
        <div 
          className="bg-glow-blue absolute top-[-200px] right-[-100px]"
          style={{
            animation: 'blob 4s infinite alternate'
          }}
        />
        <div 
          className="bg-glow-purple absolute bottom-[-150px] left-[-150px]"
          style={{
            animation: 'blob 5s infinite alternate 1s'
          }}
        />

        <div className="container relative z-10 max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-[var(--accent-blue-light)] text-lg mb-4 tracking-wide uppercase font-semibold opacity-80">
              Legal Information
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              Terms
              <br />
              <span 
                className="gradient-text"
                style={{
                  backgroundSize: "200% 200%",
                  animation: 'gradientShift 3s linear infinite'
                }}
              >
                of Use
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[var(--text-gray)] max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our website and services
            </p>
          </div>
        </div>
      </section>

      {/* ================= TERMS SECTIONS ================= */}
      <section className="relative section-padding isolate">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Understanding Our <span className="gradient-text">Terms</span>
            </h2>
            <p className="text-lg text-[var(--text-gray)] max-w-3xl mx-auto">
              These terms outline acceptable use, intellectual property rights,
              limitations, and legal responsibilities when using RiskMan services.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {sections.map((section, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
                className="bg-[var(--dark-navy-light)] backdrop-blur-sm border border-white/5 rounded-2xl p-8 group cursor-pointer relative overflow-hidden transition-all duration-500 hover:border-[var(--accent-blue)]/50 hover:shadow-2xl hover:shadow-[var(--accent-blue)]/30"
                style={{ 
                  transformStyle: "preserve-3d",
                  transform: hoveredSection === section.id ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.5s ease'
                }}
              >
                {/* Animated gradient background */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br rounded-2xl"
                  style={{
                    opacity: hoveredSection === section.id ? 0.2 : 0,
                    transform: hoveredSection === section.id ? 'scale(1)' : 'scale(0.8)',
                    background: "linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-purple) 100%)",
                    transition: 'all 0.6s ease'
                  }}
                />
                
                {/* Glow effect */}
                <div 
                  className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-2xl blur-xl"
                  style={{
                    opacity: hoveredSection === section.id ? 0.5 : 0,
                    transition: 'opacity 0.4s ease'
                  }}
                />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-6 group-hover:shadow-2xl`}
                    style={{
                      transform: hoveredSection === section.id ? 'scale(1.15) rotateY(180deg)' : 'scale(1) rotateY(0deg)',
                      transition: 'all 0.6s ease'
                    }}
                  >
                    <section.icon className="w-7 h-7" />
                  </div>

                  <h3 
                    className="mb-4 text-2xl font-bold text-white/90 group-hover:text-white"
                    style={{
                      transform: hoveredSection === section.id ? 'translateX(5px)' : 'translateX(0)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {section.title}
                  </h3>

                  <div 
                    className="text-[var(--text-gray)] leading-relaxed group-hover:text-white/90 transition-colors duration-300"
                    style={{
                      transform: hoveredSection === section.id ? 'translateX(3px)' : 'translateX(0)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {section.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section-padding text-center bg-gradient-to-b from-transparent to-[var(--dark-navy-light)]">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          Questions About
          <br />
          <span 
            className="gradient-text"
            style={{
              backgroundSize: "200% 200%",
              animation: 'gradientShift 3s linear infinite'
            }}
          >
            Our Terms
          </span>?
        </h2>

        <p className="text-xl text-[var(--text-gray)] mb-8 max-w-2xl mx-auto">
          If you have any questions or concerns about these Terms of Use, 
          our team is here to help
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 text-lg btn-primary"
            style={{
              transition: 'all 0.3s ease',
              animation: 'pulse-shadow 2s infinite'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(99, 179, 237, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Contact Us
          </a>
          <a 
            href="/privacy-policy" 
            className="inline-block px-8 py-4 text-lg btn-secondary"
            style={{
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
              e.currentTarget.style.borderColor = 'rgba(99, 179, 237, 0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            View Privacy Policy
          </a>
        </div>
      </section>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-shadow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(99, 179, 237, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(99, 179, 237, 0.6);
          }
        }

        .bg-glow-blue {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(99, 179, 237, 0.4) 0%, transparent 70%);
          filter: blur(60px);
          pointer-events: none;
        }

        .bg-glow-purple {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(147, 112, 219, 0.4) 0%, transparent 70%);
          filter: blur(60px);
          pointer-events: none;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-purple) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        :root {
          --dark-navy: #0a0f1e;
          --dark-navy-light: #131b2e;
          --accent-blue: #63b3ed;
          --accent-blue-light: #90cdf4;
          --accent-purple: #9370db;
          --text-gray: #a0aec0;
        }

        .section-padding {
          padding: 6rem 1.5rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-purple) 100%);
          color: white;
          padding: 0.75rem 2rem;
          border-radius: 0.75rem;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
          cursor: pointer;
        }

        .btn-secondary {
          background: transparent;
          color: var(--accent-blue);
          padding: 0.75rem 2rem;
          border-radius: 0.75rem;
          font-weight: 600;
          border: 2px solid var(--accent-blue);
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}