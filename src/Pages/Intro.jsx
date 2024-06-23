import styles from "./Intro.module.css";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div className={styles.intro}>
      <video
        autoPlay
        controls
        onEnded={() => navigate("/login")}
        src="/intro_video.mp4"
      />
    </div>
  );
}
