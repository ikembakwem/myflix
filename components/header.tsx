/* eslint-disable @next/next/no-img-element */
import { CTAForm } from "./cta-form";
import { NavigationBar } from "./navbar";

export const Header = ({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) => {
  const divStyles = {
    backgroundImage:
      "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
  };
  return (
    <header>
      <div className="relative flex justify-center text-white h-full min-h-[30rem] pb-8 lg:min-h-[43.75rem]">
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
        <div>
          <NavigationBar />
          {/* Hero Copy container */}
          <div className="m-auto lg:mt-32 pt-4 px-6 tablet:pt-12 tablet:pb-12 lg:pt-12 lg:pb-16 max-w-container flex items-center flex-col">
            <div className="basis-6/12 w-full text-left">
              <h1 className="text-[2rem] lg:text-5xl leading-none font-semibold">
                {heading}
              </h1>
              <p className="leading-tight text-lg mt-6 lg:text-2xl">
                {subHeading}
              </p>

              <div className="mt-6">
                {/* CTA form */}
                <CTAForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
