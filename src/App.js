import React, { Component } from "react";
import "./App.css";
import Main from "./Main";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 80%;
  background-color: #fff;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Main className="App-body" />
        </Container>
      </div>
    );
  }
}

export default App;
