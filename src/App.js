import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import firebaseConfig from "./utils/firebase";
import Login from "./Pages/Login.jsx"
import HomePage from "./Pages/HomePage.jsx";
import './App.css';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp(firebaseConfig);

function App(props){
 
   return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" render={props => <Login {...props}/>} />
        <Route path="/home" render={props => <HomePage {...props}/>} />

      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
};


export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);

