import React, { Component } from "react";

class ListApi extends Component {
  cardInfo = id => {
    //todo
  };
  render() {
    const { card, id } = this.props;
    return <div onClick={this.cardInfo(id)}>{card}</div>;
  }
}

export default ListApi;
