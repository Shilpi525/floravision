import { useState } from "react";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";

function Navbar() {

  // RESPONSIVE
  const isMobile = window.innerWidth <= 768;

  // MOBILE MENU
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          padding: isMobile
            ? "20px 20px"
            : "25px 70px",

          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1000,
          background: "transparent",
          boxSizing: "border-box",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: isMobile ? "8px" : "12px",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/628/628324.png"
            alt="logo"
            style={{
              width: isMobile ? "34px" : "42px",
              height: isMobile ? "34px" : "42px",
            }}
          />

          <h1
            style={{
              color: "white",
              fontSize: isMobile ? "22px" : "30px",
              fontWeight: "700",
              margin: 0,
              whiteSpace: "nowrap",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#9dff9d";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "white";
            }}
          >
            FloraVision.
          </h1>
        </div>

        {/* DESKTOP MENU */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "42px",
            }}
          >
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "17px",
                fontWeight: "500",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#9dff9d";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "white";
              }}
            >
              Home
            </a>

            {/* DROPDOWN */}
            <select
              style={{
                background: "transparent",
                color: "white",
                border: "none",
                outline: "none",
                fontSize: "17px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              <option style={{ color: "black" }}>
                Plants Type
              </option>

              <option style={{ color: "black" }}>
                Indoor Plants
              </option>

              <option style={{ color: "black" }}>
                Outdoor Plants
              </option>

              <option style={{ color: "black" }}>
                Air Purifying Plants
              </option>

              <option style={{ color: "black" }}>
                Decorative Plants
              </option>

              <option style={{ color: "black" }}>
                Succulents
              </option>
            </select>

            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "17px",
                fontWeight: "500",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#9dff9d";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "white";
              }}
            >
              More
            </a>

            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "17px",
                fontWeight: "500",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#9dff9d";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "white";
              }}
            >
              Contact
            </a>
          </div>
        )}

        {/* ICONS */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: isMobile ? "12px" : "20px",
            color: "white",
          }}
        >
          <Search
            size={isMobile ? 20 : 24}
            style={{
              cursor: "pointer",
              transition: "0.3s",
            }}
          />

          <ShoppingBag
            size={isMobile ? 20 : 24}
            style={{
              cursor: "pointer",
              transition: "0.3s",
            }}
          />

          {/* MOBILE MENU BUTTON */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(true)}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              <Menu size={28} />
            </button>
          )}
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: menuOpen ? "0" : "-100%",
            width: "280px",
            height: "100vh",

            background: "rgba(7,22,13,0.96)",
            backdropFilter: "blur(20px)",

            zIndex: 2000,

            padding: "30px 25px",

            transition: "0.4s ease",
          }}
        >
          {/* TOP */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "50px",
            }}
          >
            <h2
              style={{
                color: "white",
                fontSize: "26px",
              }}
            >
              Menu
            </h2>

            <button
              onClick={() => setMenuOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              <X size={28} />
            </button>
          </div>

          {/* LINKS */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "28px",
            }}
          >
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "20px",
              }}
            >
              Home
            </a>

            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "20px",
              }}
            >
              Indoor Plants
            </a>

            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "20px",
              }}
            >
              Outdoor Plants
            </a>

            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "20px",
              }}
            >
              Decorative Plants
            </a>

            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "20px",
              }}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;