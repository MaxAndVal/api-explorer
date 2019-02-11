import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Case = styled.div`
  width: "100%";
  margin: 5px;
  padding: 5px;
  & .link {
    overflow: hidden;
    color: #000;
    text-decoration: none;
  }
  p {
    text-align: center;
    height: 25px;
  }
`;

class ListApi extends Component {
  render() {
    const { cards, gridSize } = this.props; 
    const placeHolder = require('./images/placeHolder.jpeg');
    return cards.slice(0, gridSize).map((card, key) => (
      <Case key={key}>
        <Link to={`/detailCard/${card.id}`} className="link">
          <p>{card.name}</p>
          <img
            src={ card.imageUrl || placeHolder }
            alt="de la carte"
            width="100%"
            height="auto"
          />
        </Link>
      </Case>
    ));
  }
}

export default ListApi;
