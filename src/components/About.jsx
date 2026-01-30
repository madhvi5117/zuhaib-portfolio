import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import aboutImg from "../assets/images/desk-night.jpg";

export default function About() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /* ---------- animations ---------- */

  // image parallax
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  // accent divider grow
  const dividerWidth = useTransform(
    scrollYProgress,
    [0.3, 0.6],
    ["0%", "100%"]
  );

  // text highlight reveal
  const highlightX = useTransform(
    scrollYProgress,
    [0.3, 0.6],
    ["-100%", "0%"]
  );

  return (
    <section
      ref={ref}
      style={{
        minHeight: "110vh",
        background:
          "linear-gradient(180deg, #2b2e34 0%, #181a1f 100%)",
        display: "flex",
        alignItems: "center",
        padding: "0 8vw",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          maxWidth: "1200px",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        {/* ---------- LEFT CONTENT ---------- */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              letterSpacing: "1px",
              opacity: 0.6,
              marginBottom: "12px",
            }}
          >
            ABOUT
          </motion.p>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "44px",
              lineHeight: 1.15,
              marginBottom: "16px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            I focus on logic,
            <br />
            not just visuals.
            {/* text highlight */}
            <motion.span
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, transparent, rgba(230,255,63,0.35), transparent)",
                x: highlightX,
              }}
            />
          </motion.h2>

          {/* DIVIDER */}
          <motion.div
            style={{
              height: "3px",
              width: dividerWidth,
              background: "#e6ff3f",
              borderRadius: "2px",
              marginBottom: "22px",
            }}
          />

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              lineHeight: 1.7,
              opacity: 0.8,
              maxWidth: "440px",
            }}
          >
            I’m a backend developer who enjoys building systems that stay
            invisible but reliable. From APIs to databases, I care about
            performance, scalability, and clean architecture.
          </motion.p>
        </div>

        {/* ---------- RIGHT IMAGE ---------- */}
        <motion.div
          style={{
            y: imageY,
            perspective: "1200px",
          }}
          whileHover={{
            rotateX: 6,
            rotateY: -6,
            transition: { duration: 0.4, ease: "easeOut" },
          }}
        >
          {/* glow */}
          <div
            style={{
              position: "absolute",
              inset: "-14px",
              background:
                "radial-gradient(circle, rgba(230,255,63,0.28), transparent 70%)",
              filter: "blur(32px)",
              zIndex: 0,
            }}
          />

          <img
            src={aboutImg}
            alt="About visual"
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              height: "420px",
              objectFit: "cover",
              borderRadius: "28px",
              boxShadow:
                "0 50px 120px rgba(0,0,0,0.6)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
