import React from "react";
import TextInput from "./TextInput";
import './FormPage.css'
function FormPage(props){

    return(
        <div id={props.pageName} className="formpage">

<div>
    {props.pageName}
</div>

<TextInput/>
<TextInput/>
<TextInput/>

        </div>
    )
}

export default FormPage