import Link from "next/link";

const MenuPage = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) => {
  return (
    <div className="h-screen md:hidden">
      <div className="absolute z-50 w-full px-4">
        <nav>
          <div className="flex flex-col gap-4 py-4">
            <Link href="/" onClick={onClick}>
              <span className="font-bold text-xl">Home</span>
            </Link>
            <Link href="/articles" onClick={onClick}>
              <span className="font-bold text-xl">Articles</span>
            </Link>
            <Link href="/projects" onClick={onClick}>
              <span className="font-bold text-xl">Projects</span>
            </Link>
            <Link href="/about" onClick={onClick}>
              <span className="font-bold text-xl">About Me</span>
            </Link>
          </div>
          <div className="text-indigo-700">
            <button className="font-bold">Hire Me</button>{" "}
            <span className="text-black">or</span>{" "}
            <button className="font-bold">Get in touch</button>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default MenuPage;
