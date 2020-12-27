import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import OurServices from './components/OurServices/OurServices';
import Partners from './components/Partners/Partners';
import EmailForm from './components/EmailForm/EmailForm';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component = {Home} />
        <Route path='/about' exact component = {AboutUs}/>
        <Route path='/services' exact component = {OurServices}/>
        <Route path='/partners' exact component = {Partners}/>
        <Route path='/form' exact component = {EmailForm}/>
      </Switch>
      <Footer/>
    </Router>
      


    </>
  );
}

export default App;
