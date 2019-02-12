import React from "react"
import Line from "../Components/Line"
import { checkPropTypes } from "prop-types";


const FieldsBox = props => {
    return <div style={{
        flex: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: "2%"
      }}>{
        Object.keys(props.state).map((e, key) => (
            <Line type = {e} value = {props.state[e]}  key={key}/>
        ))}
    </div> 
   };


export default FieldsBox