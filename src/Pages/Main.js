import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Container from "./Container";
import DetailCard from "./DetailCard";
import Error404 from "./404";

const Main = props => (
  <main style={{ height: "100%" }}>
    <Switch>
      <Route exact path="/" render={data => <Container {...data} isMobile={props.isMobile} />} />
      <Route
        path="/DetailCard/:number"
        render={data => <DetailCard {...data} isMobile={props.isMobile} />}
      />
      } />
      <Route path="/404" component={Error404} />
      <Redirect from="/*" to="/404" />
    </Switch>
  </main>
);

export default Main;
