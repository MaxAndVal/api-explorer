import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import ListApi from "./ListApi";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      suggestions: []
    };
  }
  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const cards = this.props.cards;

    return inputLength === 0
      ? []
      : cards.filter(
          card => card.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };
  getSuggestionValue = suggestion => suggestion.name;
  renderSuggestion = suggestion => (
    <ListApi card={suggestion.name} id={suggestion.id} />
  );
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState(
      state => ({
        suggestions: this.getSuggestions(value)
      }),
      () => this.props.liftSugg(this.state.suggestions)
    );
  };
  onSuggestionsClearRequested = () => {
    this.setState(
      state => ({
        suggestions: []
      }),
      () => this.props.liftSugg(this.state.suggestions)
    );
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type a card's name",
      value,
      onChange: this.onChange
    };
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default SearchBar;
