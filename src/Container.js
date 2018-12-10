import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ListApi from "./ListApi";

const url = "https://api.magicthegathering.io/v1/cards/";
class Container extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      suggestion: []
    };
  }
  updateSuggestion = sugg => {
    this.setState({ suggestion: sugg });
  };
  componentDidMount() {
    const data = fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState(() => ({
          cards: data.cards
        }))
      )
      .catch(err => console.log("err:", err));
  }
  render() {
    const { cards, suggestion } = this.state;
    return (
      <div>
        <SearchBar cards={cards} liftSugg={this.updateSuggestion} />
        {<ListApi cards={cards} suggestion={suggestion} />}
      </div>
    );
  }
}

export default Container;
