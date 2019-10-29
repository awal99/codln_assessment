import React from "react";
import LeftNav from "../components/LeftNav";


const New=(props)=>{
    
    return(
        <div >
        <div className="leftnav">
           <LeftNav/>
        </div>
        <div className="center">
           center
        </div>
        <div className="sm-right">
            right
        </div>
    </div>
    )
}

export default New;