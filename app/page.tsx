import { PricingSection } from "@components/pricing-section";
import { Divider } from "@components/divider";
import { FAQSection } from "@components/faq-section";
import { FeaturesSection } from "@components/features-section";
import Footer from "@components/footer";
import { Header } from "@components/header";
import { SectionCard } from "@components/section-card";

const sectionData = [
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
        <FeaturesSection />
        <Divider />
        <PricingSection />
        <Divider />

        {/* Large section cards */}
        {sectionData.map((data, idx) => (
          <section key={data.title}>
            <SectionCard
              data={data}
              direction={`${idx % 2 === 1 ? "reverseFlow" : "normalFlow"}`}
            />
            <Divider />
          </section>
        ))}
        <FAQSection />
        <Divider />
      </main>
      <Footer />
    </>
  );
};
export default Home;
