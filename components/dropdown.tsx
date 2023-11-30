"use client";

import { useState } from "react";
import PlusIcon from "@assets/icons/plus.svg";
import PlusLgIcon from "@assets/icons/plus-lg.svg";

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
      <h3 className="flex mb-[1px] relative bg-darkerGray transition-colors duration-[250ms] ease-subtle">
        <button className="p-6 w-full flex items-center justify-between">
          <span>{data.title}</span>
          <>
            <PlusIcon className={`lg:hidden ${isOpen && "-rotate-45"}`} />
            <PlusLgIcon
              className={`hidden lg:inline-flex ${isOpen && "-rotate-45"}`}
            />
          </>
        </button>
      </h3>
      {isOpen && (
        <div
          className={`visible text-left p-6 bg-darkerGray transition-all duration-[0.25s] ease-softly max-h-[75rem]`}
        >
          <span>
            {data.desc}
            <br />
            <br />
            {data.extDesc}
          </span>
        </div>
      )}
    </div>
  );
};
