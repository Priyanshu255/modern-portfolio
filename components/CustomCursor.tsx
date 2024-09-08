import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursorDot = document.querySelector(
      "[data-cursor-dot]"
    ) as HTMLElement;
    const cursorOutline = document.querySelector(
      "[data-cursor-outline]"
    ) as HTMLElement;
    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
      }

      if (cursorOutline) {
        // cursorOutline.style.left = `${posX}px`;
        // cursorOutline.style.top = `${posY}px`;
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, {duration: 500, fill: "forwards"});
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-outline" data-cursor-outline></div>
    </>
  );
};

export default CustomCursor;
