/**
 * Purpose:
 * This page displays a list of all verified internship opportunities.
 * It fetches data from a PHP backend, maps it to the Blog type, and displays
 * each internship using the SingleBlog component.
 * 
 * Features:
 * - Breadcrumb navigation
 * - Internship cards displayed in a responsive grid
 * - Pagination (static for now, can be dynamic later)
 * - Fetches real data from a PHP API (`getInternships.php`)
 * 
 * Technologies:
 * - Next.js (app router)
 * - React + TypeScript
 * - Tailwind CSS for styling
 */

import SingleBlog from "@/components/Blog/SingleBlog"; // Component to render a single internship/blog card
import { mapPHPDataToBlog } from "@/components/Blog/blogData"; // Function to map PHP API data to Blog objects
import Breadcrumb from "@/components/Common/Breadcrumb"; // Component for page breadcrumb navigation

import { Metadata } from "next"; // Metadata type for SEO

// Metadata for this page (used by Next.js for SEO)
export const metadata: Metadata = {
  title: "Internship Listings | Tadreeb",
  description: "This is Blog Page for Startup Nextjs Template",
};

const Blog = async () => {
  // Fetch internship data from the PHP backend API
  const res = await fetch("http://localhost/api/getInternships.php");
  const data = await res.json();

  // Map the raw PHP data into structured Blog objects
  const blogs = mapPHPDataToBlog(data);

  return (
    <>
      {/* Breadcrumb section showing page name and description */}
      <Breadcrumb
        pageName="Internship Listings"
        description="Find and filter verified internship opportunities tailored for you. Explore listings by major, location, requirements, and semester to kickstart your career journey."
      />

      {/* Main section containing the internship cards */}
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {/* Loop through all blogs and render each using SingleBlog */}
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mb-8"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          {/* Pagination section */}
          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                {/* Example pagination items */}
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15]"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15]"
                  >
                    2
                  </a>
                </li>
                {/* Add more pagination items as needed */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Export the Blog page component
export default Blog;
