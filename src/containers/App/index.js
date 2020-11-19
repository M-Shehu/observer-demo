import React from "react";

import RxJS from "../RxJS";
import Redux from "../Redux";
import Home from "../Home";

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
