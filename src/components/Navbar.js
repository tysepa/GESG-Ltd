import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () =>{
      if (window.innerWidth <= 960){
          setButton(false);
      } else{
          setButton(true);
      }
  };
  useEffect(()=>{
      showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const [activeNav, setActiveNav]=useState('#')

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
            GESG 
            
          <p>Global Excellent Solutions<br/> Group Ltd</p>
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
         
          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <img src="images/sun-ico.png" alt=""/>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-links" onClick={closeMobileMenu}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#experience"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contanct
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </a>
            </li> */}
          </ul>
           {/* {button && <Button buttonStyle='btn--outline'> SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;