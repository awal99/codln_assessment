import React from "react";
const fb = require("../assets/fb.png");

const Login=(props)=>{
   function login(){
    //    props.signInWithFacebook;
       window.location.href="/home";
   }
    return(
        <div className="container">
            <div className="login-card">
                <div className="login-container">
                <div className="title">X & Os</div>
                <div className="labletext"><i>Beat your friends in tic tac toe</i></div>
                <div className="buttonContainer">
                 <img src={fb} width='50px' height='40px' />
                 <button className="button" onClick={login}>Signin with Facebook</button>
                </div>
                </div>
                
            </div>
        </div>
    )
}


export default Login;