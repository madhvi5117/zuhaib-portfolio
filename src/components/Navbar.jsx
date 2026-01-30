import { motion } from "framer-motion";
import { useState } from "react";

const links = ["Home", "Work", "About", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: "26px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        style={{
          background: "rgba(31,33,38,0.85)",
          backdropFilter: "blur(18px)",
          padding: "12px 26px",
          borderRadius: "999px",
          display: "flex",
          gap: "30px",
          boxShadow:
            "0 25px 70px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.05)",
        }}
      >
        {links.map((link) => (
          <motion.button
            key={link}
            onClick={() => setActive(link)}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            style={{
              position: "relative",
              background: "transparent",
              border: "none",
              color: active === link ? "#e6ff3f" : "rgba(255,255,255,0.7)",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              cursor: "pointer",
              padding: "6px 4px",
              letterSpacing: "0.5px",
            }}
          >
            {link}

            {active === link && (
              <motion.span
                layoutId="nav-underline"
                style={{
                  position: "absolute",
                  bottom: "-8px",
                  left: "10%",
                  right: "10%",
                  height: "2px",
                  borderRadius: "2px",
                  background: "#e6ff3f",
                  boxShadow: "0 0 12px rgba(230,255,63,0.8)",
                }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    </motion.nav>
  );
}
