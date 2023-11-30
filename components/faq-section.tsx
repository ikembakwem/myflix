import { CTAForm } from "./cta-form";
import { Dropdown, DropdownData } from "./dropdown";

const dropdownData: DropdownData = {
  title: "What is Iykeflix",
  desc: "Iykeflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  extDesc:
    "You can watch as much as you want, whenever you want without a single commercial &arr; all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
};

const faqData: DropdownData[] = [
  {
    title: "What is Iykeflix",
    desc: "Iykeflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    extDesc:
      "You can watch as much as you want, whenever you want without a single commercial &arr; all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  },
  {
    title: "How much does Iykeflix cost?",
    desc: "Watch Iykeflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.",
  },
  {
    title: "Where can I watch?",
    desc: "Watch anywhere, anytime. Sign in with your Iykeflix account to watch instantly on the web at Iykeflix.com from your personal computer or on any internet-connected device that offers the Iykeflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    extDesc:
      "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Iykeflix with you anywhere.",
  },
  {
    title: "How do I cancel",
    desc: "Iykeflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    title: "What can I watch on Iykeflix?",
    desc: "Iykeflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Iykeflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    title: "Is Iykeflix good for kids?",
    desc: "The Iykeflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
    extDesc:
      "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

export const FAQSection = () => {
  return (
    <section className="bg-black py-[4.5rem]">
      <div className="m-auto max-w-container xl:max-w-navContainer md:max-w-containerMedium">
        <h3 className="text-[2rem] lg:text-5xl leading-tight text-center text-white font-semibold mb-6">
          Frequently Asked Questions
        </h3>
        {faqData.map((faq, idx) => (
          <Dropdown key={idx} data={faq} />
        ))}
        <div className="mt-11">
          <CTAForm />
        </div>
      </div>
    </section>
  );
};
