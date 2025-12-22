import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageBanner from "../components/layout/PageBanner";
// import { BreadCrumbs } from "../components/common/BreadCrumbs";
import * as Icons from "lucide-react";

export default function IndustriesTemplate() {
  const { id } = useParams();
  const [industry, setIndustry] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIndustry(null);
    setError(false);
  }, [id]);

  useEffect(() => {
    async function load() {
      try {
        const mod = await import(`/src/data/industries/${id}.json`);
        setIndustry(mod.default);
      } catch (e) {
        console.error("Industry JSON not found:", id);
        setError(true);
      }
    }
    load();
  }, [id]);

  if (error) {
    return (
      <div className="pt-32 text-xl text-center text-red-600">
        Industry Not Found
      </div>
    );
  }

  if (!industry) {
    return <div className="pt-32 text-center text-gray-500">Loading...</div>;
  }

  const getIcon = (name) => {
    const Icon = Icons[name];
    return Icon ? <Icon className="w-8 h-8 text-indigo-600" /> : null;
  };

  return (
    <div className="bg-white text-slate-900">
      <PageBanner title={industry.title} image={industry.headerImage} />

      <div className="px-6 py-12 mx-auto max-w-7xl space-y-14">
        {/* Breadcrumbs */}
        {/* <BreadCrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Industries", href: "/industries" },
            { label: industry.title, href: "#" },
          ]}
        /> */}

        {/* Hero tagline */}
        {industry.heroTagline && (
          <p className="text-lg md:text-xl text-slate-700">
            {industry.heroTagline}
          </p>
        )}

        {/* Introduction */}
        {industry.introduction && (
          <section className="grid gap-10 md:grid-cols-2 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">
                {industry.introduction.title}
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {industry.introduction.content}
              </p>
            </div>
            {industry.introduction.subImage && (
              <img
                src={industry.introduction.subImage}
                alt=""
                className="w-full rounded-2xl shadow-xl border border-slate-200"
              />
            )}
          </section>
        )}

        {/* Key Challenges */}
        {industry.keyChallenges && (
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Key Challenges</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {industry.keyChallenges.list.map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-slate-200 shadow-md bg-white"
                >
                  {getIcon(item.icon)}
                  <p className="mt-3 text-slate-700 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Solutions */}
        {industry.solutions && (
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Solutions</h2>
            <div className="space-y-4">
              {industry.solutions.list.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="block p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-indigo-50 transition"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-bold text-indigo-600">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-slate-600">{item.summary}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Why Partner */}
        {industry.whyPartner && (
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Why Partner with Us</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {industry.whyPartner.usps.map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-slate-200 shadow-md bg-white"
                >
                  {getIcon(item.icon)}
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{item.summary}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Stats */}
        {industry.stats && (
          <section className="text-center">
            <h2 className="text-5xl font-bold text-indigo-700">
              {industry.stats.value}
            </h2>
            <p className="mt-2 text-lg text-slate-600">{industry.stats.label}</p>
          </section>
        )}

        {/* Client Logos */}
        {industry.clientLogos && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Trusted By</h2>
            <div className="flex flex-wrap gap-4">
              {industry.clientLogos.map((logo, i) => (
                <div
                  key={i}
                  className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm"
                >
                  {logo}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        {industry.faq && (
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">{industry.faq.title}</h2>
            <div className="space-y-4">
              {industry.faq.questions.map((item, i) => (
                <details
                  key={i}
                  className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <summary className="text-lg font-semibold cursor-pointer">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}