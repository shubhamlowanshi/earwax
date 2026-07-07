import sectionImage from "../assets/whychoose.png";
import v from '../assets/Vector.png'
import v1 from '../assets/vector1.png'
import v2 from '../assets/vector2.png'
const WhyChooseUs = () => {
    const careFeatures = {
        badge: "WHY PATIENTS CHOOSE US",
        title: "A Different Approach to Hearing and Tinnitus Care",
        description:
            "At Ears4U, we take the time to understand your hearing concerns before recommending a solution. Our Doctors of Audiology follow best practice protocols, including Real Ear Measurements, to make sure your hearing aids are properly fitted and verified. Whether you're dealing with hearing loss, tinnitus, or sound sensitivity, we build a care plan around your specific needs.",

        cards: [
            {
                title: "Evidence-Based Best Practice Hearing Care for All Patients",
                description:
                    "We follow best practice protocols that only about 20% of hearing providers use, giving you confidence that your care is backed by the highest standards in audiology.",
                icon: v,
            },
            {
                title: "Specialized Tinnitus and Sound Sensitivity Care",
                description:
                    "From education-based tinnitus management and Lenire treatment to hyperacusis and misophonia care, we help patients find relief beyond basic techniques.",
                icon: v1,
            },
            {
                title: "The Latest in Modern Hearing Technology and Treatment",
                description:
                    "We work with brands like Oticon, Starkey, Phonak, ReSound, Widex, and Signia to find the best fit for your lifestyle and hearing needs.",
                icon: v2,
            },
        ],
    }

    return (
        <section className="bg-[#F3F5F7] py-16 lg:py-24 max-w-[1440px] mx-auto px-4 py-16">
            <div className="w-full max-w-[1440px] min-h-[1116px] mx-auto">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto">

                    <span className="inline-block px-4 py-2 rounded-full border border-gray-300 text-xs font-semibold text-blue-700 bg-white">
                        {careFeatures.badge}
                    </span>

                    <h2 className="mt-6 text-3xl md:text-5xl font-bold text-black leading-tight">
                        {careFeatures.title}
                    </h2>

                    <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
                        {careFeatures.description}
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-14 bg-white rounded-[30px] overflow-hidden shadow-lg">

                    <div className="grid lg:grid-cols-4">

                        {/* Image */}
                        <div className="h-[300px] lg:h-auto">
                            <img
                                src={sectionImage}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Feature Cards */}
                        {careFeatures.cards.map((card, index) => (
                            <div
                                key={index}
                                className="p-8 border-t lg:border-t-0 lg:border-l border-gray-200"
                            >
                                <div className="w-14 h-14 rounded-full bg-[#5EE7BC]/20 flex items-center justify-center">
                                    <img
                                        src={card.icon}
                                        alt=""
                                        className="w-7 h-7 object-contain"
                                    />
                                </div>

                                <h3 className="mt-6 text-2xl font-semibold leading-snug">
                                    {card.title}
                                </h3>

                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="flex justify-center mt-10">
                    <button className="bg-[#5EE7BC] hover:bg-[#4fd4aa] transition-all text-white font-semibold px-8 py-4 rounded-xl shadow-md">
                        Schedule an Appointment
                    </button>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;