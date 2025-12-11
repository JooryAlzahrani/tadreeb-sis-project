import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import getBlogData from "@/components/Blog/blogData";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internship Listings | Tadreeb",
  description: "This is Blog Page for Startup Nextjs Template",
 
};

export async function generateStaticParams() {
  const posts = getBlogData();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

const BlogDetailsPage = ({ params }: { params: { id: string } }) => {
  const blogId = parseInt(params.id);
  const blog = getBlogData().find((b) => b.id === blogId);

  if (!blog) {
    return (
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <h2 className="text-center text-2xl font-bold">Blog post not found.</h2>
          {}
          <div className="text-center mt-4">
             <Link href="/#blog" className="text-primary hover:underline">Go Back Home</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-[120px] pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              
              
              <div className="mb-8">
                <Link 
                  href="/#blog" 
                  className="inline-flex items-center text-sm font-medium text-body-color hover:text-primary"
                >
                  <svg className="mr-2 h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
                  </svg>
                  Back to Blog
                </Link>
              </div>
              {}

              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                {blog.title}
              </h2>

              <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                <div className="flex flex-wrap items-center">
                  <div className="mb-5 mr-10 flex items-center">
                    <div className="mr-4">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <Image
                          src={blog.author.image}
                          alt="author"
                          fill
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <span className="mb-1 block text-base font-medium text-body-color">
                        By <span className="text-black dark:text-white">{blog.author.name}</span>
                      </span>
                    </div>
                  </div>
                  <div className="mb-5 flex items-center">
                    <span className="mr-3 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                      <svg width="15" height="15" viewBox="0 0 15 15" className="fill-current">
                         <path d="M10.8667 2.06667V0.8C10.8667 0.58 10.6867 0.4 10.4667 0.4H9.66668C9.44668 0.4 9.26668 0.58 9.26668 0.8V2.06667H5.73335V0.8C5.73335 0.58 5.55335 0.4 5.33335 0.4H4.53335C4.31335 0.4 4.13335 0.58 4.13335 0.8V2.06667H2.46668C1.49335 2.06667 0.70668 2.85333 0.70668 3.82667V12.72C0.70668 13.6933 1.49335 14.48 2.46668 14.48H12.5333C13.5067 14.48 14.2934 13.6933 14.2934 12.72V3.82667C14.2934 2.85333 13.5067 2.06667 12.5333 2.06667H10.8667ZM12.9334 12.72C12.9334 12.94 12.7534 13.12 12.5334 13.12H2.46668C2.24668 13.12 2.06668 12.94 2.06668 12.72V5.46667H12.9334V12.72ZM12.9334 4.10667H2.06668V3.82667C2.06668 3.60667 2.24668 3.42667 2.46668 3.42667H4.13335V4.69333C4.13335 4.91333 4.31335 5.09333 4.53335 5.09333H5.33335C5.55335 5.09333 5.73335 4.91333 5.73335 4.69333V3.42667H9.26668V4.69333C9.26668 4.91333 9.44668 5.09333 9.66668 5.09333H10.4667C10.6867 5.09333 10.8667 4.91333 10.8667 4.69333V3.42667H12.5333C12.7533 3.42667 12.9333 3.60667 12.9333 3.82667V4.10667Z" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-body-color">
                       {blog.publishDate}
                    </span>
                  </div>
                </div>
                <div className="mb-5">
                  <a
                    href="#0"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                  >
                    {blog.tags[0]}
                  </a>
                </div>
              </div>

              <div>
                <div className="mb-10 relative aspect-[97/60] w-full overflow-hidden rounded-md drop-shadow-three dark:drop-shadow-none">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                
                <div 
                  className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: blog.body || blog.paragraph }}
                />
              </div>

              <div className="items-center justify-between sm:flex">
                <div className="mb-5">
                  <h4 className="mb-3 text-sm font-medium text-body-color">
                    Popular Tags:
                  </h4>
                  <div className="flex items-center">
                    {blog.tags.map((tag, i) => (
                      <TagButton key={i} text={tag} />
                    ))}
                  </div>
                </div>
                <div className="mb-5">
                  <h4 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                    Share this post:
                  </h4>
                  <div className="flex items-center sm:justify-end">
                    <SharePost />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsPage;
