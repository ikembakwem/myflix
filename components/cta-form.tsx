import ArrowIcon from "@components/icons/arrow.svg";

export const CTAForm = () => {
  return (
    <div className="w-full max-w-[61.5rem] text-white flex flex-col">
      <h3 className="leading-tight text-lg lg:text-xl">
        Eager to begin? Share your email to create or resume your membership.
      </h3>
      <div className="text-left relative mt-4 w-full max-w-[36.625rem]">
        <form action="">
          <div className="flex flex-col items-center text-left relative w-full max-w-xl">
            <div className="w-full">
              <div className="flex flex-col tablet:flex-row items-start w-full">
                <input
                  placeholder="Enter email address"
                  aria-label="Email signup form"
                  type="text"
                  className="outline-white flex leading-normal w-full rounded-md px-4 min-h-[48px] tablet:min-h-[56px] min-w-[16px] border border-lightGray bg-mediumGray"
                />
                <button className="inline-flex py-2 px-4 rounded-md h-12 items-center leading-none font-medium text-xl bg-primary mt-4 tablet:mt-0 tablet:shrink-0 tablet:basis-auto tablet:ml-2 tablet:h-14 tablet:text-2xl">
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
  );
};
