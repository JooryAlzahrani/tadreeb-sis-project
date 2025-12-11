/**
 * Purpose:
 * This component renders the "Blogs" section on a page.
 * It displays a section title, a short paragraph, and a grid of blog/internship cards.
 * Each card is rendered using the `SingleBlog` component and shows summary info for each blog/internship.
 * 
 * Features:
 * - Section title and description
 * - Responsive grid layout for blog cards
 * - Fetches and maps data from a PHP backend using `mapPHPDataToBlog()`
 * 
 * Technologies:
 * - React + TypeScript
 * - Tailwind CSS for styling
 */

import SectionTitle from "../Common/SectionTitle"; // Component to render section title and description
import SingleBlog from "./SingleBlog";            // Component to render a single blog/internship card
import mapPHPDataToBlog from "./blogData";       // Function that maps PHP API data to Blog objects

const Blog = () => {
  return (
    // Blog section container with background and padding
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        {/* Section title and optional paragraph */}
        <SectionTitle
          title="Our Latest Blogs" 
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center // Centers the title and paragraph
        />

        {/* Grid layout for blog cards */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {/* Map over the blog data and render each blog using SingleBlog */}
          {mapPHPDataToBlog().map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Export the Blog section so it can be used in a page or layout
export default Blog;
