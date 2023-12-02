import { Card, CardData } from "./card";

const cardsData: CardData[] = [
  {
    title: "Mobile",
    desc: "On-the-go mobile-friendly choice.",
    fee: "₦1,200/month",
  },
  {
    title: "Basic",
    desc: "Budget-friendly delight for shows and movies.",
    fee: "₦2,900/month",
  },
  {
    title: "Standard",
    desc: "Your beloved content, all in Full HD.",
    fee: "₦3,600/month",
  },
  {
    title: "Premium",
    desc: "Experience cinema at its finest with top-notch visuals and audio.",
    fee: "₦4,400/month",
  },
];

export const CardSection = () => {
  return (
    <section className="my-14">
      <div className="max-w-container md:max-w-containerMedium lg:max-w-navContainer mx-auto">
        <div>
          <h3 className="capitalize text-lg mt-3 font-medium lg:text-2xl lg:ml-3">
            A plan to suit your needs
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-wrap w-full">
          {cardsData.map((data) => (
            <Card key={data.title} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};
