import { motion } from "framer-motion";
import profile from "../assets/images/profile.jpg";

export default function Hero() {
  const isMobile = window.innerWidth < 768;

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#2b2e34",
        padding: "120px 0",
      }}
    >
      <div
        style={{
          background: "#1f2126",
          borderRadius: "32px",
          padding: isMobile ? "48px 24px" : "64px 72px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr auto 1fr",
          alignItems: "center",
          gap: isMobile ? "32px" : "56px",
          maxWidth: "1200px",
          width: "100%",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        {/* LEFT */}
        <div>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              opacity: 0.6,
              marginBottom: "8px",
              letterSpacing: "1.2px",
            }}
          >
            ZUHAIB KHAN
          </p>

          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: isMobile ? "48px" : "88px",
              margin: 0,
              whiteSpace: "nowrap",
              transform: isMobile ? "none" : "translateX(-120px)",
            }}
          >
            BACKEND
          </h1>
        </div>

        {/* IMAGE */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            transform: isMobile ? "none" : "translateX(-100px)",
          }}
        >
          <motion.img
            src={profile}
            alt="Zuhaib Khan"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              width: "260px",
              height: "380px",
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "0 40px 120px rgba(0,0,0,0.55)",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: "-32px",
              bottom: "24px",
              background: "#e6ff3f",
              color: "#000",
              fontSize: "12px",
              padding: "6px 12px",
              borderRadius: "999px",
              fontWeight: 600,
              transform: "rotate(-8deg)",
            }}
          >
            HI
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: isMobile ? "48px" : "88px",
              margin: 0,
              whiteSpace: "nowrap",
              transform: isMobile ? "none" : "translateX(-60px)",
            }}
          >
            DEVELOPER
          </h1>

          <p
            style={{
              marginTop: "14px",
              maxWidth: "320px",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              opacity: 0.65,
              letterSpacing: "1.2px",
              transform: isMobile ? "none" : "translateX(-60px)",
            }}
          >
            Backend developer focused on scalable systems, clean APIs,
            and performance-driven architectures.
          </p>
        </div>
      </div>
    </section>
  );
}
