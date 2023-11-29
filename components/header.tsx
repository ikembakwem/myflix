import LogoIcon from "@assets/icons/logo.svg";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 w-screen">
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
    </header>
  );
};
