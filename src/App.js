import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router'
import Home from './views/Home';
import Article from './views/Article';
import NavBar from './components/NavBar';
// import { Container } from '@material-ui/core';
import Login from './views/Login';
import SignUp from './views/SignUp'
import NewArticle from "./views/NewArticle";
function App() {
 
    

  return (
    <div>

     
      <Router>
        <Home  path="/" />
        <Article path = "/article/:articleId" />
        <Login path = "/login"/>
        <SignUp path = "/signup"/>
        <NewArticle path = "/article/new" />
      </Router>
     <br/>
     <br/>
     <br/>
    </div>
    
   
  );
}

export default App;
