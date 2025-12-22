import { Link } from "react-router-dom";

export default function BlogTemplate({ blog }) {
  if (!blog) return <p className="py-20 text-center">Blog not found.</p>;

  return (
    <div className="pb-20">

      {/* HERO SECTION */}
      <div
        className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${blog.bannerImage})` }}
      >
        <h1 className="max-w-4xl px-6 text-5xl font-bold text-center text-white drop-shadow-lg">
          {blog.title}
        </h1>
      </div>

      {/* META INFO */}
      <div className="flex items-center justify-between max-w-4xl px-6 mx-auto mt-10 text-gray-600">
        <p className="font-semibold">{blog.author}</p>
        <p>{blog.date}</p>
        <p>{blog.category}</p>
      </div>

      {/* FEATURED IMAGE */}
      <div className="max-w-4xl px-6 mx-auto mt-10">
        <img
          src={blog.featuredImage}
          alt=""
          className="w-full shadow rounded-xl"
        />
      </div>

      {/* BLOG CONTENT */}
      <div className="max-w-4xl px-6 mx-auto mt-12 space-y-10 text-lg leading-relaxed text-gray-800">
        {blog.content.map((block, index) => {
          switch (block.type) {
            case "paragraph":
              return <p key={index}>{block.text}</p>;

            case "heading":
              return (
                <h2 key={index} className="mt-10 text-3xl font-bold">
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
                  className="pl-6 text-2xl italic font-medium text-gray-700 border-l-4 border-indigo-500"
                >
                  {block.text}
                  <div className="mt-2 text-sm text-gray-500">— {block.author}</div>
                </blockquote>
              );

            case "image":
              return (
                <div key={index} className="my-8">
                  <img src={block.url} alt="" className="shadow rounded-xl" />
                  {block.caption && (
                    <p className="mt-2 text-sm text-gray-500">{block.caption}</p>
                  )}
                </div>
              );

            case "faq":
              return (
                <div key={index} className="mt-16">
                  <h2 className="mb-6 text-3xl font-bold">FAQ</h2>
                  <div className="space-y-6">
                    {block.items.map((faq, i) => (
                      <div
                        key={i}
                        className="p-6 border shadow-sm rounded-xl bg-gray-50"
                      >
                        <p className="text-xl font-semibold">❓ {faq.question}</p>
                        <p className="mt-2 leading-relaxed text-gray-700">
                          {faq.answer}
                        </p>
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

      {/* COMMENT FORM */}
      <div className="max-w-4xl px-6 mx-auto mt-20">
        <h2 className="mb-4 text-3xl font-bold">Leave a Reply</h2>
        <p className="mb-6 text-gray-600">
          Your email address will not be published. Required fields are marked *
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Name*</label>
            <input
              type="text"
              className="w-full p-4 bg-gray-100 rounded-lg focus:ring focus:ring-indigo-300"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email*</label>
            <input
              type="email"
              className="w-full p-4 bg-gray-100 rounded-lg focus:ring focus:ring-indigo-300"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Comment*</label>
            <textarea
              rows={5}
              className="w-full p-4 bg-gray-100 rounded-lg focus:ring focus:ring-indigo-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Submit Now →
          </button>
        </form>
      </div>

      {/* BACK BUTTON */}
      <div className="max-w-4xl px-6 mx-auto mt-16">
        <Link
          to="/blogs"
          className="inline-flex items-center px-6 py-3 text-gray-700 transition border rounded-full hover:bg-gray-100"
        >
          ← Back to Blogs
        </Link>
      </div>
    </div>
  );
}
