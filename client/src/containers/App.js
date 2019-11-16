import React from "react";
import MapView from "../components/map/Map";
import Header from "../components/header/header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/map">
            <MapView />
          </Route>
          <Route exact path="/">
            <div>test</div>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
