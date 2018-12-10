import React, { Component } from "react";
import { Link } from "react-router-dom";

class ListApi extends Component {
  render() {
    const { cards, suggestion } = this.props;
    const suggestionIsNotEmpty = suggestion.length > 0;
    const cardsToMap = suggestionIsNotEmpty ? suggestion : cards;
    console.log("props :", this.props);
    return cardsToMap.map(card => (
      <p>
        <Link to={`/detailCard/${card.id}`} className="link">
          {card.name}
        </Link>
      </p>
    ));
  }
}

export default ListApi;
