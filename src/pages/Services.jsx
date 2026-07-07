import wave from "../assets/wave.png"
import img1 from "../assets/listenm1.png"
import img2 from "../assets/listitem2.png"
import img3 from "../assets/listem3.png"
import img4 from "../assets/listitem4.png"
import img5 from "../assets/listitem.png"
import img6 from "../assets/listitem6.png"

const Services = () => {
    const servicesData = {
        badge: "OUR SERVICES",
        title: "Why Choose Earwax Specialist?",
        description:
            "From comprehensive hearing evaluations to advanced hearing aid fittings and treatment, our team delivers expert care tailored to your unique hearing needs.",

        bgImage: wave,

        cards: [
            {
                image: img1,
                title: "Live video endoscopic procedures",
            },
            {
                image: img2,
                title: "30 years of audiology experience",
            },
            {
                image: img3,
                title: "Same day ear wax removal appointments available",
            },
            {
                image: img4,
                title: "Hearing aids, Tinnitus rehabilitation. Balance testing",
            },
            {
                image: img5,
                title:
                    "ENT grade diagnostic test battery to diagnose ear related pathologies",
            },
            {
                image: img6,
                title:
                    "Supply you with a video of earwax procedure supplied",
            },
        ],
    }

    return (
        <>
        
        <section className="relative w-full max-w-[1440px] min-h-[1233px] mx-auto bg-white overflow-hidden">

            {/* Background Image */}
            <img
                src={servicesData.bgImage}
                alt=""
                className="
    absolute
    top-[100px]
    md:top-[80px]
    lg:top-[20px]
    left-0
    w-full
    h-auto
    object-contain
    opacity-30
    pointer-events-none
    z-0
  "
            />

            <div className="relative z-10 px-4 md:px-8 lg:px-16 py-16">

                {/* Header */}
                <div className="max-w-[650px]">
                    <span className="inline-flex items-center px-4 py-2 rounded-full border bg-white text-[#0057B8] text-xs font-semibold shadow-sm">
                        {servicesData.badge}
                    </span>

                    <h2 className="mt-6 text-4xl md:text-5xl font-bold text-black leading-tight">
                        {servicesData.title}
                    </h2>

                    <p className="mt-5 text-gray-700 text-lg leading-relaxed">
                        {servicesData.description}
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {servicesData.cards.map((card, index) => (
                        <div
                            key={index}
                            className="
                relative
                overflow-hidden
                rounded-[20px]
                group
                h-[260px]
                md:h-[320px]
              "
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            <h3
                                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  text-white
                  text-lg
                  md:text-2xl
                  font-semibold
                  leading-tight
                "
                            >
                                {card.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        </>
    );

};

export default Services;