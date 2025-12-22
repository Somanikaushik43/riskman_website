import React from "react";
import PageBanner from "../../components/layout/PageBanner";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative bg-slate-50 py-28">
        <div className="px-6 mx-auto max-w-7xl">
          <p className="mb-4 text-sm tracking-widest uppercase text-slate-500">
            About RiskMan
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl text-slate-900">
            Your Trusted Partner in <br /> Strategic Advisory & Risk Management
          </h1>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="grid gap-12 px-6 py-20 mx-auto max-w-7xl md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-4xl font-bold">
            Build confidence, enable clarity and create impact.
          </h2>

          <p className="mb-6 leading-relaxed text-slate-700">
            At RiskMan, we focus on creating enduring value for our clients,
            people and communities through our “Customised Solution” based
            services.
          </p>

          <p className="leading-relaxed text-slate-700">
            RiskMan is a team of experienced professionals with high level of
            knowledge and accomplishments who bring to the table a varied and
            storied experience set, to create outstanding value for our clients
            and other stakeholders.
          </p>
        </div>

        <div>
          <img
            src="https://images.pexels.com/photos/4989181/pexels-photo-4989181.jpeg"
            alt="Our Story"
            className="object-cover w-full shadow-lg rounded-xl"
          />
        </div>
      </section>

      {/* AWARDS SECTION */}
      <section className="relative py-20">
        <div className="grid items-center gap-10 px-6 mx-auto max-w-7xl md:grid-cols-2">

          <img
            src="https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg"
            alt="Award"
            className="object-cover w-full shadow-xl rounded-xl"
          />

          <div className="p-10 text-white bg-black shadow-xl rounded-xl">
            <p className="mb-2 text-xl font-semibold">
              Awarded “Emerging Risk Assurance and Advisory Firm of the Year 2024”
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section className="py-20 bg-white">
        <div className="px-6 mx-auto mb-16 text-center max-w-7xl">
          <p className="mb-2 tracking-wider uppercase text-slate-500">
            RiskMan Story
          </p>
          <h2 className="text-4xl font-bold">What We Stand For</h2>
        </div>

        <div className="grid max-w-6xl gap-10 px-6 mx-auto md:grid-cols-4">

          <div>
            <h3 className="mb-2 text-xl font-semibold">Our Mission</h3>
            <p className="text-slate-700">
              Our mission is to achieve sustainable growth and build a better
              future by embracing innovation, focusing on clients and people,
              building trusted relationships, and delivering high-quality
              execution.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">Our Vision</h3>
            <p className="text-slate-700">
              Our vision is to become a leading risk consulting firm globally by
              delivering high-quality and value-driven services with innovation
              and excellence.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">Our Values</h3>
            <p className="text-slate-700">
              We uphold integrity, embrace innovation, and deliver practical,
              forward-thinking solutions to build long-term client partnerships.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">What Sets Us Apart</h3>
            <p className="text-slate-700">
              We deliver tailored solutions backed by deep domain expertise,
              understanding your unique challenges and aligning strategies with
              your goals.
            </p>
          </div>

        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="py-20 bg-slate-100">
        <div className="px-6 mx-auto max-w-7xl">

          <div className="mb-16">
            <p className="mb-2 tracking-widest uppercase text-slate-500">
              Our Team
            </p>
            <h2 className="mb-4 text-4xl font-bold">Meet the leadership team</h2>

            <p className="max-w-3xl text-slate-700">
              Our team brings years of experience across industries, with
              professionals hailing from top consulting and audit firms.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">

            {/* Leader 1 */}
            <div>
              <img
                src="https://via.placeholder.com/400x400"
                className="mb-4 shadow-lg rounded-xl"
              />
              <p className="font-semibold">Leader Name</p>
            </div>

            <div>
              <img src="https://via.placeholder.com/400x400" className="mb-4 shadow-lg rounded-xl" />
              <p className="font-semibold">Leader Name</p>
            </div>

            <div>
              <img src="https://via.placeholder.com/400x400" className="mb-4 shadow-lg rounded-xl" />
              <p className="font-semibold">Leader Name</p>
            </div>

            <div>
              <img src="https://via.placeholder.com/400x400" className="mb-4 shadow-lg rounded-xl" />
              <p className="font-semibold">Leader Name</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="px-6 mx-auto mb-12 text-center max-w-7xl">
          <p className="tracking-wide uppercase text-slate-500">Testimonials</p>
          <h2 className="text-4xl font-bold">Clients Feedback</h2>
        </div>

        <div className="grid items-center max-w-5xl gap-12 px-6 mx-auto md:grid-cols-2">

          <img
            src="https://via.placeholder.com/500x600"
            className="w-full shadow-xl rounded-xl"
          />

          <blockquote className="text-lg leading-relaxed text-slate-700">
            “From the outset, RiskMan demonstrated unparalleled dedication to
            understanding our organization's challenges. Their team provided
            deep insights and tailored solutions.”
            <br />
            <br />
            <span className="font-semibold">Soumen Sarkar</span>
          </blockquote>

        </div>
      </section>

      {/* PARTNER COMPANIES */}
      <section className="py-20 bg-slate-50">
        <div className="px-6 mx-auto max-w-7xl">

          <p className="mb-2 tracking-wider uppercase text-slate-500">Trusted</p>
          <h2 className="max-w-2xl mb-6 text-4xl font-bold">
            Esteemed companies we’ve partnered with
          </h2>

          <p className="max-w-3xl mb-10 text-slate-700">
            We’re proud to work with a diverse range of organizations — from
            startups to large enterprises — who trust us for excellence and
            tailored advisory solutions.
          </p>

          <div className="flex items-center gap-10">
            <img src="/logos/blinkit.png" className="h-12" />
            <img src="/logos/nexval.png" className="h-12" />
            <img src="/logos/khadim.png" className="h-12" />
          </div>

        </div>
      </section>

    </div>
  );
}
