import React, { useState, useEffect } from "react";
import { Timer } from "../../styles/mainLeftstyle";

const CountdownTimer = () => {
  const [time, setTime] = useState({
    hours: 15,
    minutes: 1,
    seconds: 59,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(prevTime => {
        let newSeconds = prevTime.seconds - 1;
        let newMinutes = prevTime.minutes;
        let newHours = prevTime.hours;

        if (newSeconds === -1) {
          newMinutes -= 1;
          newSeconds = 59;
        }
        if (newMinutes === -1) {
          newHours -= 1;
          newMinutes = 59;
        }
        if (newHours < 0) {
          clearInterval(intervalId);
          return prevTime;
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = value => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <Timer>
      <span style={{ background: "transparent" }}>
        {formatTime(time.hours)}
      </span>
      :
      <span style={{ background: "transparent" }}>
        {formatTime(time.minutes)}
      </span>
      :
      <span style={{ background: "transparent" }}>
        {formatTime(time.seconds)}
      </span>
    </Timer>
  );
};

export default CountdownTimer;
