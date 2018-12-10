import React, { Component } from "react";

class ListApi extends Component {
  render() {
    const card = this.props.card;
    return <div>{card}</div>;
  }
}

export default ListApi;
