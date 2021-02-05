import React from 'react';
import '../../App.css';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import OurServices from '../../components/OurServices/OurServices';
import Partners from '../../components/Partners/Partners';

function Home () {
    return(
        <div className="App">
            <Navbar/>
            <HeroSection/>
            <OurServices/>
            <div>
            <br/>    
            </div>
            <Partners/>
        </div>
    )
}

export default Home;