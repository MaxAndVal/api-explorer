import React, { Component } from "react";
import { Link } from 'react-router-dom';

class ListApi extends Component {
  render() {
    const { card, id } = this.props;
    return <Link to={`/detailCard/${id}`}>{card}</Link>;
  }
}

export default ListApi;
