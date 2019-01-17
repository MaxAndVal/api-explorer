import React from "react";
import ReactDOM from "react-dom";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";

const SearchBar = props => {
  const listTypes = props.types || [];
  const listSubTypes = props.subtypes || [];

  return (
    <form>
      <input placeholder="Search for..." onChange={e => props.getSuggestions(e.target.value)} />
      <Select onChange={e => props.selectAType(e.target.value)} name="type">
        <MenuItem value="">tous</MenuItem>
        {listTypes.map((type, key) => (
          <MenuItem value={type} key={key}>
            {type}
          </MenuItem>
        ))}
      </Select>
      <Select
        onChange={e => props.selectASubtype(e.target.value)}
        input={<Input name="age" id="age-helper" />}
      >
        <MenuItem value="">tous</MenuItem>
        {listSubTypes.map((subtype, key) => (
          <MenuItem value={subtype} key={key}>
            {subtype}
          </MenuItem>
        ))}
      </Select>
    </form>
  );
};

export default SearchBar;
