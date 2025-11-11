import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-[url('/images/hero/blob-scene-haikei.svg')]
        bg-cover bg-center bg-no-repeat
        pb-16 pt-[120px] dark:bg-[url('/images/hero/blob-scene-dark-haikei.svg')] 
        bg-cover bg-center bg-no-repeat
        md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  A Centralized Internship Portal for Saudi University Students
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Tadreeb is your gateway to verified internship opportunities for Saudi University Students. 
                  Filter listings by major, location, requirements, and semester, get personalized recommendations, early notifictions, and reminders for deadline interviews.
                  Connect with alumni, bookmark your favorite internships, and track in-demand opportunities, all on one centralized platform backed by universities and companies for authenticity. 
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    target="_blank"
                    href="https://github.com/themewagon/startup-nextjs"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Start Your Journey Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
         
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          
        </div>
      </section>
    </>
  );
};

export default Hero;
