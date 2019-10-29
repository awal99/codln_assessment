import React from 'react';
// import firebaseApp from "../utils/firebase";

import OpenedUser from "../components/OpenedUser.jsx";
import LeftNav from '../components/LeftNav';
const avatar = require("../assets/avatar.jpg");


const HomePage=(props)=>{

    const [opened,setOpened] = React.useState("https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1220441804809213&height=50&width=50&ext=1574886095&hash=AeRrkJrcaL2XO8rb")

    const newGame=()=>{
        window.location.href = '/new';
    }

   return(
       <div >
           <div className="leftnav">
               <LeftNav color="yellow"/>
           </div>
           <div className="right">
                <div className="new-game-button" onClick={newGame}>New Game</div>
                <div className="top-title">Opened Games</div>
                {/* top card list of opened games*/}
                <div className="opened-games">
                <OpenedUser url={opened} />
                <OpenedUser url={opened} />
                <OpenedUser url={opened} />
                  
                </div>
                {/* my games */}
                <div className="bottom-title">My Games</div>
                <div className="my-games">
                    <OpenedUser url={opened} type="vs" name="Me"/>
                    <i className="vs">vs</i>
                    <OpenedUser url={opened} type="vs" name="Jade"/>
                    <div style={{justifyContent:'center',alignItems:'center'}}>
                        <i className="normalText">Jade has played, and its your turn</i>
                        <div className="buttonContainer"><div className="play-button" href="#" >play</div></div>
                    </div>
                </div>
           </div>
       </div>
   )
}

export default HomePage;