import { $ } from "voby";
import banner from "/banner.svg";
import styles from "./styles/App.module.css";

function App(): JSX.Element {
  const count = $(0);
  const increment = () => count((value) => value + 1);

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={banner} class={styles.logo} alt="logo" />
        <button class="btn btn-success btn-large" onClick={increment}>
          count is: {count}
        </button>
        <p>
          Edit <code style="color: black;">src/App.tsx</code> and save to
          reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/vobyjs/voby"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Voby
        </a>
      </header>
    </div>
  );
}

export default App;
