import React from "react"


const OpenedUser=(props)=>{
    return(
        <div className="openeduser">
        <img src={props.url} alt="user image" width='100px' height='100px' style={{borderRadius:'50%'}} />
        <div className="join-button">Join</div>
        </div>
    )
}

export default OpenedUser;