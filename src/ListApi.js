import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Case = styled.div`
  width: ";, 100px";
`;

class ListApi extends Component {
  render() {
    const { cards, suggestion } = this.props;
    const suggestionIsNotEmpty = suggestion.length > 0;
    const cardsToMap = suggestionIsNotEmpty ? suggestion : cards;
    console.log("props :", this.props);
    return;
    cardsToMap.map(card => (
      <Case>
        <Link to={`/detailCard/${card.id}`} className="link">
          {card.name}
          <img src={card.imageUrl} alt="de la carte" width="100px" height="150px" />
        </Link>
      </Case>
    ));
  }
}

export default ListApi;
