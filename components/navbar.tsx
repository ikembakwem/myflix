import LogoIcon from "@components/icons/logo.svg";
import Link from "next/link";

export const Navigation = () => {
  return (
    <div className="p-6 tablet:p-6 mx-auto xl:max-w-navContainer absolute z-2 top-0 left-0 right-0">
      <div className="flex justify-between items-center w-full">
        <LogoIcon className="text-primary h-6 lg:h-10" />
        <Link
          href="/signin"
          className="inline-flex h-8 items-center font-medium text-center bg-primary px-4 rounded-md text-white"
        >
          <span>Sign In</span>
        </Link>
      </div>
    </div>
  );
};
