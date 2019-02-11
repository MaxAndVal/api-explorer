import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Case } from "./Styles";

class ListApi extends Component {
  render() {
    const { cards, gridSize } = this.props;
    const placeHolder = require("./images/placeHolder.jpeg");
    return cards.slice(0, gridSize).map((card, key) => (
      <Case key={key}>
        <Link to={`/detailCard/${card.id}`} className="link">
          <p>{card.name}</p>
          <img src={card.imageUrl || placeHolder} alt="de la carte" width="100%" height="auto" />
        </Link>
      </Case>
    ));
  }
}

export default ListApi;
