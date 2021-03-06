import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./Pages/Login.jsx"
import HomePage from "./Pages/HomePage.jsx";
import New from "./Pages/New";
import './App.css';



function App(props){
 
   return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" render={props => <Login {...props}/>} />
        <Route path="/home" render={props => <HomePage {...props}/>} />
        <Route path="/new" render={props => <New {...props}/>} />
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;