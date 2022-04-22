import React from "react";
import TextInput from "./TextInput";

function ContactForm(props){

return(
    <div className="contactform">
        <TextInput displayName="Phone"/>
        <TextInput displayName="Email"/>
        <TextInput displayName="Phone"/>

    </div>
)
}

export default ContactForm