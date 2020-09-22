import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./PageComponents/Home";
import SingleRoom from "./PageComponents/SingleRoom";
import Rooms from "./PageComponents/Rooms";
import Error from "./PageComponents/Error";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
};
export default App;
