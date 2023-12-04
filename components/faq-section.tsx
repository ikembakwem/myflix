import { CTAForm } from "./cta-form";
import { Dropdown, DropdownData } from "./dropdown";

const faqData: DropdownData[] = [
  {
    title: "What is Onyonyo",
    desc: "Onyonyo is a streaming service where you can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    extDesc:
      "Onyonyo provides an extensive range of acclaimed TV shows, films, anime, documentaries, and more on numerous internet-connected devices. Enjoy unlimited viewing, free from commercials, all at an affordable monthly rate. Explore a constant stream of new content, with fresh TV shows and movies added each week!",
  },
  {
    title: "How much does Onyonyo cost?",
    desc: "View Onyonyo on your smartphone, tablet, Smart TV, laptop, or streaming device, all under a single, fixed monthly fee. Plans start from ₦1,200 to ₦4,400 per month. No hidden expenses, no commitments.",
  },
  {
    title: "Where can I watch?",
    desc: "Watch anytime, anywhere. Log in to your Onyonyo account to instantly stream on the web at onyonyo.com from your computer or any internet-connected device with the Onyonyo app, like smart TVs, smartphones, tablets, streaming media players, and game consoles.",
    extDesc:
      "Download your preferred shows with the iOS, Android, or Windows 10 app. Utilize downloads for on-the-go viewing without an internet connection. Carry Onyonyo with you everywhere.",
  },
  {
    title: "How do I cancel",
    desc: "Onyonyo offers flexibility with no bothersome contracts or commitments. Easily cancel your account online in just two clicks, and there are no cancellation fees. Start or stop your account anytime hassle-free.",
  },
  {
    title: "What can I watch on Onyonyo?",
    desc: "Onyonyo boasts a vast library featuring films, documentaries, TV shows, anime, award-winning Onyonyo originals, and more. Enjoy unlimited viewing at your convenience, whenever you desire.",
  },
  {
    title: "Is Onyonyo good for kids?",
    desc: "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    extDesc:
      "Kids' profiles feature PIN-protected parental controls, allowing you to limit the maturity rating of content and block specific titles you don't want kids to access.",
  },
];

export const FAQSection = () => {
  return (
    <section className="bg-black py-[72px] lg:px-20">
      <div className="mx-auto max-w-container xl:max-w-navContainer md:max-w-containerMedium lg:pr-[20%]">
        <h3 className="text-[32px] lg:text-5xl leading-tight text-white font-semibold mb-6">
          Frequently Asked Questions
        </h3>
        {faqData.map((faq) => (
          <Dropdown key={faq.title} data={faq} />
        ))}
        <div className="mt-11">
          <CTAForm />
        </div>
      </div>
    </section>
  );
};
