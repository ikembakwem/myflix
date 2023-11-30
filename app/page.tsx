import { Navigation } from "@components/navbar";
import { Section } from "@components/section";

const Home = () => {
  return (
    <>
      <Navigation />
      <Section />
      <div className="h-screen flex items-center justify-center text-5xl font-semibold">
        <h1>Hello World</h1>
      </div>
    </>
  );
};
export default Home;
