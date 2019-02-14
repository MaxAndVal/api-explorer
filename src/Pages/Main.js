import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Container from "./Container";
import DetailCard from "./DetailCard";
import Error404 from "./404";

const Main = () => (
  <main style={{ height: "100%" }}>
    <Switch>
      <Route exact path="/" component={Container} />
      <Route path="/DetailCard/:number" component={DetailCard} />
      <Route path="/404" component={Error404} />
      <Redirect from="/*" to="/404" />
    </Switch>
  </main>
);

export default Main;
