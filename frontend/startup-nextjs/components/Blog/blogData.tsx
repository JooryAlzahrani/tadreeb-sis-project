/**
 * Purpose:
 * This utility function takes raw data from a PHP backend (or any API) 
 * and maps it into an array of `Blog` objects with the correct structure
 * for use in the frontend.
 * 
 * It ensures that each blog/internship has:
 * - id, title, paragraph, image
 * - author info (name, image, designation)
 * - tags, publishDate, slug, location, deadline
 * 
 * This helps standardize data coming from PHP so React components
 * like SingleBlog or BlogDetailsPage can safely render it.
 * 
 * Technologies:
 * - TypeScript
 */

import { Blog } from "@/types/blog"; // Type definition for a Blog/internship object

/**
 * Maps raw API/PHP data into an array of Blog objects
 * @param data - Array of raw objects returned from the backend
 * @returns Array of Blog objects
 */
export const mapPHPDataToBlog = (data: any[]): Blog[] => {
  return data.map((row: any) => ({
    id: row.id,                   // Unique blog/internship ID
    title: row.title,             // Blog/internship title
    paragraph: row.paragraph,     // Short description
    image: row.image,             // Image URL
    author: {                     // Author/company info
      name: row.author.name,
      image: row.author.image,
      designation: row.author.designation,
    },
    tags: row.tags,               // Tags/categories array
    publishDate: row.publishDate, // Date of publishing
    slug: row.slug,               // URL-friendly title
    location: row.location,       // Internship location
    deadline: row.deadline,       // Application deadline
  }));
};

// Default export for easy importing in other files
export default mapPHPDataToBlog;
