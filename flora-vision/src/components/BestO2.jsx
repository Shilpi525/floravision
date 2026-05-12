import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        id: 1,
        image:
            "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1200&auto=format&fit=crop",
        title: "We Have Small And Best O2 Plants Collections",
        description:
            "Oxygen-producing plants release oxygen into the atmosphere through photosynthesis. They also help purify indoor air and create a refreshing environment.",
    },

    {
        id: 2,
        image:
            "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop",
        title: "Fresh Indoor Plants For Healthy Living",
        description:
            "Indoor plants help purify the air and create a calm peaceful environment while making your home look beautiful.",
    },

    {
        id: 3,
        image:
            "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=1200&auto=format&fit=crop",
        title: "Natural Plants For Better Atmosphere",
        description:
            "Green plants reduce stress, improve focus, and give your room a modern natural aesthetic look.",
    },
];

function BestO2() {

    // RESPONSIVE
    const isMobile = window.innerWidth <= 768;

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const slider = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(slider);
    }, []);

    return (
        <section
            className="w-full text-white overflow-hidden bg-[#07160d] relative"
            style={{
                padding: isMobile
                    ? "70px 20px"
                    : "100px 70px",
            }}
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,255,124,0.15),transparent_60%)]"></div>

            {/* Heading */}
            <div
                className="flex justify-center relative z-10"
                style={{
                    marginBottom: isMobile
                        ? "50px"
                        : "70px",
                }}
            >
                <h2
                    className="font-bold border border-lime-200/40 rounded-2xl backdrop-blur-md bg-white/5 text-center"
                    style={{
                        fontSize: isMobile
                            ? "34px"
                            : "52px",

                        padding: isMobile
                            ? "14px 20px"
                            : "16px 40px",

                        lineHeight: isMobile
                            ? "45px"
                            : "normal",
                    }}
                >
                    Our Best o2
                </h2>
            </div>

            {/* Slider Card */}
            <div className="max-w-7xl mx-auto relative z-10">

                <div
                    className="relative bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden shadow-[0_0_60px_rgba(0,255,100,0.08)]"
                    style={{
                        minHeight: isMobile
                            ? "auto"
                            : "560px",

                        borderRadius: isMobile
                            ? "30px"
                            : "40px",

                        padding: isMobile
                            ? "35px 20px"
                            : "64px 80px",

                        display: "flex",

                        flexDirection: isMobile
                            ? "column"
                            : "row",

                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >

                    {/* LEFT IMAGE */}
                    <div
                        className="flex justify-center items-center relative"
                        style={{
                            width: isMobile
                                ? "100%"
                                : "50%",
                        }}
                    >

                        {/* Green Glow */}
                        <div
                            className="absolute bg-lime-400/20 blur-3xl rounded-full"
                            style={{
                                width: isMobile
                                    ? "220px"
                                    : "340px",

                                height: isMobile
                                    ? "220px"
                                    : "340px",
                            }}
                        ></div>

                        <img
                            src={slides[current].image}
                            alt=""
                            className="relative z-10 transition-all duration-500 hover:scale-105 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                            style={{
                                width: isMobile
                                    ? "240px"
                                    : "420px",

                                height: isMobile
                                    ? "240px"
                                    : "420px",

                                objectFit: "cover",
                            }}
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div
                        style={{
                            width: isMobile
                                ? "100%"
                                : "50%",

                            marginTop: isMobile
                                ? "40px"
                                : "0px",

                            paddingLeft: isMobile
                                ? "0px"
                                : "60px",

                            textAlign: isMobile
                                ? "center"
                                : "left",
                        }}
                    >
                        <h1
                            className="font-bold leading-tight"
                            style={{
                                fontSize: isMobile
                                    ? "34px"
                                    : "52px",

                                marginBottom: isMobile
                                    ? "25px"
                                    : "32px",
                            }}
                        >
                            {slides[current].title}
                        </h1>

                        <p
                            className="text-gray-300 max-w-xl"
                            style={{
                                fontSize: isMobile
                                    ? "16px"
                                    : "18px",

                                lineHeight: isMobile
                                    ? "30px"
                                    : "36px",

                                marginBottom: isMobile
                                    ? "35px"
                                    : "40px",
                            }}
                        >
                            {slides[current].description}
                        </p>

                        {/* Button */}
                        <button
                            className="border border-white/60 rounded-xl hover:bg-white hover:text-black transition-all duration-300"
                            style={{
                                padding: isMobile
                                    ? "12px 28px"
                                    : "12px 32px",

                                fontSize: isMobile
                                    ? "16px"
                                    : "18px",
                            }}
                        >
                            Explore
                        </button>

                        {/* Controls */}
                        <div
                            className="flex items-center gap-6"
                            style={{
                                marginTop: isMobile
                                    ? "35px"
                                    : "48px",

                                justifyContent: isMobile
                                    ? "center"
                                    : "flex-start",
                            }}
                        >
                            <button
                                onClick={prevSlide}
                                className="rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                                style={{
                                    width: isMobile
                                        ? "44px"
                                        : "48px",

                                    height: isMobile
                                        ? "44px"
                                        : "48px",
                                }}
                            >
                                <ChevronLeft
                                    size={isMobile ? 20 : 22}
                                />
                            </button>

                            <span
                                className="font-semibold"
                                style={{
                                    fontSize: isMobile
                                        ? "16px"
                                        : "18px",
                                }}
                            >
                                0{current + 1}/0{slides.length}
                            </span>

                            <button
                                onClick={nextSlide}
                                className="rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                                style={{
                                    width: isMobile
                                        ? "44px"
                                        : "48px",

                                    height: isMobile
                                        ? "44px"
                                        : "48px",
                                }}
                            >
                                <ChevronRight
                                    size={isMobile ? 20 : 22}
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Dots */}
                <div
                    className="flex justify-center gap-4"
                    style={{
                        marginTop: isMobile
                            ? "35px"
                            : "40px",
                    }}
                >
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`rounded-full transition-all duration-300 ${
                                current === index
                                    ? "bg-white"
                                    : "bg-white/40"
                            }`}
                            style={{
                                width:
                                    current === index
                                        ? (isMobile ? "36px" : "48px")
                                        : (isMobile ? "10px" : "12px"),

                                height: isMobile ? "10px" : "12px",
                            }}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BestO2;