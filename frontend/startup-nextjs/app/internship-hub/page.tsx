import Link from "next/link";
import Image from "next/image";
import getBlogData from "@/components/Blog/blogData";

const InternshipDetailsHub = () => {
  const posts = getBlogData();

  return (
    <section className="pt-[150px] pb-[120px]">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Available Programs
          </h2>
          <p className="text-body-color">
            Choose an internship program below to view the full details and requirements.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {posts.map((blog) => (
            <div 
              key={blog.id} 
              className="flex flex-col md:flex-row items-center bg-white dark:bg-dark p-6 rounded-lg shadow-md border border-body-color/10"
            >
              {/* Image Side */}
              <div className="w-full md:w-1/3 relative h-[250px] md:h-[200px] rounded-lg overflow-hidden mb-6 md:mb-0 md:mr-8">
                 <Image 
                   src={blog.image} 
                   alt={blog.title} 
                   fill 
                   className="object-cover" 
                 />
              </div>

              {/* Text Side */}
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-black dark:text-white hover:text-primary">
                  <Link href={`/blog-details/${blog.id}`}>
                    {blog.title}
                  </Link>
                </h3>
                <p className="text-body-color mb-6 text-base leading-relaxed">
                  {blog.paragraph}
                </p>
                <Link 
                  href={`/blog-details/${blog.id}`}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-semibold text-white duration-300 hover:bg-primary/80"
                >
                  View Full Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipDetailsHub;