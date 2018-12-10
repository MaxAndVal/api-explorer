import React, { Component } from "react";

class ListApi extends Component {
  cardInfo = id => {
    //todo
  };
  render() {
    const { cards, id, suggestion } = this.props;
    const suggestionIsNotEmpty = suggestion.length > 0;
    const cardsToMap = suggestionIsNotEmpty ? suggestion : cards;

    return cardsToMap.map(card => <p>{card.name}</p>);
  }
}

export default ListApi;
