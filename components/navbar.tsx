/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const NavigationBar = () => {
  return (
    <nav className="p-6 mx-auto xl:max-w-navContainer">
      <div className="flex justify-between items-center w-full">
        <Link href="/">
          <img
            src="/assets/images/logo.png"
            alt="Onyonyo logo"
            className="h-11 lg:h-14 "
          />
        </Link>
        <Link
          href="/signin"
          className="inline-flex h-8 items-center font-medium text-center bg-primary px-4 rounded-md text-white"
        >
          <span>Sign In</span>
        </Link>
      </div>
    </nav>
  );
};
