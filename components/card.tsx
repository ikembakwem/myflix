export type CardData = {
  title: string;
  desc: string;
  fee?: string;
  icon?: React.ReactNode;
};

type Props = {
  data: CardData;
  withIcon?: boolean;
};

export const Card = ({ data, withIcon = false }: Props) => {
  return (
    <div
      className={`grow rounded-2xl relative flex grow-1 ${
        withIcon ? "bg-blueishGradient" : "bg-redishGradient"
      } mt-2 lg:basis-onethirdM3 lg:grow-0 lg:ml-3 lg:mt-3 xl:basis-oneFourthM4 xl:mt-4 xl:ml-4`}
    >
      <div className="w-full inline-flex flex-col px-4 pt-8 pb-10 flex-wrap justify-between text-white">
        <div>
          <h3
            className={`mt-3 min-h-[48px] text-2xl font-medium ${
              !withIcon && "uppercase"
            } ${withIcon && "xl:min-h-[72px]"} leading-none`}
          >
            {data.title}
          </h3>
          <p className="mt-3 font-light leading-5">{data.desc}</p>
        </div>
        <div className={`flex ${withIcon && "justify-end"} mt-4`}>
          <p className={`${withIcon && "hidden"} font-semibold leading-5`}>
            {data.fee}
          </p>
          {data.icon}
        </div>
      </div>
    </div>
  );
};
