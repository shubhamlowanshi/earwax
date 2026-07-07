import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaStar } from "react-icons/fa";
import blckwomen from '../assets/blckldy.png'
import smilewomen from '../assets/smile2.png'
import smilemidle from '../assets/smilmidlw.png'
const TestimonialSection = () => {

    const testimonials = [
  {
    id: 1,
    name: "Nyka Simmons",
    image: blckwomen,
    review: (
      <>
        Doctors and staff at this office are{" "}
        <span className="text-[#5EE7BC] font-semibold">amazing</span>.
        I have been going here about 6 to 7 years. Their service is{" "}
        <span className="text-[#5EE7BC] font-semibold">top-tier</span> and
        they have always taken care of my{" "}
        <span className="text-[#5EE7BC] font-semibold">hearing needs</span>.
      </>
    ),
  },
  {
    id: 2,
    name: "Matt Riggs",
    image: smilemidle,
    review: (
      <>
        Great overall{" "}
        <span className="text-[#5EE7BC] font-semibold">care</span>,
        understanding of concerns and resolution. Super{" "}
        <span className="text-[#5EE7BC] font-semibold">friendly</span> and{" "}
        <span className="text-[#5EE7BC] font-semibold">knowledgeable</span>.
        Highly recommend!
      </>
    ),
  },
  {
    id: 3,
    name: "Allyson Stone",
    image: smilemidle,
    review: (
      <>
        I stopped in as a walk-in for{" "}
        <span className="text-[#5EE7BC] font-semibold">
          ear wax removal
        </span>{" "}
        and was pleasantly surprised by how{" "}
        <span className="text-[#5EE7BC] font-semibold">smooth</span> the
        process was.
      </>
    ),
  },
  {
    id: 4,
    name: "John Smith",
    image: smilewomen,
    review: (
      <>
        <span className="text-[#5EE7BC] font-semibold">
          Fantastic service
        </span>{" "}
        and very{" "}
        <span className="text-[#5EE7BC] font-semibold">
          professional team
        </span>
        . Highly recommended.
      </>
    ),
  },
];

    const sliderRef = useRef();

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -400,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 400,
            behavior: "smooth",
        });
    };

    return (
        <section className="max-w-[1440px] mx-auto px-4 py-20 bg-[#F5F7F8]">

            {/* Header */}
            <div className="text-center">

                <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border rounded-full shadow-sm">
                    <div className="flex justify-center gap-1">
                        <FaStar className="text-[#5EE7BC] text-xl" />
                        <FaStar className="text-[#5EE7BC] text-xl" />
                        <FaStar className="text-[#5EE7BC] text-xl" />
                        <FaStar className="text-[#5EE7BC] text-xl" />
                        <FaStar className="text-[#5EE7BC] text-xl" />
                    </div>

                    <span className="font-medium">
                        5.0 Star Rating on Google From 400+ Patients
                    </span>
                </div>

                <div className="flex justify-center mt-6 -space-x-3">
                    <img src={smilemidle} className="w-12 h-12 rounded-full border-2 border-white" />
                    <img src={smilewomen} className="w-12 h-12 rounded-full border-2 border-white" />
                    <img src={blckwomen} className="w-12 h-12 rounded-full border-2 border-white" />
                    <img src={smilemidle} className="w-12 h-12 rounded-full border-2 border-white" />
                </div>

                <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                    What Our Patients Say
                </h2>

                <p className="max-w-3xl mx-auto mt-6 text-gray-600">
                    Discover what our patients are saying about their experience.
                </p>
            </div>

            {/* Navigation */}
          

            {/* Cards */}
           <div className="relative mt-10">

  {/* Left Button */}
  <button
    onClick={scrollLeft}
    className="
      absolute
      left-0
      top-1/2
      -translate-y-1/2
      z-10
      bg-white
      shadow-lg
      w-12
      h-12
      rounded-full
      flex
      items-center
      justify-center
      text-[#003E8A]
      text-2xl
    "
  >
    ❮
  </button>

  {/* Cards */}
  <div
    ref={sliderRef}
    className="
      flex
      gap-6
      overflow-x-auto
      scroll-smooth
      scrollbar-hide
      px-16
      pb-4
    "
  >
    {testimonials.map((item) => (
      <div
        key={item.id}
        className="
          min-w-[300px]
          max-w-[300px]
          bg-white
          rounded-2xl
          border
          border-[#7EE8C6]
          p-6
          shadow-md
          flex-shrink-0
        "
      >
        <div className="flex flex-col items-center">

          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 rounded-full object-cover"
          />

          {/* Stars */}
          <div className="flex justify-center gap-1">
                        <FaStar className="text-[#5EE7BC] text-xl" />
                        <FaStar className="text-[#5EE7BC] text-xl" />
                        <FaStar className="text-[#5EE7BC] text-xl" />
                        <FaStar className="text-[#5EE7BC] text-xl" />
                        <FaStar className="text-[#5EE7BC] text-xl" />
                    </div>

          <h3 className="mt-3 text-[#003E8A] font-bold text-lg">
            {item.name}
          </h3>

          <p className="mt-4 text-center text-gray-600 leading-7">
            {item.review}
          </p>

        </div>
      </div>
    ))}
  </div>

  {/* Right Button */}
  <button
    onClick={scrollRight}
    className="
      absolute
      right-0
      top-1/2
      -translate-y-1/2
      z-10
      bg-white
      shadow-lg
      w-12
      h-12
      rounded-full
      flex
      items-center
      justify-center
      text-[#003E8A]
      text-2xl
    "
  >
    ❯
  </button>

</div>  

        </section>
    );
};

export default TestimonialSection;