import React from 'react';
import './OurServices.css';

function OurServices(){
    return(
        <>
        <div className="ourServices" id="section1">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="services-title">
                        <h1 className="display-4">Our Services</h1>
                        <p className="lead">For Startups and SME's</p>
                    </div>
                </div>
                <div className="cards-group">
                    <div className="card-item">
                        <div className="services-icon">
                            <i className='fa fa-cogs' />
                        </div>
                        <div className="card-body">
                        <h5 className="card-title">Business</h5>
                        <p className="card-text">Development and improvement of Business models.</p>
                        <p className="card-text">Ideation and early stage planning – Identifying business mission, vision, goals, strategy.</p>
                        <p className="card-text">Development of early and mature stage MVP.</p>
                        <p className="card-text">Development and analysis of business plans.</p>
                        <p className="card-text">Budgeting and Project Analysis.</p>
                        <p className="card-text">Project and Process optimization across departments.</p>
                        <p className="card-text">Network, distribution and channels improvement.</p>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="services-icon">
                            <i className='fa fa-tag' />
                        </div>
                        <div className="card-body">
                        <h5 className="card-title">Compliance</h5>
                        <p className="card-text">Company due diligence and auditing.</p>
                        <p className="card-text">Financial viability, budgeting and cost optimization.</p>
                        <p className="card-text">Auditing and due diligence.</p>
                        <p className="card-text">Legal Services.</p>
                        <p className="card-text">Tax & Accounting.</p>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="services-icon">
                            <i className='fa fa-magnet' />
                        </div>
                        <div className="card-body">
                        <h5 className="card-title">Management</h5>
                        <p className="card-text">Development and improvement of Marketing and communication strategies and actions.</p>
                        <p className="card-text">Sales management and outsourcing.</p>
                        <p className="card-text">Growth hacking.</p>
                        <p className="card-text">Interim Management.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <br/>    
                </div>
            </div>
            
        </div>
        <div className="ourServices1">
            <div className="jumbotron jumbotron-fluid">
            <div className="services-for-investors">
                    <div className="container">
                        <div className="services-title">
                            <p className="lead">For Investors</p>
                        </div>
                    </div>
                    <div className="cards-group1">
                        <div className="card-item1">
                            <div className="services-icon1">
                            <i className="fas fa-hand-holding-usd"/>
                            </div>
                            <div className="card-body1">
                            <p className="card-text">Company due diligence and valuation.</p>
                            <p className="card-text">Company recovery and relaunch.</p>
                            <p className="card-text">Team, processes and performance auditing.</p>
                            <p className="card-text">Process improvement and optimization.</p>
                            <p className="card-text">Interim management.</p>
                            <p className="card-text">Company growth hacking.</p>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>

        </div>
        </>

    )
}

export default OurServices