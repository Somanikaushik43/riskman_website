import React, { useState, useEffect,useRef } from 'react';
import { Calculator, PieChart, Palette, Coins, ArrowRight, CheckCircle2,TrendingUp,Building2,Users,Lightbulb,Handshake,Zap,Clock,Target,Award, } from 'lucide-react';
import HeroSection from '../../components/layout/HeroSection';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import blogs from "../../data/blogs.json"


// Background Grid Component
const BackgroundGrid = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#05051e] h-full pointer-events-none">
            <div className="absolute inset-0 flex flex-wrap content-start justify-center">
                {Array.from({ length: 150 }).map((_, i) => (
                    <div
                        key={i}
                        className="w-32 h-32 md:w-36 md:h-36 lg:w-48 lg:h-48 m-1 border border-white/10 rounded-[2.5rem]"
                    ></div>
                ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        </div>
    );
};

// Counter Component
const StatCounter = ({ end, suffix = "", label, subLabel }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [end]);

    return (
        <div className="flex flex-col">
            <div className="mb-2 font-sans text-5xl font-medium tracking-tight text-white lg:text-6xl">
                {count}{suffix}
            </div>
            <div className="text-lg font-medium leading-tight text-white">{label}</div>
            <div className="text-lg font-medium leading-tight text-white">{subLabel}</div>
        </div>
    );
};

