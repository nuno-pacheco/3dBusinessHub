import React from 'react';
import '../../App.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import OurServices from '../../components/OurServices/OurServices';
import Partners from '../../components/Partners/Partners';

function Home () {
    return(
        <>
            <HeroSection />
            <OurServices />
            <div>
            <br/>    
            </div>
            <Partners/>
        </>
    )
}

export default Home;