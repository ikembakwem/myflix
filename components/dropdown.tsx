"use client";

import { useState } from "react";
import PlusIcon from "@components/icons/plus.svg";
import PlusLgIcon from "@components/icons/plus-lg.svg";

export type DropdownData = {
  title: string;
  desc: string;
  extDesc?: string;
};

type Props = {
  data: DropdownData;
};

export const Dropdown = ({ data }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="mb-2 text-white text-lg lg:text-2xl bg-transparent"
      onClick={() => setIsOpen((prev) => (prev = !prev))}
    >
      <h3 className="flex mb-[1px] relative bg-gray-40 transition duration-[250ms] ease-subtle hover:bg-gray-20">
        <button className="p-6 w-full flex items-center justify-between">
          <span className="text-left">{data.title}</span>
          <>
            <PlusIcon
              className={`lg:hidden transition duration-[250ms] ease-softly ${
                isOpen && "-rotate-45"
              }`}
            />
            <PlusLgIcon
              className={`hidden lg:inline-flex transition duration-[250ms] ease-softly ${
                isOpen && "-rotate-45"
              }`}
            />
          </>
        </button>
      </h3>

      <div
        className={`${
          isOpen ? "visible max-h-[1200px]" : "collapse max-h-0"
        } text-left bg-gray-40 transition-all duration-[0.25s] ease-softly overflow-hidden`}
      >
        <span className="inline-block p-6">
          {data.desc}
          <br />
          <br />
          {data.extDesc}
        </span>
      </div>
    </div>
  );
};
