import React from "react";
import "./TextInput.css"
import form from '../index.js'
function TextInput(props){


    return(
        <div className="text-input-container">

<label htmlFor={props.key}>{props.displayName}</label>
            <input id={props.key} type="text"/>

        </div>
    )
}

export default TextInput