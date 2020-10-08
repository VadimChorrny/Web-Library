import React from "react";
import "../Styles/index.css";
import Header from "../UI/Header";
import Home from "../UI/GenPage/Home";
import Menu from "../UI/GenPage/Menu";
import Data from "../UI/GenPage/Data";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/menu">
                        <Menu />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/data">
                        <Data />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
