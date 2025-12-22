import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageBanner from "../components/layout/PageBanner";
// import { BreadCrumbs } from "../components/common/BreadCrumbs";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function ServiceTemplate() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadJSON() {
      try {
        const data = await import(`../data/services/${id}.json`);
        setService(data.default);
      } catch (e) {
        console.error("JSON not found for service:", id);
        setError(true);
      }
    }
    loadJSON();
  }, [id]);

  if (error) {
    return (
      <div className="pt-32 text-xl text-center text-red-600">
        Service Not Found
      </div>
    );
  }

  if (!service) {
    return <div className="pt-32 text-center">Loading...</div>;
  }

  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <PageBanner title={service.hero.heading} image={service.hero.image || service.headerImage||service.hero.headerImage||""} />

      <div className="px-6 py-12 mx-auto max-w-7xl space-y-14">
        {/* Breadcrumbs */}
        {/* <BreadCrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.title, href: "#" },
          ]}
        /> */}

        {/* Intro */}
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
            {service.hero.tagline || "Enterprise Services"}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
            {service.title}
          </h1>
          <p className="max-w-3xl text-lg text-slate-700">
            {service.hero.subheading}
          </p>
        </div>

        {/* Offerings */}
        {service.offerings && (
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Sparkles className="text-indigo-600" />
              <h2 className="text-3xl font-bold">Our Offerings & Solutions</h2>
            </div>
            <p className="text-slate-700">{service.offerings.intro}</p>
            <div className="grid gap-6 md:grid-cols-2">
              {service.offerings.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200 shadow-md bg-white hover:-translate-y-1 hover:shadow-xl transition"
                >
                  <h3 className="text-lg font-semibold text-indigo-700">{item.title}</h3>
                  <p className="mt-2 text-slate-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Client Success */}
        {service.clientSuccess && (
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Client Success Stories</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {service.clientSuccess.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200 shadow-md bg-white"
                >
                  <h3 className="font-semibold text-indigo-700">{item.title}</h3>
                  <p className="mt-2 text-slate-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Resources */}
        {service.resources && (
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Resources</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {service.resources.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200 shadow-md bg-white"
                >
                  <h3 className="font-semibold text-indigo-700">{item.title}</h3>
                  <p className="mt-2 text-slate-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Why RiskMan */}
        {service.whyRiskMan && (
          <section className="p-8 md:p-10 rounded-3xl border border-slate-200 bg-indigo-50/60 space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Why RiskMan?</h2>
            <p className="text-slate-700">{service.whyRiskMan}</p>
          </section>
        )}

        {/* Related Offerings */}
        {service.relatedOfferings && (
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Related Offerings</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {service.relatedOfferings.map((item, idx) => (
                <a
                  key={idx}
                  href={`/services/${item.id}`}
                  className="block p-6 rounded-2xl border border-slate-200 shadow-md bg-white hover:border-indigo-300 hover:shadow-xl transition"
                >
                  <div className="font-semibold text-indigo-700">{item.label}</div>
                  {item.desc && <p className="mt-2 text-slate-700 text-sm">{item.desc}</p>}
                </a>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        {service.cta && (
          <section>
            <div className="p-10 rounded-3xl text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 shadow-2xl">
              <h2 className="text-3xl font-bold mb-2">{service.cta.heading}</h2>
              <p className="text-lg opacity-90 mb-6">{service.cta.text}</p>
              <a
                href={service.cta.link}
                className="inline-flex items-center px-6 py-3 rounded-full bg-white text-indigo-800 font-semibold shadow-lg hover:-translate-y-0.5 transition"
              >
                {service.cta.button}
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </section>
        )}

        {/* FAQ */}
        {service.faqs && (
          <section className="space-y-5">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {service.faqs.map((item, idx) => (
                <details
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm open:shadow-md transition"
                >
                  <summary className="text-lg font-semibold cursor-pointer flex items-start gap-2">
                    <CheckCircle2 className="text-indigo-600 mt-1" size={18} />
                    {item.q}
                  </summary>
                  <p className="mt-3 text-slate-700">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}