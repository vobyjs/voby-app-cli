import { $ } from "voby";

import banner from "/banner.svg";
import styles from "./styles/App.module.scss";

function App() {
  const count = $(0);
  const increment = () => count((value) => value + 1);

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={banner} class={styles.logo} alt="logo" />
        <button type="button" onClick={increment}>
          count is: {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
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
