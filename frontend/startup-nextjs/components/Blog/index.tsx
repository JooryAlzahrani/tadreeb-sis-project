import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import { mapPHPDataToBlog } from "./blogData";

const Blog = async () => {
  // fetch internship data from PHP API
  const res = await fetch("http://localhost/getInternships.php", {
    cache: "no-store",
  });

  const data = await res.json();

  // map PHP data into Blog objects
  const blogs = mapPHPDataToBlog(data);

  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogs.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
