import SingleBlog from "@/components/Blog/SingleBlog";
import { mapPHPDataToBlog } from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internship Listings | Tadreeb",
  description:
    "Find and filter verified internship opportunities tailored for you. Explore listings by major, location, requirements, and semester to kickstart your career journey.",
};

const Blog = async () => {
  let data: any[] = [];

  try {
    const res = await fetch("http://localhost/api/getInternships.php", {
      cache: "no-store",
    });
    data = await res.json();
  } catch (err) {
    console.error("Failed to fetch internships:", err);
  }

  const blogs = mapPHPDataToBlog(data);

  return (
    <>
      <Breadcrumb
        pageName="Internship Listings"
        description="Find and filter verified internship opportunities tailored for you. Explore listings by major, location, requirements, and semester to kickstart your career journey."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          {/* Pagination remains static for now */}
        </div>
      </section>
    </>
  );
};

export default Blog;
