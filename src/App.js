import React, { Component } from "react";
import "./App.css";
import Main from "./Pages/Main";
import { Container } from "./Styles";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container id="MainContainer">
          <Main className="App-body" />
        </Container>
      </div>
    );
  }
}

export default App;
