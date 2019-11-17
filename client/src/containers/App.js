import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MapView from "./map/Map";
import Header from "../components/header/header";
import Register from "../components/accountManagment/register";
import Edit from "../components/accountManagment/edit";
import Info from "../components/info/info";
import Modal from "../components/modal/modal";
import Locations from "../components/locations/locations";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/map">
            <MapView />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/edit_account">
            <Edit />
          </Route>
          <Route exact path="/">
            <Info />
          </Route>
        </Switch>
      </Router>
      <Modal />
    </>
  );
};

export default App;
