import React from 'react';
import '../../App.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import Footer from '../../components/Footer/Footer';
import OurServices from '../../components/OurServices/OurServices';
import Testimonials from '../../components/Testimonals/Testimonals';
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
            <div>
            <br/>    
            </div>
            <Testimonials/>
            <div>
            <br/>    
            </div>
            <Footer />
        </>
    )
}

export default Home;