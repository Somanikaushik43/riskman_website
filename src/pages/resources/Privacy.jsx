import React, { useState } from "react";
import { Shield, Lock, Eye, Database, FileText, UserCheck, Users, Globe2, CheckCircle, Settings } from "lucide-react";

export default function Privacy() {
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    {
      id: "introduction",
      icon: FileText,
      title: "Introduction",
      color: "from-blue-600 to-indigo-600",
      body: (
        <>
          <p>
            At <strong>RiskMan</strong>, accessible from{" "}
            <a
              href="https://www.riskman.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-blue-light)] underline hover:text-white transition-colors"
            >
              https://www.riskman.in/
            </a>
            , protecting your privacy is a core priority. This Privacy Policy
            explains what data we collect and how it is used.
          </p>
          <p className="mt-4">
            This policy applies only to information collected through our website
            and not to offline interactions.
          </p>
        </>
      ),
    },
    {
      id: "consent",
      icon: UserCheck,
      title: "Consent",
      color: "from-indigo-600 to-purple-600",
      body: (
        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>
      ),
    },
    {
      id: "information-collected",
      icon: Database,
      title: "Information We Collect",
      color: "from-purple-600 to-pink-600",
      body: (
        <>
          <p>
            We collect personal information when you voluntarily provide it,
            such as name, email address, phone number, company details, and
            inquiry messages.
          </p>
          <p className="mt-4">
            Additional information may be requested when registering for
            services or engaging in professional consultations.
          </p>
        </>
      ),
    },
    {
      id: "how-we-use-info",
      icon: Settings,
      title: "How We Use Your Information",
      color: "from-green-600 to-emerald-600",
      body: (
        <>
          <ul className="mt-4 space-y-3 list-none">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[var(--accent-blue-light)] mt-1 flex-shrink-0" size={16} />
              <span>Operate and maintain our website</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[var(--accent-blue-light)] mt-1 flex-shrink-0" size={16} />
              <span>Improve user experience and services</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[var(--accent-blue-light)] mt-1 flex-shrink-0" size={16} />
              <span>Analyze usage trends and performance</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[var(--accent-blue-light)] mt-1 flex-shrink-0" size={16} />
              <span>Develop new solutions and offerings</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[var(--accent-blue-light)] mt-1 flex-shrink-0" size={16} />
              <span>Communicate updates, offers, and support</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[var(--accent-blue-light)] mt-1 flex-shrink-0" size={16} />
              <span>Ensure security and prevent fraud</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "cookies",
      icon: Eye,
      title: "Cookies",
      color: "from-orange-600 to-red-600",
      body: (
        <p>
          RiskMan uses cookies to store visitor preferences and enhance
          navigation. Users can disable cookies through browser settings;
          however, some features may not function optimally.
        </p>
      ),
    },
    {
      id: "rights",
      icon: Shield,
      title: "CCPA & GDPR Rights",
      color: "from-red-600 to-rose-600",
      body: (
        <>
          <p>
            Users may have data protection rights under applicable laws,
            including CCPA and GDPR, such as access, correction, deletion, and
            restriction of personal data.
          </p>
          <p className="mt-4">
            Requests can be made via{" "}
            <a href="/contact" className="text-[var(--accent-blue-light)] underline hover:text-white transition-colors">
              the contact page
            </a>
            , and we typically respond within one month.
          </p>
        </>
      ),
    },
    {
      id: "children",
      icon: Users,
      title: "Children's Information",
      color: "from-blue-600 to-indigo-600",
      body: (
        <p>
          RiskMan does not knowingly collect personal data from children under
          the age of 13. If such information is identified, it will be removed
          promptly.
        </p>
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
              Your Data Protection
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              Privacy
              <br />
              <span 
                className="gradient-text"
                style={{
                  backgroundSize: "200% 200%",
                  animation: 'gradientShift 3s linear infinite'
                }}
              >
                Policy
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[var(--text-gray)] max-w-3xl mx-auto leading-relaxed">
              How we collect, use, and protect your information with transparency and integrity
            </p>
          </div>
        </div>
      </section>

      {/* ================= PRIVACY SECTIONS ================= */}
      <section className="relative section-padding isolate">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Our Commitment to <span className="gradient-text">Your Privacy</span>
            </h2>
            <p className="text-lg text-[var(--text-gray)] max-w-3xl mx-auto">
              At RiskMan, we take data protection seriously. This policy outlines how we handle
              your personal information with the highest standards of security and compliance.
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
          Need Privacy or
          <br />
          <span 
            className="gradient-text"
            style={{
              backgroundSize: "200% 200%",
              animation: 'gradientShift 3s linear infinite'
            }}
          >
            Compliance Support
          </span>?
        </h2>

        <p className="text-xl text-[var(--text-gray)] mb-8 max-w-2xl mx-auto">
          RiskMan assists organizations with privacy frameworks, governance,
          risk, and enterprise compliance programs
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
            Talk to RiskMan
          </a>
          <a 
            href="/services" 
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
            View Our Services
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