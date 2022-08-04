import React, {useRef, useState, useEffect} from 'react';
import {Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import axios from '../api/axios';

const client = axios.create({
    baseURL: 'http://localhost:3333/list',
    headers: {
        "Content-type": "application/json"
      }
  });

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [button, setButton] = useState(true);

    const get_id = useRef(null);
    //const get_title = useRef(null);
    const [getResult, setGetResult] = useState(null);

    const fortmatResponse = (res) => {
        return JSON.stringify(res, null, 2);
      };

      async function getDataById() {
        const userid = get_id.current.value;
        if (userid) {
          try {
            const res = await client.get(`/list/${userid}`);
            const result = {
              gallons: res.gallons,
              address: res.address,
              date: res.date,
              price: res.price,
              total: res.total
            };
            setGetResult(fortmatResponse(result));
          } catch (err) {
            setGetResult(fortmatResponse(err.response?.data || err));
          }
        }
      }

      const clearGetOutput = () => {
        setGetResult(null);
      };

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
                        <Link to='/quoteform' className='nav-links' onClick={closeMobileMenu} >
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
                {button && 
                <div className='s-btns'>
                <Button>Log In</Button>
                </div>}
            </div>
        </nav>
    </>
  );
}

export default Navbar;