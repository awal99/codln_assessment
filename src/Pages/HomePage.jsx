import React from 'react';

const avatar = require("../assets/avatar.jpg");


const HomePage=(props)=>{
   return(
       <div >
           <div className="leftnav">
               <div className="title2">X & Os</div>
               <img src={avatar} width="150px" height="150px" style={{borderRadius:"50%"}} />
               <div className="userinfo">
                   <div className="name">Sulemana Awal</div>
                   <div className="points">75 Points</div>
                </div>
                <ul className="navlist">
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Leaderboard</a></li>
                </ul>
               
           </div>
           <div className="right">

           </div>
       </div>
   )
}

export default HomePage;