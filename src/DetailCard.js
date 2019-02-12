import React, { Component } from "react";
import { DivResult, DivSpec, Back } from "./Styles";
import Line from "./Components/Line";
import FieldsBox from "./Components/FieldsBox"
import ImageCard from "./Components/ImageCard"

class DetailCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      types: "",
      colors: [],
      text: "",
      image: "",
      flavor: "",
      fieldState: {},
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
          types: data.card.type,
          colors: data.card.colors,
          image: data.card.imageUrl || placeHolder,
          flavor: data.card.flavor,
          fieldState: new Object({
             name: data.card.name,
             text: data.card.text, 
             types: data.card.type, 
             colors: data.card.colors,
             quote: data.card.flavor
            })
        }))
      )
      .catch(err => console.log("err:", err));
  }

  render() {
    //console.log("fieldState: ", this.state)
    return (
      <Back>
        <ImageCard image = {this.state.image}/>
        <FieldsBox state = {this.state.fieldState}/>
      </Back>
    );
  }
}

export default DetailCard;
