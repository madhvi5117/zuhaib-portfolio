export default function Footer() {
  return (
    <footer
      style={{
        background: "#2b2e34",
        padding: "40px 24px",
        textAlign: "center",
        fontFamily: "Inter, sans-serif",
        fontSize: "13px",
        opacity: 0.6,
      }}
    >
      © {new Date().getFullYear()} Zuhaib Khan — Backend Developer
    </footer>
  );
}
