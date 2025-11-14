import Breadcrumb from "@/components/Common/Breadcrumb";

import Contact from "@/components/Contact"; 

import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact Us | Tadreeb ",
  description: "Want to share an internship opportunity or ask a question? Use the form to reach our team.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      {}
      <Breadcrumb
        pageName="Contact Us" // Main Title: Contact Us
        description="Want to share an internship opportunity or ask a question? We’re always open to hearing from you! Use the form below and we’ll reply as soon as we can." // Intro Paragraph
      />

      {}
      <Contact />
    </>
  );
};

export default ContactPage;