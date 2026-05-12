import { useState } from "react";

function Footer() {

    // RESPONSIVE
    const isMobile = window.innerWidth <= 768;

    const [hover, setHover] = useState(false);

    return (
        <footer
            style={{
                width: "100%",

                padding: isMobile
                    ? "70px 20px 50px"
                    : "120px 60px 80px",

                background:
                    "radial-gradient(circle at center, rgba(74,222,128,0.22) 0%, rgba(6,27,8,1) 55%, rgba(2,10,4,1) 100%)",

                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* GREEN BLUR */}
            <div
                style={{
                    position: "absolute",

                    width: isMobile
                        ? "260px"
                        : "500px",

                    height: isMobile
                        ? "260px"
                        : "500px",

                    background: "rgba(74,222,128,0.18)",
                    filter: "blur(120px)",
                    top: "-100px",
                    left: "20%",
                    zIndex: "0",
                }}
            ></div>

            <div
                style={{
                    position: "relative",
                    zIndex: "2",

                    display: "flex",

                    // RESPONSIVE
                    flexDirection: isMobile
                        ? "column"
                        : "row",

                    justifyContent: "space-between",

                    gap: isMobile
                        ? "60px"
                        : "80px",

                    flexWrap: "wrap",
                }}
            >
                {/* LEFT */}
                <div
                    style={{
                        width: isMobile
                            ? "100%"
                            : "320px",

                        textAlign: isMobile
                            ? "center"
                            : "left",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",

                            justifyContent: isMobile
                                ? "center"
                                : "flex-start",

                            gap: "12px",

                            marginBottom: isMobile
                                ? "22px"
                                : "28px",
                        }}
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/628/628324.png"
                            alt=""
                            style={{
                                width: isMobile
                                    ? "42px"
                                    : "55px",
                            }}
                        />

                        <h2
                            style={{
                                color: "white",

                                fontSize: isMobile
                                    ? "32px"
                                    : "42px",

                                fontWeight: "700",
                            }}
                        >
                            FloraVision.
                        </h2>
                    </div>

                    <p
                        style={{
                            color: "rgba(255,255,255,0.82)",

                            lineHeight: isMobile
                                ? "32px"
                                : "1.8",

                            fontSize: isMobile
                                ? "17px"
                                : "20px",
                        }}
                    >
                        "From lush indoor greens to vibrant outdoor blooms, our plants are
                        crafted to thrive and elevate your living environment."
                    </p>

                    <div
                        style={{
                            display: "flex",

                            justifyContent: isMobile
                                ? "center"
                                : "flex-start",

                            gap: isMobile
                                ? "25px"
                                : "40px",

                            marginTop: isMobile
                                ? "35px"
                                : "50px",
                        }}
                    >
                        <span
                            style={{
                                color: "white",

                                fontSize: isMobile
                                    ? "22px"
                                    : "28px",

                                fontWeight: "700",
                                cursor: "pointer",
                            }}
                        >
                            FB
                        </span>

                        <span
                            style={{
                                color: "white",

                                fontSize: isMobile
                                    ? "22px"
                                    : "28px",

                                fontWeight: "700",
                                cursor: "pointer",
                            }}
                        >
                            TW
                        </span>

                        <span
                            style={{
                                color: "white",

                                fontSize: isMobile
                                    ? "22px"
                                    : "28px",

                                fontWeight: "700",
                                cursor: "pointer",
                            }}
                        >
                            LI
                        </span>
                    </div>
                </div>

                {/* CENTER */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",

                        alignItems: isMobile
                            ? "center"
                            : "flex-start",

                        textAlign: isMobile
                            ? "center"
                            : "left",

                        gap: "20px",
                    }}
                >
                    <h3
                        style={{
                            color: "white",

                            fontSize: isMobile
                                ? "28px"
                                : "32px",

                            marginBottom: "20px",
                        }}
                    >
                        Quick Link’s
                    </h3>

                    <a
                        href="#"
                        style={{
                            color: "rgba(255,255,255,0.9)",
                            textDecoration: "underline",

                            fontSize: isMobile
                                ? "18px"
                                : "22px",
                        }}
                    >
                        Home
                    </a>

                    <a
                        href="#"
                        style={{
                            color: "rgba(255,255,255,0.9)",
                            textDecoration: "underline",

                            fontSize: isMobile
                                ? "18px"
                                : "22px",
                        }}
                    >
                        Type’s Of plant’s
                    </a>

                    <a
                        href="#"
                        style={{
                            color: "rgba(255,255,255,0.9)",
                            textDecoration: "underline",

                            fontSize: isMobile
                                ? "18px"
                                : "22px",
                        }}
                    >
                        Contact
                    </a>

                    <a
                        href="#"
                        style={{
                            color: "rgba(255,255,255,0.9)",
                            textDecoration: "underline",

                            fontSize: isMobile
                                ? "18px"
                                : "22px",
                        }}
                    >
                        Privacy
                    </a>
                </div>

                {/* RIGHT */}
                <div
                    style={{
                        width: isMobile
                            ? "100%"
                            : "auto",

                        textAlign: isMobile
                            ? "center"
                            : "left",
                    }}
                >
                    <h3
                        style={{
                            color: "white",

                            fontSize: isMobile
                                ? "28px"
                                : "32px",

                            marginBottom: isMobile
                                ? "25px"
                                : "35px",
                        }}
                    >
                        For Every Update.
                    </h3>

                    <div
                        style={{
                            width: isMobile
                                ? "100%"
                                : "420px",

                            height: isMobile
                                ? "60px"
                                : "68px",

                            border:
                                "2px solid rgba(255,255,255,0.6)",

                            borderRadius: "10px",
                            overflow: "hidden",

                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <input
                            type="email"
                            placeholder="Enter Email"
                            style={{
                                flex: 1,
                                height: "100%",
                                background: "transparent",
                                border: "none",
                                outline: "none",
                                color: "white",

                                padding: isMobile
                                    ? "0 14px"
                                    : "0 20px",

                                fontSize: isMobile
                                    ? "15px"
                                    : "18px",
                            }}
                        />

                        <button
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            style={{
                                width: isMobile
                                    ? "120px"
                                    : "150px",

                                height: "100%",
                                border: "none",

                                background: hover
                                    ? "#9eff7a"
                                    : "white",

                                color: "black",
                                fontWeight: "700",
                                cursor: "pointer",

                                transition: "0.4s ease",

                                transform: hover
                                    ? "scale(1.05)"
                                    : "scale(1)",

                                boxShadow: hover
                                    ? "0 0 20px rgba(158,255,122,0.6)"
                                    : "none",

                                fontSize: isMobile
                                    ? "14px"
                                    : "16px",
                            }}
                        >
                            SUBSCRIBE
                        </button>
                    </div>

                    <p
                        style={{
                            color: "rgba(255,255,255,0.8)",

                            marginTop: isMobile
                                ? "45px"
                                : "90px",

                            fontSize: isMobile
                                ? "16px"
                                : "20px",
                        }}
                    >
                        FloraVision © all right reserve
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;