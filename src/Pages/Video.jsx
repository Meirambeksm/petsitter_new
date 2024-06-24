import { useState } from "react";
import Header from "../Components/Header";
import styles from "./Instruction.module.css";

export default function Instruction() {
  const [video, setVideo] = useState(false);
  const [game, setGame] = useState(false);

  return (
    <main className={styles.instruction}>
      <Header />
      {!video ? (
        <section ion className={styles.topic}>
          <div className={styles.topic__head}>
            <span className={styles.topic__name}>тема:</span>
            <span>Сюрприз</span>
          </div>
          <div className={styles.topic__body}>
            <div className={styles.topic__body__icon}>
              <div className={styles.paw}>
                <img src="/instruction_paw.svg" alt="paw icon" />
                <div className={styles.paw__text}>
                  <span className={styles.paw__heading}>Petsitter</span>
                  <span>кому: you</span>
                </div>
              </div>
              <div className={styles.icons}>
                <img
                  className={styles.star}
                  src="/instruction__star.svg"
                  alt="star logo"
                />
                <img
                  className={styles.arrow}
                  src="/instruction__arrow.svg"
                  alt="arrow logo"
                />
                <img
                  className={styles.dots}
                  src="/instruction__dots.svg"
                  alt="three dots logo"
                />
              </div>
            </div>
            <p className={styles.topic__body__letter}>
              Теперь мы познакомились! Но на этом мы не заканчиваем и у нас для
              тебя есть интересный сюрприз)
            </p>

            <button
              className={styles.completion__btn}
              onClick={() => setVideo(true)}
            >
              <span className={styles.completion__btn__text}>Можешь</span>
              <span className={styles.completion__btn__text__add}>
                повернуться
              </span>
              <img
                className={styles.completion__btn__img}
                src="/arrow_final.svg"
                alt="arrow icon"
              />
            </button>
          </div>
        </section>
      ) : (
        <div className={styles.multimedia}>
          {!game && (
            <video
              onEnded={() => setGame(true)}
              autoPlay
              src="/final_video.mp4"
            />
          )}
          {game && <h1>ЗДЕСЬ БУДЕТ САМА ИГРА</h1>}
        </div>
      )}
    </main>
  );
}
