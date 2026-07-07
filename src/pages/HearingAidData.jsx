import { PhoneCall } from "lucide-react";
import hearingAidImg from "../assets/Container.png"
const HearingAidSection = () => {

const hearingAidData = {
  image: hearingAidImg,

  title: "Hearing Aids Birmingham",

  description1:
    "Today's hearing aids provide a range of advanced features that significantly improve hearing quality and comfort. From world-leading manufacturers such as Phonak, Starkey, Resound, Widex, Oticon, Unitron, and Signia, these devices make use of cutting-edge technology to deliver clear, high-quality sound in a variety of listening environments.",

  description2:
    "Today's hearing aids provide a range of advanced features that significantly improve hearing quality and comfort. From world-leading manufacturers such as Phonak, Starkey, Resound, Widex, Oticon, Unitron, and Signia, these devices make use of cutting-edge technology to deliver clear, high-quality sound in a variety of listening environments.",

  buttonText: "Learn More About Hearing Aid",
};

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-16">

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left Image */}
        <div>
          <img
            src={hearingAidData.image}
            alt={hearingAidData.title}
            className="
              w-full
              max-w-[500px]
              mx-auto
              rounded-[30px]
              object-cover
            "
          />
        </div>

        {/* Right Content */}
        <div>

          <h2
            className="
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              text-black
            "
          >
            {hearingAidData.title}
          </h2>

          <p className="mt-6 text-gray-700 leading-8 text-base md:text-lg">
            {hearingAidData.description1}
          </p>

          <p className="mt-6 text-gray-700 leading-8 text-base md:text-lg">
            {hearingAidData.description2}
          </p>

          <button
            className="
              mt-8
              bg-[#5EE7BC]
              hover:bg-[#4dd8ad]
              text-white
              px-8
              py-4
              rounded-xl
              flex
              items-center
              gap-3
              font-semibold
              transition-all
            "
          >
            <PhoneCall size={20} />
            {hearingAidData.buttonText}
          </button>

        </div>
      </div>
    </section>
  );
};

export default HearingAidSection;