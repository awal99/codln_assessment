import React from "react"


const OpenedUser=(props)=>{
    return(
        <div >
        <div>
            <img src={props.url} alt="user image" width='50px' height='50px' style={{borderRadius:'50%'}} />
        </div>
        <div className="join-button">Join</div>
        </div>
    )
}

export default OpenedUser;