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
  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const cards = this.state.cards;
    const suggestion =
      inputLength === 0
        ? []
        : cards.filter(
            card => card.name.toLowerCase().slice(0, inputLength) === inputValue
          );
    this.setState(state => ({ suggestion: suggestion }));
  };

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState(() => ({
          cards: data.cards
        }))
      )
      .catch();
  }
  render() {
    const { cards, suggestion } = this.state;
    return (
      <div>
        <SearchBar cards={cards} getSuggestions={this.getSuggestions} />
        <ListApi cards={cards} suggestion={suggestion} />
      </div>
    );
  }
}

export default Container;
