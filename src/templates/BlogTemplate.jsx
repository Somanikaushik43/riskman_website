import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* =======================
   ANIMATIONS (SAME STYLE)
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function BlogTemplate({ blog }) {
  if (!blog)
    return (
      <p className="py-24 text-center text-lg text-[var(--text-gray)]">
        Blog not found.
      </p>
    );

  return (
    <div className="min-h-screen bg-[var(--dark-navy)] text-white overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative isolate min-h-[65vh] flex items-center justify-center section-padding overflow-hidden">
        <div className="bg-glow-blue absolute top-[-200px] right-[-150px]" />
        <div className="bg-glow-purple absolute bottom-[-180px] left-[-150px]" />

        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <span className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] text-sm font-bold">
            {blog.category}
          </span>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            {blog.title}
          </h1>

          <div className="flex justify-center gap-6 text-sm text-[var(--text-gray)]">
            <span>{blog.author}</span>
            <span>{blog.date}</span>
            <span>{blog.readTime}</span>
          </div>
        </motion.div>
      </section>

      {/* ================= FEATURED IMAGE ================= */}
      <section className="relative pt-0 isolate section-padding">
        <div className="container max-w-5xl mx-auto">
          <motion.img
            src={blog.featuredImage}
            alt={blog.title}
            className="w-full border shadow-2xl rounded-3xl border-white/5"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="relative section-padding isolate">
        <div className="container mx-auto max-w-5xl space-y-10 text-lg leading-relaxed text-[var(--text-gray)]">
          {blog.content.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return <p key={index}>{block.text}</p>;

              case "heading":
                return (
                  <h2
                    key={index}
                    className="mt-12 text-3xl font-bold text-white"
                  >
                    {block.text}
                  </h2>
                );

              case "list":
                return (
                  <ul
                    key={index}
                    className="pl-6 space-y-2 list-disc marker:text-[var(--accent-blue-light)]"
                  >
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );

              case "quote":
                return (
                  <blockquote
                    key={index}
                    className="rounded-2xl bg-[var(--dark-navy-light)] border-l-4 border-[var(--accent-blue)] p-6 text-xl italic text-white shadow-lg"
                  >
                    “{block.text}”
                    <div className="mt-4 text-sm text-[var(--text-gray)] not-italic">
                      — {block.author}
                    </div>
                  </blockquote>
                );

              case "image":
                return (
                  <div key={index} className="my-10">
                    <img
                      src={block.url}
                      alt=""
                      className="w-full shadow-md rounded-2xl"
                    />
                    {block.caption && (
                      <p className="mt-2 text-sm text-center text-[var(--text-gray)]">
                        {block.caption}
                      </p>
                    )}
                  </div>
                );

              case "faq":
                return (
                  <div key={index} className="mt-16 space-y-6">
                    <h2 className="text-3xl font-bold text-white">FAQ</h2>
                    {block.items.map((faq, i) => (
                      <div
                        key={i}
                        className="rounded-2xl bg-[var(--dark-navy-light)] border border-white/5 p-6 shadow-lg"
                      >
                        <p className="text-lg font-semibold text-white">
                          ❓ {faq.question}
                        </p>
                        <p className="mt-3 text-[var(--text-gray)]">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>
      </section>

      {/* ================= COMMENTS ================= */}
      <section className="relative pt-0 section-padding isolate">
        <div className="container max-w-5xl mx-auto">
          <div className="rounded-3xl bg-[var(--dark-navy-light)] border border-white/5 p-8 shadow-xl">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Leave a Reply
            </h2>
            <p className="mb-6 text-sm text-[var(--text-gray)]">
              Your email address will not be published.
            </p>

            <form className="space-y-5">
              {["Name", "Email"].map((label, i) => (
                <div key={i}>
                  <label className="block mb-2 font-medium">{label}</label>
                  <input
                    className="w-full p-4 rounded-xl bg-[var(--dark-navy)] border border-white/10 focus:border-[var(--accent-blue)] outline-none text-white"
                  />
                </div>
              ))}

              <div>
                <label className="block mb-2 font-medium">Comment</label>
                <textarea
                  rows={5}
                  className="w-full p-4 rounded-xl bg-[var(--dark-navy)] border border-white/10 focus:border-[var(--accent-blue)] outline-none text-white"
                />
              </div>

              <button className="px-8 py-4 btn-primary">
                Submit Comment →
              </button>
            </form>
          </div>

          <div className="mt-10">
            <Link
              to="/blogs"
              className="inline-flex items-center px-6 py-3 rounded-full border border-white/10 text-[var(--text-gray)] hover:text-white hover:border-[var(--accent-blue)] transition"
            >
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
