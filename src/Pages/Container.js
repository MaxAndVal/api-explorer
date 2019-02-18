import React, { Component } from "react";

import ListApi from "./ListApi";
import SearchBar from "./SearchBar";

import Loader from "../Components/Loader";
import NoCards from "../Components/NoCards";

import { MainContainer, SearchDiv, Grille } from "../Styles";

const colortypesArray = ["White", "Red", "Green", "Blue", "Black"];

class Container extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      suggestion: [],
      isLoading: true,
      gridSize: 16,
      page: 1,
      selectedType: "",
      listTypes: [],
      listSubTypes: [],
      selectedSubtype: [],
      listSupertypes: [],
      selectedSupertype: [],
      listColorTypes: [],
      selectedColor: ""
    };
  }
  isBottom(el) {
    return el.getBoundingClientRect().bottom - 1000 <= window.innerHeight;
  }

  selectAType = value => {
    this.setState({ isLoading: true, selectedType: value }, () => {
      this.fetchTheApi();
    });
  };

  selectASubtype = value => {
    this.setState({ isLoading: true, selectedSubtype: value }, () => {
      this.fetchTheApi();
    });
  };
  selectASupertype = value => {
    this.setState({ isLoading: true, selectedSupertype: value }, () => {
      this.fetchTheApi();
    });
  };
  selectAColor = (value, checked) => {
    var newColors = "";
    if (value === "tous") {
      newColors = "";
    } else if (checked) {
      newColors = this.state.selectedColor + value + ",";
    } else if (!checked) {
      const valueToRemove = value + ",";
      newColors = this.state.selectedColor.replace(valueToRemove, "");
    }
    this.setState({ isLoading: true, selectedColor: newColors }, () => {
      this.fetchTheApi();
    });
  };

  fetchTheApi = concat => {
    const {
      selectedType,
      selectedSubtype,
      suggestion,
      page,
      selectedSupertype,
      selectedColor
    } = this.state;
    const url = `https://api.magicthegathering.io/v1/cards?name=${suggestion}&type=${selectedType}&page=${page}&subtypes=${selectedSubtype}&supertypes=${selectedSupertype}&colors=${selectedColor}`;
    fetch(url)
      .then(response => response.json())
      .then(data =>
        concat
          ? this.setState(state => ({
              cards: state.cards.concat(data.cards)
            }))
          : this.setState(() => ({
              cards: data.cards
            }))
      )
      .then(() => this.setState({ isLoading: false }))
      .catch();
  };

  getSuggestions = value => {
    this.setState({ isLoading: true, suggestion: value }, () => {
      this.fetchTheApi();
    });
  };

  increaseSize = () => {
    this.setState(state => ({ gridSize: state.gridSize + 16 }));
    if (this.state.gridSize > this.state.cards.length) {
      this.setState(
        state => ({ page: state.page + 1 }),
        () => this.fetchTheApi(true)
      );
    }
  };

  componentDidMount() {
    this.setState(() => ({ listColorTypes: colortypesArray }));
    this.fetchTheApi();
    const urlTypes = "https://api.magicthegathering.io/v1/types";
    fetch(urlTypes)
      .then(response => response.json())
      .then(data => {
        this.setState({ listTypes: data.types });
      });
    const urlSubTypes = "https://api.magicthegathering.io/v1/subtypes";
    fetch(urlSubTypes)
      .then(response => response.json())
      .then(data => {
        this.setState({ listSubTypes: data.subtypes });
      });
    const urlSuperTypes = "https://api.magicthegathering.io/v1/supertypes";
    fetch(urlSuperTypes)
      .then(response => response.json())
      .then(data => {
        this.setState({ listSupertypes: data.supertypes });
      });

    document.addEventListener("scroll", this.trackScrolling);
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling);
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById("Grille");
    if (this.isBottom(wrappedElement)) {
      this.increaseSize();
    }
  };
  render() {
    const state = this.state;
    const { cards, suggestion, gridSize, isLoading } = this.state;
    const matches = window.innerWidth < 610;
    console.log(matches);
    return (
      <MainContainer>
        <SearchDiv>
          <SearchBar
            getSuggestions={this.getSuggestions}
            selectAType={this.selectAType}
            selectASubtype={this.selectASubtype}
            selectASupertype={this.selectASupertype}
            selectAColor={this.selectAColor}
            containerState={state}
            isMobile={matches}
          />
        </SearchDiv>
        <Loader isLoading={isLoading} />
        {cards.length > 0 || isLoading ? (
          <Grille id="Grille" isMobile={matches}>
            <ListApi
              cards={isLoading ? [] : cards}
              gridSize={gridSize}
              suggestion={suggestion}
            />
          </Grille>
        ) : (
          <NoCards />
        )}
      </MainContainer>
    );
  }
}

export default Container;
