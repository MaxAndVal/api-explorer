import React, { Component } from "react";
import { DivResult, DivSpec, Back } from "./Styles";
import Line from "./Components/Line";
import FieldsBox from "./Components/FieldsBox"

class DetailCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      types: [],
      colors: [],
      text: "",
      image: "",
      flavor: ""
    };
  }

  componentDidMount() {
    const url = `https://api.magicthegathering.io/v1/cards/${this.props.match.params.number}`;
    const placeHolder = require("./images/placeHolder.jpeg");
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState(() => ({
          name: data.card.name,
          text: data.card.text,
          type: data.card.type,
          types: data.card.types,
          colors: data.card.colors,
          image: data.card.imageUrl || placeHolder,
          flavor: data.card.flavor
        }))
      )
      .catch(err => console.log("err:", err));
  }

  render() {
    return (
      <Back>
        <div style={{ flex: 1 }}>
          <img src={this.state.image} />
        </div>
        <FieldsBox state = {this.state}>

        </FieldsBox>
      </Back>
    );
  }
}

export default DetailCard;
