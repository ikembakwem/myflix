import { Navigation } from "@components/navbar";

const Home = () => {
  return (
    <>
      <Navigation />
      <div className="h-screen flex items-center justify-center text-5xl font-semibold">
        <h1>Hello World</h1>
      </div>
    </>
  );
};
export default Home;
