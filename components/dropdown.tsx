"use client";

import { useState } from "react";
import PlusIcon from "@assets/icons/plus.svg";
import PlusLgIcon from "@assets/icons/plus-lg.svg";

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="mb-4 text-white text-lg lg:text-2xl bg-transparent"
      onClick={() => setIsOpen((prev) => (prev = !prev))}
    >
      <h3 className="flex mb-[1px] relative bg-darkerGray transition-colors duration-[250ms] ease-subtle">
        <button className="p-6 w-full flex items-center justify-between">
          <span>What is Iykeflix</span>
          <>
            <PlusIcon className={`lg:hidden ${isOpen && "-rotate-45"}`} />
            <PlusLgIcon
              className={`hidden lg:inline-flex ${isOpen && "-rotate-45"}`}
            />
          </>
        </button>
      </h3>
      <div
        className={`overflow-hidden ${
          isOpen ? "visible" : "collapse"
        } text-left p-6 bg-darkerGray transition-all duration-[0.25s] ease-softly max-h-[75rem]`}
      >
        <span>
          Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries, and more on
          thousands of internet-connected devices.
        </span>
      </div>
    </div>
  );
};
