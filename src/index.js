import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.css";
import * as serviceWorker from "./serviceWorker";
import Header from "./Components/Header";
import Menu from "./Components/Gen/Menu";

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <Menu />
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
