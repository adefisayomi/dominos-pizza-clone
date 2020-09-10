import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu"
import Store from "./Store"
import Tracker from "./Tracker";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/pages/order/menu" component={Menu} />
          <Route path= "/pages/order/store" component = {Store}/>
          <Route path="/pages/tracker" component={Tracker} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
