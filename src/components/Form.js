import React from "react";
import FormPage from "./FormPage"
import PageChangeButton from "./PageChangeButton";
import PageProgress from "./PageProgress";
import './Form.css'
function Form(){

    function test(){

        alert()
    }

    return(
<div className="form">
    <PageProgress stops="5"/>
    <FormPage pageName="Identity"/>
    <FormPage pageName="Contact"/>
    <FormPage pageName="Banking"/>
    <FormPage pageName="Confirm"/>

    <PageChangeButton clickHandler={test} displayName="Next"/>
    <PageChangeButton displayName="Previous"/>
</div>
    )
}

export default Form