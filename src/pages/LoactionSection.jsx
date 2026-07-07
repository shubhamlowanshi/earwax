import mapBg from "../assets/location.png";
import { CalendarDays } from "lucide-react";
const LocationsSection = () => {
  return (
    <section className="relative overflow-hidden  mt-10">

      <div className="max-w-[1440px] min-h-[600px] mx-auto relative">

        {/* Map Background */}
        <img
          src={mapBg}
          alt=""
          className="
             absolute
    right-0
    top-0
    h-full
    w-auto
    object-contain
    opacity-100
    pointer-events-none
          "
        />

        {/* Content */}
        <div className="grid lg:grid-cols-2 min-h-[600px]">

          {/* Left Side */}
          <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 z-10">

            <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight">
              Earwax Removal
              <br />
              Locations
            </h2>

            <p className="mt-6 text-white/90 text-lg leading-relaxed max-w-[520px]">
              At Ear Wax Specialist, If You Are Searching
              For Ear Syringing Service We Want To Make
              It Easy For You To Get In Contact With Us
            </p>

            <button
              className="
    mt-8
    w-fit
    bg-[#5EE7BC]
    hover:bg-[#4cd7aa]
    text-white
    px-8
    py-4
    rounded-xl
    font-medium
    shadow-lg
    flex
    items-center
    gap-3
  "
            >
              <CalendarDays size={20} />
              Book Your Appointment
            </button>

          </div>

          {/* Right Side */}
          <div className="relative hidden lg:block">

            {/* Top Circle */}



          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;