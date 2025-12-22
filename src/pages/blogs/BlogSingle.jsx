import { useParams } from "react-router-dom";
import blogs from "../../data/blogs.json";
import BlogTemplate from "../../templates/BlogTemplate";

export default function BlogSingle() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="pt-32 pb-20 text-center text-xl text-red-600">
        Blog Not Found
      </div>
    );
  }

  return <BlogTemplate blog={blog} />;
}