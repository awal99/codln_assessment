import React from "react";
import FacebookLogin from 'react-facebook-login';
import firebase from '../utils/firebase';
const fb = require("../assets/fb.png");

const Login=(props)=>{

   const responseFacebook = (response) => {
    //console.log(response);
        if(response != null){
            //signup user and check callback to see if it is a returning user or new user
            firebase.auth().signInWithEmailAndPassword(response.email,response.userID).then((user)=>{
              //if login successfull, then store other user details gotten from facebook
              if(user){
              firebase.database().ref('users/'+user.user.uid).set(response).then(()=>{
                  //navigate to home page now
                  window.location.href="/home";
              }).catch(error=>{
                  console.log(error.message);
              })
             }
            }).catch(error=>{
                console.log(error);
                if(error.code === "auth/user-not-found"){
                    //the user dont exist so we create a new user and add his info to database
                    firebase.auth().createUserWithEmailAndPassword(response.email,response.userID).then((user)=>{
                        //console.log("SUCCESS",user);
                        if(user){
                        //   account created successfully
                        firebase.database().ref('users/'+user.user.uid).set(response).then(()=>{
                             //navigate to home page now
                            window.location.href="/home";
                        })
                        }
                    })
                }
            })
        }
    }

    return(
        <div className="container">
            <div className="login-card">
                <div className="login-container">
                <div className="title">X & Os</div>
                <div className="labletext"><i>Beat your friends in tic tac toe</i></div>
                <div className="buttonContainer">
                 <img src={fb} width='50px' height='40px' />
                 {/* <button className="button" onClick={login}>Signin with Facebook</button> */}
                 <FacebookLogin
                    appId="2347564788702295"
                    autoLoad={false}
                    fields="name,email,picture,friends"
                    callback={responseFacebook}
                    cssClass="fb-login-button"
                   
                />
                </div>
                </div>
                
            </div>
        </div>
    )
}


export default Login;