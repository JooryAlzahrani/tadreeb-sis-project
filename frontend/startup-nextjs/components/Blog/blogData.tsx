
import { getImagePath } from "@/lib/utils";
import { Blog } from "@/types/blog";

const getBlogData = (): Blog[] => [
  {
    id: 1,
    title: "Al Rajhi Bank Co-op Program 2026",
    paragraph:
      "Join Al Rajhi Bank's Co-op Program and gain valuable hands-on experience in the banking sector and related fields.",
    image: getImagePath("/images/blog/alrajhibank.png"),
    author: {
      name: "Al Rajhi Bank",
      image: getImagePath("/images/blog/alrajhibank.png"),
      designation: "Banking & Finance",
    },
    tags: ["Bank"],
    publishDate: "2025-2026",
   
    body: `
      <h3 class="font-bold text-xl mb-3 mt-8 text-black dark:text-white">Overview</h3>
      <p class="mb-6">A structured training program designed to give students real exposure to banking operations and Islamic finance. Trainees work closely with professionals across different departments and gain practical knowledge that complements their academic studies.</p>
      
      <h3 class="font-bold text-xl mb-3 text-black dark:text-white">Requirements</h3>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li>Must be officially enrolled; COOP required by the university</li>
        <li>Diploma or Bachelor’s students from business, finance, IT, or related majors</li>
        <li>Minimum GPA around 2.5/4 or equivalent</li>
        <li>Required documents: CV, academic transcript, and COOP request letter from the university</li>
      </ul>

      <h3 class="font-bold text-xl mb-3 text-black dark:text-white">What You’ll Do</h3>
      <p class="mb-6">Support daily banking tasks, assist teams in operational and financial activities, and learn how Islamic banking products and services are delivered. Placement depends on academic major and bank needs.</p>

      <h3 class="font-bold text-xl mb-3 text-black dark:text-white">Benefits</h3>
      <p class="mb-6">Hands-on industry experience, mentorship from banking professionals, potential access to professional certifications, and a pathway to future full-time hiring for strong performers.</p>

      <h3 class="font-bold text-xl mb-3 text-black dark:text-white">Location</h3>
      <p class="mb-6">Mostly Riyadh, with placements available in other branches depending on department.</p>
    `
  },
  {
    id: 2,
    title: "PwC Consulting Co-op Program 2026",
    paragraph:
      "PwC is seeking driven students for their 2026 Consulting Co-op Program. Gain hands-on experience in consulting projects.",
    image: getImagePath("/images/blog/PwC.png"),
    author: {
      name: "PwC",
      image: getImagePath("/images/blog/PwC.png"),
      designation: "Content Writer",
    },
    tags: ["Consulting"],
    publishDate: "2026",

    body: `
      <h3 class="font-bold text-xl mb-3 mt-8 text-black dark:text-white">Overview</h3>
      <p class="mb-6">A consulting-focused co-op that allows students to experience real client work in strategy, digital transformation, technology consulting, and risk advisory. Participants join PwC teams and contribute to impactful regional projects.</p>
      
      <h3 class="font-bold text-xl mb-3 text-black dark:text-white">Requirements</h3>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li>Undergraduate students in Business, Engineering, Computer Science, or related majors</li>
        <li>Strong academic record (around 3.5/4 recommended)</li>
        <li>Strong communication skills; English required, Arabic is a plus</li>
        <li>Proactive attitude and interest in consulting environments</li>
      </ul>

      <h3 class="font-bold text-xl mb-3 text-black dark:text-white">What You’ll Do</h3>
      <p class="mb-6">Assist consultants in research, data analysis, project planning, and problem-solving activities. You’ll collaborate on real client engagements across multiple industries such as government, financial services, health, and technology.</p>

      <h3 class="font-bold text-xl mb-3 text-black dark:text-white">Benefits</h3>
      <p class="mb-6">Mentorship from experienced consultants, structured learning, exposure to different service lines, development of analytical and presentation skills, and potential consideration for future graduate roles.</p>

      <h3 class="font-bold text-xl mb-3 text-black dark:text-white">Location</h3>
      <p class="mb-6">Primarily Riyadh, with occasional opportunities in other Middle East offices.</p>
    `
  },
  {
    id: 3,
    title: "STC Co-operative Training Program - January 2026.",
    paragraph:
      "Join STC’s Co-op Program and work on real digital transformation projects in areas like software engineering.",
    image: getImagePath("/images/blog/STC.png"),
    author: {
      name: "STC",
      image: getImagePath("/images/blog/STC.png"),
      designation: "Graphic Designer",
    },
    tags: ["Telecom"],
    publishDate: "2025",

    body: `
      <h3 class="font-bold text-xl mb-3 mt-8 text-black dark:text-white">Overview</h3>
      <p class="mb-6">A national COOP program offering students hands-on experience in telecommunications, engineering, digital services, cybersecurity, and business functions. Trainees contribute to ongoing stc projects and gain practical expertise in a major tech-driven organization.</p>
      
      <h3 class="font-bold text-xl mb-3 text-black dark:text-white">Requirements</h3>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li>Saudi nationals enrolled in a Bachelor’s or Master’s program</li>
        <li>University COOP requirement</li>
        <li>Minimum GPA around 3.2/4</li>
        <li>English proficiency and ability to train on-site in Riyadh</li>
        <li>Open to engineering, tech, business, and related majors</li>
      </ul>

      <h3 class="font-bold text-xl mb-3 text-black dark:text-white">What You’ll Do</h3>
      <p class="mb-6">Work alongside stc teams on real operational or technical projects—depending on your major. You’ll receive guidance from a dedicated mentor and learn how solutions in telecom, digital transformation, and enterprise operations are executed.</p>

      <h3 class="font-bold text-xl mb-3 text-black dark:text-white">Benefits</h3>
      <p class="mb-6">Monthly incentive, professional mentorship, real project involvement, skill-building in technical and business areas, and potential entry into stc’s post-graduation development programs.</p>

      <h3 class="font-bold text-xl mb-3 text-black dark:text-white">Location</h3>
      <p class="mb-6">Riyadh.</p>
    `
  },
];
export default getBlogData;
