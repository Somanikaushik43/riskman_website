// src/pages/services/ServicesList.jsx
import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../../components/layout/PageBanner";
import { ArrowRight, Briefcase } from "lucide-react";
import allServices from "../../data/services-master-list.json";

const ServiceCard = ({ service }) => (
  <div className="flex flex-col h-full bg-white border border-slate-200 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300">
    {(service.image || service.headerImage) && (
      <div className="h-40 overflow-hidden rounded-t-2xl">
        <img
          src={service.image || service.headerImage}
          alt={service.title}
          className="object-cover w-full h-full transition duration-500 hover:scale-105"
        />
      </div>
    )}
    <div className="flex-grow p-6 space-y-3">
      <div className="flex items-center justify-between">
        <Briefcase className="w-8 h-8 text-indigo-600" />
        {service.category && (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700">
            {service.category}
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold text-slate-800">{service.title}</h3>
      <p className="text-slate-700 line-clamp-3">{service.summary}</p>
    </div>
    <div className="p-6 pt-0">
      <Link
        to={`/services/${service.id}`}
        className="inline-flex items-center font-semibold text-indigo-600 hover:text-indigo-800 transition"
      >
        View Details <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  </div>
);

export default function ServicesList() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero / Banner */}
      <PageBanner
        title="RiskMan Services"
        subheading="Discover how RiskMan services and solutions help you turn risk into resilience and growth."
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
        overlay={true}
        overlayOpacity="0.65"
      />

      <div className="px-6 py-16 mx-auto max-w-7xl space-y-12">
        <div className="text-center space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
            Offerings
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Comprehensive Risk & Compliance Solutions
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            Enterprise-grade advisory across risk, audit, cybersecurity, and assurance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {allServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="py-16 text-white bg-gradient-to-r from-indigo-700 via-purple-700 to-cyan-600">
        <div className="px-6 mx-auto text-center max-w-6xl space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Partner with RiskMan for measurable resilience
          </h2>
          <p className="max-w-4xl mx-auto text-lg opacity-90">
            Proven frameworks, pragmatic execution, and a client-first approach to safeguard and grow your business.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-base font-semibold">
            <span className="px-4 py-2 rounded-full bg-white/15">Tailored Expertise</span>
            <span className="px-4 py-2 rounded-full bg-white/15">Innovative Approach</span>
            <span className="px-4 py-2 rounded-full bg-white/15">Proven Results</span>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-indigo-800 font-semibold shadow-lg hover:-translate-y-0.5 transition"
          >
            Speak to an Expert <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}