import React, { Suspense } from 'react';
import '../../App.css';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
/*import OurServices from '../../components/OurServices/OurServices';*/
const Partners = React.lazy(() => import('../../components/Partners/Partners'));
const OurServices = React.lazy(() => import('../../components/OurServices/OurServices'))

function Home () {
    return(
        <div className="App">
            <Navbar/>
            <HeroSection/>
            <Suspense fallback="Loading...">
                <OurServices/>
            </Suspense>
            <div>
            <br/>    
            </div>
            <Suspense fallback="Loading...">
                <Partners/>
            </Suspense>
        </div>
    )
}

export default Home;