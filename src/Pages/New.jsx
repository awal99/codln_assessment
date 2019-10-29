import React from "react";
import { getUserInfo} from "../modules/data.module";
import "../assets/styles/board.css";


const New=(props)=>{

    const [userInfo,setUserInfo] = React.useState(null)

    React.useEffect(()=>{
        getUserInfo(function(data){
            setUserInfo(data);
        })
        
    },[])
    
    return(
        <div >
        <div className="sm-left">
            <div className={props.color==="yellow"?"title2":"title"}>X & Os</div>
            <img src={userInfo != null ? userInfo.picture.data.url:'loading ...'} alt="loading user pic" width="120px" height="120px" style={{borderRadius:"50%"}} />
            <div className="userinfo">
            <div className={props.color==="yellow"?"name":"name2"}>Me: X</div>
            <div className={props.color==="yellow"?"points":"points2"}>it is your turn</div>
            </div>
        </div>
        <div className="center">
           <div id="board"></div>
        </div>
        <div className="sm-right">
            <img src={userInfo != null ? userInfo.picture.data.url:'loading ...'} alt="loading user pic" width="120px" height="120px" style={{borderRadius:"50%",marginTop:70}} />
            <div className="userinfo">
            <div className={props.color==="yellow"?"name":"name2"}>Jane: O</div>
            <div className={props.color==="yellow"?"points":"points2"}></div>
            </div>
        </div>
    </div>
    )
}

export default New;