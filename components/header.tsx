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
      <div className="relative flex justify-center text-white h-full min-h-[480px] pb-8 lg:min-h-[700px]">
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
        <div className="w-full">
          <NavigationBar />
          {/* Hero Copy container */}
          <div className="px-6 w-full h-auto max-w-[1920px] m-auto mt-14 lg:mt-20 lg:px-20 xl:px-[148px]">
            <div className="w-full text-left">
              <div className="max-w-full lg:max-w-[31.75rem]">
                <h1 className="text-[32px] lg:text-6xl leading-none font-semibold">
                  {heading}
                </h1>
                <p className="leading-tight text-lg mt-6 lg:text-2xl">
                  {subHeading}
                </p>
              </div>

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
