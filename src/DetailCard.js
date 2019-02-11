import React, { Component } from "react";
import { DivResult, DivSpec, Back } from "./Styles";

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
        <div
          style={{
            flex: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            padding: "2%"
          }}
        >
          <div style={{ display: "flex" }}>
            <DivSpec>Nom:</DivSpec>
            <DivResult> {this.state.name}</DivResult>
          </div>
          <div style={{ display: "flex" }}>
            <DivSpec>Règles: </DivSpec>
            <DivResult>{this.state.text}</DivResult>
          </div>
          <div style={{ display: "flex" }}>
            <DivSpec>Type:</DivSpec> <DivResult>{this.state.type}</DivResult>
          </div>
          <div style={{ display: "flex" }}>
            <DivSpec>Types:</DivSpec> <DivResult>{this.state.types}</DivResult>
          </div>
          <div style={{ display: "flex" }}>
            <DivSpec>Couleurs: </DivSpec> <DivResult>{this.state.colors}</DivResult>
          </div>
          <div style={{ display: "flex" }}>
            <DivSpec>Citation: </DivSpec> <DivResult>{this.state.flavor}</DivResult>
          </div>
        </div>
      </Back>
    );
  }
}

export default DetailCard;
