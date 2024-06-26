import styles from "./Components.module.css";

export default function Header() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <img src="/flag_ru.svg" alt="Russian flag" />
        </li>
        <li>
          <img src="/flag_am.svg" alt="Russian flag" />
        </li>
      </ul>
    </nav>
  );
}

function Logo() {
  return (
    <img
      src="/logo_petsitter.svg"
      alt="Petsitter Logo"
      className={styles.logo}
    />
  );
}
