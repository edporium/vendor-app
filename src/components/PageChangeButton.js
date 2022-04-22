import React from "react";

function PageChangeButton(props){

    return(
        <div className="pagechangebutton"><button onClick={props.clickHandler}>{props.displayName}</button></div>
    )
}

export default PageChangeButton