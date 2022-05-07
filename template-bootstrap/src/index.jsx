/* @refresh reload */
import { render } from "voby";

import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

render(<App />, document.getElementById("app"));
