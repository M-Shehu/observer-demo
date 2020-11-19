import React from "react";

import RxJS from "./components/RxJS";
import Redux from "./components/Redux";
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/redux">
          <Redux />
        </Route>
        <Route path="/rx-js">
          <RxJS />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
