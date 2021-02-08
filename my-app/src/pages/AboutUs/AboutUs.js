import React from 'react';
import Navbar1 from '../../components/Navbar/Navbar1';
import './AboutUs.css';

function AboutUs () {
    return(
        <>
        <Navbar1/>
        <div className='about-super-container'>
            <div className='about-container'>            
                <p>Idealists at heart and doers by nature!</p>
                <div className='about-btns'>
                    {/*<Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    >
                    <Link to="/" className='nav-about'>
                    HOME
                    </Link>
                    </Button>*/}
                </div>
            </div>
            <div className='about-content'>
                <div className="team-title">
                    <h1 className="display-4">The Team</h1>
                    <p className="lead">Amazing people to achieve amazing things</p>
                </div>
                <div className="amazingTeam">
                        <div className='about-image'>
                            <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1607984808/3dBusinessHub/1600253907378_xdw88f.jpg" alt="about-pic"/>
                            <a
                                className="name-link" 
                                href="https://www.linkedin.com/in/catarina-nunes-b04709162/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <p className="img-name">                              
                                    <strong>Catarina Nunes</strong>
                                </p>
                            </a>
                            <p className="img-role">
                                CEO & Founder 3D - Business Hub
                            </p>               
                        </div>
                        <div className='about-image'>
                            <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1612782292/3dBusinessHub/1516305536078_deqzyl.jpg" alt="about-pic"/>
                            <a
                                className="name-link" 
                                href="https://www.linkedin.com/in/toonman/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <p className="img-name">
                                    <strong>Pedro Alves</strong>
                                </p>
                            </a>
                            <p className="img-role">
                                Business Developer
                            </p>               
                        </div>
                        <div className='about-image'>
                            <img src="https://res.cloudinary.com/dylut4r4t/image/upload/c_scale,w_200/v1611913718/portfolio/2016.09.16_Deloitte_Studio_126_e1x47s.jpg" alt="about-pic"/>
                            <a
                                className="name-link" 
                                href="https://www.linkedin.com/in/nunpacheco/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <p className="img-name">
                                    <strong>Nuno Pacheco</strong>
                                </p>
                            </a>
                            <p className="img-role">
                                Business Developer
                            </p>               
                        </div>
                        <div className='about-image'>
                            <img src="https://res.cloudinary.com/dylut4r4t/image/upload/c_scale,w_200/v1612782292/3dBusinessHub/IMG_0785_xmvkn1.jpg" alt="about-pic"/>
                            <a
                                className="name-link" 
                                href="https://www.linkedin.com/in/m%C3%B3nica-ferreira-700a61157/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <p className="img-name">
                                    <strong>Mónica Ferreira</strong>
                                </p>
                            </a>
                            <p className="img-role">
                                Project Manager
                            </p>               
                        </div>
                </div>
                <div className='about-text'>
                    <p>
                        We came together 4 years ago to promote innovation and growth, and believe that through
                        innovation allied to stong market experience and know-how we can launch a new model of
                        doing business - a sustainable, profitable and long-lasting one that everyone involved benefits
                        from, and that creates the foundations for a strong and more robust economy.
                        Our aim to inspire business big and small to develop and grow sustainably and having as 
                        horizon stability, growth and continous improvement.    
                    </p>
                </div>
            </div>
            <div className="timeline">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title mb-5">Things we are proud of</h3>
                                    <div className="hori-timeline" dir="ltr">
                                        <ul className="list-inline events">
                                            <li className="list-inline-item event-list">
                                                <div className="px-4">
                                                    <div className="event-date bg-soft-success text-success year">2018</div>
                                                    <h5 className="font-size-16">Check In</h5>
                                                    <p className="text-muted">International project Educating 140 young undergraduates about business...</p>
                                                </div>
                                            </li>
                                            <li className="list-inline-item event-list">
                                                <div className="px-4">
                                                    <div className="event-date bg-soft-success text-success year">2018</div>
                                                    <h5 className="font-size-16">Nominated for Members Choice Awards</h5>
                                                </div>
                                            </li>
                                            <li className="list-inline-item event-list">
                                                <div className="px-4">
                                                    <div className="event-date bg-soft-success text-success year">2019</div>
                                                    <h5 className="font-size-16">Members Choice Awards</h5>
                                                </div>
                                            </li>
                                            <li className="list-inline-item event-list">
                                                <div className="px-4">
                                                    <div className="event-date bg-soft-success text-success year">2020</div>
                                                    <h5 className="font-size-16">Most Innovative Business</h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutUs;