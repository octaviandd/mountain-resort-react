/** @format */

import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SingleRoom from "./pages/SingleRoom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Rooms from "./pages/Rooms";
import Error from "./pages/ErrorPage";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/rooms/" component={Rooms}></Route>
        <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route component={Error}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
