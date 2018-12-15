import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ListApi from "./ListApi";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroller";

const Grille = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px 200px;
`;

const url = "https://api.magicthegathering.io/v1/cards/";
class Container extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      suggestion: [],
      isLoading: true
    };
  }
  getSuggestions = value => {
    this.setState(() => ({ isLoading: true }));
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const cards = this.state.cards;
    const suggestion =
      inputLength === 0
        ? []
        : cards.filter(card => card.name.toLowerCase().slice(0, inputLength) === inputValue);
    this.setState(state => ({ suggestion: suggestion }));
    if (suggestion.length < 100) {
      const urlByName = `https://api.magicthegathering.io/v1/cards?name=${value}`;
      fetch(urlByName)
        .then(response => response.json())
        .then(data =>
          this.setState(() => ({
            cards: data.cards
          }))
        )
        .catch();
    }
    this.setState({ isLoading: false });
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
    const { cards, suggestion } = this.state;
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
            <InfiniteScroll
              pageStart={0}
              loadMore={}
              hasMore={true || false}
              loader={
                <div className="loader" key={0}>
                  Loading ...
                </div>
              }
            >
              <ListApi cards={cards} suggestion={suggestion} />
            </InfiniteScroll>
          </Grille>
        )}
      </div>
    );
  }
}

export default Container;
