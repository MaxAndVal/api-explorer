import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import { FormGroup } from "@material-ui/core";
import styled from "styled-components";

const DivCheckBox = styled.div``;

class SearchBar extends React.Component {
  render() {
    const listTypes = this.props.types || [];
    const listSubTypes = this.props.subtypes || [];
    const listSupertype = this.props.supertypes || [];
    const listColorType = this.props.colortypes || [];
    return (
      <form>
        <div
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
            onChange={e => this.props.getSuggestions(e.target.value)}
          />
          <InputLabel>Type</InputLabel>
          <Select
            onChange={e => this.props.selectAType(e.target.value)}
            name="type"
            value={this.props.selectedType}
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
            onChange={e => this.props.selectASubtype(e.target.value)}
            name="subtype"
            value={this.props.selectedSubtype}
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
            onChange={e => this.props.selectASupertype(e.target.value)}
            name="Supertype"
            value={this.props.selectedSupertype}
          >
            <MenuItem value="">tous</MenuItem>
            {listSupertype.map((supertype, key) => (
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
          value={this.props.selectedColor}
          onChange={e => this.props.selectAColor(e.target.value, e.target.checked)}
        >
          {listColorType.map((color, key) => (
            <DivCheckBox key={key}>
              <label>{color}</label>
              <Checkbox value={color}>{color}</Checkbox>
            </DivCheckBox>
          ))}
        </FormGroup>
      </form>
    );
  }
}

export default SearchBar;
