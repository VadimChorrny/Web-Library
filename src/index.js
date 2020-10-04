import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.css";
import * as serviceWorker from "./serviceWorker";
import Header from "./Components/Header";

ReactDOM.render(
    <React.StrictMode>
        <Header />  
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
