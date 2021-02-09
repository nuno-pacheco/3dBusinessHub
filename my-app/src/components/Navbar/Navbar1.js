import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar1() {
  const [click, setClick] = useState(false);
  /*const [button, setButton] = useState(true);*/

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  /*const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };*/

  /*useEffect(() => {
    showButton();
  }, []);*/

  /*window.addEventListener('resize', showButton);*/

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1604935078/3dBusinessHub/New%20logo/logo_text2_v1qxbx.png" alt="3dLogo"/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <strong>ABOUT US</strong>
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/form'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <strong>JOIN US</strong>
              </Link>
            </li>

            {/*<li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>*/}
          </ul>
          {/*{button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}*/}
        </div>
      </nav>
    </>
  );
}

export default Navbar1;
                             
                   