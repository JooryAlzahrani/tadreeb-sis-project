/**
 * Purpose:
 * Maps raw PHP/API internship data into a standardized `Blog` object
 * used by the frontend.
 *
 * This ensures each internship has all required and optional fields
 * so pages like Blog, SingleBlog, and BlogDetailsPage render safely.
 *
 * Technologies:
 * - TypeScript
 */

import { Blog } from "@/types/blog";

export const mapPHPDataToBlog = (data: any): Blog[] => {
  if (!Array.isArray(data)) {
    console.error("mapPHPDataToBlog expected array but got:", data);
    return [];
  }

  return data.map((row: any) => ({
    // ---------- Core ----------
    id: row.id,
    title: row.title,
    paragraph: row.paragraph,
    image: row.image,

    // ---------- Author ----------
    author: {
      name: row.author?.name,
      image: row.author?.image,
      designation: row.author?.designation,
    },

    // ---------- Metadata ----------
    tags: Array.isArray(row.tags) ? row.tags : [],
    publishDate: row.publishDate,
    slug: row.slug,
    location: row.location,
    deadline: row.deadline,

    // ---------- NEW: Full Internship Data ----------
    body: row.body ?? "",                    // HTML string
    requirements: row.requirements ?? [],    // string[]
    features: row.features ?? [],            // string[]
    applyLink: row.applyLink ?? null,         // URL
    duration: row.duration ?? null,
    semester: row.semester ?? null,
  }));
};

// Default export for easy importing
export default mapPHPDataToBlog;
