import styles from "./Login.module.css";
import { InputMask } from "primereact/inputmask";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { useState } from "react";
import usePost from "../Services/usePost";
import useRequest from "../Services/useRequest";

export default function Login({ setUserid }) {
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState("");
  const [pet, setPet] = useState("");
  const [letter, setLetter] = useState(false);
  const emailExists = details.some((detail) => detail.email === email);

  useRequest("http://localhost:8080/api/users/", setDetails);

  async function handleSubmit(e) {
    e.preventDefault();
    if (emailExists || !pet || !phone) return;

    const personalData = {
      email: email,
      fullname: `${firstName} ${secondName}`,
      phone: phone,
      profession: pet,
      currentgamequestionid: 0,
    };
    usePost("http://localhost:8080/api/add_user", personalData, setUserid);
    setEmail("");
    setFirstName("");
    setSecondName("");
    setPhone("");
    setPet("");
    setLetter(true);
  }

  function handleOpen() {
    navigate("/instruction");
  }

  return (
    <main className={styles.login}>
      <Header />
      <div className={styles.form__container}>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.form__wrapper}>
            <div className={styles.row}>
              <label htmlFor="email">Email</label>
              <input
                placeholder="example@mail.com"
                name="email"
                type="email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              {emailExists && (
                <span className={styles.message}>
                  Ошибка: такой email уже существует!
                </span>
              )}
            </div>

            <div className={styles.row}>
              <label htmlFor="firstName">Имя</label>
              <input
                placeholder="Иван"
                name="firstName"
                type="text"
                pattern="[A-Za-zА-Яа-я]+"
                id="firstName"
                required
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </div>

            <div className={styles.row}>
              <label htmlFor="name">Фамилия</label>
              <input
                placeholder="Иванов"
                name="lastName"
                type="text"
                pattern="[A-Za-zА-Яа-я]+"
                id="lastName"
                required
                onChange={(e) => setSecondName(e.target.value)}
                value={secondName}
              />
            </div>

            <div className={styles.row}>
              <label htmlFor="phone">Телефон</label>
              <InputMask
                id="phone"
                name="phone"
                type="tel"
                required={false}
                mask="+7 (999)-999 99 99"
                placeholder="+7 777-700 77 77"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></InputMask>
            </div>

            <div className={styles.pet}>
              <button
                type="button"
                className={
                  pet === "Dog" ? styles.pet_btn_active : styles.pet_btn
                }
                onClick={() => setPet("Dog")}
              >
                Стать догситтером
              </button>
              <button
                type="button"
                className={
                  pet === "Cat" ? styles.pet_btn_active : styles.pet_btn
                }
                onClick={() => setPet("Cat")}
              >
                Стать кэтситтером
              </button>
            </div>
          </div>

          <button className={styles.login__btn} type="submit">
            Отправить
          </button>
        </form>
      </div>
      {letter && (
        <button className={styles.letter_btn} onClick={() => handleOpen()}>
          <img src="/letter_icon.svg" alt="letter icon" />
        </button>
      )}
    </main>
  );
}
