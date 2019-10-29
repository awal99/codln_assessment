import React from "react";
import {getUserInfo,getPoints} from "../modules/data.module";

const LeftNav=()=>{
    
    const [userInfo,setUserInfo] = React.useState(null);
    const [points,setPoints] = React.useState(0);

    React.useEffect(()=>{
        getUserInfo(function(data){
          setUserInfo(data);
        });
        
        getPoints(function(data){
            setPoints(data);
        })
      },[])
  
    return(
        <>
        <div className="title2">X & Os</div>
        <img src={userInfo != null ? userInfo.picture.data.url:'loading ...'} alt="loading user pic" width="150px" height="150px" style={{borderRadius:"50%"}} />
        <div className="userinfo">
            <div className="name">{userInfo != null?userInfo.name:"loading ..."}</div>
            <div className="points">{points} Points</div>
            </div>
            <ul className="navlist">
                <li className="active"><a href="/home">Games</a></li>
                <li><a href="#">Leaderboard</a></li>
            </ul>
        </>
    )
}

export default LeftNav;