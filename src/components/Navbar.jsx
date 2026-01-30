import { motion } from "framer-motion";
import { useState } from "react";

const links = ["Home", "Work", "About", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: "28px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        style={{
          background: "rgba(31,33,38,0.9)",
          backdropFilter: "blur(14px)",
          padding: "10px 22px",
          borderRadius: "999px",
          display: "flex",
          gap: "28px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
        }}
      >
        {links.map((link) => (
          <motion.button
            key={link}
            onClick={() => setActive(link)}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              position: "relative",
              background: "transparent",
              border: "none",
              color: active === link ? "#e6ff3f" : "rgba(255,255,255,0.7)",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              cursor: "pointer",
              padding: "6px 2px",
            }}
          >
            {link}

            {/* ACTIVE UNDERLINE */}
            {active === link && (
              <motion.span
                layoutId="nav-underline"
                style={{
                  position: "absolute",
                  bottom: "-6px",
                  left: 0,
                  right: 0,
                  height: "2px",
                  borderRadius: "2px",
                  background: "#e6ff3f",
                }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    </motion.nav>
  );
}
