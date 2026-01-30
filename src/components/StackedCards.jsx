import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "Project One",
    desc: "Backend-heavy system with scalable APIs and clean architecture.",
  },
  {
    title: "Project Two",
    desc: "Performance-focused backend with caching and DB optimization.",
  },
  {
    title: "Project Three",
    desc: "Secure backend with auth, authorization, and logging.",
  },
];

export default function StackedCards() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: "200vh",
        background: "#2b2e34",
        paddingTop: "160px",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: "120px",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{
  minWidth: window.innerWidth < 768 ? "90%" : "380px",
  height: "420px",
}}
>
         {cards.map((card, index) => {
  const start = index * 0.25;
  const end = start + 0.25;

  const y = useTransform(
    scrollYProgress,
    [start, end],
    [120, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [start, end],
    [0.9, 1]
  );

  const opacity = useTransform(
    scrollYProgress,
    [start, end],
    [0, 1]
  );

  return (
   <motion.div
  style={{
    display: "flex",
    gap: "40px",
    paddingLeft: "10vw",
    x: window.innerWidth < 768 ? 0 : x, // 👈 disable motion
    flexDirection: window.innerWidth < 768 ? "column" : "row",
    alignItems: window.innerWidth < 768 ? "center" : "flex-start",
  }}
>


      <h2 style={{ marginBottom: "12px" }}>{card.title}</h2>
      <p style={{ opacity: 0.7 }}>{card.desc}</p>
    </motion.div>
  );
})}

        </div>
      </div>
    </section>
  );
}
