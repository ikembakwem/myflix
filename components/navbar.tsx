/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const NavigationBar = () => {
  return (
    <nav className="px-6 w-full max-w-[120rem] m-auto h-[7.5rem] tablet:px-8 xl:px-12">
      <div className="h-20 w-full">
        <div className="inline-flex w-full h-full items-center justify-between">
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
      </div>
    </nav>
  );
};
