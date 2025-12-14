/**
 * Purpose:
 * Internship details page – renders full internship data
 * fetched from PHP backend with rich styling.
 */

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
    `http://localhost/api/getInternships.php?id=${id}`,
    {
      cache: "no-store",
      headers: { Accept: "application/json" },
    }
  );

  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    throw new Error("Backend did not return JSON:\n" + text);
  }
}

const BlogDetailsPage = async ({ params }: { params: { id: string } }) => {
  const data = await getInternship(params.id);
  const internship = data?.[0];

  if (!internship) {
    return (
      <div className="pt-[150px] text-center text-red-500">
        Internship not found
      </div>
    );
  }

  return (
    <section className="pb-[120px] pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>

              {/* ---------- COMPANY BANNER (WHITE BG, BIG LOGO) ---------- */}
              {internship.image && (
                <div className="relative mb-10 h-[260px] w-full overflow-hidden rounded-xl border border-body-color border-opacity-10 bg-white">
                  <Image
                    src={internship.image}
                    alt={`${internship.author.name} logo`}
                    fill
                    className="object-contain p-6"
                    priority
                  />
                </div>
              )}

              {/* ---------- TITLE ---------- */}
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                {internship.title}
              </h2>

              {/* ---------- META ---------- */}
              <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                <div className="flex flex-wrap items-center">
                  <div className="mb-5 mr-10 flex items-center">
                    <div className="mr-4">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white">
                        <Image
                          src={internship.author.image}
                          alt="Company Logo"
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    </div>
                    <span className="text-base font-medium text-body-color">
                      Posted by <span>{internship.author.name}</span>
                    </span>
                  </div>

                  <div className="mb-5 flex items-center">
                    <p className="mr-5 text-base font-medium text-body-color">
                      📍 {internship.location}
                    </p>
                    <p className="mr-5 text-base font-medium text-body-color">
                      🗓 Deadline: {internship.deadline}
                    </p>
                  </div>
                </div>

                <a
                  href={internship.applyLink ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                >
                  Apply Now
                </a>
              </div>

              {/* ---------- SHORT DESCRIPTION ---------- */}
              <p className="mb-8 text-base font-medium leading-relaxed text-body-color">
                {internship.paragraph}
              </p>

              {/* ---------- FULL DESCRIPTION ---------- */}
              {internship.body && (
                <div
                  className="blog-details-content"
                  dangerouslySetInnerHTML={{ __html: internship.body }}
                />
              )}

              {/* ---------- REQUIREMENTS ---------- */}
              {internship.requirements?.length > 0 && (
                <>
                  <h3 className="font-bold text-xl mb-3 mt-8 text-black dark:text-white">
                    Requirements
                  </h3>
                  <ul className="list-disc pl-5 mb-6 space-y-2">
                    {internship.requirements.map(
                      (req: string, i: number) => (
                        <li key={i}>{req}</li>
                      )
                    )}
                  </ul>
                </>
              )}

              {/* ---------- BENEFITS ---------- */}
              {internship.features?.length > 0 && (
                <>
                  <h3 className="font-bold text-xl mb-3 text-black dark:text-white">
                    Benefits
                  </h3>
                  <ul className="list-disc pl-5 mb-6 space-y-2">
                    {internship.features.map(
                      (feature: string, i: number) => (
                        <li key={i}>{feature}</li>
                      )
                    )}
                  </ul>
                </>
              )}

              {/* ---------- PROGRAM DETAILS ---------- */}
              {(internship.duration || internship.semester) && (
                <>
                  <h3 className="font-bold text-xl mb-3 text-black dark:text-white">
                    Program Details
                  </h3>
                  <p className="mb-6 text-body-color">
                    {internship.duration && (
                      <span>⏳ Duration: {internship.duration}<br /></span>
                    )}
                    {internship.semester && (
                      <span>📅 Semester: {internship.semester}</span>
                    )}
                  </p>
                </>
              )}

              {/* ---------- TAGS + SHARE ---------- */}
              <div className="items-center justify-between sm:flex">
                <div className="mb-5">
                  <h4 className="mb-3 text-sm font-medium text-body-color">
                    Majors Tagged:
                  </h4>
                  <div className="flex items-center">
                    {internship.tags.map(
                      (tag: string, index: number) => (
                        <TagButton key={index} text={tag} />
                      )
                    )}
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
  );
};

export default BlogDetailsPage;
