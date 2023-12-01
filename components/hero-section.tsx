/* eslint-disable @next/next/no-img-element */
import { CTAForm } from "./cta-form";

export const HeroSection = () => {
  const divStyles = {
    backgroundImage:
      "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
  };
  return (
    <div>
      <div className="relative flex justify-center text-white text-center h-full min-h-[30rem] pt-[7.5rem] pb-8 tablet:pt-[8.5rem] tablet:pb-12 lg:min-h-[43.75rem] lg:pt-[9.875rem] lg:pb-16">
        {/* background container */}
        <div className="absolute -z-10 h-full w-full top-0 left-0">
          <div className="relative w-full h-full overflow-hidden">
            <img
              src="/assets/images/hero-image.jpg"
              alt="Hero Image"
              className="w-auto tablet:w-full h-full object-cover"
            />
            <div
              className="bg-black/40 absolute inset-0"
              style={divStyles}
            ></div>
          </div>
        </div>

        {/* Hero Copy container */}
        <div className="m-auto max-w-container flex items-center flex-col">
          <div className="basis-6/12 z-1 w-full">
            <h1 className="text-[2rem] lg:text-5xl leading-none font-semibold">
              Explore Movies, TV shows, and more
            </h1>
            <p className="leading-tight text-lg mt-6 lg:text-2xl">
              Watch anywhere. Cancel anytime.
            </p>

            <div className="mt-6">
              {/* CTA form */}
              <CTAForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
