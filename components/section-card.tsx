/* eslint-disable @next/next/no-img-element */
type SectionData = {
  title: string;
  desc: string;
  imageUrl: string;
};

type Props = {
  direction?: "normalFlow" | "reverseFlow";
  data: SectionData;
};

export const SectionCard = ({ direction = "normalFlow", data }: Props) => {
  return (
    <div className="flex relative justify-center bg-black text-white text-center min-h-auto py-14 tablet:py-[4.5rem] h-full lg:px-20">
      <div
        className={`m-auto max-w-container md:max-w-containerMedium xl:max-w-navContainer flex flex-col ${
          direction === "reverseFlow" ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center`}
      >
        <div
          className={`basis-6/12 w-full lg:text-left ${
            direction === "reverseFlow"
              ? "lg:p-l-[0.375rem]"
              : "lg:p-r-[0.375rem]"
          }`}
        >
          <h2 className="text-[2rem] font-bold leading-none lg:text-5xl">
            {data.title}
          </h2>
          <p className="text-lg mt-4 mb-12 lg:text-2xl">{data.desc}</p>
        </div>
        <div
          className={`basis-6/12 ${
            direction === "reverseFlow"
              ? "lg:p-r-[0.375rem]"
              : "lg:p-l-[0.375rem]"
          }`}
        >
          <div className="relative">
            <img src={data.imageUrl} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
