import hearingImg from "../assets/whychoose.png";
import { CalendarDays } from "lucide-react";
const CTASection = () => {
  return (
    <section className="overflow-hidden rounded-[24px] shadow-2xl h-[420px] md:h-[500px]">
      <div className="relative h-full w-full">

        {/* Image */}
        <img
          src={hearingImg}
          alt="Hearing Care"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black"></div>

        {/* Content */}
        <div className="absolute right-8 md:right-20 top-1/2 -translate-y-1/2 max-w-md">

          <span className="inline-block px-4 py-1 text-[10px] font-medium text-white bg-white/20 border border-white/20 rounded-full backdrop-blur-sm">
            GET IN TOUCH
          </span>

          <h2 className="mt-6 text-white font-bold text-3xl md:text-5xl leading-tight">
            Take the First
            <br />
            Step Toward
            <br />
            Better Hearing
          </h2>

          <p className="mt-4 text-gray-300 text-sm md:text-base leading-6">
            Contact Nashville and Brentwood's Leading Hearing Aid and
            Tinnitus Centers Today for Your Personalized Hearing Solutions!
          </p>

          <button className="mt-8 bg-[#49E5BE] hover:bg-[#38d4ad] transition-all text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2">
            <span>{CalendarDays}</span>
            Schedule an Appointment
          </button>

        </div>

      </div>
    </section>
  );
};

export default CTASection;