import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-95 mt-12 md:mt-16">
      <div className="flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between max-w-7xl py-6 md:pt-12 md:pb-16 mx-auto px-4">
        <div className=" flex flex-col md:flex-row gap-2 md:gap-4">
          <Link href="/" className="text-gray-900">
            Home
          </Link>
          <Link href="/projects" className="text-gray-900">
            Projects
          </Link>
          <Link href="/articles" className="text-gray-900">
            Articles
          </Link>
          <Link href="/about" className="text-gray-900">
            About Me
          </Link>
        </div>

        <p className="text-sm text-zinc-60 ">
          © {new Date().getFullYear()} Ikechukwu Mbakwem. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
