import React from 'react';
import './OurServices.css';

function OurServices(){
    return(
        <>
        <div className="ourServices">
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
                        <p className="card-text"><b>Development</b> and improvement of <b>Business models</b>.</p>
                        <p className="card-text">Ideation and early stage <b>planning</b> – Identifying business mission, vision, goals, strategy.</p>
                        <p className="card-text">Development of early and mature stage <b>MVP</b>.</p>
                        <p className="card-text">Development and analysis of <b>business plans</b>.</p>
                        <p className="card-text">Budgeting and <b>Project Analysis</b>.</p>
                        <p className="card-text">Project and <b>Process optimization</b> across departments.</p>
                        <p className="card-text">Network, distribution and <b>channels improvement</b>.</p>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="services-icon">
                            <i className='fa fa-tag' />
                        </div>
                        <div className="card-body">
                        <h5 className="card-title">Compliance</h5>
                        <p className="card-text">Company due <b>diligence and auditing</b>.</p>
                        <p className="card-text">Financial viability, budgeting and <b>cost optimization</b>.</p>
                        <p className="card-text"><b>Auditing</b> and due diligence.</p>
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
                        <p className="card-text">Development and improvement of <b>Marketing</b> and communication strategies and <b>actions</b>.</p>
                        <p className="card-text">Sales management and outsourcing.</p>
                        <p className="card-text"><b>Growth hacking</b>.</p>
                        <p className="card-text"><b>Interim Management</b>.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <br/>    
                </div>
            </div>
            
        </div>
        <div>
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
                            <p className="card-text"><b>Company recovery</b> and relaunch.</p>
                            <p className="card-text">Team, processes and <b>performance auditing</b>.</p>
                            <p className="card-text"><b>Process</b> improvement and <b>optimization</b>.</p>
                            <p className="card-text"><b>Interim management</b>.</p>
                            <p className="card-text">Company <b>growth hacking</b>.</p>
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