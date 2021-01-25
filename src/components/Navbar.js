import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

import Logo from './logo-nav.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={Logo} alt="logo"></img>
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='#' className='nav-links' onClick={closeMobileMenu}>Movilaizer</Link>
            </li>

            <li>
              <Link to='#' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
            </li>
          </ul>
          {button && <Button buttonStyle='button--outline' to="#">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;