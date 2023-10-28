import faqData from "../../content/faq.json";
import Faq from "./Faq";
const Faqs = () => {
  return (
    <div className="mt-5">
      <h1 className="py-6 text-center text-2xl sm:text-4xl">
        Frequently Asked Question
      </h1>
      {faqData.map((faq) => (
        <Faq key={faq.id} {...faq} />
      ))}
    </div>
  );
};

export default Faqs;
