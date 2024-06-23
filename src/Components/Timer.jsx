import { useEffect, useState } from "react";
import styles from "./Components.module.css";

export default function Timer() {
  const [remainingTime, setRemainingTime] = useState(600);

  useEffect(() => {
    const timerId = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timerId);
          return 0;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div className={remainingTime < 60 ? styles.last_seconds : styles.timer}>
      <p>
        Время: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </p>
    </div>
  );
}
