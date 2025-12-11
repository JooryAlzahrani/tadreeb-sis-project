import { Blog } from "@/types/blog";

// Helper function to map PHP API response to Blog[]
export const mapPHPDataToBlog = (data: any[]): Blog[] => {
  return data.map((row: any) => ({
    id: row.id,
    title: row.title,
    paragraph: row.paragraph,
    image: row.image, // you can still use getImagePath if needed
    author: {
      name: row.author.name,
      image: row.author.image,
      designation: row.author.designation,
    },
    tags: row.tags,
    publishDate: row.publishDate,
    slug: row.slug,
    location: row.location,
    deadline: row.deadline,
  }));
};

export default mapPHPDataToBlog;