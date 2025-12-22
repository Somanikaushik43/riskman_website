import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users, Award, Shield, Zap, TrendingUp, MessageSquare, Calendar, HeadphonesIcon } from "lucide-react";

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
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const cardHover = {
  rest: { scale: 1, rotateY: 0 },
  hover: { 
    scale: 1.05,
    rotateY: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredMethod, setHoveredMethod] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /* =======================
     CONTACT METHODS DATA
  ======================= */
  const contactMethods = [
    {
      id: "email",
      icon: <Mail className="text-4xl" />,
      title: "Email Us",
      description: "Drop us an email anytime and we'll get back to you within 24 hours.",
      details: [
        "General Inquiries",
        "Support Requests",
        "Partnership Opportunities",
        "Feedback & Suggestions"
      ],
      contact: "info@riskman.in",
      action: "mailto:info@riskman.in",
      color: "from-blue-600 to-indigo-600",
    },
    {
      id: "phone",
      icon: <Phone className="text-4xl" />,
      title: "Call Us",
      description: "Speak directly with our team for immediate assistance and consultations.",
      details: [
        "Emergency Support",
        "Technical Assistance",
        "Consultation Booking",
        "Account Management"
      ],
      contact: "+91 98765 43210",
      action: "tel:+919876543210",
      color: "from-indigo-600 to-purple-600",
    },
    {
      id: "visit",
      icon: <MapPin className="text-4xl" />,
      title: "Visit Us",
      description: "Come say hello at our office. We'd love to meet you in person.",
      details: [
        "In-Person Consultations",
        "Office Tours",
        "Workshop Sessions",
        "Team Meetings"
      ],
      contact: "Kolkata, West Bengal, India",
      action: null,
      color: "from-purple-600 to-pink-600",
    },
  ];

  /* =======================
     WHY CONTACT US
  ======================= */
  const whyContactReasons = [
    {
      icon: <Shield className="text-3xl" />,
      title: "Expert Guidance",
      description: "Get personalized advice from industry-leading risk management consultants.",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: <Zap className="text-3xl" />,
      title: "Fast Response",
      description: "We respond to all inquiries within 24 hours to keep your project moving.",
      color: "from-indigo-600 to-purple-600"
    },
    {
      icon: <TrendingUp className="text-3xl" />,
      title: "Proven Results",
      description: "Join hundreds of satisfied clients who've transformed their risk strategies.",
      color: "from-purple-600 to-pink-600"
    },
  ];

  /* =======================
     OFFICE FEATURES
  ======================= */
  const officeFeatures = [
    {
      icon: <MessageSquare className="text-3xl" />,
      title: "Free Consultation",
      description: "Initial 30-minute consultation at no cost"
    },
    {
      icon: <Calendar className="text-3xl" />,
      title: "Flexible Scheduling",
      description: "Book meetings at your convenience"
    },
    {
      icon: <HeadphonesIcon className="text-3xl" />,
      title: "Dedicated Support",
      description: "Personal account manager for every client"
    },
    {
      icon: <Award className="text-3xl" />,
      title: "Quality Assurance",
      description: "98% client satisfaction rate"
    }
  ];

  const services = [
    "Business Continuity Planning",
    "Risk Assessment & Analysis",
    "Compliance Management",
    "Crisis Management",
    "Cyber Security",
    "Other Services"
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
              Get in Touch
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              Contact
              <br />
              <span 
                className="gradient-text"
                style={{
                  backgroundSize: "200% 200%",
                  animation: 'gradientShift 3s linear infinite'
                }}
              >
                Our Team
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[var(--text-gray)] max-w-3xl mx-auto leading-relaxed">
              Ready to strengthen your business resilience? Let's discuss your unique challenges and craft tailored solutions
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT METHODS OVERVIEW ================= */}
      <section className="relative section-padding isolate">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              How to <span className="gradient-text">Reach Us</span>
            </h2>
            <p className="text-lg text-[var(--text-gray)] max-w-3xl mx-auto">
              Choose the communication method that works best for you. We're here to help through 
              multiple channels, ensuring you get the support you need.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {contactMethods.map((method, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredMethod(method.id)}
                onMouseLeave={() => setHoveredMethod(null)}
                className="bg-[var(--dark-navy-light)] backdrop-blur-sm border border-white/5 rounded-2xl p-8 group cursor-pointer relative overflow-hidden transition-all duration-500 hover:border-[var(--accent-blue)]/50 hover:shadow-2xl hover:shadow-[var(--accent-blue)]/30"
                style={{ 
                  transformStyle: "preserve-3d",
                  transform: hoveredMethod === method.id ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.5s ease'
                }}
              >
                {/* Animated gradient background */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br rounded-2xl"
                  style={{
                    opacity: hoveredMethod === method.id ? 0.2 : 0,
                    transform: hoveredMethod === method.id ? 'scale(1)' : 'scale(0.8)',
                    background: "linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-purple) 100%)",
                    transition: 'all 0.6s ease'
                  }}
                />
                
                {/* Glow effect */}
                <div 
                  className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-2xl blur-xl"
                  style={{
                    opacity: hoveredMethod === method.id ? 0.5 : 0,
                    transition: 'opacity 0.4s ease'
                  }}
                />
                
                {/* Animated border shine effect */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    opacity: hoveredMethod === method.id ? 1 : 0,
                    background: "linear-gradient(90deg, transparent, rgba(99, 179, 237, 0.3), transparent)",
                    backgroundSize: "200% 100%",
                    animation: hoveredMethod === method.id ? 'shine 1.5s infinite' : 'none',
                    transition: 'opacity 0.4s ease'
                  }}
                />
                
                <div className="relative z-10">
                  {/* Icon with rotation effect */}
                  <div 
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-6 group-hover:shadow-2xl`}
                    style={{
                      transform: hoveredMethod === method.id ? 'scale(1.15) rotateY(180deg)' : 'scale(1) rotateY(0deg)',
                      transition: 'all 0.6s ease'
                    }}
                  >
                    <div
                      style={{
                        transform: hoveredMethod === method.id ? 'rotateY(180deg)' : 'rotateY(0deg)',
                        transition: 'transform 0.6s ease'
                      }}
                    >
                      {method.icon}
                    </div>
                  </div>

                  <h3 
                    className="mb-4 text-2xl font-bold text-white/90 group-hover:text-white"
                    style={{
                      transform: hoveredMethod === method.id ? 'translateX(5px)' : 'translateX(0)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {method.title}
                  </h3>

                  <p 
                    className="text-[var(--text-gray)] leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300"
                    style={{
                      transform: hoveredMethod === method.id ? 'translateX(3px)' : 'translateX(0)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {method.description}
                  </p>

                  <div className="mb-6">
                    <h4 
                      className="mb-3 text-sm font-bold text-white"
                      style={{
                        transform: hoveredMethod === method.id ? 'translateX(5px)' : 'translateX(0)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      Available For:
                    </h4>
                    <ul className="space-y-3">
                      {method.details.map((detail, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start gap-3 text-[var(--text-gray)] group-hover:text-white/90"
                          style={{
                            opacity: 0,
                            transform: 'translateX(-10px)',
                            animation: hoveredMethod === method.id ? `fadeInLeft 0.5s ease forwards ${idx * 0.1}s` : 'none'
                          }}
                        >
                          <CheckCircle className="text-[var(--accent-blue-light)] mt-1 flex-shrink-0" size={14} />
                          <span className="text-sm leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 transition-colors duration-300 border-t border-white/10 group-hover:border-white/30">
                    {method.action ? (
                      <a 
                        href={method.action}
                        className="flex items-center gap-2 text-[var(--accent-blue-light)] font-semibold group-hover:text-white"
                        style={{
                          transform: hoveredMethod === method.id ? 'translateX(5px)' : 'translateX(0)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {method.contact}
                        <Send 
                          size={14}
                          style={{
                            transform: hoveredMethod === method.id ? 'translateX(5px)' : 'translateX(0)',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      </a>
                    ) : (
                      <p className="text-[var(--accent-blue-light)] font-semibold group-hover:text-white">
                        {method.contact}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CONTACT US ================= */}
      <section className="relative section-padding isolate">
        <div className="bg-glow-purple absolute top-[100px] right-[-200px]" />
        
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Why <span className="gradient-text">Connect With Us</span>
            </h2>
            <p className="text-lg text-[var(--text-gray)] max-w-3xl mx-auto">
              Experience the difference of working with dedicated risk management professionals
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {whyContactReasons.map((reason, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-purple)]/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center group relative overflow-hidden cursor-pointer hover:scale-110 hover:-translate-y-2 transition-all duration-500"
              >
                {/* Animated background gradient */}
                <div 
                  className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(135deg, rgba(99, 179, 237, 0.2) 0%, rgba(147, 112, 219, 0.2) 100%)"
                  }}
                />
                
                {/* Glow effect */}
                <div 
                  className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-400"
                />
                
                {/* Rotating border effect */}
                <div
                  className="absolute inset-0 opacity-0 rounded-2xl group-hover:opacity-30"
                  style={{
                    background: "conic-gradient(from 0deg, transparent, var(--accent-blue), transparent)",
                    animation: 'rotate 2s linear infinite'
                  }}
                />
                
                <div className="relative z-10">
                  {/* Icon with pulse effect */}
                  <div 
                    className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6`}
                    style={{
                      animation: 'pulse-shadow 2s infinite'
                    }}
                  >
                    <div className="transition-all group-hover:scale-120 group-hover:rotate-360 duration-600">
                      {reason.icon}
                    </div>
                  </div>
                  
                  <h3 className="mb-4 text-xl font-bold transition-all duration-300 text-white/90 group-hover:text-white group-hover:scale-105">
                    {reason.title}
                  </h3>
                  
                  <p className="text-[var(--text-gray)] leading-relaxed group-hover:text-white/90 opacity-80 group-hover:opacity-100 transition-all duration-300">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM WITH IMAGE ================= */}
      <section className="relative section-padding isolate">
        <div className="container mx-auto max-w-7xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left: Form */}
            <div>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                Send Us a
                <br />
                <span 
                  className="gradient-text"
                  style={{
                    backgroundSize: "200% 200%",
                    animation: 'gradientShift 3s linear infinite'
                  }}
                >
                  Message
                </span>
              </h2>

              <p className="text-lg text-[var(--text-gray)] leading-relaxed mb-8">
                Fill out the form below and our team will get back to you within 24 hours. 
                We're committed to providing prompt, professional responses to all inquiries.
              </p>

              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-white/80">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--dark-navy-light)] border border-white/10 rounded-xl focus:border-[var(--accent-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]/20 transition-all text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-white/80">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--dark-navy-light)] border border-white/10 rounded-xl focus:border-[var(--accent-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]/20 transition-all text-white"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-white/80">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--dark-navy-light)] border border-white/10 rounded-xl focus:border-[var(--accent-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]/20 transition-all text-white"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-white/80">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--dark-navy-light)] border border-white/10 rounded-xl focus:border-[var(--accent-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]/20 transition-all text-white"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-white/80">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--dark-navy-light)] border border-white/10 rounded-xl focus:border-[var(--accent-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]/20 transition-all text-white"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, i) => (
                      <option key={i} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-white/80">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[var(--dark-navy-light)] border border-white/10 rounded-xl focus:border-[var(--accent-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]/20 transition-all resize-none text-white"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitted}
                  className="w-full px-8 py-4 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    transform: 'scale(1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitted) {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 0 30px rgba(99, 179, 237, 0.5)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  {isSubmitted ? (
                    <span className="flex items-center justify-center gap-2">
                      <CheckCircle size={18} />
                      Message Sent Successfully!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <Send size={18} />
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Right: Image with Office Hours */}
            <div className="relative">
              <div 
                className="absolute -inset-4 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-3xl blur-2xl opacity-20"
                style={{
                  animation: 'blob 4s infinite alternate'
                }}
              />
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop"
                  alt="Contact Us"
                  className="relative object-cover w-full mb-8 shadow-2xl rounded-2xl"
                  style={{
                    transition: 'all 0.5s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05) rotate(2deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                  }}
                />
                
                {/* Floating particles effect */}
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-[var(--accent-blue-light)] rounded-full"
                    style={{
                      top: `${20 + i * 15}%`,
                      right: `${10 + i * 10}%`,
                      animation: `float ${3 + i * 0.5}s infinite ${i * 0.3}s`
                    }}
                  />
                ))}
              </div>

              {/* Office Hours Card */}
              <div className="bg-[var(--dark-navy-light)] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-[var(--accent-blue-light)]" />
                  <h3 className="text-xl font-bold text-white">Office Hours</h3>
                </div>
                <div className="space-y-2 text-[var(--text-gray)]">
                  <p className="flex justify-between">
                    <span className="font-semibold text-white/80">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold text-white/80">Saturday:</span>
                    <span>Closed</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold text-white/80">Sunday:</span>
                    <span>Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OFFICE FEATURES ================= */}
      <section className="relative section-padding isolate">
        <div className="bg-glow-blue absolute top-[100px] left-[-200px]" />
        
        <div className="container mx-auto max-w-7xl">
          <h2 className="mb-16 text-4xl font-bold text-center md:text-5xl">
            What We <span className="gradient-text">Offer</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {officeFeatures.map((feature, i) => (
              <div
                key={i}
                className="bg-[var(--dark-navy)] border border-white/5 rounded-2xl p-6 text-center group relative overflow-hidden cursor-pointer hover:scale-110 hover:rotate-y-5 transition-all duration-400"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Animated shine effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
                    animation: 'shine 0.8s ease-in-out',
                    animationPlayState: 'paused'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.animationPlayState = 'running';
                  }}
                />
                
                {/* Gradient background */}
                <div 
                  className="absolute inset-0 transition-opacity opacity-0 group-hover:opacity-100 duration-400"
                  style={{
                    background: "linear-gradient(135deg, rgba(99, 179, 237, 0.1) 0%, rgba(147, 112, 219, 0.1) 100%)"
                  }}
                />
                
                {/* Glow effect */}
                <div 
                  className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-400"
                />
                
                <div className="relative z-10">
                  {/* Animated icon */}
                  <div 
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] flex items-center justify-center mx-auto mb-4"
                    style={{
                      animation: 'float 2s infinite'
                    }}
                  >
                    {feature.icon}
                  </div>
                  
                  <h3 className="mb-3 text-xl font-bold transition-all duration-200 text-white/90 group-hover:text-white group-hover:-translate-y-1">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-[var(--text-gray)] leading-relaxed group-hover:text-white/90 group-hover:-translate-y-0.5 transition-all duration-200">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LOCATION MAP ================= */}
      <section className="relative section-padding isolate">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Our <span className="gradient-text">Location</span>
            </h2>
            <p className="text-lg text-[var(--text-gray)] max-w-3xl mx-auto">
              Visit our office or schedule a virtual consultation with our team
            </p>
          </div>

          <div className="bg-[var(--dark-navy-light)] border border-white/5 rounded-3xl shadow-2xl overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-purple)]/10 flex items-center justify-center relative overflow-hidden">
              {/* Decorative grid */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3Cpath d='M20 0l1.5-.5 1.5.5-1.5.5zM0 20l-.5 1.5.5 1.5-.5-1.5zM40 20l.5 1.5-.5 1.5.5-1.5zM20 40l1.5.5 1.5-.5-1.5-.5z' stroke='%233B82F6' stroke-width='0.5' opacity='.1'/%3E%3C/g%3E%3C/svg%3E")`
                }}
              />
              
              <div className="relative z-10 text-center">
                <div 
                  className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-3xl mb-6 shadow-2xl"
                  style={{
                    animation: 'pulse-shadow 2s infinite'
                  }}
                >
                  <MapPin className="w-12 h-12 text-white" />
                </div>
                <h3 className="mb-3 text-3xl font-bold text-white">RiskMan Consulting</h3>
                <p className="text-xl text-[var(--text-gray)] mb-6">Kolkata, West Bengal, India</p>
                <button 
                  className="px-8 py-3 btn-primary"
                  style={{
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(99, 179, 237, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section-padding text-center bg-gradient-to-b from-transparent to-[var(--dark-navy-light)]">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          Ready to Get
          <br />
          <span 
            className="gradient-text"
            style={{
              backgroundSize: "200% 200%",
              animation: 'gradientShift 3s linear infinite'
            }}
          >
            Started
          </span>?
        </h2>

        <p className="text-xl text-[var(--text-gray)] mb-8 max-w-2xl mx-auto">
          Join hundreds of businesses that trust RiskMan Consulting to protect and grow their operations
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="/services" 
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
            View Our Services
          </a>
          <a 
            href="/about" 
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
            Learn More About Us
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

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
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