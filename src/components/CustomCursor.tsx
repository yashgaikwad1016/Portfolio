import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    const bindHover = () => {
      document
        .querySelectorAll("a, button, [role='button'], input, textarea, select, label")
        .forEach((el) => {
          el.addEventListener("mouseenter", () => setIsHovering(true));
          el.addEventListener("mouseleave", () => setIsHovering(false));
        });
    };

    const observer = new MutationObserver(bindHover);
    observer.observe(document.body, { childList: true, subtree: true });
    bindHover();

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    const animate = () => {
      // Dot snaps instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x - 4}px, ${mouse.current.y - 4}px)`;
      }
      // Ring lags slightly
      ring.current.x += (mouse.current.x - ring.current.x) * 0.14;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 16}px, ${ring.current.y - 16}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className={`c-ring${isHovering ? " c-ring--hover" : ""}${isClicking ? " c-ring--click" : ""}`}
      />
      <div
        ref={dotRef}
        className={`c-dot${isClicking ? " c-dot--click" : ""}`}
      />
    </>
  );
};

export default CustomCursor;
