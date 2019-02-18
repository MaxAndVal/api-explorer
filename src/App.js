import React, { Component } from "react";
import "./App.css";
import Main from "./Pages/Main";
import { Container } from "./Styles";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth < 610
    };
  }

  updateDimensions = () => {
    if (window.innerWidth < 610 && !this.state.isMobile) {
      this.setState({ isMobile: true });
    }
    if (window.innerWidth > 610 && this.state.isMobile) {
      this.setState({ isMobile: false });
    }
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  render() {
    return (
      <div className="App">
        <Container id="MainContainer">
          <Main className="App-body" isMobile={this.state.isMobile} />
        </Container>
      </div>
    );
  }
}

export default App;
