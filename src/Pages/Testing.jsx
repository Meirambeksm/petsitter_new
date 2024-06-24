import Header from "../Components/Header";
import styles from "./Testing.module.css";
import { questions } from "../Components/Questions";
import { useState } from "react";
import Timer from "../Components/Timer";
import usePost from "../Services/usePost";
import { useNavigate } from "react-router-dom";

export default function Testing({ userid }) {
  const [answer, setAnswer] = useState(null);
  const [counter, setCounter] = useState(0);
  const [result, setResult] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [hideAnswers, setHideAnswers] = useState(false);
  const navigate = useNavigate();

  function handleAnswer(e) {
    const selectedAnswer = Number(e.target.value);
    setAnswer(selectedAnswer);
    result.push(selectedAnswer);

    setTimeout(function () {
      setCounter((counter) => counter + 1);
      setAnswer(null);
    }, 700);

    if (counter === questions.length - 1) {
      setShowButton(true);
      setHideAnswers(true);
    }
  }

  function handleSubmit() {
    const testResult = {
      userid: userid,
      psyresult: result,
    };
    usePost(
      "http://localhost:8000/api/send_psycho_answers/",
      testResult,
      console.log
    );
    navigate("/video");
  }

  return (
    <main className={styles.test}>
      <Header />
      <section>
        <div className={styles.test__wrapper}>
          <h2 className={styles.questionNumber}>
            {!hideAnswers
              ? `Вопрос ${counter + 1} из ${questions.length}`
              : "Психологический тест окончен!"}
          </h2>
          {!hideAnswers && <Timer />}
          {!hideAnswers && (
            <p className={styles.question}>{questions[counter]}</p>
          )}
          {!hideAnswers && (
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
          )}
        </div>

        {showButton && (
          <button className={styles.lastBtn} onClick={() => handleSubmit()}>
            <img src="/lastBtn.svg" alt="right arrow button" />
          </button>
        )}

        <button className={styles.skipBtn} onClick={() => setCompleted(true)}>
          SKIP
        </button>
      </section>
    </main>
  );
}
