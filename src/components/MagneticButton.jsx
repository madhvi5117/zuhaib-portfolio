import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticButton({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.25);
    y.set(offsetY * 0.25);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
        padding: "14px 36px",
        borderRadius: "999px",
        background: "#e6ff3f",
        color: "#000",
        border: "none",
        cursor: "pointer",
        fontWeight: 600,
        fontFamily: "Inter, sans-serif",
      }}
    >
      {children}
    </motion.button>
  );
}
