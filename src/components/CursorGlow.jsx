import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setHover(true);
    const removeHover = () => setHover(false);

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      {/* DOT */}
      <motion.div
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 40,
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#e6ff3f",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />

      {/* GLOW RING */}
      <motion.div
        animate={{
          x: pos.x - 22,
          y: pos.y - 22,
          scale: hover ? 1.8 : 1,
          opacity: hover ? 0.9 : 0.4,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(230,255,63,0.45), transparent 60%)",
          filter: "blur(6px)",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
    </>
  );
}
