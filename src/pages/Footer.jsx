import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

import icon from "../assets/image1.png";
import CTASection from "./CTASEction";

const Footer = () => {
  return (
    <div className="relative">

   
    <section className="w-full bg-gradient-to-r from-[#0058B8] to-[#4E8FD5] py-16 ">

      <div className="absolute left-1/2 -translate-x-1/2 -top-20 w-[85%] z-20 ">
    <CTASection />
  </div>

      {/* Footer Card */}
      <div className="bg-gradient-to-r from-[#0058B8] to-[#4E8FD5]  pt-[300px] z-10 mt-20 ">
        <footer className="bg-[#6A96C8]/90 backdrop-blur-sm rounded-[28px] border border-white/30 p-8 md:p-12 text-white shadow-2xl w-[85%] m-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* Left Section */}
            <div>
              <img
                src={icon}
                alt="logo"
                className="h-20 mb-6 brightness-0 invert"
              />

              <div className="flex items-start gap-4 mb-8">
                <img
                  src="/hcpc.png"
                  alt=""
                  className="w-20 bg-white"
                />

                <div className="text-sm">
                  <p>HCPC registration</p>
                  <p>number:</p>
                  <p className="mt-2 font-semibold">
                    HAD00756
                  </p>
                </div>
              </div>

              <h4 className="font-semibold text-lg mb-4">
                Contact Us
              </h4>

              <div className="space-y-1 text-sm">
                <p>Monday to Sunday</p>
                <p>9AM - 5PM</p>
                <p>+0121 369 0780</p>
                <p>info@earwaxspecialist.co.uk</p>
              </div>

              <div className="flex gap-4 mt-6 text-xl">
                <FaFacebookF />
                <FaInstagram />
                <RiTwitterXLine />
                <FaYoutube />
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="font-semibold text-lg mb-5">
                About EarWax
              </h3>

              <ul className="space-y-2 text-sm">
                <li>Home</li>
                <li>About Us</li>
                <li>News & Events</li>
                <li>Home Visit</li>
                <li>Book Appointment</li>
                <li>Find a Clinic</li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-5">
                Services
              </h3>

              <ul className="space-y-2 text-sm">
                <li>Hearing Aid Prices</li>
                <li>Oticon Hearing Aids</li>
                <li>Resound Hearing Aids</li>
                <li>Starkey Hearing Aids</li>
                <li>Phonak Hearing Aids</li>
                <li>Earwax Removal</li>
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-semibold text-lg mb-5">
                Navigation
              </h3>

              <ul className="space-y-2 text-sm">
                <li>Blogs</li>
                <li>Review</li>
                <li>FAQs</li>
                <li>Microsuction Course</li>
                <li>Earwax Removal</li>
                <li>Training</li>
              </ul>
            </div>

            {/* Right */}
            <div className="space-y-10">

              <div>
                <h3 className="font-semibold text-lg mb-5">
                  Location
                </h3>

                <ul className="space-y-2 text-sm">
                  <li>Birmingham</li>
                  <li>Coventry</li>
                  <li>Sutton Coldfield</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-5">
                  Privacy & Legal
                </h3>

                <ul className="space-y-2 text-sm">
                  <li>Privacy Policy</li>
                  <li>Terms of Use</li>
                  <li>SMS Terms</li>
                </ul>
              </div>

            </div>

          </div>
        </footer>

        <p className="text-center text-white text-xs mt-6">
          © 2025 earwaxspecialist. All rights reserved.
        </p>
      </div>

    </section>
     </div>
  );
};

export default Footer;