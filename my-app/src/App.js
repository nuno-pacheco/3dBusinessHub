import React from 'react';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import OurServices from './components/OurServices/OurServices';
import Partners from './components/Partners/Partners';
import EmailForm from './components/EmailForm/EmailForm';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <Router>
      <Switch>
      <ScrollToTop>
        <Route path='/' exact component = {Home} />
        <Route path='/about' exact component = {AboutUs}/>
        <Route path='/services' exact component = {OurServices}/>
        <Route path='/partners' exact component = {Partners}/>
        <Route path='/form' exact component = {EmailForm}/>
      </ScrollToTop>
      </Switch>
      <Footer/>
    </Router>
      


    </>
  );
}

export default App;
