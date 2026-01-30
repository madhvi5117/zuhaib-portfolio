import { useEffect, useRef } from "react";

export default function CanvasCursor() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const last = useRef({ x: mouse.current.x, y: mouse.current.y });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", move);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // elastic follow (lag)
      last.current.x += (mouse.current.x - last.current.x) * 0.15;
      last.current.y += (mouse.current.y - last.current.y) * 0.15;

      const dx = mouse.current.x - last.current.x;
      const dy = mouse.current.y - last.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // tail stretch
      const maxStretch = 80;
      const stretch = Math.min(dist, maxStretch);

      const angle = Math.atan2(dy, dx);

      ctx.save();
      ctx.translate(last.current.x, last.current.y);
      ctx.rotate(angle);

      // tail
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(stretch, 0);
      ctx.strokeStyle = "#e6ff3f";
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.stroke();

      ctx.restore();

      // dot (head)
      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#e6ff3f";
      ctx.fill();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
