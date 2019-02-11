import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Container from "./Container";
import DetailCard from "./DetailCard";
import Error404 from "./404";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Container} />
      <Route path="/DetailCard/:number" component={DetailCard} />
      <Route path="/404" component={Error404} />
      <Redirect from="/*" to="/404" />
    </Switch>
  </main>
);

export default Main;
