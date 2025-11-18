import { getImagePath } from "@/lib/utils";
import { Blog } from "@/types/blog";

const getBlogData = (): Blog[] => [
  {
    id: 1,
    title: "Al Rajhi Bank Cooperative Training Program",
    paragraph:
      "Majors: Finance, Computer Science, Cybersecurity, Law. Location: Riyadh. Duration: Varies per semester. Required GPA: Very Good.",
    image: getImagePath("/images/blog/alrajhibank.png"), 
    author: {
      name: "Al Rajhi Bank",
      image: getImagePath("/images/blog/alrajhibank.png"), 
      designation: "Banking & Finance",
    },
    tags: ["Bank"],
    publishDate: "2025-2026",
  },
  {
    id: 2,
    title: "PwC Consulting Co-op Program 2026",
    paragraph:
      "PwC is seeking driven students for their 2026 Consulting Co-op Program. Gain hands-on experience in consulting projects across industries.",
    image: getImagePath("/images/blog/blog-02.jpg"),
    author: {
      name: "PwC",
      image: getImagePath("/images/blog/author-02.png"),
      designation: "Content Writer",
    },
    tags: ["Consulting"],
    publishDate: "2026",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: getImagePath("/images/blog/blog-03.jpg"),
    author: {
      name: "Lethium Deo",
      image: getImagePath("/images/blog/author-03.png"),
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default getBlogData;
