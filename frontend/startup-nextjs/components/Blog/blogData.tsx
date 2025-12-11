import { Blog } from "@/types/blog";

export const mapPHPDataToBlog = (data: any[]): Blog[] => {
  return data.map((row: any) => ({
    id: row.id,
    title: row.title,
    paragraph: row.paragraph,
    image: row.image, 
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