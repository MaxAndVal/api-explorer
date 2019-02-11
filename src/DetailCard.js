import React, { Component } from "react";
import styled from "styled-components";
import { types } from "util";

const Case = styled.div`
  width: "100%";
  margin: 5px;
  padding: 5px;
  & .link {
    overflow: hidden;
    color: #000;
    text-decoration: none;
  }
  p {
    text-align: center;
    height: 25px;
  }
`;

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

    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState(() => ({
          name: data.card.name,
          text: data.card.text,
          type: data.card.type,
          types: data.card.types,
          colors: data.card.colors,
          image: data.card.imageUrl,
          flavor: data.card.flavor
        }))
      )
      .catch(err => console.log("err:", err));
  }

  render() {
    return (
      <React.Fragment>
        <Case>
        <div>card name:  {this.state.name}</div>
        </Case>
        <Case>
        <div>card text:  {this.state.text}</div>
        </Case>
        <Case>
        <div>card type:  {this.state.type}</div>
        </Case>
        <Case>
        <div>card types:  {this.state.types}</div>
        </Case>
        <Case>
        <div>card types:  {this.state.colors}</div>
        </Case>
        <Case>
        <div>card image:  {this.state.image}</div>
        </Case>
        <Case>
        <div>card flavor:  {this.state.flavor}</div>
        </Case>
      </React.Fragment>
    );
  }
}

export default DetailCard;
