import React from "react";
import "../Styles/index.css";
import Header from "../UI/Header";
import Home from "../UI/Home";
import Menu from "../UI/Menu";
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
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
