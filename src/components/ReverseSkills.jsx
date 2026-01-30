import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import api from "../assets/images/apidevelopment.jpeg";
import auth from "../assets/images/authentication.jpeg";
import db from "../assets/images/database.jpeg";
import scale from "../assets/images/scalable.jpeg";

const skills = [
  {
    title: "API Development",
    desc: "Clean REST APIs built for scale & performance.",
    image: api,
  },
  {
    title: "Authentication",
    desc: "JWT, OAuth, secure access & role-based systems.",
    image: auth,
  },
  {
    title: "Database Design",
    desc: "Optimized schemas, indexes & complex queries.",
    image: db,
  },
  {
    title: "Scalable Systems",
    desc: "Systems that grow without breaking.",
    image: scale,
  },
];

export default function ReverseSkills() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      style={{
        height: "400vh",
        background: "#2b2e34",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {skills.map((skill, i) => {
          const start = i / skills.length;
          const end = (i + 1) / skills.length;

          // AGGRESSIVE MOTION
          const scale = useTransform(scrollYProgress, [start, end], [1.15, 1]);
          const y = useTransform(scrollYProgress, [start, end], [120, 0]);
          const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

          return (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                width: "80vw",
                height: "60vh",
                borderRadius: "32px",
                backgroundImage: `url(${skill.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 60px 160px rgba(0,0,0,0.75)",
                scale,
                y,
                opacity,
                display: "flex",
                alignItems: "flex-end",
                overflow: "hidden",
              }}
            >
              {/* dark overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2))",
                }}
              />

              {/* TEXT */}
              <div
                style={{
                  position: "relative",
                  padding: "48px",
                  maxWidth: "520px",
                }}
              >
                <h2
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "42px",
                    marginBottom: "12px",
                  }}
                >
                  {skill.title}
                </h2>

                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "16px",
                    opacity: 0.8,
                    lineHeight: 1.6,
                  }}
                >
                  {skill.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
