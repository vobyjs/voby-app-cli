/* @refresh reload */
import { render } from "voby";

import "virtual:windi.css";
import "./styles/global.css";
import App from "./App";

render(<App />, document.getElementById("app"));
