import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Auth System",
    desc: "JWT auth, roles, permissions",
  },
  {
    title: "API Platform",
    desc: "Scalable REST APIs",
  },
  {
    title: "SaaS Backend",
    desc: "Multi-tenant backend",
  },
  {
    title: "Database Design",
    desc: "Optimized schemas & queries",
  },
];

export default function HorizontalProjects() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section
  ref={sectionRef}
  style={{
    height: window.innerWidth < 768 ? "auto" : "200vh",
    background: "#2b2e34",
    paddingBottom: "80px",
    paddingTop: "120px",
  }}
>

      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <motion.div
  className="stack-mobile"
  style={{
    display: "flex",
    gap: "40px",
    paddingLeft: "10vw",
    x,
  }}
>

          {projects.map((project, i) => (
            <motion.div
  key={i}
  whileHover={{
    y: -8,
    scale: 1.03,
    boxShadow: "0 50px 140px rgba(0,0,0,0.65)",
  }}
  transition={{ type: "spring", stiffness: 220, damping: 26 }}
  style={{
    minWidth: "380px",
    height: "420px",
    background: "#1f2126",
    borderRadius: "28px",
    padding: "40px",
    boxShadow: "0 40px 120px rgba(0,0,0,0.55)",
    cursor: "pointer",
  }}
>

              <h2
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "32px",
                }}
              >
                {project.title}
              </h2>

              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  opacity: 0.7,
                  lineHeight: 1.6,
                }}
              >
                {project.desc}
              </p>

              <span
                style={{
                  fontSize: "13px",
                  opacity: 0.5,
                }}
              >
                View Project →
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
