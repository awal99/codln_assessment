import React from 'react';
// import firebaseApp from "../utils/firebase";
import {getUserInfo,getPoints} from "../modules/data.module";
import OpenedUser from "../components/OpenedUser.jsx";
const avatar = require("../assets/avatar.jpg");


const HomePage=(props)=>{

    const [userInfo,setUserInfo] = React.useState(null);
    const [points,setPoints] = React.useState(0);
    const [opened,setOpened] = React.useState(null)

    React.useEffect(()=>{
      getUserInfo(function(data){
        setUserInfo(data);
      });
      
      getPoints(function(data){
          setPoints(data);
      })
    },[])

   return(
       <div >
           <div className="leftnav">
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
               
           </div>
           <div className="right">
                <div className="new-game-button">New Game</div>
                <div className="top-title">Opened Games</div>
                {/* top card list of opened games*/}
                <div className="opened-games" style={{flexDirection:'row'}}>
                <OpenedUser url={opened} />
                <OpenedUser url={opened} />
                <OpenedUser url={opened} />
                    {/* {opened != null ? opened.map((data,index)=>{
                        <OpenedUser url={data.url} />
                    }):null} */}
                </div>
           </div>
       </div>
   )
}

export default HomePage;