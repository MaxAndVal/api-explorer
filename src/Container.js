import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ListApi from "./ListApi";
import { ClipLoader } from "react-spinners";

import styled from "styled-components";

const Grille = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 15px;
  justify-items: center;
`;
const SearchDiv = styled.div`
  padding: 30px 15px;
  background-color: #fff;
`;
const MainContainer = styled.div`
  margin: 0 auto;
  justify-items: center;
`;

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
      types: [],
      subtypes: [],
      selectedSubtype: [],
      supertypes: [],
      selectedSupertype: [],
      colortypes: [],
      selectedColor: ""
    };
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
    const type = this.state.selectedType;
    const subtype = this.state.selectedSubtype;
    const name = this.state.suggestion;
    const page = this.state.page;
    const supertype = this.state.selectedSupertype;
    const color = this.state.selectedColor;
    const url = `https://api.magicthegathering.io/v1/cards?name=${name}&type=${type}&page=${page}&subtypes=${subtype}&supertypes=${supertype}&colors=${color}`;
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
      .catch();
    this.setState(() => ({ isLoading: false }));
  };

  getSuggestions = value => {
    this.setState({ isLoading: true, suggestion: value }, () => {
      this.fetchTheApi();
    });
  };

  increaseSize = () => {
    this.setState(state => ({ gridSize: state.gridSize + 16 }));
    if (this.state.gridSize > this.state.cards.length) {
      this.setState(state => ({ page: state.page + 1 }), () => this.fetchTheApi(true));
    }
  };

  componentDidMount() {
    this.fetchTheApi();
    const urlTypes = "https://api.magicthegathering.io/v1/types";
    fetch(urlTypes)
      .then(response => response.json())
      .then(data => {
        this.setState({ types: data.types });
      });
    const urlSubTypes = "https://api.magicthegathering.io/v1/subtypes";
    fetch(urlSubTypes)
      .then(response => response.json())
      .then(data => {
        this.setState({ subtypes: data.subtypes });
      });
    const urlSuperTypes = "https://api.magicthegathering.io/v1/supertypes";
    fetch(urlSuperTypes)
      .then(response => response.json())
      .then(data => {
        this.setState({ supertypes: data.supertypes });
      });

    this.setState({ colortypes: colortypesArray });
  }
  render() {
    const {
      cards,
      selectedSupertype,
      suggestion,
      gridSize,
      types,
      isLoading,
      supertypes,
      subtypes,
      selectedSubtype,
      selectedType,
      selectedColor,
      colortypes
    } = this.state;
    console.log("state : ", selectedColor);
    return (
      <MainContainer>
        <SearchDiv>
          <SearchBar
            cards={cards}
            getSuggestions={this.getSuggestions}
            types={types}
            subtypes={subtypes}
            supertypes={supertypes}
            colortypes={colortypes}
            selectAType={this.selectAType}
            selectASubtype={this.selectASubtype}
            selectASupertype={this.selectASupertype}
            selectAColor={this.selectAColor}
            selectedType={selectedType}
            selectedSubtype={selectedSubtype}
            selectedSupertype={selectedSupertype}
            selectedColor={selectedColor}
          />
        </SearchDiv>
        {isLoading ? (
          <ClipLoader
            className="override"
            sizeUnit={"px"}
            size={50}
            color={"#123abc"}
            loading={true}
          />
        ) : cards.length > 0 ? (
          <Grille>
            <ListApi cards={cards} gridSize={gridSize} suggestion={suggestion} />
          </Grille>
        ) : (
          <div style={{ textAlign: "center" }}>
            <img
              src={require("./images/sw-droid.jpg")}
              alt="This is not the card you are looking for"
            />
            <h2>This is not the card you are looking for</h2>
          </div>
        )}
        {isLoading && cards.length > 0 && <button onClick={this.increaseSize}>See More</button>}
      </MainContainer>
    );
  }
}

export default Container;
