/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const Header = () => {
  return (
    <header className="p-6 tablet:p-6 mx-auto xl:max-w-navContainer absolute z-2 top-0 left-0 right-0">
      <div className="flex justify-between items-center w-full">
        <img
          src="/assets/images/logo.png"
          alt="Onyonyo logo"
          className="h-11 lg:h-14 "
        />
        <Link
          href="/signin"
          className="inline-flex h-8 items-center font-medium text-center bg-primary px-4 rounded-md text-white"
        >
          <span>Sign In</span>
        </Link>
      </div>
    </header>
  );
};
