import React from "react";
import TextInput from "./TextInput";
function IdentityForm(){

    return(
        <div className="form">

<TextInput displayName="Business Name"/>
<TextInput displayName="First Name"/>
<TextInput displayName="Last Name"/>

<TextInput displayName="Address"/>
<TextInput displayName="City"/>
<TextInput displayName="State"/>
<TextInput displayName="Zip"/>





        </div>
    )
}

export default IdentityForm