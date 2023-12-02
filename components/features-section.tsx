import { Card, CardData } from "./card";
import TVIcon from "@components/icons/tv.svg";

const featureData: CardData = {
  title: "TV enjoyment at its best",
  desc: "Enjoy on Smart TVs, XBox, Chromecast, Apple TV, gaming consoles, and more.",
};

export const FeaturesSection = () => {
  return (
    <section className="my-14">
      <div className="max-w-container md:max-w-containerMedium lg:max-w-navContainer mx-auto">
        <div>
          <h3 className="capitalize text-lg mt-3 font-medium lg:ml-3">
            More reasons to join
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-wrap w-full">
          <Card withIcon={true} icon={<TVIcon />} data={featureData} />
          <Card withIcon={true} icon={<TVIcon />} data={featureData} />
          <Card withIcon={true} icon={<TVIcon />} data={featureData} />
          <Card withIcon={true} icon={<TVIcon />} data={featureData} />
        </div>
      </div>
    </section>
  );
};
