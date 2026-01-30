import { motion } from "framer-motion";

const projects = [
  {
    title: "Authentication System",
    desc: "JWT-based auth system with role management and security best practices.",
    tech: "Node.js • Express • MongoDB",
  },
  {
    title: "REST API Platform",
    desc: "Scalable REST APIs with pagination, caching, and performance optimizations.",
    tech: "Node.js • PostgreSQL",
  },
  {
    title: "Backend for SaaS",
    desc: "Complete backend architecture for SaaS products with admin control.",
    tech: "Node.js • Redis • Docker",
  },
];

export default function Projects() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#2b2e34",
        padding: "120px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              letterSpacing: "2px",
              opacity: 0.6,
              marginBottom: "10px",
            }}
          >
            PROJECTS
          </p>

          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "48px",
              marginBottom: "60px",
            }}
          >
            Selected Work
          </h2>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={{
                background: "#1f2126",
                scale: 1.03,
                borderRadius: "24px",
                padding: "32px",
                cursor: "pointer",
                boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
              }}
            >
              <h3
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "24px",
                  marginBottom: "12px",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  opacity: 0.7,
                  lineHeight: 1.6,
                  marginBottom: "20px",
                }}
              >
                {project.desc}
              </p>

              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  opacity: 0.5,
                }}
              >
                {project.tech}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
