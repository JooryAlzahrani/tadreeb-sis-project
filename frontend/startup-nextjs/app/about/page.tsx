import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Are | Tadreeb ",
  description: "Discover Tadreeb, the centralized portal connecting Saudi students with verified internship opportunities",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Who We Are"
        description="Tadreeb is a centralized internship portal developed by Computer Science students at Umm Al-Qura University. Our goal is to help Saudi students easily discover, track, and apply for verified internship opportunities."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
