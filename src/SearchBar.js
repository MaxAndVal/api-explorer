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
  const listSupertype = props.supertypes || [];
  return (
    <form
      style={{
        display: "flex",
        justifyContent: "space-around",
        paddingBottom: "25px",
        marginTop: "25px",
        borderBottom: "1px solid black"
      }}
    >
      <Input
        placeholder="Search for..."
        onChange={e => props.getSuggestions(e.target.value)}
      />
      <InputLabel>Type</InputLabel>
      <Select
        onChange={e => props.selectAType(e.target.value)}
        name="type"
        value={props.selectedType}
      >
        <MenuItem value="">tous</MenuItem>
        {listTypes.map((type, key) => (
          <MenuItem value={type} key={key}>
            {type}
          </MenuItem>
        ))}
      </Select>
      <InputLabel>Subtype</InputLabel>
      <Select
        onChange={e => props.selectASubtype(e.target.value)}
        name="subtype"
        value={props.selectedSubtype}
      >
        <MenuItem value="">tous</MenuItem>
        {listSubTypes.map((subtype, key) => (
          <MenuItem value={subtype} key={key}>
            {subtype}
          </MenuItem>
        ))}
      </Select>
      <InputLabel>Supertype</InputLabel>
      <Select
        onChange={e => props.selectASupertype(e.target.value)}
        name="Supertype"
        value={props.selectedSupertype}
      >
        <MenuItem value="">tous</MenuItem>
        {listSupertype.map((supertype, key) => (
          <MenuItem value={supertype} key={key}>
            {supertype}
          </MenuItem>
        ))}
      </Select>
    </form>
  );
};

export default SearchBar;
