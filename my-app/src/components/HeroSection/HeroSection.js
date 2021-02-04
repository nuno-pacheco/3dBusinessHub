import React from 'react';
import '../../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/*<video src='/videos/video-1.mp4' autoPlay loop muted />*/}
      <h1>INSPIRING INNOVATION</h1>
      <p>3D is a Business Hub focused in promoting innovation <br/>and growth in startups and SME's.</p>
      <a
        className='arrow-pointing'
        href
      >
       <i className="far fa-arrow-alt-circle-down blink"></i>
      </a>
      
      <div className='hero-btns'>
        {/*<Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
        <Link to="/about" className='nav-about'>
          ABOUT US
        </Link>
        </Button>*/}
        {/*<Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>*/}
      </div>
    </div>
  );
}

export default HeroSection;