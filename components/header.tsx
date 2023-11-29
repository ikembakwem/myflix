/* eslint-disable @next/next/no-img-element */
import LogoIcon from "@assets/icons/logo.svg";
import Link from "next/link";
import ArrowIcon from "@assets/icons/arrow.svg";
import { Line } from "./line";

export const Header = () => {
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
        <div className="m-auto max-w-heroContainer flex items-center flex-col">
          <div className="basis-6/12 z-1 w-full">
            <h1 className="text-[2rem] leading-none font-semibold">
              Explore Movies, TV shows, and more
            </h1>
            <p className="leading-tight text-lg mt-6">
              Watch anywhere. Cancel anytime.
            </p>

            <div className="mt-6">
              {/* CTA form */}
              <div className="max-w-[61.5rem] px-6 mx-auto ">
                <h3 className="leading-tight text-lg">
                  Eager to begin? Share your email to create or resume your
                  membership.
                </h3>
                <div className="text-left relative mt-4 w-full max-w-[36.625rem]">
                  <form action="">
                    <div className="flex flex-col items-center text-left relative mt-4 w-full max-w-xl">
                      <div className="w-full">
                        <div className="flex flex-col tablet:flex-row items-center text-white w-full">
                          <input
                            placeholder="Enter email address"
                            aria-label="Email signup form"
                            type="text"
                            className="outline-white flex leading-normal w-full rounded-md px-4 min-h-[48px] tablet:min-h-[56px] min-w-[16px] border border-lightGray bg-mediumGray"
                          />
                          <button className="inline-flex py-2 px-4 rounded-md h-12 items-center leading-none font-medium text-xl bg-primary text-white mt-4 tablet:mt-0 tablet:shrink-0 tablet:basis-auto tablet:ml-2 tablet:h-14 tablet:text-2xl">
                            Get started
                            <span className="ml-2">
                              <ArrowIcon />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Line />
      </div>
    </div>
  );
};
