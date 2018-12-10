import React, { Component } from "react";

class DetailCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            text: "",
            type: ""
        }
    }

    componentDidMount(){console.log(this.props)
        const url = `https://api.magicthegathering.io/v1/cards/${this.props.match.params.number}`;

        fetch(url)
            .then(response => response.json())
            .then(data => this.setState(() => ({
                    name: data.card.name,
                    text: ((data.card || {}).rulings[0] || {}).text,
                    type: data.card.type
                }))
            )
            .catch(err => console.log("err:", err));
            
    }

render() {
    
    console.log("props detail : " ,this.props.match.params.number)
    return (
        <React.Fragment>
            <div>card detail {this.state.name}</div>
            <div>card detail {this.state.text}</div>
            <div>card detail {this.state.name}</div>
        </React.Fragment>
    )
    }
}

export default DetailCard;