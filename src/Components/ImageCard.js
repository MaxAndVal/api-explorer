import React from "react"

const ImageCard = (props) => {
    return (
        <div style={{ flex: 1 }}>
          <img src={props.image} />
        </div>
    )
}

export default ImageCard;