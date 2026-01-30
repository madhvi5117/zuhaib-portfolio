import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#181a1f",
        display: "flex",
        alignItems: "center",
        padding: "0 8vw",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* LEFT STATEMENT */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "56px",
            lineHeight: 1.1,
          }}
        >
          Have an idea?
          <br />
          Let’s make it real.
        </motion.h2>

        {/* RIGHT CONTACT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          style={{
            background: "#1f2126",
            padding: "48px",
            borderRadius: "28px",
            boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
          }}
        >
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              opacity: 0.75,
              marginBottom: "32px",
            }}
          >
            I’m open to backend-focused projects, collaborations,
            or just a good technical discussion.
          </p>

          {/* CTA */}
          <motion.a
            href="mailto:zuhaib@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              display: "inline-block",
              padding: "18px 42px",
              background: "#e6ff3f",
              color: "#000",
              fontWeight: 600,
              borderRadius: "999px",
              textDecoration: "none",
            }}
          >
            Get in touch →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
