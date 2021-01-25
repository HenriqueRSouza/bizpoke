import React from "react";
import './App.css';
import Home from './components/pages/Home.js';
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from "./components/Navbar";
import Main from "./components/Main/Main";
import Sign from './components/Footer/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path="/movi" exact component={Main}/>
        <Route path='/sign' exact component={Sign}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
