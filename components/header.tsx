/* eslint-disable @next/next/no-img-element */
import LogoIcon from "@assets/icons/logo.svg";
import Link from "next/link";
import ArrowIcon from "@assets/icons/arrow.svg";

export const Header = () => {
  return (
    <header className="w-screen bg-black/40">
      <div className="relative">
        <div className="p-6 tablet:p-8 mx-auto xl:max-w-navContainer">
          <div className="flex justify-between items-center w-full">
            <LogoIcon className="text-primary h-6 lg:h-12" />
            <Link
              href="/signin"
              className="inline-flex h-8 items-center font-medium text-center bg-primary px-4 rounded-md text-white"
            >
              <span>Sign In</span>
            </Link>
          </div>
        </div>
        <div className="max-w-heroContainer m-auto flex flex-col items-center text-center">
          <div className="w-full text-white">
            <h1 className="text-[2rem] font-semibold leading-tight">
              Explore Movies, TV shows, and more
            </h1>
            <p className="mt-4 text-lg ">
              Watch at your convenience. Cancel whenever you wish.
            </p>
            <div className="mt-6 px-6 max-w-[61.5rem]">
              <h3 className="text-lg leading-normal">
                Eager to begin? Share your email to create or resume your
                membership.
              </h3>

              <form action="">
                <div className="flex flex-col items-center text-left relative mt-4 w-full max-w-xl">
                  <div className="w-full">
                    <div className="flex flex-col items-center text-white w-full pb-8">
                      <input
                        placeholder="Enter email address"
                        aria-label="Email signup form"
                        type="text"
                        className="bg-transparent outline-white flex leading-normal w-full rounded-md px-4 min-h-[48px] min-w-[16px] border border-lightGray"
                      />
                      <button className="inline-flex py-2 px-4 rounded-md h-12 items-center leading-none text-xl bg-primary text-white mt-4">
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
    </header>
  );
};
