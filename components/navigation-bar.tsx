import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import MyLogo from "@assets/icons/ike-logo.svg";
import MenuPage from "./menu-page";
import { MenuToggle } from "./menu-toggle";
import { AnimatePresence, motion } from "framer-motion";

export const NavigationBar = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (boxRef.current) {
        prevScrollPos > currentScrollPos
          ? (boxRef.current.style.transform = "translateY(0) translateZ(0)")
          : (boxRef.current.style.transform = "translateY(-160px)");
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header
        ref={boxRef}
        className="fixed bg-white top-0 z-30 w-full transition-transform duration-300 border-b border-gray-50"
      >
        <div className="flex justify-between max-w-7xl items-center mx-auto px-4 relative h-16">
          <div className="flex items-center pb-2 md:basis-3/12">
            <Link href="/">
              <MyLogo className="h-6 xs:h-8" />
            </Link>
          </div>
          <nav className="hidden md:inline-flex justify-center gap-x-6 md:basis-6/12">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/about">About Me</Link>
          </nav>
          <div className="flex items-center justify-end gap-x-2 basis-3/12">
            <div className="hidden md:flex items-center gap-x-4">
              <button className="cursor-pointer min-w-[128px] inline-flex items-center justify-center rounded-full h-10 py-3 px-5 bg-blue-800 text-white">
                Hire Me
              </button>
              <button className="cursor-pointer min-w-[128px] inline-flex items-center justify-center rounded-full h-10 py-2 px-3 bg-gray-200">
                Get in touch
              </button>
            </div>
            <div className="md:hidden inline-flex items-center">
              <MenuToggle
                isOpen={isOpen}
                onClick={() => setIsOpen((prev) => (prev = !prev))}
              />
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeIn" }}
            >
              <MenuPage onClick={() => setIsOpen(false)} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
      <div className="h-16"></div>
    </>
  );
};
