function TopSelling() {

    // RESPONSIVE
    const isMobile = window.innerWidth <= 768;

    const plants = [
        {
            image:
                "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?q=80&w=800&auto=format&fit=crop",
            title: "Aglaonema plant",
            desc: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
            price: "Rs. 300/-",
        },

        {
            image:
                "https://images.unsplash.com/photo-1463154545680-d59320fd685d?q=80&w=800&auto=format&fit=crop",
            title: "Plantain Lilies",
            desc: "Hostas are primarily grown for their lush, decorative leaves.",
            price: "Rs. 380/-",
        },

        {
            image:
                "https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=800&auto=format&fit=crop",
            title: "Cactus",
            desc: "It is known for their ability to thrive in arid environments",
            price: "Rs. 259/-",
        },

        {
            image:
                "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop",
            title: "Swiss cheese Plant",
            desc: "It is a popular tropical houseplant known for its distinctive leaves",
            price: "Rs. 400/-",
        },

        {
            image:
                "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?q=80&w=800&auto=format&fit=crop",
            title: "Sansevieria plant",
            desc: "It is a popular indoor plant admired for its striking appearance.",
            price: "Rs. 450/-",
        },

        {
            image:
                "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=800&auto=format&fit=crop",
            title: "Agave plant",
            desc: "The Agave plant is a genus of succulent plants known for their thick leaves.",
            price: "Rs. 359/-",
        },
    ];

    return (

        <section
            className="relative text-white overflow-hidden"
            style={{
                padding: isMobile
                    ? "70px 20px"
                    : "110px 70px",
            }}
        >

            {/* BACKGROUND BLUR */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#071b0c] via-[#0b220f] to-[#071b0c]"></div>

            {/* TITLE */}
            <div
                className="relative flex justify-center"
                style={{
                    marginBottom: isMobile ? "50px" : "80px",
                }}
            >

                <h1
                    className="font-bold border border-yellow-500/30 rounded-2xl backdrop-blur-md text-center"
                    style={{
                        fontSize: isMobile ? "34px" : "58px",
                        padding: isMobile
                            ? "14px 20px"
                            : "12px 40px",
                        lineHeight: isMobile ? "45px" : "normal",
                    }}
                >
                    Our Top Selling Plants
                </h1>
            </div>

            {/* GRID */}
            <div
                className="relative grid"
                style={{
                    gridTemplateColumns: isMobile
                        ? "1fr"
                        : "repeat(3, 1fr)",

                    gap: isMobile ? "30px" : "56px",
                }}
            >

                {plants.map((item, index) => (

                    <div
                        key={index}
                        className="group relative bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden hover:-translate-y-3 hover:scale-[1.02] duration-500"
                        style={{
                            borderRadius: isMobile
                                ? "35px"
                                : "45px",

                            padding: isMobile
                                ? "25px"
                                : "32px",
                        }}
                    >

                        {/* GLOW */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500 bg-gradient-to-br from-green-500/10 via-transparent to-white/5"></div>

                        {/* IMAGE */}
                        <div className="flex justify-center">

                            <img
                                src={item.image}
                                alt=""
                                className="object-contain drop-shadow-2xl group-hover:scale-110 duration-500"
                                style={{
                                    width: isMobile
                                        ? "200px"
                                        : "240px",

                                    height: isMobile
                                        ? "200px"
                                        : "240px",
                                }}
                            />
                        </div>

                        {/* CONTENT */}
                        <div
                            className="relative z-10"
                            style={{
                                marginTop: isMobile ? "20px" : "25px",
                            }}
                        >

                            <h2
                                className="font-medium"
                                style={{
                                    fontSize: isMobile
                                        ? "28px"
                                        : "34px",

                                    lineHeight: isMobile
                                        ? "36px"
                                        : "42px",
                                }}
                            >
                                {item.title}
                            </h2>

                            <p
                                className="text-white/70"
                                style={{
                                    marginTop: "16px",

                                    fontSize: isMobile
                                        ? "16px"
                                        : "20px",

                                    lineHeight: isMobile
                                        ? "28px"
                                        : "32px",
                                }}
                            >
                                {item.desc}
                            </p>

                            {/* PRICE */}
                            <div
                                className="flex items-center justify-between"
                                style={{
                                    marginTop: isMobile
                                        ? "30px"
                                        : "32px",
                                }}
                            >

                                <h3
                                    className="font-semibold"
                                    style={{
                                        fontSize: isMobile
                                            ? "32px"
                                            : "42px",
                                    }}
                                >
                                    {item.price}
                                </h3>

                                <button
                                    className="border border-white/20 hover:bg-white hover:text-black duration-300"
                                    style={{
                                        width: isMobile
                                            ? "54px"
                                            : "64px",

                                        height: isMobile
                                            ? "54px"
                                            : "64px",

                                        borderRadius: isMobile
                                            ? "18px"
                                            : "24px",

                                        fontSize: isMobile
                                            ? "22px"
                                            : "26px",
                                    }}
                                >
                                    <i className="ri-shopping-bag-line"></i>
                                </button>
                            </div>
                        </div>

                        {/* CARD BLUR EFFECT */}
                        <div className="absolute -top-20 -left-20 w-52 h-52 bg-green-500/10 blur-[100px] rounded-full"></div>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default TopSelling;