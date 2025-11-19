import { getImagePath } from "@/lib/utils";
import { Blog } from "@/types/blog";

const getBlogData = (): Blog[] => [
  {
    id: 1,
    title: "Al Rajhi Bank Co-op Program 2026",
    paragraph:
      "Join Al Rajhi Bank's Co-op Program and gain valuable hands-on experience in the banking sector and related fields. Work alongside industry professionals.",
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
    image: getImagePath("/images/blog/PwC.png"),
    author: {
      name: "PwC",
      image: getImagePath("/images/blog/PwC.png"),
      designation: "Content Writer",
    },
    tags: ["Consulting"],
    publishDate: "2026",
  },
  {
    id: 3,
    title: "STC Co-operative Training Program - January 2026.",
    paragraph:
      "Join STC’s Co-op Program and work on real digital transformation projects in areas like software engineering, networks, cybersecurity, data, and business innovation.",
    image: getImagePath("/images/blog/STC.png"),
    author: {
      name: "STC",
      image: getImagePath("/images/blog/STC.png"),
      designation: "Graphic Designer",
    },
    tags: ["Telecom"],
    publishDate: "2025",
  },
];
export default getBlogData;
