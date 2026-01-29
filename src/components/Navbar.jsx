import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "20px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 100,
      }}
    >
      <h2>Zuhaib</h2>

      <ul
  style={{
    display: "flex",
    listStyle: "none",
    gap: "20px",
    cursor: "pointer",
    flexWrap: "wrap",
  }}
>

        <li>Home</li>
        <li>Work</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </motion.nav>
  );
}
