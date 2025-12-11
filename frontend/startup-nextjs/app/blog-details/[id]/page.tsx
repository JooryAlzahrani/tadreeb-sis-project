import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internship Details | Tadreeb",
  description: "View details for a specific internship opportunity.",
};

async function getInternship(id: string) {
  const res = await fetch(
    `http://localhost/getInternshipByID.php?id=${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch internship");
  }

  return res.json();
}

const BlogDetailsPage = async ({ params }: { params: { id: string } }) => {
  const internship = await getInternship(params.id);

  if (internship.error) {
    return <div className="text-center text-red-500">{internship.error}</div>;
  }

  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">

              <div>
                {/* TITLE */}
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                  {internship.title}
                </h2>

                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">

                  {/* AUTHOR + COMPANY LOGO */}
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src={internship.author.image}
                            alt="Company Logo"
                            fill
                          />
                        </div>
                      </div>
                      <div>
                        <span className="text-base font-medium text-body-color">
                          Posted by <span>{internship.author.name}</span>
                        </span>
                      </div>
                    </div>

                    {/* LOCATION + DEADLINE */}
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 text-base font-medium text-body-color">
                        📍 {internship.location}
                      </p>
                      <p className="mr-5 text-base font-medium text-body-color">
                        🗓 Deadline: {internship.deadline}
                      </p>
                    </div>
                  </div>

                  {/* APPLY BUTTON */}
                  <div className="mb-5">
                    <a
                      href={internship.applyLink ?? "#"}
                      className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>

                {/* PARAGRAPH */}
                <div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color">
                    {internship.paragraph}
                  </p>
                </div>

                {/* TAGS */}
                <div className="items-center justify-between sm:flex">
                  <div className="mb-5">
                    <h4 className="mb-3 text-sm font-medium text-body-color">
                      Majors Tagged:
                    </h4>
                    <div className="flex items-center">
                      {internship.tags.map((tag: string, index: number) => (
                        <TagButton key={index} text={tag} />
                      ))}
                    </div>
                  </div>

                  <div className="mb-5">
                    <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                      Share this opportunity :
                    </h5>
                    <div className="flex items-center sm:justify-end">
                      <SharePost />
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
