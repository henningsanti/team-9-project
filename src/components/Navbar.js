import React, {useState, useEffect} from 'react';
import {Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [button, setButton] = useState(true);

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
                    Assignment Two
                    <i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/quoteform' className='nav-links' onClick={closeMobileMenu}>
                            Quote Form
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/quotehistory' className='nav-links' onClick={closeMobileMenu}>
                            Quote History
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/clientregistration' className='nav-links' onClick={closeMobileMenu}>
                            Client Registration
                        </Link>
                    </li>
                </ul>
                {button && <button buttonStyle='btn--outline'>Client Registration</button>}
            </div>
        </nav>
    </>
  );
}

export default Navbar;
