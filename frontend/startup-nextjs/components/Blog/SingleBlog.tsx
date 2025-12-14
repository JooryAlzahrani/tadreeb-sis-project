/*
  Purpose: this component renders a single 'blog post' or internship listing card.
  it displays a summary of the internship post with: image, title, short description, autho info, primary tag, location
  clicking to the card or title navigates to the detailed blog/internship page.

  Technologies:
  - React with TypeScript
  - Next.js for routing and image optimization
  - Tailwind CSS for styling

*/


import { Blog } from "@/types/blog"; // Type definition for the blog/internship data
import Image from "next/image"; // Optimized image component
import Link from "next/link"; // Client-side routing for links

/**
 * Props:
 * @param blog - A single blog/internship object containing all necessary info
 */
 
const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { id, title, image, paragraph, author, tags, location, slug } = blog;  // Destructure the blog object for easy access

  const detailLink = `/${id}`; // Determine the link to the detail page, use slug if available, otherwise use id

  // Render the blog/internship card with styling and structure
  
  return (
    <div
      className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark flex flex-col h-full"
      data-wow-delay=".1s"
    >
      <Link href={detailLink} className="relative block aspect-[37/22] w-full">
        <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
          {tags[0]}
        </span>
        <Image src={image} alt={title} fill />
      </Link>

      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8 flex flex-col flex-1">
        <h3>
          <Link
            href={detailLink}
            className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
          >
            {title}
          </Link>
        </h3>

        <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10 flex-1">
          {paragraph}
        </p>

        {/* Author and Location in single row */}
        <div className="flex items-center justify-between gap-6 mt-auto">
          {/* Author */}
          <div className="flex items-center flex-1 border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10">
            <div className="mr-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image src={author.image} alt={author.name} fill />
              </div>
            </div>
            <div>
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                By {author.name}
              </h4>
              <p className="text-xs text-body-color">{author.designation}</p>
            </div>
          </div>

          {/* Location */}
          {location && (
            <div className="flex flex-col flex-1">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">Location</h4>
              <p className="text-xs text-body-color truncate">{location}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
