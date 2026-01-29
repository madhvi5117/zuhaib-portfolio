import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "100px 24px",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Selected Work
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",

          gap: "30px",
          marginTop: "40px",
        }}
      >
        {[1, 2, 3].map((item) => (
          <motion.div
  key={item}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.6, delay: item * 0.1 }}
  viewport={{ once: true }}
  style={{
    height: "300px",
    background: "#151515",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  }}
>

            Project {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
