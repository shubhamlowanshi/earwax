import heroImage from "../assets/banner.png";
// import hearingAid from "../assets/hearing-aid-device.png";

const BannerSection = () => {
  return (
    <section className="max-w-[1440px] min-h-[406px] mx-auto">

      <div className="relative min-h-[500px] lg:min-h-[406px]">

        {/* Background Image */}
        <img
          src={heroImage}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Faded Left Overlay */}
        <div
          className="
            absolute
            inset-y-0
            left-0
            w-full
            lg:w-[72%]
            bg-[linear-gradient(90deg,#D9DCE8_0%,#D9DCE8_55%,rgba(217,220,232,0.90)_75%,rgba(217,220,232,0)_100%)]
          "
        />

        {/* Content */}
        <div className="relative z-10 h-full">

          <div className="grid lg:grid-cols-2 min-h-[500px] lg:min-h-[406px]">

            {/* Left Side */}
            <div className="flex flex-col justify-center px-6 md:px-10 lg:px-14 py-10">

              <h2
                className="
                  text-[#061A3A]
                  font-bold
                  text-4xl
                  md:text-5xl
                  leading-tight
                  max-w-[520px]
                "
              >
                Your Hearing Is One Of Your Most Valuable Assets.
              </h2>

              <p
                className="
                  mt-4
                  text-[#061A3A]
                  text-lg
                  leading-relaxed
                  max-w-[500px]
                "
              >
                We are the midlands number one ear care provider for
                endoscopic ear wax removal and hearing aids
              </p>

              <button
                className="
                  mt-8
                  w-fit
                  bg-[#004AAD]
                  hover:bg-[#003d8f]
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  font-medium
                  shadow-lg
                  transition-all
                "
              >
                📅 Schedule an Appointment
              </button>

              {/* Hearing Aid Image */}
              
            </div>

            {/* Right Side Empty */}
            <div />
          </div>

        </div>
      </div>
    </section>
  );
};

export default BannerSection;