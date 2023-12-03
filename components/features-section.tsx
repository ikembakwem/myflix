import { Card, CardData } from "./card";
import TVIcon from "@components/icons/tv.svg";
import DownloadIcon from "@components/icons/download-core.svg";
import TelescopeIcon from "@components/icons/telescope.svg";
import ProfileIcon from "@components/icons/profiles.svg";

const featuresData: CardData[] = [
  {
    title: "TV enjoyment at its best",
    desc: "Enjoy on Smart TVs, XBox, Chromecast, Apple TV, gaming consoles, and more.",
    icon: <TVIcon />,
  },
  {
    title: "Save shows for offline enjoyment",
    desc: "Save with ease, always have something on hand to watch. offline",
    icon: <DownloadIcon />,
  },
  {
    title: "Watch from any location",
    desc: "Stream endlessly on your phone, tablet, laptop, and TV.",
    icon: <TelescopeIcon />,
  },
  {
    title: "Make profiles tailored for kids",
    desc: "Dive into a world made for kids with beloved characters — all free with membership.",
    icon: <ProfileIcon />,
  },
];

export const FeaturesSection = () => {
  return (
    <section className="my-14">
      <div className="max-w-container md:max-w-containerMedium lg:max-w-navContainer mx-auto">
        <div>
          <h3 className="capitalize text-lg lg:text-2xl mt-3 font-medium lg:ml-3">
            More reasons to join
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-wrap w-full">
          {featuresData.map((feat) => (
            <Card key={feat.title} withIcon={true} data={feat} />
          ))}
        </div>
      </div>
    </section>
  );
};
