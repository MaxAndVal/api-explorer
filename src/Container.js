import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ListApi from "./ListApi";
import { ClipLoader } from "react-spinners";

import styled from "styled-components";

const Grille = styled.div`
  display: grid;
  grid-template-columns: 250px 250px 250px 250px;
`;

const url = "https://api.magicthegathering.io/v1/cards/";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      suggestion: [],
      isLoading: true,
      gridSize: 100,
      page: 1
    };
  }
  getSuggestions = value => {
    this.setState(() => ({ isLoading: true }));
    const urlByName = `https://api.magicthegathering.io/v1/cards?name=${value}`;
    fetch(urlByName)
      .then(response => (response.json(), console.log(response.json())))
      .then(
        data => (
          console.log(data),
          this.setState(() => ({
            cards: data.cards
          }))
        )
      )
      .catch();
    this.setState(() => ({ isLoading: false }));
  };

  increaseSize = () => {
    let page;
    this.setState(state => ({ gridSize: state.gridSize + 16 }));
    if (this.state.gridSize > this.state.cards.length) {
      this.setState(state => ({ page: state.page + 1 }));
      page = this.state.page;
      const urlByPage = `https://api.magicthegathering.io/v1/cards?page=${page}`;
      fetch(urlByPage)
        .then(response => response.json())
        .then(data =>
          this.setState(state => ({
            cards: state.cards.concat(data.cards)
          }))
        )
        .catch();
    }
  };

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState(() => ({
          cards: data.cards,
          isLoading: false
        }))
      )
      .catch();
  }
  render() {
    const { cards, suggestion, gridSize } = this.state;
    const loading = cards.length === 0 && suggestion.length === 0;
    return (
      <div>
        <SearchBar cards={cards} getSuggestions={this.getSuggestions} />
        {loading ? (
          <ClipLoader
            className="override"
            sizeUnit={"px"}
            size={150}
            color={"#123abc"}
            loading={true}
          />
        ) : (
          <Grille>
            <ListApi cards={cards} gridSize={gridSize} suggestion={suggestion} />
          </Grille>
        )}
        <button onClick={this.increaseSize}>See More</button>
      </div>
    );
  }
}

export default Container;
