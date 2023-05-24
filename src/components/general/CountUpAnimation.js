import React, { useEffect, useState } from "react";

const easeOutQuad = t => t * (2 - t);
const frameDuration = 1000 / 60;

export const CountUpAnimation = ({
  children,
  duration = 2000,
  initialValue = 0,
  isCounting = false
}) => {
  const countTo = parseInt(children, 10);
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    if (isCounting) {
      let frame = 0;
      const totalFrames = Math.round(duration / frameDuration);
      const counter = setInterval(() => {
        frame++;
        const progress = easeOutQuad(frame / totalFrames);
        setCount(countTo * progress);

        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
    }
  }, [isCounting]);

  return Math.floor(count).toLocaleString();
};
