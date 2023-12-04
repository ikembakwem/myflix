/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export const NavigationBar = () => {
  return (
    <nav className="px-6 w-full max-w-[1920x] m-auto h-[120px] tablet:px-8 xl:px-12">
      <div className="h-20 w-full">
        <div className="inline-flex w-full h-full items-center justify-between">
          <>
            <div className="hidden md:inline-flex">
              <Link href="/">
                <Image
                  height={30}
                  width={164}
                  src="/assets/images/logo.png"
                  alt="Onyonyo logo"
                />
              </Link>
            </div>
            <div className="md:hidden">
              <Link href="/">
                <Image
                  height={24}
                  width={136}
                  src="/assets/images/logo.png"
                  alt="Onyonyo logo"
                />
              </Link>
            </div>
          </>
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
