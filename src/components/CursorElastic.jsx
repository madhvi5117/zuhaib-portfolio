import { useEffect, useRef } from "react";

export default function CursorElastic() {
  const dotRef = useRef(null);
  const lineRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const last = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      // lag follow (elastic feel)
      last.current.x += (mouse.current.x - last.current.x) * 0.18;
      last.current.y += (mouse.current.y - last.current.y) * 0.18;

      const dx = mouse.current.x - last.current.x;
      const dy = mouse.current.y - last.current.y;
      const distance = Math.min(Math.sqrt(dx * dx + dy * dy), 120);

      // DOT (slight lag)
      dotRef.current.style.transform = `
        translate(${last.current.x}px, ${last.current.y}px)
      `;

      // LINE (chewing gum stretch)
      lineRef.current.style.width = `${distance}px`;
      lineRef.current.style.transform = `
        translate(${last.current.x}px, ${last.current.y}px)
        rotate(${Math.atan2(dy, dx)}rad)
      `;

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* DOT */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "10px",
          height: "10px",
          background: "#e6ff3f",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 12px rgba(230,255,63,0.8)",
        }}
      />

      {/* ELASTIC LINE */}
      <div
        ref={lineRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "3px",
          background: "#e6ff3f",
          borderRadius: "999px",
          transformOrigin: "0 50%",
          pointerEvents: "none",
          zIndex: 9998,
          boxShadow: "0 0 10px rgba(230,255,63,0.6)",
        }}
      />
    </>
  );
}
