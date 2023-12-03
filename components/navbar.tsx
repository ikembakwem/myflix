/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const NavigationBar = () => {
  return (
    <nav className="p-6 mx-auto">
      <div className="flex justify-between items-base w-full">
        <Link href="/">
          <img
            src="/assets/images/logo.png"
            alt="Onyonyo logo"
            className="h-6 lg:h-[29px] "
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
