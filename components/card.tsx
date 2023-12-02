export type CardData = {
  title: string;
  desc: string;
  fee?: string;
};

type Props = {
  icon?: React.ReactNode;
  data: CardData;
  withIcon?: boolean;
};

export const Card = ({ icon, data, withIcon = false }: Props) => {
  return (
    <div
      className={`grow rounded-2xl relative flex grow-1 ${
        withIcon ? "bg-blueishGradient" : "bg-redishGradient"
      } mt-2 lg:basis-withM3 lg:grow-0 lg:ml-3 lg:mt-3`}
    >
      <div className="w-full inline-flex flex-col px-4 pt-8 pb-10 flex-wrap justify-between text-white">
        <div>
          <h3
            className={`mt-3 text-2xl font-medium ${
              !withIcon && "uppercase"
            } leading-none`}
          >
            {data.title}
          </h3>
          <p className="mt-3 font-light leading-5">{data.desc}</p>
        </div>
        <div className={`flex ${withIcon && "justify-end"}`}>
          <p className={`${withIcon && "hidden"} font-semibold mt-3 leading-5`}>
            {data.fee}
          </p>
          {icon}
        </div>
      </div>
    </div>
  );
};
