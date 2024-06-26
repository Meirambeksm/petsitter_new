import Header from "../Components/Header";
import styles from "./Instruction.module.css";
import { useNavigate } from "react-router-dom";

export default function Instruction() {
  const navigate = useNavigate();

  return (
    <main className={styles.instruction}>
      <Header />
      <section className={styles.topic}>
        <div className={styles.topic__head}>
          <span className={styles.topic__name}>тема:</span>
          <span>Знакомство</span>
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
            <span>Привет!</span> <br /> <br /> На связи команда Petsitter)Нам
            стало известно о твоем желании стать догситтером! Мы очень любим
            животных и нас радует твое стремление помогать хозяевам и их
            питомцам. Мы ответственно относимся к нашим клиентам и их
            четвероногим друзьям, поэтому догситтеру требуется быть
            ответственным, спокойным и честным. Давай для начала проведем
            психологический тест, где сможем поближе узнать тебя)
          </p>
          <p className={styles.topic__body__letter}>
            Прежде, чем приступить к тесту, отложи отвлекающие тебя предметы
            (гаджеты), настройся на работу и приступай! На тест дается одна
            попытка. Время теста 10 минут.
          </p>
          <button
            className={styles.instruction__btn}
            onClick={() => navigate("/testing")}
          >
            перейти к тесту
            <img
              className={styles.instruction__arrow}
              src="/instruction__arrow-right.svg"
              alt="arrow right"
            />
          </button>
        </div>
      </section>
    </main>
  );
}
