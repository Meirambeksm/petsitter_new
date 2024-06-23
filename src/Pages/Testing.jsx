import Header from "../Components/Header";
import styles from "./Testing.module.css";
import { questions } from "../Components/Questions";
import { useState } from "react";
import Timer from "../Components/Timer";
import useRequest from "../Services/useRequest";
import usePost from "../Services/usePost";

export default function Testing({ details, setDetails }) {
  const [answer, setAnswer] = useState(null);
  const [counter, setCounter] = useState(0);
  const [result, setResult] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [video, setVideo] = useState(false);
  const [game, setGame] = useState(false);

  useRequest("http://localhost:8080/api/users/", setDetails);

  function handleAnswer(e) {
    const selectedAnswer = Number(e.target.value);
    setAnswer(selectedAnswer);
    result.push(selectedAnswer);

    setTimeout(function () {
      setCounter((counter) => counter + 1);
      setAnswer(null);
      console.log(details.length);
    }, 700);

    if (counter === questions.length - 1) {
      const testResult = {
        userid: details.length,
        psyresult: result,
      };
      usePost("http://localhost:8080/api/send_psycho_answers/", testResult);
      setCompleted(true);
    }
  }

  return (
    <main className={styles.test}>
      <Header />
      <section>
        {!completed && (
          <div className={styles.test__wrapper}>
            <h2 className={styles.questionNumber}>
              Вопрос {counter + 1} из {questions.length}
            </h2>
            <Timer />
            <p className={styles.question}>{questions[counter]}</p>
            <div className={styles.answer}>
              <input
                className={styles.option}
                type="radio"
                name="option"
                id="yes"
                value={1}
                checked={answer == 1 ? true : false}
                onChange={(e) => handleAnswer(e)}
              />
              <label className={styles.label} htmlFor="yes">
                Да
              </label>
              <br />

              <input
                className={styles.option}
                type="radio"
                name="option"
                id="no"
                value={0}
                checked={answer == 0 ? true : false}
                onChange={(e) => handleAnswer(e)}
              />
              <label className={styles.label} htmlFor="no">
                Нет
              </label>
            </div>
          </div>
        )}

        {completed && !video && (
          <div className={styles.completion}>
            <p className={styles.completion__text}>
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
        )}

        {video && (
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
        <button className={styles.skipBtn} onClick={() => setCompleted(true)}>
          SKIP
        </button>
      </section>
    </main>
  );
}
