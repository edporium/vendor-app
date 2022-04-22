import React from "react";
import './PageProgress.css';

import ProgressStop from "./ProgressStop";
function PageProgress(props){




    return(
<div className="pageprogress">

    {Array(Number(props.stops)).fill()}

    {Array(Number(props.stops)).fill(0).map((_, i) => <ProgressStop/> )}

</div>
    )



 
}

export default PageProgress