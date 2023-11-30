import { Line } from "./line";

/* eslint-disable @next/next/no-img-element */
export const Section = () => {
  return (
    <section className="flex relative justify-center bg-black text-white text-center min-h-auto py-14 tablet:py-[4.5rem] h-full">
      <div className="m-auto max-w-container md:max-w-containerMedium xl:max-w-navContainer flex flex-col lg:flex-row items-center ">
        <div className="basis-6/12 w-full lg:text-left lg:p-r-[0.375rem]">
          <h2 className="text-[2rem] font-bold leading-none lg:text-5xl">
            Enjoy content on your TV
          </h2>
          <p className="text-lg mt-4 mb-12 lg:text-2xl">
            View on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and beyond.
          </p>
        </div>
        <div className="basis-50%">
          <div className="relative">
            <img src="/assets/images/tv.png" alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
      <Line />
    </section>
  );
};