// Hero Section
<HeroSection/>
// Features Section
const Features = () => {
    const features = [
        {
            title: "Trusted to Expertises",
            description: "To uphold the highest standards of audit excellence, providing independent assurance",
            icon: <CheckCircle2 className="w-8 h-8" />
        },
        {
            title: "Client-Centric Approach",
            description: "To uphold the highest standards of audit excellence, providing independent assurance",
            icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        },
        {
            title: "Commitment to Integrity",
            description: "To uphold the highest standards of audit excellence, providing independent assurance",
            icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-8a2 2 0 012-2h14a2 2 0 012 2v8M5 21h14M5 21l-2-2m16 2l2-2M12 7a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
        },
        {
            title: "Innovative Methodologies",
            description: "To uphold the highest standards of audit excellence, providing independent assurance",
            icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        }
    ];

    return (
        <section className="relative z-20 py-16 bg-black md:py-10">
            <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
                <div className="grid gap-4 mb-8 text-2xl font-medium tracking-tight lg:grid-cols-3 lg:text-3xl">
                    <div className="text-[#5a5afc]">
                        financial <br />
                        reporting
                    </div>
                    <div className="text-[#5a5afc]">
                        strengthen <br />
                        internal controls
                    </div>
                    <div className="text-[#5a5afc]">
                        and enhance stakeholder confidence <br />
                        empowering your organization
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#101010] hover:bg-[#5a5afc] p-8 rounded-xl transition-all duration-300 h-[350px] flex flex-col items-start justify-between cursor-pointer border border-white/5 hover:border-transparent hover:-translate-y-2 shadow-xl"
                        >
                            <div className="w-16 h-16 rounded-xl bg-[#5a5afc] group-hover:bg-white flex items-center justify-center transition-colors duration-300 shadow-lg">
                                <div className="text-white group-hover:text-[#5a5afc] transition-colors duration-300">
                                    {feature.icon}
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-4 text-2xl font-bold leading-tight text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-sm font-light leading-relaxed text-gray-400 group-hover:text-white/90">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const AuditServices = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const services = [
        {
            id: 1,
            title: "Professional Integrity and Expertise",
            description: "Our services are delivered by highly qualified professionals, ensuring accuracy, independence, and compliance with the highest international auditing standards.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&q=80&w=800"
        },
        {
            id: 2,
            title: "Internal Audit Services",
            description: "We provide comprehensive internal audit solutions that evaluate your operational effectiveness, identify control weaknesses, and recommend improvements.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&q=80&w=800"
        },
        {
            id: 3,
            title: "Risk Assurance",
            description: "Our risk assurance services help you identify, assess, and mitigate business risks while ensuring compliance with regulatory requirements.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&q=80&w=800"
        },
        {
            id: 4,
            title: "Compliance & Regulatory Review",
            description: "Our services are delivered by highly qualified professionals, ensuring accuracy, independence, and compliance with the highest international auditing standards.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&q=80&w=800"
        }
    ];

    return (
        <div className="text-white bg-black md:py-20">
            <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
                <div className="grid grid-cols-1 gap-8 mb-10 lg:grid-cols-2">
                    <div>
                        <p className="mb-4 text-sm tracking-wider text-gray-400">Service</p>
                        <h1 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
                            Precision. Assurance.<br />
                            Value-Driven Insights.
                        </h1>
                    </div>
                    <div className="flex items-center">
                        <p className="text-base leading-relaxed text-gray-300">
                            Our comprehensive audit and assurance services are designed to deliver accurate financial reporting, strengthen internal controls, and enhance stakeholder confidence.
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    {services.map((service) => (
                        <div key={service.id} className="overflow-hidden transition-all duration-300 bg-zinc-800 rounded-xl">
                            <button
                                onClick={() => setExpandedCard(expandedCard === service.id ? null : service.id)}
                                className="flex items-center justify-between w-full px-6 py-6 transition-colors duration-200 hover:bg-zinc-700"
                            >
                                <h2 className="text-xl font-normal text-left text-white md:text-2xl">
                                    {service.id}. {service.title}
                                </h2>
                                <div className={`flex-shrink-0 w-10 h-10 rounded-full border-2 border-gray-500 flex items-center justify-center transition-transform duration-300 ${expandedCard === service.id ? 'rotate-180' : ''}`}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedCard === service.id ? 'max-h-[600px]' : 'max-h-0'}`}>
                                <div className="px-10 pt-4 pb-10">
                                    <div className="flex flex-col items-start gap-8 lg:flex-row">
                                        <div className="lg:w-1/2">
                                            <img src={service.image} alt={service.title} className="object-cover w-full h-64 rounded-xl" />
                                        </div>
                                        <div className="flex items-center lg:w-1/2">
                                            <p className="text-base leading-relaxed text-gray-300">{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                    {/* <button className="px-8 py-4 text-lg font-medium text-white transition-all duration-300 bg-indigo-600 border-2 border-indigo-600 rounded-full hover:bg-white hover:text-indigo-600 hover:border-white">
                        View More
                    </button> */}


                    <a href="/services" 
            className="inline-block px-8 py-4 text-lg font-medium text-white transition-all duration-300 ease-in-out bg-black border-2 border-indigo-600 rounded-full hover:bg-indigo-600 hover:border-indigo-600"
          >
            View More
          </a>
                </div>
            </div>
        </div>
    );
};


// 4. Risk & Compliance Section
const RiskCompliance = () => {
    const services = [
        {
            id: 1,
            title: "Enterprise Risk Management",
            description: "A structured framework to identify, assess, and manage risks across your organization, aligning with strategic objectives.",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        },
        {
            id: 2,
            title: "Regulatory Risk Compliance",
            description: "A structured framework to identify, assess, and manage risks across your organization, aligning with strategic objectives.",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        },
        {
            id: 3,
            title: "Third-Party Risk Assessments",
            description: "A structured framework to identify, assess, and manage risks across your organization, aligning with strategic objectives.",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        },
        {
            id: 4,
            title: "Compliance Risk Program",
            description: "A structured framework to identify, assess, and manage risks across your organization, aligning with strategic objectives.",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        }
    ];

    return (
        <div className="text-white bg-black py-14 md:py-20">
            <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
                <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="relative">
                        <img 
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&q=80&w=800"
                            alt="Risk & Compliance"
                            className="w-full h-full min-h-[740px] rounded-xl object-cover"
                        />
                    </div>

                    <div>
                        <p className="mb-4 text-sm tracking-wider text-gray-400">Key Risk & Compliance</p>
                        <h1 className="mb-6 text-3xl font-semibold leading-tight text-white md:text-4xl">
                            Managing Risk,<br />
                            Ensuring Total<br />
                            Compliance
                        </h1>
                        <p className="mb-12 text-base leading-relaxed text-gray-300">
                            Explore tailored risk and compliance solutions that safeguard operations, meet regulations, and strengthen enterprise-wide accountability and control.
                        </p>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {services.map((service) => (
                                <div key={service.id} className="cursor-pointer group">
                                    <div className="flex items-center justify-center w-16 h-16 mb-4 transition-colors duration-300 bg-indigo-600 rounded-2xl group-hover:bg-indigo-500">
                                        {service.icon}
                                    </div>
                                    <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
                                    <p className="text-sm leading-relaxed text-gray-400">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 5. Industry Specialization Section
const IndustrySpecialization = () => {
  const industries = [
    {
      id: 1,
      title: "Energy & Utilities",
      description:
        "We offer specialized audit and assurance services for the financial sector, ensuring compliance with complex regulatory frameworks.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Retail",
      description:
        "We offer specialized audit and assurance services for the financial sector, ensuring compliance with complex regulatory frameworks.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M7 18a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4zM1 2h3l3.6 7.59-1.35 2.45A2 2 0 007 18h12v-2H7.42l.93-1.68h7.45a2 2 0 001.75-1.03l3.58-6.49A1 1 0 0018.87 4H5.21L4.27 2H1z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Healthcare",
      description:
        "We offer specialized audit and assurance services for the financial sector, ensuring compliance with complex regulatory frameworks.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Manufacturing",
      description:
        "We offer specialized audit and assurance services for the financial sector, ensuring compliance with complex regulatory frameworks.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M22 20h-3v-2h-2v2H7v-2H5v2H2V4h4l2 4h6l2-4h4v16z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Technology",
      description:
        "We offer specialized audit and assurance services for the financial sector, ensuring compliance with complex regulatory frameworks.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M4 6h16v10H4V6zm-4 12v2h24v-2h-4a2 2 0 01-2-2H6a2 2 0 01-2 2H0z" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Real Estate",
      description:
        "We offer specialized audit and assurance services for the financial sector, ensuring compliance with complex regulatory frameworks.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 3l10 9h-3v9h-5v-6H10v6H5v-9H2l10-9z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="text-white bg-black py-14 md:py-20">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">

        {/* HEADER */}
        <div className="max-w-2xl mb-10">
          <p className="mb-4 text-sm tracking-wider text-gray-400">
            Industry Specialization
          </p>
          <h2 className="mb-6 text-3xl font-semibold leading-tight md:text-4xl">
            Expertise Tailored <br /> to Every Industry
          </h2>
          <p className="leading-relaxed text-gray-300">
            Delivering industry-specific audit and assurance solutions that
            strengthen governance, compliance, and performance.
          </p>


           <a 
            href="/industries" 
            className="inline-block px-6 py-3 mt-4 mb-4 text-base font-medium text-white transition-all duration-300 ease-in-out bg-black border-2 border-indigo-600 rounded-full hover:bg-indigo-600 hover:border-indigo-600"
          >
            Explore More
          </a>
        </div>

        {/* MAIN GRID */}
        <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-2">

          {/* LEFT – INDUSTRY LIST */}
          <div className="grid grid-cols-1 gap-4">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="p-6 transition-all duration-300 cursor-pointer group bg-zinc-800 rounded-xl hover:bg-indigo-600"
              >
                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-all duration-300 bg-indigo-600 group-hover:bg-white rounded-xl">
                    <div className="text-white transition-colors duration-300 group-hover:text-indigo-600">
                      {industry.icon}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-semibold">
                      {industry.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-white">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT – IMAGE */}
          <div className="relative h-full min-h-[700px]">
            <img
              src="https://kit.createbigsupply.com/auditus/wp-content/uploads/sites/48/2025/05/two-multi-ethnic-economists-experienced-african-a-2024-12-13-02-43-51-utc.jpg"
              alt="Industry Specialization"
              className="object-cover w-full h-full rounded-3xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};


const KeyServices = () =>{
  const services = [
    {
      id: "01",
      title: "Risk & Assessment Audits",
      description:
        "We evaluate your organization's key risk areas and assess the design and effectiveness of internal controls to ensure proactive risk mitigation.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M12 2L3 6v6c0 5.25 3.75 10.74 9 12 5.25-1.26 9-6.75 9-12V6l-9-4z" />
        </svg>
      ),
    },
    {
      id: "02",
      title: "Operational & Financial Audits",
      description:
        "We evaluate your organization's key risk areas and assess the design and effectiveness of internal controls to ensure proactive risk mitigation.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M3 3h18v18H3V3zm4 4h4v4H7V7zm6 0h4v10h-4V7z" />
        </svg>
      ),
    },
    {
      id: "03",
      title: "Risk Compliance Audits",
      description:
        "We evaluate your organization's key risk areas and assess the design and effectiveness of internal controls to ensure proactive risk mitigation.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M9 12l2 2 4-4 2 2-6 6-4-4 2-2z" />
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
      ),
    },
    {
      id: "04",
      title: "IT & Cybersecurity Audits",
      description:
        "We evaluate your organization's key risk areas and assess the design and effectiveness of internal controls to ensure proactive risk mitigation.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
          <path d="M11 10h2v5h-2zm0-3h2v2h-2z" />
        </svg>
      ),
    },
  ];

  const handleArrowClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="text-white bg-black py-14 md:py-20">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-20">
            <p className="mb-4 text-sm tracking-wider text-gray-400">
              Key Services
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
              Comprehensive<br />
              Audit Solutions<br />
              for Every<br />
              Challenge
            </h2>
            <p className="max-w-xl mb-8 text-gray-300">
              Explore our specialized internal audit services designed to manage
              risk, enhance control, and ensure operational and regulatory
              excellence.
            </p>

            <button
              onClick={handleArrowClick}
              className="px-8 py-4 text-lg font-medium transition bg-indigo-600 rounded-full hover:bg-indigo-500"
            >
              Book Consultation
            </button>
          </div>

         {/* RIGHT SIDE */}
<div className="grid grid-cols-1 gap-4">
  {services.map((service, index) => (
    <div
      key={service.id}
      className={`relative group rounded-3xl p-6 min-h-[260px]
        bg-gradient-to-b from-zinc-900 to-zinc-800
        border border-white/10
        hover:border-indigo-500/60
        transition-all duration-300
        ${index === 1 || index === 3 ? "lg:ml-20" : ""}
      `}
    >
      {/* BIG BACKGROUND NUMBER */}
      <span className="absolute font-bold select-none top-6 right-8 text-7xl text-white/5">
        {service.id}
      </span>

      {/* ICON */}
      <div className="flex items-center justify-center w-10 h-10 mb-6 transition rounded-xl bg-indigo-600/15 group-hover:bg-indigo-600">
        <div className="text-indigo-500 transition group-hover:text-white">
          {service.icon}
        </div>
      </div>

      {/* CONTENT */}
      <h3 className="mb-4 text-xl font-semibold leading-tight md:text-2xl">
        {service.title}
      </h3>

      <p className="mb-10 leading-relaxed text-white-400">
        {service.description}
      </p>

      {/* ARROW BUTTON */}
      <button
        onClick={handleArrowClick}
        className="absolute flex items-center justify-center w-10 h-10 transition border rounded-full bottom-5 right-5 border-white/20 hover:bg-white hover:border-white group"
      >
        <svg
          className="w-4 h-4 text-white transition group-hover:text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 17L17 7M17 7H7M17 7v10"
          />
        </svg>
      </button>
    </div>
  ))}
</div>


        </div>
      </div>
    </section>
  );
}




// Blog Section

const BlogSection = () => {
    const navigate = useNavigate();

    // Get the latest 3 blogs
    const latestBlogs = blogs.slice(0, 3);

    const handleCardClick = (slug) => {
        navigate(`/blog/${slug}`);
    };

    return (
        <section className="bg-black py-14 md:py-20">
            <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
                <div className="mb-10 text-left">
                    <p className="mb-4 text-sm tracking-wider text-gray-400">INSIGHTS</p>
                    <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                        Latest from Our <span className="text-[#5a5afc]">Experts</span>
                    </h2>
                    <p className="max-w-3xl text-lg text-gray-300">
                        Stay updated with the latest insights, trends, and best practices in audit, risk management, and compliance
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {latestBlogs.map((blog) => (
                        <div
                            key={blog.id}
                            onClick={() => handleCardClick(blog.slug)}
                            className="group bg-zinc-900 rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-[#5a5afc]/50 cursor-pointer"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={blog.featuredImage}
                                    alt={blog.title}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-2 bg-[#5a5afc] text-white text-xs font-semibold rounded-full">
                                        {blog.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="mb-3 text-sm text-gray-400">{blog.date}</p>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#5a5afc] transition-colors">
                                    {blog.title}
                                </h3>
                                <p className="mb-4 text-sm leading-relaxed text-gray-400 line-clamp-3">
                                    {blog.shortDescription}
                                </p>
                                <div className="flex items-center gap-2 text-[#5a5afc] font-semibold text-sm group-hover:gap-3 transition-all">
                                    Read More <ArrowRight size={16} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const FAQSection=()=> {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: "How do you ensure independence and objectivity during audits?",
      answer: "We adhere strictly to professional standards and ethical guidelines, ensuring our audit teams remain independent from management and avoid any conflicts of interest throughout the engagement. We provide audit and assurance services across various sectors including finance, manufacturing, technology, healthcare, energy, and retail—offering tailored solutions based on deep industry knowledge."
    },
    {
      question: "What is the difference between audit and assurance services?",
      answer: "Audit services involve examining financial statements to provide an opinion on their accuracy, while assurance services are broader and include various types of evaluations and reviews that provide confidence about information quality, processes, and controls. Assurance can cover non-financial information and operational processes."
    },
    {
      question: "What documents are required for an audit?",
      answer: "Typical documents include financial statements, general ledgers, bank statements, invoices, contracts, payroll records, tax returns, fixed asset registers, inventory records, and internal control documentation. The specific requirements vary based on the audit scope and your organization's nature."
    },
    {
      question: "Can you assist with compliance to international standards?",
      answer: "Yes, we provide comprehensive guidance on compliance with international standards including IFRS, ISA, SOX, ISO frameworks, and other global regulatory requirements. Our team has extensive experience helping organizations achieve and maintain compliance across multiple jurisdictions."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We specialize in finance, manufacturing, technology, healthcare, energy, retail, infrastructure, and emerging enterprises. Our sector-specific expertise allows us to deliver customized solutions that address unique industry challenges and regulatory requirements."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-white bg-black py-14 md:py-20">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          
          {/* Left Side - Header */}
          <div className="lg:sticky lg:top-24">
            <p className="text-white-400 text-sm mb-3 tracking-[0.2em] uppercase">FAQ</p>
            <h1 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl">
              Clarity for<br />
              Your Critical<br />
              Questions
            </h1>
            <p className="text-lg leading-relaxed text-gray-300">
              Find clear, concise answers to common questions about our audit and assurance services, processes, and standards—designed to help you make informed decisions with confidence and understand how we support your business every step of the way
            </p>
          </div>

          {/* Right Side - FAQ Accordion */}
<div className="space-y-3">
  {faqs.map((faq, index) => {
    const isOpen = openIndex === index;

    return (
      <div
        key={index}
        className={`rounded-xl overflow-hidden transition-all duration-300
          bg-zinc-900 border border-white/10
          ${isOpen ? "border-indigo-500/40" : "hover:bg-zinc-800"}
        `}
      >
        {/* Question */}
        <button
          onClick={() => toggleFAQ(index)}
          className="flex items-center justify-between w-full p-5 text-left md:p-6 group"
        >
          <h3
            className={`text-base md:text-lg font-medium pr-4 transition-colors
              ${isOpen ? "text-white" : "text-gray-300 group-hover:text-white"}
            `}
          >
            {faq.question}
          </h3>

          {/* Icon */}
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center
              transition-all duration-300
              ${isOpen
                ? "bg-indigo-600 rotate-180"
                : "bg-zinc-800 group-hover:bg-zinc-700"}
            `}
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </button>

        {/* Answer */}
        <div
          className={`overflow-hidden transition-all duration-400 ease-in-out
            ${isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="px-5 pb-5 md:px-6">
            <div className="pt-4 border-t border-zinc-800">
              <p className="text-sm leading-relaxed text-gray-400">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>

        </div>
      </div>
    </div>
  );
}


const  Testimonials=()=> {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const slideRefs = useRef([]);

  const testimonials = [
    {
      id: 1,
      name: "Andreas Lim",
      role: "CFO, Pacific Holdings Group",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      text:
        "Their audit team demonstrated deep industry knowledge and a proactive approach. They ensured compliance and delivered insights that improved our internal processes.",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Director of Finance, TechCorp Industries",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
      text:
        "Exceptional professionalism and attention to detail. Their recommendations significantly strengthened our internal controls.",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "CEO, Global Manufacturing Ltd",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
      text:
        "More than auditors — strategic advisors. Their risk and compliance expertise helped us navigate complex regulations with confidence.",
    },
    {
      id: 4,
      name: "Emily Thompson",
      role: "VP Operations, RetailMax Group",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
      text:
        "Their insights were actionable and impactful, driving measurable improvements in efficiency and compliance.",
    },
  ];

  /* AUTO SLIDE */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  /* GSAP FADE + LIFT */
  useEffect(() => {
    const slide = slideRefs.current[currentIndex];
    if (!slide) return;

    gsap.fromTo(
      slide,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );
  }, [currentIndex]);

  return (
    <section className="text-white bg-black py-14 md:py-20">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">

        {/* HEADER */}
        <div className="mb-8 text-start">
          <p className="text-white-400 text-sm tracking-[0.3em] uppercase mb-2">
            Testimonials
          </p>
          <h2 className="mb-3 text-xl font-bold md:text-2xl">
            What Our Clients Say
          </h2>
          <p className="max-w-xl text-white-300">
            Trusted by organizations across industries
          </p>
        </div>

        {/* SLIDER */}
         <div className="relative">

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t, index) => (
                <div
                  key={t.id}
                  ref={(el) => (slideRefs.current[index] = el)}
                  className="flex-shrink-0 w-full px-3"
                >
                  <div
                    className="relative rounded-2xl p-8 md:p-10 min-h-[340px]
                               flex flex-col items-center justify-center
                               text-center overflow-hidden"
                                onMouseEnter={() => {
                      setIsPaused(true);
                      setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                      setIsPaused(false);
                      setIsHovered(false);
                    }}
                  >
                    {/* DEFAULT INDIGO BACKGROUND */}
                    <div
                      className={`absolute inset-0 bg-indigo-600 transition-opacity duration-500 ${
                        isHovered && index === currentIndex
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                    />

                    {/* HOVER DARK BACKGROUND */}
                    <div
                      className={`absolute inset-0 bg-zinc-800 transition-opacity duration-500 ${
                        isHovered && index === currentIndex
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />

                    {/* CONTENT */}
                    <div className="relative z-10 max-w-3xl">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="object-cover w-20 h-20 mx-auto mb-5 border-4 rounded-full shadow-lg md:w-24 md:h-24 border-white/20"
                      />

                      <h3 className="mb-1 text-lg font-semibold md:text-xl">
                        {t.name}
                      </h3>
                      <p className="mb-6 text-sm md:text-base text-white/80">
                        {t.role}
                      </p>

                      <p className="text-base leading-relaxed md:text-lg">
                        {t.text}
                      </p>
                    </div>

                    {/* SOFT GLOW (ONLY WHEN NOT HOVERED) */}
                    <div
                      className={`absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500 ${
                        !isHovered || index !== currentIndex
                          ? "opacity-100 shadow-[0_0_50px_rgba(139,92,246,0.35)]"
                          : "opacity-0"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// Animated Counter Component
const AnimatedCounter = ({ target, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime;
          let animationFrame;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / (duration * 1000);

            if (progress < 1) {
              setCount(Math.floor(target * progress));
              animationFrame = requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          animationFrame = requestAnimationFrame(animate);
          return () => cancelAnimationFrame(animationFrame);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// VALUE DIFFERENTIATORS SECTION
const ValueDifferentiators = () => {
  return (
    <section className="text-white bg-black py-14 md:py-20">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="mb-10 text-start">
          <p className="mb-3 text-sm tracking-wider uppercase text-white-400">
            Our Strengths
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            <span className="text-indigo-600">Value</span> Differentiators
          </h2>
        </div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 hidden w-px -translate-x-1/2 md:block left-1/2 bg-gradient-to-b from-indigo-200 via-blue-200 to-indigo-200" />
          
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { icon: Lightbulb, title: "Enriched domain expertise and experience", color: "bg-indigo-600" },
              { icon: Handshake, title: "Ease to do business - Flexible to business needs", color: "bg-indigo-600" },
              { icon: TrendingUp, title: "All Inclusive - Fixed price engagement model", color: "bg-indigo-600" },
              { icon: Zap, title: "Agile & lean approach in implementation", color: "bg-indigo-600" },
              { icon: Clock, title: "Responsive & quick", color: "bg-indigo-600" },
              { icon: Target, title: "Focus on process improvement & real business benefits", color: "bg-indigo-600" },
              { icon: Users, title: "Strong focus on building long-term relationships", color: "bg-indigo-600" },
              { icon: CheckCircle2, title: "We remain with clients throughout the journey", color: "bg-indigo-600" },
              { icon: Award, title: "100% successful implementation", color: "bg-indigo-600" },
              { icon: Clock, title: "100% on time project completion", color: "bg-indigo-600" },
            ].map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={i}
                  className={`flex items-center gap-4 ${i % 2 === 0 ? 'justify-end text-right' : 'justify-start text-left'}`}
                  style={{
                    opacity: 0,
                    transform: i % 2 === 0 ? 'translateX(40px)' : 'translateX(-40px)',
                    animation: `fadeInSlide 0.6s ease-out ${i * 0.05}s forwards`
                  }}
                >
                  {i % 2 === 1 && (
                    <div className={`${item.color} p-4 rounded-xl`}>
                      <ItemIcon size={24} />
                    </div>
                  )}
                  <div className={`flex-1 max-w-md ${i % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <p className="font-semibold text-gray-300">{item.title}</p>
                  </div>
                  {i % 2 === 0 && (
                    <div className={`${item.color} p-4 rounded-xl`}>
                      <ItemIcon size={24} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInSlide {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

// STATS SECTION
const StatsSection = () => {
  return (
    <section className="text-white bg-black py-14 md:py-20">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="mb-10 text-start">
          <p className="mb-3 text-sm tracking-wider text-gray-400 uppercase">
            Our Impact
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Trusted by <span className="text-indigo-600">Global Enterprises</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            { number: 15, suffix: "+", label: "Years Experience", icon: TrendingUp, color: "from-indigo-600 to-blue-600" },
            { number: 50, suffix: "+", label: "Industries Served", icon: Building2, color: "from-blue-600 to-indigo-600" },
            { number: 150, suffix: "+", label: "Global Clients", icon: Users, color: "from-blue-600 to-indigo-600" },
            { number: 300, suffix: "+", label: "Projects Delivered", icon: CheckCircle2, color: "from-blue-600 to-indigo-600" },
          ].map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <div
                key={i}
                className="relative group"
                style={{
                  opacity: 0,
                  transform: 'translateY(30px)',
                  animation: `fadeInUp 0.6s ease-out ${i * 0.1}s forwards`
                }}
              >
                <div className="p-8 text-center transition-all duration-300 border shadow-lg bg-zinc-900 rounded-3xl hover:shadow-2xl border-white/10 hover:border-indigo-500/50">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <StatIcon className="text-white" size={24} />
                  </div>
                  <h3 className="mb-2 text-5xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text">
                    <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                  </h3>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

// WHY RISKMAN SECTION
const WhyRiskMan = () => {
  return (
    <section className="text-white bg-black py-14 md:py-20">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="mb-10 text-start">
          <p className="mb-3 text-sm tracking-wider text-gray-400 uppercase">
            Why Choose Us
          </p>
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
            Why <span className="text-indigo-600">RiskMan</span>?
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Customized Solutions",
              description: "Tailoring services to unique client needs ensuring optimal outcomes."
            },
            {
              title: "Client-Centric Focus",
              description: "Our unwavering dedication to understanding and addressing client goals ensures satisfaction and success."
            },
            {
              title: "Continuous Improvement",
              description: "Constantly evolving and refining our processes to stay ahead of industry trends and client expectations."
            },
            {
              title: "Proven Track Record",
              description: "A solid history of delivering measurable results showcases our commitment to excellence."
            },
            {
              title: "Innovative Approach",
              description: "Utilizing cutting-edge technologies and methodologies to provide forward-thinking solutions."
            },
            {
              title: "Expertise and Experience",
              description: "Our seasoned professionals bring years of industry experience, guaranteeing top-tier solutions."
            },
            {
              title: "Ethical Standards",
              description: "Upholding the highest levels of integrity and transparency in all interactions."
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 transition-all duration-300 border shadow-lg bg-zinc-900 rounded-2xl border-white/10 hover:border-indigo-500/50 hover:shadow-2xl"
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                animation: `fadeInUp 0.6s ease-out ${i * 0.1}s forwards`
              }}
            >
              <h3 className="mb-3 text-xl font-bold text-indigo-600">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

// Main Home Component
export default function Home() {
    return (
        <div className="w-full font-sans bg-black">
            <HeroSection />
            <Features />
            <AuditServices />
            <RiskCompliance/>
            <StatsSection/>
            <IndustrySpecialization/>
            <ValueDifferentiators/>
            <BlogSection />
            <WhyRiskMan/>
            <KeyServices/>
            <Testimonials/>
            <FAQSection/>
            
        </div>
    );
}