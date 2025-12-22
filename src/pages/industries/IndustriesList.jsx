// src/pages/industries/IndustriesList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2 } from "lucide-react";
import industries from "../../data/industries-master-list.json";
import PageBanner from "../../components/layout/PageBanner";

const IndustryCard = ({ industry }) => (
  <div className="flex flex-col h-full bg-white border border-slate-200 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300">
    {industry.headerImage && (
      <div className="h-40 overflow-hidden rounded-t-2xl">
        <img
          src={industry.headerImage}
          alt={industry.title}
          className="object-cover w-full h-full transition duration-500 hover:scale-105"
        />
      </div>
    )}
    <div className="flex-grow p-6 space-y-3">
      <div className="flex items-center justify-between">
        <Building2 className="w-8 h-8 text-indigo-600" />
        {industry.sector && (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700">
            {industry.sector}
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold text-slate-800">{industry.title}</h3>
      <p className="text-slate-700 line-clamp-3">{industry.summary}</p>
    </div>
    <div className="p-6 pt-0">
      <Link
        to={`/industries/${industry.id}`}
        className="inline-flex items-center font-semibold text-indigo-600 hover:text-indigo-800 transition"
      >
        View Details <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  </div>
);

export default function IndustriesList() {
  return (
    <div className="bg-white text-slate-900">

      {/* Hero / Banner - Updated to match ServicesList style */}
      <PageBanner
        title="Industries We Serve"
        subheading="Domain-led expertise across sectors to strengthen risk, compliance, and resilience."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
        overlay={true}
        overlayOpacity="0.65"
      />

      {/* Content Section */}
      <div className="px-6 py-16 mx-auto max-w-7xl space-y-12">
        <div className="text-center space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
            Sectors
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Tailored Solutions by Industry
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            Deep sector knowledge combined with risk management excellence to address your unique challenges.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="py-16 text-white bg-gradient-to-r from-indigo-700 via-purple-700 to-cyan-600">
        <div className="px-6 mx-auto text-center max-w-6xl space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Industry-Specific Risk Solutions
          </h2>
          <p className="max-w-4xl mx-auto text-lg opacity-90">
            Partner with experts who understand your industry's unique regulatory landscape and risk profile.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-base font-semibold">
            <span className="px-4 py-2 rounded-full bg-white/15">Sector Expertise</span>
            <span className="px-4 py-2 rounded-full bg-white/15">Regulatory Knowledge</span>
            <span className="px-4 py-2 rounded-full bg-white/15">Proven Track Record</span>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-indigo-800 font-semibold shadow-lg hover:-translate-y-0.5 transition"
          >
            Discuss Your Industry Needs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}