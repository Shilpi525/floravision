import { useEffect, useState } from "react";
import {
  Play,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

import plant1 from "../assets/plant1.png";
import plant2 from "../assets/plant2.png";
import plant3 from "../assets/Hero.png";

function Hero() {

  // RESPONSIVE
  const isMobile = window.innerWidth <= 768;

  // ALL SLIDER IMAGES
  const plants = [
    {
      image: plant1,
      title: "Aglaonema plant",
    },
    {
      image: plant2,
      title: "Indoor Green plant",
    },
    {
      image: plant3,
      title: "Natural Fresh plant",
    },
  ];

  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % plants.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // NEXT SLIDE
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % plants.length);
  };

  // PREV SLIDE
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? plants.length - 1 : prev - 1
    );
  };

  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",

        // RESPONSIVE PADDING
        padding: isMobile
          ? "120px 20px 50px"
          : "140px 70px 60px",

        background:
          "linear-gradient(rgba(4,15,8,0.82), rgba(4,15,8,0.88)), url('https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=1600&auto=format&fit=crop')",

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* GREEN GLOW */}
      <div
        style={{
          position: "absolute",
          width: isMobile ? "350px" : "700px",
          height: isMobile ? "350px" : "700px",
          background: "rgba(70,255,120,0.18)",
          filter: "blur(140px)",
          left: "20%",
          top: "20%",
          zIndex: 0,
        }}
      ></div>

      {/* MAIN CONTENT */}
      <div
        style={{
          display: "flex",

          // RESPONSIVE FLEX
          flexDirection: isMobile ? "column" : "row",

          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          zIndex: 10,

          gap: isMobile ? "50px" : "0px",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            width: isMobile ? "100%" : "58%",
            color: "white",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "58px" : "110px",
              lineHeight: isMobile ? "65px" : "105px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Earth’s Exhale
          </h1>

          <p
            style={{
              fontSize: isMobile ? "16px" : "21px",
              lineHeight: isMobile ? "30px" : "38px",
              color: "#e0e0e0",
              width: isMobile ? "100%" : "85%",
              marginBottom: "35px",
            }}
          >
            "Earth Exhale" symbolizes the purity and vitality of the Earth's
            natural environment and its essential role in sustaining life.
          </p>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              justifyContent: isMobile ? "center" : "flex-start",
              gap: "20px",
              marginBottom: "60px",
            }}
          >
            {/* BUY BUTTON */}
            <button
              style={{
                padding: isMobile
                  ? "14px 30px"
                  : "16px 42px",

                borderRadius: "16px",
                border: "2px solid rgba(255,255,255,0.7)",
                background: "transparent",
                color: "white",

                fontSize: isMobile ? "18px" : "24px",

                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "white";
                e.target.style.color = "black";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "white";
                e.target.style.transform = "scale(1)";
              }}
            >
              Buy Now
            </button>

            {/* PLAY BUTTON */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: isMobile ? "58px" : "70px",
                  height: isMobile ? "58px" : "70px",
                  borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "white";
                  e.currentTarget.style.transform = "scale(1.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <Play
                  size={isMobile ? 22 : 28}
                  fill="white"
                />
              </div>

              <span
                style={{
                  fontSize: isMobile ? "18px" : "24px",
                  color: "white",
                }}
              >
                Live Demo....
              </span>
            </div>
          </div>

          {/* REVIEW CARD */}
          <div
            style={{
              width: isMobile ? "100%" : "380px",

              padding: isMobile ? "20px" : "25px",

              borderRadius: "35px",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(255,255,255,0.18)",
              transition: "0.3s",

              margin: isMobile ? "0 auto" : "0",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-8px)";

              e.currentTarget.style.background =
                "rgba(255,255,255,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0px)";

              e.currentTarget.style.background =
                "rgba(255,255,255,0.08)";
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "18px",
              }}
            >
              <img
                src="https://randomuser.me/api/portraits/women/79.jpg"
                alt="Indoor Plant"
                style={{
                  width: isMobile ? "50px" : "60px",
                  height: isMobile ? "50px" : "60px",
                  borderRadius: "50%",
                }}
              />

              <div>
                <h3
                  style={{
                    color: "white",
                    fontSize: isMobile ? "22px" : "28px",
                    marginBottom: "5px",
                  }}
                >
                  Ronnie Hamill
                </h3>

                <p
                  style={{
                    color: "#ffe66d",
                    fontSize: isMobile ? "16px" : "18px",
                  }}
                >
                  ★★★★★
                </p>
              </div>
            </div>

            <p
              style={{
                color: "#e5e5e5",
                lineHeight: isMobile ? "28px" : "32px",
                fontSize: isMobile ? "16px" : "19px",
              }}
            >
              I can't express how thrilled I am with my new natural plants!
              They bring such a fresh and vibrant energy to my home.
            </p>
          </div>
        </div>

        {/* RIGHT SLIDER CARD */}
        <div
          style={{
            width: isMobile ? "100%" : "360px",

            padding: isMobile ? "20px" : "28px",

            borderRadius: "45px",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.18)",
            color: "white",
            position: "relative",
            overflow: "hidden",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              "translateY(-10px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              "translateY(0px)";
          }}
        >
          {/* IMAGE */}
          <img
            src={plants[current].image}
            alt="Plants"
            style={{
              width: "100%",
              height: isMobile ? "250px" : "330px",
              objectFit: "contain",
              marginBottom: "15px",
              transition: "0.5s",
            }}
          />

          <p
            style={{
              fontSize: isMobile ? "16px" : "18px",
              color: "#d9d9d9",
              marginBottom: "10px",
            }}
          >
            Indoor Plant
          </p>

          <h2
            style={{
              fontSize: isMobile ? "36px" : "50px",
              lineHeight: isMobile ? "42px" : "56px",
              fontWeight: "500",
              marginBottom: "25px",
            }}
          >
            {plants[current].title}
          </h2>

          {/* BUTTON + ARROW */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button
              style={{
                padding: isMobile
                  ? "12px 25px"
                  : "15px 35px",

                borderRadius: "15px",
                border: "2px solid rgba(255,255,255,0.7)",
                background: "transparent",
                color: "white",

                fontSize: isMobile ? "18px" : "22px",

                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "white";
                e.target.style.color = "black";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "white";
                e.target.style.transform = "scale(1)";
              }}
            >
              Buy Now
            </button>

            <ChevronRight
              size={isMobile ? 28 : 34}
              style={{
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform =
                  "translateX(6px)";

                e.target.style.color = "#9dff9d";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform =
                  "translateX(0px)";

                e.target.style.color = "white";
              }}
            />
          </div>

          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            style={{
              position: "absolute",
              top: "45%",
              left: "10px",

              width: isMobile ? "36px" : "42px",
              height: isMobile ? "36px" : "42px",

              borderRadius: "50%",
              border: "none",
              background: "rgba(255,255,255,0.2)",
              color: "white",
              cursor: "pointer",
              backdropFilter: "blur(10px)",
            }}
          >
            <ChevronLeft size={isMobile ? 18 : 22} />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            style={{
              position: "absolute",
              top: "45%",
              right: "10px",

              width: isMobile ? "36px" : "42px",
              height: isMobile ? "36px" : "42px",

              borderRadius: "50%",
              border: "none",
              background: "rgba(255,255,255,0.2)",
              color: "white",
              cursor: "pointer",
              backdropFilter: "blur(10px)",
            }}
          >
            <ChevronRight size={isMobile ? 18 : 22} />
          </button>

          {/* DOTS */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginTop: "30px",
            }}
          >
            {plants.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrent(index)}
                style={{
                  width: current === index ? "26px" : "8px",
                  height: "8px",
                  borderRadius: "20px",
                  background: "white",
                  opacity: current === index ? "1" : "0.5",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;