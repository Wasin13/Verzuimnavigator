import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button.js';
import '../Components/Navbar.css';
import logo from '../img/Logo-Blauwkleur.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [scrolling, setScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav className={`navbar ${scrolling ? 'navbar-hidden' : 'navbar-visible'}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logos">
            <img src={logo} alt="Verzuimnavigator Logo" className="navbar-logo-img" />
            <div className="navbar-powered-by">Powered by<br />Metaalunie</div>
          </Link>
          <div className="navbar-list">
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item"><Link to="/" className='nav-links' onClick={closeMobileMenu}>
                Home
                </Link>
              </li>
              <li className="nav-item"><Link to="/stappenplan" className='nav-links' onClick={closeMobileMenu}>
                Stappenplan
                </Link>
              </li>
              <li className="nav-item"><Link to="/artikelen" className='nav-links' onClick={closeMobileMenu}>
                Artikelen
                </Link>
              </li>
              <li className="nav-item"><Link to="/diensten" className='nav-links' onClick={closeMobileMenu}>
                Diensten
                </Link>
              </li>
              <li className="nav-item"><Link to="/vergoedingen" className='nav-links' onClick={closeMobileMenu}>
                Vergoedingen
                </Link>
              </li>
              <li className="nav-item"><Link to="/contact" className='nav-links' onClick={closeMobileMenu}>
                Contact
                </Link>
              </li>
              <li className="nav-item">
                {button ? <Button buttonStyle="btn--outline">Zoeken</Button> :
                  <Link to="/zoeken" className='nav-links-mobile' onClick={closeMobileMenu}>Zoeken</Link>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
