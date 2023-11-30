import Link from "next/link";

const linkData = [
  { label: "FAQ", href: "/" },
  { label: "Help Center", href: "/" },
  { label: "Account", href: "/" },
  { label: "Media Center", href: "/" },
  { label: "Investor Relations", href: "/" },
  { label: "Jobs", href: "/" },
  { label: "Ways to Watch", href: "/" },
  { label: "Terms of Use", href: "/" },
  { label: "Privacy", href: "/" },
  { label: "Corporate Information", href: "/" },
  { label: "Contact Us", href: "/" },
  { label: "Legal Notice", href: "/" },
];

const Footer = () => {
  return (
    <footer className="px-6 py-8 text-white/70 bg-black">
      <div className="w-full h-auto">
        <div className="inline-flex flex-wrap w-full">
          <div className="shrink-0 basis-full">
            <h3 className="hover:underline">Qustions? Contact us.</h3>
          </div>
          <div className="shrink-0 basis-full">
            <div className="w-full my-3 text-sm ">
              <div className="h-auto w-full">
                <ul className="inline-flex flex-wrap w-full">
                  {linkData.map((link) => (
                    <li
                      key={link.label}
                      className="shrink-0 basis-6/12 md:basis-1/3 lg:basis-3/12 inline-flex mt-4"
                    >
                      <Link href={link.href} className="hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="shrink-0 basis-full mt-4 text-base">
            Iykeflix &copy; {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
