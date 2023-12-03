import { CardSection } from "@components/cards-section";
import { Divider } from "@components/divider";
import { FAQSection } from "@components/faq-section";
import { FeaturesSection } from "@components/features-section";
import Footer from "@components/footer";
import { Header } from "@components/header";
import { Section } from "@components/section";

const sections = [
  {
    title: "Enjoy content on your TV",
    desc: "View on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and beyond.",
    imageUrl: "/assets/images/tv.png",
  },
  {
    title: "Keep your shows offline with easy downloads",
    desc: "Build a go-to watchlist by easily saving your favorite shows and movies.",
    imageUrl: "/assets/images/mobile-app.jpg",
  },
  {
    title: "Watch from any location.",
    desc: "Unlimited streaming of movies and TV shows on your phone, tablet, laptop, and TV.",
    imageUrl: "/assets/images/tv.png",
  },
  {
    title: "Set up individual profiles specifically for kids",
    desc: "Take kids on exciting journeys with their favorite characters in an exclusive space created just for them, included with your membership.",
    imageUrl: "/assets/images/for-kids.png",
  },
];

const Home = () => {
  return (
    <>
      <Header
        heading="Explore Movies, TV shows, and more"
        subHeading="Watch anywhere. Cancel anytime."
      />
      <main>
        <Divider />
        <CardSection />
        <Divider />
        <FeaturesSection />
        <Divider />
        <Section data={sections[0]} />
        <Divider />
        <Section data={sections[1]} direction="reverseFlow" />
        <Divider />
        <Section data={sections[2]} />
        <Divider />
        <Section data={sections[3]} direction="reverseFlow" />
        <Divider />
        <FAQSection />
        <Divider />
      </main>
      <Footer />
    </>
  );
};
export default Home;
