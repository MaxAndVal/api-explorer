import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    value: ""
  };

  handleInputChange = () => {
    this.setState(
      () => ({
        value: this.search.value
      }),
      () => this.props.getSuggestions(this.state.value)
    );
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

export default SearchBar;
