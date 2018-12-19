import React from "react";

const SearchBar = props => {
  return (
    <form>
      <input placeholder="Search for..." onChange={e => props.getSuggestions(e.target.value)} />
    </form>
  );
};

export default SearchBar;
