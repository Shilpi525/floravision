import React from "react";

import plant1 from "../assets/plant1.png";
import plant2 from "../assets/plant2.png";

function Trending() {

  // RESPONSIVE
  const isMobile = window.innerWidth <= 768;

  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",

        // RESPONSIVE PADDING
        padding: isMobile
          ? "70px 20px"
          : "100px 70px",

        position: "relative",
        overflow: "hidden",

        // SAME HERO BACKGROUND
        background:
          "linear-gradient(rgba(4,15,8,0.88), rgba(4,15,8,0.90)), url('https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=1600&auto=format&fit=crop')",

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* GREEN GLOW */}
      <div
        style={{
          position: "absolute",

          width: isMobile ? "350px" : "700px",
          height: isMobile ? "350px" : "700px",

          background: "rgba(70,255,120,0.15)",
          filter: "blur(150px)",
          top: "20%",
          left: "25%",
          zIndex: 0,
        }}
      ></div>

      {/* TITLE */}
      <h1
        style={{
          textAlign: "center",
          color: "white",

          fontSize: isMobile ? "42px" : "70px",

          fontWeight: "700",

          marginBottom: isMobile ? "40px" : "70px",

          position: "relative",
          zIndex: 2,
        }}
      >
        Our Trendy plants
      </h1>

      {/* FIRST CARD */}
      <div
        style={{
          width: "100%",
          minHeight: "380px",
          borderRadius: "45px",

          padding: isMobile ? "30px 20px" : "40px",

          marginBottom: "60px",

          background: "rgba(255,255,255,0.07)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.15)",

          display: "flex",

          // RESPONSIVE
          flexDirection: isMobile ? "column" : "row",

          alignItems: "center",
          justifyContent: "space-between",

          gap: isMobile ? "30px" : "0px",

          position: "relative",
          zIndex: 2,
        }}
      >
        {/* IMAGE */}
        <div
          style={{
            width: isMobile ? "100%" : "40%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={plant1}
            alt=""
            style={{
              width: isMobile ? "220px" : "320px",

              objectFit: "contain",
              transition: "0.4s",
              cursor: "pointer",
              filter: "drop-shadow(0 0 30px rgba(80,255,120,0.3))",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          />
        </div>

        {/* CONTENT */}
        <div
          style={{
            width: isMobile ? "100%" : "48%",
            color: "white",

            textAlign: isMobile ? "center" : "left",
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? "36px" : "60px",

              lineHeight: isMobile ? "42px" : "65px",

              marginBottom: "25px",
              fontWeight: "700",
            }}
          >
            For Your Desks Decorations
          </h2>

          <p
            style={{
              fontSize: isMobile ? "16px" : "20px",

              lineHeight: isMobile ? "28px" : "34px",

              color: "#d9d9d9",
              marginBottom: "30px",
            }}
          >
            I recently added a beautiful desk decoration plant to my workspace,
            and it has made such a positive difference!
          </p>

          <h3
            style={{
              fontSize: isMobile ? "36px" : "55px",

              marginBottom: "30px",
              fontWeight: "700",
            }}
          >
            Rs. 599/-
          </h3>

          <div
            style={{
              display: "flex",

              justifyContent: isMobile
                ? "center"
                : "flex-start",

              gap: "20px",
              alignItems: "center",
            }}
          >
            <button
              style={{
                padding: isMobile
                  ? "14px 28px"
                  : "16px 40px",

                borderRadius: "16px",
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
              Explore
            </button>

            <button
              style={{
                width: isMobile ? "52px" : "58px",
                height: isMobile ? "52px" : "58px",

                borderRadius: "14px",
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
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "white";
              }}
            >
              <i className="ri-shopping-bag-line"></i>
            </button>
          </div>
        </div>
      </div>

      {/* SECOND CARD */}
      <div
        style={{
          width: "100%",
          minHeight: "380px",
          borderRadius: "45px",

          padding: isMobile ? "30px 20px" : "40px",

          background: "rgba(255,255,255,0.07)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.15)",

          display: "flex",

          // RESPONSIVE
          flexDirection: isMobile
            ? "column"
            : "row-reverse",

          alignItems: "center",
          justifyContent: "space-between",

          gap: isMobile ? "30px" : "0px",

          position: "relative",
          zIndex: 2,
        }}
      >
        {/* IMAGE */}
        <div
          style={{
            width: isMobile ? "100%" : "40%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={plant2}
            alt=""
            style={{
              width: isMobile ? "220px" : "300px",

              objectFit: "contain",
              transition: "0.4s",
              cursor: "pointer",
              filter: "drop-shadow(0 0 30px rgba(80,255,120,0.3))",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          />
        </div>

        {/* CONTENT */}
        <div
          style={{
            width: isMobile ? "100%" : "48%",
            color: "white",

            textAlign: isMobile ? "center" : "left",
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? "36px" : "60px",

              lineHeight: isMobile ? "42px" : "65px",

              marginBottom: "25px",
              fontWeight: "700",
            }}
          >
            For Your Desks Decorations
          </h2>

          <p
            style={{
              fontSize: isMobile ? "16px" : "20px",

              lineHeight: isMobile ? "28px" : "34px",

              color: "#d9d9d9",
              marginBottom: "30px",
            }}
          >
            The greenery adds a touch of nature and serenity to my desk,
            making it feel more inviting and calming.
          </p>

          <h3
            style={{
              fontSize: isMobile ? "36px" : "55px",

              marginBottom: "30px",
              fontWeight: "700",
            }}
          >
            Rs. 399/-
          </h3>

          <div
            style={{
              display: "flex",

              justifyContent: isMobile
                ? "center"
                : "flex-start",

              gap: "20px",
              alignItems: "center",
            }}
          >
            <button
              style={{
                padding: isMobile
                  ? "14px 28px"
                  : "16px 40px",

                borderRadius: "16px",
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
              Explore
            </button>

            <button
              style={{
                width: isMobile ? "52px" : "58px",
                height: isMobile ? "52px" : "58px",

                borderRadius: "14px",
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
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "white";
              }}
            >
             <i className="ri-shopping-bag-line"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trending;