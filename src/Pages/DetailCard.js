import React, { Component } from "react";
import { Back } from "../Styles";
import FieldsBox from "../Components/FieldsBox";
import ImageCard from "../Components/ImageCard";
import ButtonBack from "../Components/CustomButton";

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
      returnHover: false
    };
  }

  componentDidMount() {
    const url = `https://api.magicthegathering.io/v1/cards/${this.props.match.params.number}`;
    const placeHolder = require("../images/placeHolder.jpeg");
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
          fieldState: {
            name: data.card.name,
            text: data.card.text,
            types: data.card.type,
            colors: data.card.colors,
            quote: data.card.flavor
          }
        }))
      )
      .catch(err => console.log("err:", err));
  }
  mouseOver = hover => {
    this.setState({ returnHover: hover });
  };

  render() {
    return (
      <div>
        <ButtonBack text="retour" mouseOver={this.mouseOver} isHover={this.state.returnHover} />
        <Back>
          <ImageCard image={this.state.image} />
          <FieldsBox state={this.state.fieldState} />
        </Back>
      </div>
    );
  }
}

export default DetailCard;
