import { useState } from "react";
import faqImage from "../assets/faqImage.png";
import { ChevronDown, ChevronRight } from "lucide-react";

const faqData = [
  {
    question: "Are ear wax removal tools safe to use?",
    answer:
      "We would not recommend Q Twists, Hopi ear candles or any of its derivatives as we have found these to cause wax to be pushed right to the back of the ear. This can cause the eardrum to perforate or at the very least cause trauma to the ear.",
  },
  {
    question: "When to get ear wax removal?",
    answer:
      "If you experience hearing loss, blocked ears, discomfort, tinnitus, or dizziness, it may be time to have your ears checked.",
  },
  {
    question: "Can ear wax removal help with vertigo?",
    answer:
      "In some cases excessive wax buildup can contribute to balance issues and dizziness.",
  },
  {
    question: "Who should I go to for ear wax removal?",
    answer:
      "A qualified audiologist or ear care specialist is recommended for safe ear wax removal.",
  },
  {
    question: "How do earwax removal drops work?",
    answer:
      "They soften hardened wax making it easier for the ear to naturally remove or for a specialist to extract.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We provide services across multiple locations in the Midlands region.",
  },
];

const FAQSection = () => {
  const [active, setActive] = useState(0);

  const toggleAccordion = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="max-w-[1440px] min-h-[567px] mx-auto mt-12">
      <div className="grid lg:grid-cols-2 gap-10 items-start">

        {/* Left Image */}
        <div>
          <img
            src={faqImage}
            alt="FAQ"
            className="
              w-full
              max-w-[550px]
              mx-auto
              rounded-[30px]
              object-cover
            "
          />
        </div>

        {/* Right Content */}
        <div>

          <h2 className="text-3xl md:text-5xl font-bold text-black mb-8">
            Frequently Ask Questions
          </h2>

          <div className="space-y-4">

            {faqData.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl"
              >
                {/* Question */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="
                    w-full
                    flex
                    items-center
                    gap-4
                    px-6
                    py-5
                    bg-[#3D4E63]
                    text-white
                    text-left
                    text-lg
                    rounded-xl
                  "
                >
                  {active === index ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}

                  <span>{item.question}</span>
                </button>

                {/* Answer */}
                {active === index && (
                  <div className="bg-white px-6 py-5 text-gray-700 leading-8">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;