import React from "react";

const reviews = [
    {
        id: 1,
        name: "Shelly Russel",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
        review:
            "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!",
    },

    {
        id: 2,
        name: "Lula Rolfson",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
        review:
            "Each one has its own unique charm and personality, and they’ve already started brightening up my space.",
    },

    {
        id: 3,
        name: "Carol Huels",
        image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
        review:
            "It’s like bringing a little piece of nature indoors. Definitely worth the investment!",
    },
];

function Review() {

    // RESPONSIVE
    const isMobile = window.innerWidth <= 768;

    return (
        <section
            className="w-full text-white bg-cover bg-center bg-no-repeat relative overflow-hidden"
            style={{
                padding: isMobile
                    ? "70px 20px"
                    : "100px 70px",

                background:
                    "linear-gradient(rgba(6,25,10,0.88), rgba(6,25,10,0.92)), url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop')",
            }}
        >

            {/* Heading */}
            <div
                className="flex justify-center"
                style={{
                    marginBottom: isMobile
                        ? "50px"
                        : "80px",
                }}
            >
                <h2
                    className="font-bold border border-lime-400/40 rounded-2xl backdrop-blur-md bg-white/5 text-center"
                    style={{
                        fontSize: isMobile
                            ? "34px"
                            : "52px",

                        padding: isMobile
                            ? "14px 20px"
                            : "12px 40px",

                        lineHeight: isMobile
                            ? "45px"
                            : "normal",
                    }}
                >
                    Customer Review
                </h2>
            </div>

            {/* GREEN GLOW */}
            <div
                className="absolute top-32 left-1/2 -translate-x-1/2 bg-green-500/10 blur-[140px] rounded-full"
                style={{
                    width: isMobile
                        ? "280px"
                        : "500px",

                    height: isMobile
                        ? "280px"
                        : "500px",
                }}
            ></div>

            {/* CARDS */}
            <div
                className="relative z-10 grid"
                style={{
                    gridTemplateColumns: isMobile
                        ? "1fr"
                        : "repeat(3, 1fr)",

                    gap: isMobile
                        ? "25px"
                        : "40px",
                }}
            >
                {reviews.map((item) => (
                    <div
                        key={item.id}
                        className="
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              hover:scale-105
              hover:border-lime-300/30
              transition-all
              duration-500
              shadow-[0_0_40px_rgba(0,0,0,0.25)]
            "
                        style={{
                            borderRadius: isMobile
                                ? "30px"
                                : "40px",

                            padding: isMobile
                                ? "24px"
                                : "32px",
                        }}
                    >
                        {/* PROFILE */}
                        <div
                            className="flex items-center"
                            style={{
                                gap: isMobile
                                    ? "12px"
                                    : "16px",

                                marginBottom: isMobile
                                    ? "20px"
                                    : "24px",
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="rounded-full object-cover border-2 border-lime-300"
                                style={{
                                    width: isMobile
                                        ? "58px"
                                        : "64px",

                                    height: isMobile
                                        ? "58px"
                                        : "64px",
                                }}
                            />

                            <div>
                                <h3
                                    className="font-semibold"
                                    style={{
                                        fontSize: isMobile
                                            ? "22px"
                                            : "28px",
                                    }}
                                >
                                    {item.name}
                                </h3>

                                <div
                                    className="flex text-yellow-400 mt-1"
                                    style={{
                                        fontSize: isMobile
                                            ? "16px"
                                            : "18px",
                                    }}
                                >
                                    ★ ★ ★ ★ ★
                                </div>
                            </div>
                        </div>

                        {/* REVIEW */}
                        <p
                            className="text-gray-200"
                            style={{
                                lineHeight: isMobile
                                    ? "30px"
                                    : "32px",

                                fontSize: isMobile
                                    ? "16px"
                                    : "18px",
                            }}
                        >
                            {item.review}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Review;