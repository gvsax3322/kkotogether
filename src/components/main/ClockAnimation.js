import React, { useState, useEffect } from "react";
import { Timer2 } from "../../styles/mainLeftstyle";

const ClockAnimation = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => (prevSeconds + 60) % 360);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Timer2 className="clock-container">
      <div className="clock">
        <div
          className="second-hand"
          style={{ transform: `rotate(${seconds}deg)` }}
        ></div>
      </div>
    </Timer2>
  );
};

export default ClockAnimation;
