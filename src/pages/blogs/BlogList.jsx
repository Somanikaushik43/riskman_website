import { Link } from "react-router-dom";
import blogs from "../../data/blogs.json";

export default function BlogList() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-700 to-cyan-600 text-white">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 lg:py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Insights</p>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            RiskMan Consulting Blog
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/85">
            Perspectives on risk, compliance, cybersecurity, and digital transformation.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-14 lg:py-18">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              className="group bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition overflow-hidden"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <Link to={`/blog/${blog.slug}`} className="block">
                <div className="overflow-hidden">
                  <img
                    src={blog.featuredImage}
                    alt={blog.title}
                    className="w-full h-60 object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-semibold">
                      {blog.category}
                    </span>
                    <span>{blog.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-snug group-hover:text-indigo-600 transition">
                    {blog.title}
                  </h3>
                  <p className="text-slate-600 line-clamp-3">
                    {blog.shortDescription}
                  </p>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1 font-semibold text-indigo-600 group-hover:text-cyan-500 transition">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Simple fade-in helper */}
        <style>{`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(16px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          article { animation: fadeInUp 0.6s ease forwards; opacity: 0; }
        `}</style>
      </section>
    </div>
  );
}