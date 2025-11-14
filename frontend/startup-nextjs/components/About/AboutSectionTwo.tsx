import { getImagePath } from "@/lib/utils";
import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {}
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src={getImagePath("/images/about/about-image-2.svg")}
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src={getImagePath("/images/about/about-image-2-dark.svg")}
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          
          {}
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              
              {}
              <div className="mb-9">
                <h3 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Meet Our Founding Team
                </h3>
                
                {}
                <h4 className="mb-2 text-xl font-semibold text-primary">Taif Alzahrani</h4>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed mb-4">
                  Content Designer & Page Layout
                </p>

                {}
                <h4 className="mb-2 text-xl font-semibold text-primary">Joory Alzahrani</h4>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed mb-4">
                  Front-end Developer & Team Leader
                </p>
                 
                {}
                <h4 className="mb-2 text-xl font-semibold text-primary">Esraa AbdElraheem</h4>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed mb-4">
                  Front-end Implementation & Testing
                </p>

                {}
                <h4 className="mb-2 text-xl font-semibold text-primary">Tala Alqahtani</h4>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed mb-4">
                  UI Designer & Color Palette Specialist
                </p>
              
                {}
                <h4 className="mb-2 text-xl font-semibold text-primary">Shaima Fuad</h4>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed mb-4">
                  Visual Content & Graphic Design
                </p>
              </div>
              
              {}
              <div className="mt-12">
                <p className="text-xl font-medium leading-relaxed text-black dark:text-white">
                  Our mission is to make internship hunting simple, reliable, and accessible for every student, connecting academic learning with real-world experience.
                </p>
              </div>
              {}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;