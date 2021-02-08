import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Tell us about your Project! 
        </p>
        {/*<p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>*/}
        <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
        <Link to="/form" className='nav-about'>
          Apply here!
        </Link>
        </Button>
      </div>
        {/*<div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>*/}
      </section>
      {/*<div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='https://www.facebook.com/3D.Lisbon'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>*/}
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1604924996/3dBusinessHub/New%20logo/logo_2_mfo1oi.png" alt="3dLogo"/>
            </Link>
          </div>
          <small className='website-rights'>3D BUSINESS HUB © 2020</small>
          <div className='social-icons'>
            {/*<Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
              <i className='fab fa-youtube' />
            </Link>*/}
            {/*<Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>*/}
            <a
              className='social-icon-link facebook'
              href='https://www.facebook.com/3D.Lisbon'
              rel="noopener noreferrer"
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/3d_business_hub'
              rel="noopener noreferrer"
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link twitter'
              href='https://www.linkedin.com/company/3d-business-hub'
              rel="noopener noreferrer"
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
            <a
              className='social-icon-link'
              href='https://www.google.com/maps/place/3D+Business+Hub/@38.7217114,-9.1529124,17z/data=!4m5!3m4!1s0xd19337a6add5855:0x5d81de61e85fd473!8m2!3d38.72159!4d-9.1525154'
              rel="noopener noreferrer"
              aria-label='LinkedIn'
            >
              <i class="fas fa-map-marker-alt"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;