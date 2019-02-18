import React from "react";
import {
  InputLabel,
  MenuItem,
  Select,
  Input,
  Checkbox,
  FormGroup
} from "@material-ui/core";

const SearchBar = props => {
  const {
    listTypes,
    listSubTypes,
    listSupertypes,
    listColorTypes
  } = props.containerState;
  return (
    <form>
      <div
        style={{
          display: "flex",
          flexDirection: props.isMobile ? "column" : "row",
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
          value={props.containerState.selectedType}
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
          value={props.containerState.selectedSubtype}
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
          value={props.containerState.selectedSupertype}
        >
          <MenuItem value="">tous</MenuItem>
          {listSupertypes.map((supertype, key) => (
            <MenuItem value={supertype} key={key}>
              {supertype}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div style={{ textAlign: "center", marginTop: "25px" }}>
        <InputLabel>Color</InputLabel>
      </div>
      <FormGroup
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingBottom: "5px",
          marginTop: "5px",
          borderBottom: "1px solid black"
        }}
        name="Color"
        row={true}
        value={props.containerState.selectedColor}
        onChange={e => props.selectAColor(e.target.value, e.target.checked)}
      >
        {listColorTypes.map((color, key) => (
          <div key={key}>
            <label>{color}</label>
            <Checkbox value={color}>{color}</Checkbox>
          </div>
        ))}
      </FormGroup>
    </form>
  );
};

export default SearchBar;
