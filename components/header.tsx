/* eslint-disable @next/next/no-img-element */
import LogoIcon from "@assets/icons/logo.svg";
import Link from "next/link";
import ArrowIcon from "@assets/icons/arrow.svg";

export const Header = () => {
  return (
    <header className="bg-black/60">
      <div className="relative flex justify-center text-white text-center h-full min-h-[30rem] pt-[7.5rem] pb-8">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
