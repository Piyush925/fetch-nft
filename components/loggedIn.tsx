import styles from "../styles/LoggedIn.module.css";
import FetchData from "./fetchData";

export default function LoggedIn(): JSX.Element {
  return (
    <section className={styles.loggedInMain}>
        <section className={styles.loggedInAccount}>
          <FetchData />
        </section>
      </section>
  );
}