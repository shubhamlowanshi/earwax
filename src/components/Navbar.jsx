import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import icon from '../assets/image1.png'
import FirstSection from "../pages/FirstSection";
import WhyChooseUs from "../pages/WhyChooseUS";
import Services from "../pages/Services";
import HearingAidSection from "../pages/HearingAidData";
import BannerSection from "../pages/BannerSection";
import FAQ from '../pages/FAQ'
import LocationsSection from "../pages/LoactionSection";
import TestimonialSection from "../pages/TestimonialSection";
import Footer from "../pages/Footer";
import CTASection from "../pages/CTASEction";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="w-full  bg-#00468C shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-1">
            <img
              src={icon}
              alt="logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium">
            <a
              href="#"
              className="text-green-500 text-blue-600 transition"
            >
              Home
            </a>

            <div className="flex items-center gap-1 cursor-pointer text-blue-600">
              Hearing Aids
              <ChevronDown size={16} />
            </div>

            <div className="flex items-center gap-1 cursor-pointer text-blue-600">
              Training Academy
              <ChevronDown size={16} />
            </div>

            <div className="flex items-center gap-1 cursor-pointer text-blue-600">
              Locations
              <ChevronDown size={16} />
            </div>

            <div className="flex items-center gap-1 cursor-pointer text-blue-600">
              Contact Us
              <ChevronDown size={16} />
            </div>
          </div>

          {/* Button */}
          <div className="hidden lg:block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
              Schedule Online
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-5">
            <div className="flex flex-col gap-4 font-medium">
              <a href="#" className="text-green-500">
                Home
              </a>

              <a href="#">Hearing Aids</a>

              <a href="#">Training Academy</a>

              <a href="#">Locations</a>

              <a href="#">Contact Us</a>

              <button className="bg-blue-600 text-white py-3 rounded-lg mt-2">
                Schedule Online
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
    <FirstSection/>
    <WhyChooseUs/>
    <Services/>
    <HearingAidSection/>
    <BannerSection/>
    <FAQ/>
    <LocationsSection/>
    <TestimonialSection/>
    
    <Footer/>

   </>
  );
};

export default Navbar;