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
export const mapPHPDataToBlog = (data: any): Blog[] => {
  if (!Array.isArray(data)) {
    console.error("mapPHPDataToBlog expected array but got:", data);
    return [];
  }

  return data.map((row: any) => ({
    id: row.id,
    title: row.title,
    paragraph: row.paragraph,
    image: row.image,
    author: {
      name: row.author?.name,
      image: row.author?.image,
      designation: row.author?.designation,
    },
    tags: row.tags,
    publishDate: row.publishDate,
    slug: row.slug,
    location: row.location,
    deadline: row.deadline,
  }));
};

// Default export for easy importing in other files
export default mapPHPDataToBlog;
