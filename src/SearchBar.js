import React from "react";

const SearchBar = props => {
  const listTypes = props.types || [];
  const listSubTypes = props.subtypes || [];

  return (
    <form>
      <input placeholder="Search for..." onChange={e => props.getSuggestions(e.target.value)} />
      <select onChange={e => props.selectAType(e.target.value)}>
        <option value="">tous</option>
        {listTypes.map((type, key) => (
          <option value={type} key={key}>
            {type}
          </option>
        ))}
      </select>
      <select onChange={e => props.selectASubtype(e.target.value)}>
        <option value="">tous</option>
        {listSubTypes.map((subtype, key) => (
          <option value={subtype} key={key}>
            {subtype}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SearchBar;
