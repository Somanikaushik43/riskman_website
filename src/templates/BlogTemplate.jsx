import { Link } from "react-router-dom";

export default function BlogTemplate({ blog }) {
  if (!blog) return <p className="py-20 text-center">Blog not found.</p>;

  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <div className="relative isolate overflow-hidden">
        <div
          className="h-[55vh] md:h-[60vh] w-full bg-center bg-cover"
          style={{ backgroundImage: `url(${blog.bannerImage})` }}
        >
          <div className="h-full w-full bg-gradient-to-b from-black/60 via-black/40 to-black/70 flex items-center justify-center px-6">
            <h1 className="max-w-5xl text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
              {blog.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="max-w-5xl mx-auto px-6 py-8 md:py-10 flex flex-wrap gap-4 text-sm font-medium text-slate-600">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">
          {blog.category}
        </span>
        <span>{blog.date}</span>
        <span className="text-slate-700">{blog.author}</span>
      </div>

      {/* Featured image */}
      <div className="max-w-5xl mx-auto px-6">
        <img
          src={blog.featuredImage}
          alt={blog.title}
          className="w-full rounded-3xl shadow-xl border border-slate-200"
        />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10 text-lg leading-relaxed text-slate-800">
        {blog.content.map((block, index) => {
          switch (block.type) {
            case "paragraph":
              return <p key={index}>{block.text}</p>;
            case "heading":
              return (
                <h2 key={index} className="mt-8 text-3xl font-bold text-slate-900">
                  {block.text}
                </h2>
              );
            case "list":
              return (
                <ul key={index} className="pl-6 space-y-2 list-disc">
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            case "quote":
              return (
                <blockquote
                  key={index}
                  className="pl-5 border-l-4 border-indigo-500 text-2xl italic font-semibold text-slate-800 bg-indigo-50/40 py-4 pr-4 rounded-r-xl"
                >
                  {block.text}
                  <div className="mt-3 text-sm text-slate-500">— {block.author}</div>
                </blockquote>
              );
            case "image":
              return (
                <div key={index} className="my-8">
                  <img src={block.url} alt="" className="w-full rounded-2xl shadow-md" />
                  {block.caption && (
                    <p className="mt-2 text-sm text-slate-500">{block.caption}</p>
                  )}
                </div>
              );
            case "faq":
              return (
                <div key={index} className="mt-12 space-y-4">
                  <h2 className="text-3xl font-bold text-slate-900">FAQ</h2>
                  <div className="space-y-4">
                    {block.items.map((faq, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm"
                      >
                        <p className="text-lg font-semibold text-slate-900">❓ {faq.question}</p>
                        <p className="mt-2 text-slate-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>

      {/* Comments */}
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <div className="p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl bg-white">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Leave a Reply</h2>
          <p className="mb-6 text-slate-600 text-sm">
            Your email address will not be published. Required fields are marked *
          </p>
          <form className="space-y-5">
            <div>
              <label className="block mb-2 font-medium text-slate-800">Name*</label>
              <input
                type="text"
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-slate-800">Email*</label>
              <input
                type="email"
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-slate-800">Comment*</label>
              <textarea
                rows={5}
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 shadow-lg hover:shadow-xl transition"
            >
              Submit Now →
            </button>
          </form>
        </div>

        <div className="mt-10">
          <Link
            to="/blogs"
            className="inline-flex items-center px-6 py-3 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 transition"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}