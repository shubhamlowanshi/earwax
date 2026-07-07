import React from 'react'
import { FaStar } from "react-icons/fa";
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/img4.png'
import blckwomen from '../assets/blckldy.png'
import smilewomen from '../assets/smile2.png'
import smilemidle from '../assets/smilmidlw.png'
const FirstSection = () => {
    return (
        <section className="bg-gradient-to-r from-blue-900 to-blue-300 min-h-screen">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* Left Content */}
                    <div>
                        <h1 className="text-white font-bold leading-tight
                       text-4xl sm:text-5xl lg:text-6xl">
                            West Midlands Trusted
                            <br />
                            ear wax removal and
                            <br />
                            audiology clinic
                        </h1>

                        <p className="text-white/90 mt-6 text-base sm:text-lg max-w-xl">
                            We're an ear wax removal and audiology clinic operating
                            across the West Midlands, with multiple locations,
                            a 30-year reputation and close to a thousand five-star reviews.
                        </p>

                        {/* Review Card */}
                        <div className="mt-8 bg-white/15 backdrop-blur-md rounded-3xl p-6 max-w-md border border-white/20">

                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    <img
                                        src={blckwomen}
                                        className="w-12 h-12 rounded-full border-2 border-[#5EE7BC]"
                                    />
                                    <img
                                        src={smilemidle}
                                        className="w-12 h-12 rounded-full border-2 border-[#5EE7BC]" />
                                    <img
                                        src={smilewomen}
                                        className="w-12 h-12 rounded-full border-2 border-[#5EE7BC]"
                                    />
                                </div>

                                <div>
                                    <div className="flex gap-1 text-[#5EE7BC] text-xl">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>

                                    <p className="text-white">
                                        From 400+ reviews
                                    </p>
                                </div>
                            </div>

                            <p className="text-white mt-4">
                                Top-rated by West Midlands patients.
                                Book your evaluation today.
                            </p>

                            <button className="mt-6 bg-green-400 hover:bg-green-500 text-white font-semibold px-6 py-4 rounded-xl w-full">
                                Schedule an Appointment
                            </button>
                        </div>
                    </div>

                    {/* Right Images */}
                    <div className="relative">

                        {/* Outer Border Box */}
                        <div className="absolute inset-0 translate-x-4 translate-y-4 border-r border-b border-white/40 rounded-br-[28px]" />

                        {/* Images */}
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <img
                                    src={image2}
                                    className="rounded-3xl h-52 sm:h-64 object-cover w-full"
                                    alt=""
                                />

                                <img
                                    src={image3}
                                    className="rounded-3xl h-40 sm:h-48 object-cover w-full"
                                    alt=""
                                />
                            </div>

                            <img
                                src={image4}
                                className="rounded-3xl h-full min-h-[400px] sm:min-h-[550px] object-cover w-full"
                                alt=""
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default FirstSection